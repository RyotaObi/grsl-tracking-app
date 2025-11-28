"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { MapWrapper } from "@/components/map-wrapper"
import {
  getDateCollections,
  getAllLocationsFromCollection,
  saveRouteAsActive,
  saveCustomRoute,
  getSavedRoutes,
  getSavedRoute,
} from "@/lib/firebase"
import type { LocationData } from "@/lib/types"
import { ChevronLeft, ChevronRight, Check, X, ArrowLeft } from "lucide-react"
import type { Map as LeafletMap } from "leaflet"

export default function RouteManagement() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selectMode = searchParams.get("selectMode") === "true"
  const scheduleDate = searchParams.get("date")
  const scheduleIndex = searchParams.get("scheduleIndex")

  const [dateCollections, setDateCollections] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [locations, setLocations] = useState<LocationData[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")
  const [editedRoute, setEditedRoute] = useState<[number, number][]>([])
  const originalRouteRef = useRef<[number, number][]>([])
  const [hasEdits, setHasEdits] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [customRouteName, setCustomRouteName] = useState("")
  const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null)
  const [isUsingOriginalBase, setIsUsingOriginalBase] = useState(true)
  const [routeSource, setRouteSource] = useState<"saved" | "create">("saved")
  const [savedRoutes, setSavedRoutes] = useState<{ id: string; name: string; pointCount: number }[]>([])
  const [selectedSavedRouteId, setSelectedSavedRouteId] = useState<string | null>(null)
  const [baseRouteId, setBaseRouteId] = useState<string | null>(null)
  const [baseRouteName, setBaseRouteName] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    async function loadDateCollections() {
      const collections = await getDateCollections()
      setDateCollections(collections)
      setLoading(false)
    }
    loadDateCollections()
  }, [])

  useEffect(() => {
    async function loadSavedRoutesList() {
      const routes = await getSavedRoutes()
      // 循環ルート1のみを表示
      const filteredRoutes = routes.filter((route) => route.id === "循環ルート1" || route.name === "循環ルート1")
      setSavedRoutes(filteredRoutes)
    }
    loadSavedRoutesList()
  }, [])

  useEffect(() => {
    // 保存済みルートが読み込まれ、routeSourceが"saved"で選択されていない場合、最初のルートを自動選択
    if (savedRoutes.length > 0 && routeSource === "saved" && !selectedSavedRouteId) {
      setSelectedSavedRouteId(savedRoutes[0].id)
    }
  }, [savedRoutes, routeSource, selectedSavedRouteId])

  useEffect(() => {
    // 新規ルート作成時は白紙から開始
    if (routeSource === "create") {
      originalRouteRef.current = []
      setEditedRoute([])
      setHasEdits(false)
      setIsUsingOriginalBase(false)
      setBaseRouteId(null)
      setBaseRouteName("新規ルート")
      setLocations([])
    }
  }, [routeSource])

  useEffect(() => {
    if (!mapInstance || !isEditing) return

    const handleMapClick = (event: any) => {
      const latlng: [number, number] = [event.latlng.lat, event.latlng.lng]
      setEditedRoute((prev) => {
        setHasEdits(true)
        if (isUsingOriginalBase) {
          setIsUsingOriginalBase(false)
          return [latlng]
        }
        return [...prev, latlng]
      })
    }

    mapInstance.on("click", handleMapClick)

    return () => {
      mapInstance.off("click", handleMapClick)
    }
  }, [mapInstance, isEditing, isUsingOriginalBase])

  useEffect(() => {
    if (routeSource !== "saved") {
      setSelectedSavedRouteId(null)
      // 新規ルート作成時は確実にルートをクリア
      if (routeSource === "create") {
        originalRouteRef.current = []
        setEditedRoute([])
        setHasEdits(false)
        setIsUsingOriginalBase(false)
      }
      return
    }
    if (savedRoutes.length > 0 && !selectedSavedRouteId) {
      setSelectedSavedRouteId(savedRoutes[0].id)
    } else if (selectedSavedRouteId && !savedRoutes.find((route) => route.id === selectedSavedRouteId)) {
      setSelectedSavedRouteId(savedRoutes[0] ? savedRoutes[0].id : null)
    }
  }, [routeSource, savedRoutes, selectedSavedRouteId])

  useEffect(() => {
    if (routeSource !== "saved" || !selectedSavedRouteId) {
      // 新規ルート作成時は確実にルートをクリア
      if (routeSource === "create") {
        originalRouteRef.current = []
        setEditedRoute([])
        setHasEdits(false)
        setIsUsingOriginalBase(false)
      }
      return
    }
    const routeId = selectedSavedRouteId

    async function loadSavedRouteData() {
      setLoading(true)
      const route = await getSavedRoute(routeId)
      // routeSourceが変更された場合は処理を中断
      if (routeSource !== "saved") {
        setLoading(false)
        return
      }
      if (route && route.points) {
        const coords = route.points.map((point) => [point.lat, point.lng]) as [number, number][]
        originalRouteRef.current = coords
        setEditedRoute(coords)
        setHasEdits(false)
        setIsUsingOriginalBase(true)
        setBaseRouteId(routeId)
        setBaseRouteName(route.name || routeId)
      } else {
        originalRouteRef.current = []
        setEditedRoute([])
        setHasEdits(false)
        setIsUsingOriginalBase(false)
        setBaseRouteId(routeId)
        setBaseRouteName(null)
      }
      setLoading(false)
    }

    loadSavedRouteData()
  }, [routeSource, selectedSavedRouteId])

  async function loadLocationsForCurrentDate() {
    if (dateCollections.length === 0) return

    const collectionName = dateCollections[currentIndex]

    setLoading(true)
    const locs = await getAllLocationsFromCollection(collectionName)
    setLocations(locs)
    setLoading(false)
  }

  function handleRouteSourceChange(source: "saved" | "create") {
    // 新規ルート作成時は、routeSourceを変更する前に確実にルートをクリア
    if (source === "create") {
      originalRouteRef.current = []
      setEditedRoute([])
      setHasEdits(false)
      setIsUsingOriginalBase(false)
      setBaseRouteId(null)
      setBaseRouteName("新規ルート")
      setLocations([])
      setSelectedSavedRouteId(null)
    }
    setRouteSource(source)
    setMessage("")
    setIsEditing(false)
    if (source === "saved") {
      setLocations([])
      setBaseRouteId(null)
      setBaseRouteName(null)
    }
  }

  function handlePrevious() {
    if (routeSource !== "create") return
    if (currentIndex < dateCollections.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setMessage("")
    }
  }

  function handleNext() {
    if (routeSource !== "create") return
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setMessage("")
    }
  }

  function handleUndoPoint() {
    setEditedRoute((prev) => {
      if (prev.length === 0) {
        return prev
      }
      setHasEdits(true)
      if (isUsingOriginalBase) {
        setIsUsingOriginalBase(false)
      }
      return prev.slice(0, -1)
    })
  }

  function handleClearRoute() {
    setEditedRoute([])
    setHasEdits(true)
    setIsUsingOriginalBase(false)
  }

  function handleResetRoute() {
    setEditedRoute([...originalRouteRef.current])
    setHasEdits(false)
    setIsUsingOriginalBase(true)
  }

  function handleStartFromBlank() {
    originalRouteRef.current = []
    setEditedRoute([])
    setHasEdits(true)
    setIsUsingOriginalBase(false)
    setBaseRouteId(null)
    setBaseRouteName("新規ルート")
  }

  const buildLocationDataFromRoute = (points: [number, number][]): LocationData[] => {
    const start = Date.now()
    return points.map(([lat, lng], index) => ({
      id: `custom-${index}`,
      latitude: lat,
      longitude: lng,
      timestamp: new Date(start + index * 1000).toISOString(),
    }))
  }

  async function handleSetRoute() {
    if (editedRoute.length === 0) {
      setMessage("ルートが空です。ポイントを追加してください。")
      return
    }

    setSaving(true)
    setMessage("")

    const trimmedName = customRouteName.trim()
    const baseId = baseRouteId || `route-${Date.now()}`
    const generatedId = `${baseId}-custom-${Date.now()}`
    const shouldGenerateNewId = hasEdits || !baseRouteId
    const routeId = shouldGenerateNewId ? trimmedName || generatedId : baseId
    const fallbackName =
      trimmedName ||
      baseRouteName ||
      (routeSource === "create" && formattedDate ? `${formattedDate}のルート` : null) ||
      routeId
    const routeLocations = buildLocationDataFromRoute(editedRoute)

    const success = await saveRouteAsActive(routeId, routeLocations)

    if (success) {
      setMessage(`${fallbackName}をアクティブに設定しました`)
      setHasEdits(false)
      setBaseRouteId(routeId)
      setBaseRouteName(fallbackName)
      if (shouldGenerateNewId) {
        setCustomRouteName("")
        const routes = await getSavedRoutes()
        const filteredRoutes = routes.filter((route) => route.id === "循環ルート1" || route.name === "循環ルート1")
        setSavedRoutes(filteredRoutes)
      }
    } else {
      setMessage("ルートの設定に失敗しました")
    }

    setSaving(false)
  }

  async function handleSelectRoute() {
    if (!selectMode || !scheduleDate) return
    if (routeSource === "create" && editedRoute.length === 0) {
      setMessage("ルートが空です。ポイントを追加してください。")
      return
    }
    if (routeSource === "saved" && (!selectedSavedRouteId || editedRoute.length === 0)) {
      setMessage("ルートが選択されていないか、ルートデータが読み込まれていません。")
      return
    }

    let routeId: string
    if (routeSource === "saved" && baseRouteId) {
      // 保存済みルート選択時は、baseRouteIdをそのまま使用
      routeId = baseRouteId
    } else {
      routeId = baseRouteId || `route-${Date.now()}`
    }
    const trimmedName = customRouteName.trim()
    const fallbackName =
      trimmedName ||
      baseRouteName ||
      (routeSource === "create" && formattedDate ? `${formattedDate}のルート` : null) ||
      routeId

    if (routeSource === "create" && (hasEdits || !baseRouteId)) {
      const newRouteId = trimmedName || `${routeId}-custom-${Date.now()}`
      const routeName = trimmedName || fallbackName || newRouteId
      const success = await saveCustomRoute(newRouteId, editedRoute, { name: routeName })
      if (!success) {
        setMessage("カスタムルートの保存に失敗しました")
        return
      }
      routeId = newRouteId
      setHasEdits(false)
      setCustomRouteName("")
      setBaseRouteId(newRouteId)
      setBaseRouteName(routeName)
      setIsUsingOriginalBase(true)
      const routes = await getSavedRoutes()
      const filteredRoutes = routes.filter((route) => route.id === "循環ルート1" || route.name === "循環ルート1")
      setSavedRoutes(filteredRoutes)
    }

    const scheduleIndexParam = scheduleIndex ? `&scheduleIndex=${encodeURIComponent(scheduleIndex)}` : ""
    const targetUrl = `/operator?selectedRoute=${encodeURIComponent(routeId)}&date=${encodeURIComponent(scheduleDate)}${scheduleIndexParam}`
    router.push(targetUrl)
  }

  function handleCancel() {
    router.push("/operator")
  }

  function handleBackToSchedule() {
    router.push("/operator")
  }

  const currentDate = dateCollections[currentIndex]
  const formattedDate = currentDate
    ? `${currentDate.slice(0, 4)}年${currentDate.slice(4, 6)}月${currentDate.slice(6, 8)}日`
    : ""

  const selectedSavedRoute = savedRoutes.find((route) => route.id === selectedSavedRouteId) || null

  const routeCoordinates = useMemo(() => {
    // 新規ルート作成時は常に空配列を返す
    if (routeSource === "create") {
      return []
    }
    return editedRoute
  }, [routeSource, editedRoute])

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* Map */}
      <MapWrapper 
        key={`map-${routeSource}-${routeSource === "saved" ? selectedSavedRouteId : "create"}`}
        locations={[]} 
        plannedRoute={routeCoordinates} 
        onMapReady={setMapInstance} 
      />

      {/* Loading Overlay */}
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <div style={{ fontSize: 16, color: "#6b7280" }}>読み込み中...</div>
        </div>
      )}

      {/* Back Button */}
      {!selectMode && (
        <button
          onClick={handleBackToSchedule}
          style={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1001,
            width: 48,
            height: 48,
            borderRadius: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ArrowLeft size={24} color="#1f2937" />
        </button>
      )}

      {/* Header */}
      <div
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          right: 16,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { key: "saved", label: "保存済みルートから選択" },
            { key: "create", label: "新規ルートを作成" },
          ].map((option) => {
            const active = routeSource === option.key
            return (
              <button
                key={option.key}
                onClick={() => handleRouteSourceChange(option.key as "saved" | "create")}
                style={{
                  padding: "10px 18px",
                  borderRadius: 9999,
                  border: "1px solid",
                  borderColor: active ? "#2563eb" : "#d1d5db",
                  backgroundColor: active ? "#2563eb" : "white",
                  color: active ? "white" : "#374151",
                  fontWeight: 600,
                  cursor: "pointer",
                  minWidth: 180,
                }}
              >
                {option.label}
              </button>
            )
          })}
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: 720,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: 16,
            padding: "16px 24px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          {routeSource === "create" ? (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#1f2937" }}>新規ルート作成</div>
              <div style={{ fontSize: 14, color: "#6b7280", marginTop: 4 }}>{editedRoute.length}ポイント</div>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#1f2937", marginBottom: 12 }}>保存済みルート</div>
              {savedRoutes.length === 0 ? (
                <p style={{ fontSize: 14, color: "#6b7280" }}>保存されたルートがありません。新規作成してください。</p>
              ) : (
                <>
                  <div style={{ fontSize: 14, color: "#4b5563", marginBottom: 12 }}>
                    {selectedSavedRoute ? selectedSavedRoute.name : "ルートを選択"}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      maxHeight: 160,
                      overflowY: "auto",
                    }}
                  >
                    {savedRoutes.map((route) => {
                      const active = route.id === selectedSavedRouteId
                      return (
                        <button
                          key={route.id}
                          onClick={() => setSelectedSavedRouteId(route.id)}
                          style={{
                            flex: "1 1 200px",
                            padding: "10px 12px",
                            borderRadius: 12,
                            border: "1px solid",
                            borderColor: active ? "#2563eb" : "#d1d5db",
                            backgroundColor: active ? "rgba(37,99,235,0.1)" : "white",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          <div style={{ fontWeight: 600, color: active ? "#1d4ed8" : "#1f2937" }}>{route.name}</div>
                          <div style={{ fontSize: 12, color: "#6b7280" }}>{route.pointCount}ポイント</div>
                        </button>
                      )
                    })}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Editing Panel */}
      {routeSource === "create" && (
        <div
          style={{
            position: "fixed",
            bottom: isMobile ? 120 : 200,
            left: isMobile ? 8 : 16,
            right: isMobile ? 8 : 16,
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
          }}
        >
        <div
          style={{
            width: "100%",
            maxWidth: isMobile ? "100%" : 480,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: isMobile ? 12 : 16,
            padding: isMobile ? 12 : 16,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: isMobile ? 8 : 12 }}>
            <div>
              <div style={{ fontWeight: 700, color: "#1f2937", fontSize: isMobile ? 14 : 16 }}>ルート編集</div>
              <div style={{ fontSize: isMobile ? 11 : 12, color: "#6b7280" }}>{editedRoute.length}ポイント</div>
            </div>
            <button
              onClick={() => setIsEditing((prev) => !prev)}
              style={{
                padding: isMobile ? "8px 12px" : "10px 16px",
                borderRadius: isMobile ? 10 : 12,
                border: "none",
                fontSize: isMobile ? 12 : 14,
                fontWeight: 600,
                backgroundColor: isEditing ? "#f97316" : "#2563eb",
                color: "white",
                cursor: "pointer",
                minWidth: isMobile ? 100 : 120,
              }}
            >
              {isEditing ? "終了" : "編集"}
            </button>
          </div>
          {hasEdits && (
            <div style={{ marginTop: isMobile ? 6 : 8, fontSize: isMobile ? 11 : 12, color: "#dc2626", fontWeight: 600 }}>未保存の変更があります</div>
          )}
          {isEditing && (
            <>
              <p style={{ marginTop: isMobile ? 8 : 12, fontSize: isMobile ? 11 : 12, color: "#374151", lineHeight: 1.5 }}>
                地図をタップするとポイントを追加できます。スマホでもピンチ操作でズームしながら編集できます。
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 6 : 8, marginTop: isMobile ? 8 : 12 }}>
                <button
                  onClick={handleUndoPoint}
                  style={{
                    flex: 1,
                    minWidth: isMobile ? 80 : 120,
                    padding: isMobile ? "8px 10px" : "10px 12px",
                    borderRadius: isMobile ? 8 : 10,
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontSize: isMobile ? 12 : 14,
                  }}
                >
                  最後を削除
                </button>
                <button
                  onClick={handleClearRoute}
                  style={{
                    flex: 1,
                    minWidth: isMobile ? 80 : 120,
                    padding: isMobile ? "8px 10px" : "10px 12px",
                    borderRadius: isMobile ? 8 : 10,
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontSize: isMobile ? 12 : 14,
                  }}
                >
                  すべて削除
                </button>
                <button
                  onClick={handleResetRoute}
                  style={{
                    flex: 1,
                    minWidth: isMobile ? 80 : 120,
                    padding: isMobile ? "8px 10px" : "10px 12px",
                    borderRadius: isMobile ? 8 : 10,
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontSize: isMobile ? 12 : 14,
                  }}
                >
                  元に戻す
                </button>
              </div>
              <input
                type="text"
                value={customRouteName}
                onChange={(e) => setCustomRouteName(e.target.value)}
                placeholder="カスタムルート名（任意）"
                style={{
                  marginTop: isMobile ? 8 : 12,
                  width: "100%",
                  padding: isMobile ? "10px 12px" : "12px 14px",
                  borderRadius: isMobile ? 10 : 12,
                  border: "1px solid #d1d5db",
                  fontSize: isMobile ? 12 : 14,
                  boxSizing: "border-box",
                }}
              />
            </>
          )}
        </div>
      </div>
      )}

      {/* Set Route Button */}
      <div
        style={{
          position: "fixed",
          bottom: isMobile ? 16 : 96,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
          gap: isMobile ? 8 : 12,
          width: isMobile ? "calc(100% - 32px)" : "auto",
          maxWidth: isMobile ? "none" : 600,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        {selectMode ? (
          <>
            <button
              onClick={handleCancel}
              style={{
                backgroundColor: "#6b7280",
                color: "white",
                padding: isMobile ? "8px 12px" : "12px 20px",
                borderRadius: isMobile ? 10 : 14,
                border: "none",
                fontSize: isMobile ? 12 : 15,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                gap: isMobile ? 4 : 6,
                whiteSpace: "nowrap",
              }}
            >
              <X size={isMobile ? 14 : 18} />
              キャンセル
            </button>
            <button
              onClick={handleSelectRoute}
              disabled={
                (routeSource === "create" && editedRoute.length === 0) ||
                (routeSource === "saved" && (!selectedSavedRouteId || editedRoute.length === 0))
              }
              style={{
                backgroundColor:
                  (routeSource === "create" && editedRoute.length === 0) ||
                  (routeSource === "saved" && (!selectedSavedRouteId || editedRoute.length === 0))
                    ? "#9ca3af"
                    : "#3b82f6",
                color: "white",
                padding: isMobile ? "8px 16px" : "12px 24px",
                borderRadius: isMobile ? 10 : 14,
                border: "none",
                fontSize: isMobile ? 12 : 15,
                fontWeight: 700,
                cursor:
                  (routeSource === "create" && editedRoute.length === 0) ||
                  (routeSource === "saved" && (!selectedSavedRouteId || editedRoute.length === 0))
                    ? "not-allowed"
                    : "pointer",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                gap: isMobile ? 4 : 6,
                whiteSpace: "nowrap",
                maxWidth: isMobile ? "none" : 300,
              }}
            >
              <Check size={isMobile ? 14 : 18} />
              {isMobile ? "設定" : "このルートを設定する"}
            </button>
          </>
        ) : (
          <button
            onClick={handleSetRoute}
            disabled={saving || locations.length === 0}
            style={{
              backgroundColor: saving || locations.length === 0 ? "#9ca3af" : "#10b981",
              color: "white",
              padding: isMobile ? "8px 16px" : "12px 24px",
              borderRadius: isMobile ? 10 : 14,
              border: "none",
              fontSize: isMobile ? 12 : 15,
              fontWeight: 700,
              cursor: saving || locations.length === 0 ? "not-allowed" : "pointer",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 4 : 6,
              whiteSpace: "nowrap",
              maxWidth: isMobile ? "none" : 300,
            }}
          >
            <Check size={isMobile ? 14 : 18} />
            {saving ? "設定中..." : isMobile ? "設定" : "このルートを設定"}
          </button>
        )}
      </div>

      {/* Message */}
      {message && (
        <div
          style={{
            position: "fixed",
            top: 100,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1001,
            backgroundColor: "rgba(16, 185, 129, 0.95)",
            color: "white",
            padding: "12px 24px",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 600,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          {message}
        </div>
      )}
    </div>
  )
}
