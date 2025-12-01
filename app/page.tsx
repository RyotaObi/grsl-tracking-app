"use client"

import { useEffect, useState, useCallback } from "react"
import { MapWrapper } from "@/components/map-wrapper"
import { ZoomControls } from "@/components/zoom-controls"
import { PassengerCount } from "@/components/passenger-count"
import { RouteInfo } from "@/components/route-info"
import { getRealtimeLocations, getSavedRoute, getCurrentScheduleStatus } from "@/lib/firebase"
import type { LocationData, DaySchedule } from "@/lib/types"
import type { Map as LeafletMap } from "leaflet"

export default function Home() {
  const [locations, setLocations] = useState<LocationData[]>([])
  const [map, setMap] = useState<LeafletMap | null>(null)
  const [collectionName, setCollectionName] = useState<string>("")
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [plannedRoute, setPlannedRoute] = useState<[number, number][]>([])
  const [currentSchedule, setCurrentSchedule] = useState<DaySchedule | null>(null)
  const [isOperating, setIsOperating] = useState<boolean>(false)
  const [nextOperation, setNextOperation] = useState<{
    date: string
    dayOfWeek: string
    startTime: string
    endTime: string
    startLocation: string
    routeType: "循環ルート" | "フリー運行"
  } | null>(null)

  // 今日の日付からコレクション名を生成
  useEffect(() => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const day = String(today.getDate()).padStart(2, "0")
    const todayCollection = `${year}${month}${day}`
    setCollectionName(todayCollection)
  }, [])

  // Firestoreからリアルタイムでデータを取得
  useEffect(() => {
    if (!collectionName) return

    console.log("[v0] Subscribing to collection:", collectionName)

    const unsubscribe = getRealtimeLocations(collectionName, (newLocations) => {
      console.log("[v0] Received locations:", newLocations.length)
      setLocations(newLocations)
    })

    return () => {
      console.log("[v0] Unsubscribing from collection")
      unsubscribe()
    }
  }, [collectionName])

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("[v0] Starting continuous location tracking...")

      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setUserLocation(location)
          console.log("[v0] User location updated:", location)
        },
        (error) => {
          console.error("[v0] Geolocation error:", error.code, error.message)
          if (error.code === 1) {
            console.error("[v0] Location permission denied by user")
          } else if (error.code === 2) {
            console.error("[v0] Location unavailable")
          } else if (error.code === 3) {
            console.error("[v0] Location request timeout")
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        },
      )

      return () => {
        console.log("[v0] Stopping location tracking")
        navigator.geolocation.clearWatch(watchId)
      }
    } else {
      console.error("[v0] Geolocation not supported by browser")
    }
  }, [])

  useEffect(() => {
    let startTimer: NodeJS.Timeout | null = null
    let endTimer: NodeJS.Timeout | null = null
    let scheduleCheckInterval: NodeJS.Timeout | null = null

    // 運行開始・終了時刻を計算してタイマーを設定する関数
    const setupTimers = async () => {
      const status = await getCurrentScheduleStatus()
      if (!status) return

      // 既存のタイマーをクリア
      if (startTimer) clearTimeout(startTimer)
      if (endTimer) clearTimeout(endTimer)

      setIsOperating(status.isOperating)
      setCurrentSchedule(status.schedule)
      setNextOperation(status.nextOperation || null)

      const now = new Date()
      const currentTime = now.getTime()

      if (status.isOperating && status.schedule) {
        // 現在運行中の場合：運行終了時刻にタイマーを設定
        const [endHour, endMinute] = status.schedule.endTime.split(":").map(Number)
        const endDate = new Date(now)
        endDate.setHours(endHour, endMinute, 0, 0)

        // 終了時刻が今日の場合はそのまま、過去の場合は明日に設定
        if (endDate.getTime() <= currentTime) {
          endDate.setDate(endDate.getDate() + 1)
        }

        const timeUntilEnd = endDate.getTime() - currentTime
        if (timeUntilEnd > 0) {
          endTimer = setTimeout(async () => {
            setIsOperating(false)
            // 終了後に次の運行を取得
            await setupTimers()
          }, timeUntilEnd)
          console.log(`[v0] 運行終了タイマーを設定: ${endDate.toLocaleString()}`)
        }
      } else if (status.nextOperation) {
        // 現在運行時間外の場合：次の運行開始時刻にタイマーを設定
        // nextOperation.dateは "12/2(火)" のような形式なので、日付部分を抽出
        const dateMatch = status.nextOperation.date.match(/^(\d+)\/(\d+)/)
        if (dateMatch) {
          const [, monthStr, dayStr] = dateMatch
          const month = parseInt(monthStr, 10)
          const day = parseInt(dayStr, 10)
          const [startHour, startMinute] = status.nextOperation.startTime.split(":").map(Number)

          // 現在の年を基準に日付を作成
          let startDate = new Date(now.getFullYear(), month - 1, day, startHour, startMinute, 0, 0)

          // 開始時刻が過去の場合は、次の年を試す
          if (startDate.getTime() <= currentTime) {
            startDate = new Date(now.getFullYear() + 1, month - 1, day, startHour, startMinute, 0, 0)
          }

          // それでも過去の場合は、今月の該当日を探す（月をまたぐ場合）
          if (startDate.getTime() <= currentTime) {
            const currentMonth = now.getMonth()
            const currentYear = now.getFullYear()
            // 今月の該当日を試す
            startDate = new Date(currentYear, currentMonth, day, startHour, startMinute, 0, 0)
            // それでも過去の場合は来月
            if (startDate.getTime() <= currentTime) {
              startDate = new Date(currentYear, currentMonth + 1, day, startHour, startMinute, 0, 0)
            }
          }

          const timeUntilStart = startDate.getTime() - currentTime
          if (timeUntilStart > 0 && timeUntilStart < 30 * 24 * 60 * 60 * 1000) {
            // 30日以内の場合のみタイマーを設定
            startTimer = setTimeout(async () => {
              // 開始時にスケジュールを再読み込み
              await setupTimers()
            }, timeUntilStart)
            console.log(`[v0] 運行開始タイマーを設定: ${startDate.toLocaleString()}`)
          }
        }
      }
    }

    // 初回読み込み
    setupTimers()

    // スケジュール変更対応のため、1時間ごとに再チェック
    // （スケジュール変更はめったにないため、1時間ごとで十分）
    scheduleCheckInterval = setInterval(setupTimers, 60 * 60 * 1000) // 1時間

    return () => {
      if (startTimer) clearTimeout(startTimer)
      if (endTimer) clearTimeout(endTimer)
      if (scheduleCheckInterval) clearInterval(scheduleCheckInterval)
    }
  }, [])

  useEffect(() => {
    const loadActiveRoute = async () => {
      if (!isOperating || !currentSchedule || currentSchedule.routeType !== "循環ルート") {
        console.log("[v0] Not loading route - not operating or not circular route")
        setPlannedRoute([])
        return
      }

      console.log("[v0] Loading active route...")
      const routeId = currentSchedule.routeId

      if (routeId) {
        console.log("[v0] Active route ID:", routeId)
        const savedRoute = await getSavedRoute(routeId)

        if (savedRoute) {
          console.log("[v0] Loaded saved route:", savedRoute.name, "with", savedRoute.points.length, "points")
          const routeCoords: [number, number][] = savedRoute.points.map((p) => [p.lat, p.lng])
          setPlannedRoute(routeCoords)
        } else {
          console.log("[v0] No saved route data found for ID:", routeId)
          setPlannedRoute([])
        }
      } else {
        console.log("[v0] No route ID set for circular route")
        setPlannedRoute([])
      }
    }

    loadActiveRoute()
  }, [isOperating, currentSchedule]) // Updated dependency to include currentSchedule

  // ユーザーの現在位置を中心に
  const handleUserLocation = useCallback(() => {
    if (!map) return

    if (userLocation) {
      map.setView([userLocation.lat, userLocation.lng], 16)
    } else {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const newLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            setUserLocation(newLocation)
            map.setView([newLocation.lat, newLocation.lng], 16)
          },
          (error) => {
            console.error("[v0] Geolocation error:", error.code, error.message)
            if (error.code === 1) {
              console.error("[v0] Location permission denied by user")
            } else if (error.code === 2) {
              console.error("[v0] Location unavailable")
            } else if (error.code === 3) {
              console.error("[v0] Location request timeout")
            }
            alert("位置情報の取得に失敗しました")
          },
        )
      } else {
        alert("このブラウザは位置情報に対応していません")
      }
    }
  }, [map, userLocation])

  // 車両の現在位置を中心に
  const handleVehicleLocation = useCallback(() => {
    if (!map || locations.length === 0) {
      console.log("[v0] Vehicle location not available")
      return
    }

    const latestLocation = locations[locations.length - 1]
    console.log("[v0] Centering on vehicle:", latestLocation)
    map.setView([latestLocation.latitude, latestLocation.longitude], 16)
  }, [map, locations])

  return (
    <main className="w-full h-screen relative overflow-hidden">
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <MapWrapper
          locations={locations}
          onMapReady={setMap}
          userLocation={userLocation}
          plannedRoute={plannedRoute} // Simplified - route already controlled by useEffect
        />
      </div>

      {!isOperating && nextOperation && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "32px",
              color: "#000",
              // PC と同じサンセリフ系フォントスタックを明示的に指定
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "1.6" }}>次回の運行は</div>
            <div style={{ fontSize: "24px", fontWeight: "700", marginTop: "8px", lineHeight: "1.4" }}>
              {nextOperation.date}({nextOperation.dayOfWeek}){nextOperation.startTime}~{nextOperation.endTime}
            </div>
            <div style={{ fontSize: "18px", fontWeight: "600", marginTop: "8px", color: "#1f2937" }}>
              {nextOperation.routeType}
            </div>
            <div style={{ fontSize: "18px", marginTop: "16px", color: "#000" }}>
              スタート地点は{nextOperation.startLocation}です
            </div>
          </div>
        </div>
      )}

      {isOperating && (
        <div
          style={{
            position: "fixed",
            top: "16px",
            left: "16px",
            zIndex: 9999,
            pointerEvents: "auto",
          }}
        >
          <PassengerCount />
        </div>
      )}

      <div
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          zIndex: 9999,
          pointerEvents: "auto",
        }}
      >
        <ZoomControls map={map} onUserLocation={handleUserLocation} onVehicleLocation={handleVehicleLocation} />
      </div>

      {isOperating && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            pointerEvents: "auto",
          }}
        >
          <RouteInfo schedule={currentSchedule} isOperating={isOperating} />
        </div>
      )}
    </main>
  )
}
