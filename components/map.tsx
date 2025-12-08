"use client"

import { useEffect, useRef } from "react"
import type { LocationData } from "@/lib/types"

interface MapProps {
  locations: LocationData[]
  plannedRoute?: [number, number][]
  onMapReady?: (map: any) => void
  userLocation?: { lat: number; lng: number } | null
}

export default function Map({ locations, plannedRoute, onMapReady, userLocation }: MapProps) {
  const mapRef = useRef<any | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const vehicleMarkerRef = useRef<any | null>(null)
  const routeLayerRef = useRef<any | null>(null)
  const leafletRef = useRef<any>(null)
  const userMarkerRef = useRef<any | null>(null)

  useEffect(() => {
    const loadLeaflet = async () => {
      if (leafletRef.current) return

      const L = await import("leaflet")

      delete (L.default.Icon.Default.prototype as any)._getIconUrl
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      })

      leafletRef.current = L.default
    }

    loadLeaflet()
  }, [])

  useEffect(() => {
    if (!containerRef.current || mapRef.current || !leafletRef.current) {
      return
    }

    const L = leafletRef.current

    const map = L.map(containerRef.current, {
      zoomControl: false,
      dragging: true,
      touchZoom: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      boxZoom: true,
      tap: true,
    }).setView([35.6428991, 140.0467733], 15)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map)

    mapRef.current = map

    if (onMapReady) {
      onMapReady(map)
    }

    const timeoutId = setTimeout(() => {
      if (mapRef.current && mapRef.current.invalidateSize) {
        mapRef.current.invalidateSize()
      }
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [onMapReady, leafletRef.current])

  useEffect(() => {
    if (!mapRef.current || !leafletRef.current) return

    // 既存のルートレイヤーを削除
    if (routeLayerRef.current) {
      routeLayerRef.current.remove()
      routeLayerRef.current = null
    }

    // ルートが空の場合はここで終了
    if (!plannedRoute || plannedRoute.length === 0) {
      return
    }

    const updateRouteStyle = () => {
      if (!mapRef.current || !routeLayerRef.current) return
      const zoom = mapRef.current.getZoom()
      const weight = Math.max(4, Math.min(14, 4 + (zoom - 15) * 2))
      routeLayerRef.current.setStyle({ weight })
    }

    const routeLayer = leafletRef.current
      .polyline(plannedRoute, {
        color: "#2B7FFF",
        weight: 4,
        opacity: 0.8,
      })
      .addTo(mapRef.current)

    routeLayerRef.current = routeLayer

    mapRef.current.on("zoomend", updateRouteStyle)
    updateRouteStyle()

    return () => {
      if (mapRef.current) {
        mapRef.current.off("zoomend", updateRouteStyle)
      }
    }
  }, [plannedRoute])

  useEffect(() => {
    if (!mapRef.current || locations.length === 0 || !leafletRef.current) return

    const latestLocation = locations[locations.length - 1]

    // 進行方向を取得（headingが利用可能な場合はそれを使用、なければ2点間から計算）
    let bearing: number | null = null
    
    // Firestoreから取得したheadingを使用（0以外の場合）
    if (latestLocation.heading !== undefined && latestLocation.heading !== null && latestLocation.heading !== 0) {
      bearing = latestLocation.heading
    } else if (locations.length > 1) {
      // headingが利用できない場合は、最新の位置とその前の位置から角度を計算
      const prevLocation = locations[locations.length - 2]
      const lat1 = (prevLocation.latitude * Math.PI) / 180
      const lat2 = (latestLocation.latitude * Math.PI) / 180
      const dLon = ((latestLocation.longitude - prevLocation.longitude) * Math.PI) / 180

      const y = Math.sin(dLon) * Math.cos(lat2)
      const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon)

      bearing = (Math.atan2(y, x) * 180) / Math.PI
      bearing = (bearing + 360) % 360 // 0-360度に正規化
    }

    // バスアイコンを作成（SVGを使用）
    // 一意なIDを生成してシャドウフィルターの競合を避ける
    const shadowId = `shadow-${Math.random().toString(36).substr(2, 9)}`
    
    // 進行方向の表示有無を判定（bearingがnullまたは0の場合は非表示）
    const showDirection = bearing !== null && bearing !== 0
    
    // bearingをSVG座標系に変換（bearing: 0度=北、SVG: 0度=右）
    // bearing 0度（北）→ SVG 270度（上）
    // bearing 90度（東）→ SVG 0度（右）
    // bearing 180度（南）→ SVG 90度（下）
    // bearing 270度（西）→ SVG 180度（左）
    const svgAngle = bearing !== null ? (90 - bearing) % 360 : 0
    const svgAngleRad = (svgAngle * Math.PI) / 180
    
    // 円の半径
    const circleRadius = 20
    // 三角形の長さ（ストローク幅も考慮）
    const triangleLength = 14
    const strokeWidth = 1.5
    // 余白（三角形が切れないように十分な余白を確保、表示しない場合は最小限）
    const padding = showDirection ? triangleLength + strokeWidth + 2 : 0
    
    // 円の中心（余白を考慮して配置）
    const circleCenterX = 32 + padding
    const circleCenterY = 32 + padding
    
    // 進行方向に応じた円の接点の座標を計算
    const triangleX = circleCenterX + circleRadius * Math.cos(svgAngleRad)
    const triangleY = circleCenterY + circleRadius * Math.sin(svgAngleRad)
    
    // 三角形が切れないようにSVGのサイズを拡大（余白を両側に追加）
    const svgSize = 64 + padding * 2
    
    const vehicleIcon = leafletRef.current.divIcon({
      className: "vehicle-marker",
      html: `
        <svg width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
          <defs>
            <filter id="${shadowId}" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/>
            </filter>
          </defs>
          <!-- 円形の緑色背景 -->
          <circle cx="${circleCenterX}" cy="${circleCenterY}" r="${circleRadius}" fill="#00C950" stroke="white" stroke-width="1.5" filter="url(#${shadowId})"/>
          <!-- 白いバスアイコン（シンプルなデザイン） -->
          <g transform="translate(${circleCenterX}, ${circleCenterY})">
            <!-- バスの本体（長方形） -->
            <rect x="-9" y="-5" width="18" height="10" rx="1" fill="white"/>
            <!-- バスの窓（2つの小さな長方形） -->
            <rect x="-6" y="-3.5" width="3.5" height="2.5" rx="0.3" fill="#00C950"/>
            <rect x="2.5" y="-3.5" width="3.5" height="2.5" rx="0.3" fill="#00C950"/>
            <!-- バスの車輪（2つの小さな円） -->
            <circle cx="-5.5" cy="6" r="2" fill="white"/>
            <circle cx="5.5" cy="6" r="2" fill="white"/>
          </g>
          ${showDirection ? `<!-- 三角形のポインター（進行方向に応じて円の周囲の適切な位置に配置） -->
          <g transform="translate(${triangleX}, ${triangleY}) rotate(${svgAngle})">
            <!-- 緑色の三角形（底辺が円の接線に沿う、鋭角が進行方向を指す） -->
            <path
              d="M -0.5 -8.5 L -0.5 8.5 L 14 -0.5 Z"
              fill="#00C950"
              stroke="white"
              stroke-width="1.5"
              filter="url(#${shadowId})"
            />
          </g>` : ''}
        </svg>
      `,
      iconSize: [svgSize, svgSize],
      iconAnchor: [circleCenterX, circleCenterY], // 円の中心を位置に合わせる
    })

    if (vehicleMarkerRef.current) {
      vehicleMarkerRef.current.setLatLng([latestLocation.latitude, latestLocation.longitude])
      // アイコンを更新（角度が変わった場合）
      vehicleMarkerRef.current.setIcon(vehicleIcon)
    } else {
      vehicleMarkerRef.current = leafletRef.current
        .marker([latestLocation.latitude, latestLocation.longitude], {
          icon: vehicleIcon,
        })
        .addTo(mapRef.current)
    }
  }, [locations])

  useEffect(() => {
    if (!mapRef.current || !userLocation || !leafletRef.current) {
      return
    }

    if (userMarkerRef.current) {
      userMarkerRef.current.setLatLng([userLocation.lat, userLocation.lng])
    } else {
      const userIcon = leafletRef.current.divIcon({
        className: "user-marker",
        html: `
          <div style="
            width: 25px;
            height: 25px;
            background: #2B7FFF;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          "></div>
        `,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      })

      userMarkerRef.current = leafletRef.current
        .marker([userLocation.lat, userLocation.lng], {
          icon: userIcon,
        })
        .addTo(mapRef.current)
    }
  }, [userLocation])

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        isolation: "isolate",
      }}
    />
  )
}
