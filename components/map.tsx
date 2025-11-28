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
  const traveledRouteRef = useRef<any | null>(null)
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
    }).setView([35.6393079, 140.0465158], 15)

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

    // 進行方向を計算（最新の位置とその前の位置から角度を計算）
    let bearing = 0
    if (locations.length > 1) {
      const prevLocation = locations[locations.length - 2]
      const lat1 = (prevLocation.latitude * Math.PI) / 180
      const lat2 = (latestLocation.latitude * Math.PI) / 180
      const dLon = ((latestLocation.longitude - prevLocation.longitude) * Math.PI) / 180

      const y = Math.sin(dLon) * Math.cos(lat2)
      const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon)

      bearing = (Math.atan2(y, x) * 180) / Math.PI
      bearing = (bearing + 360) % 360 // 0-360度に正規化
    }

    // 矢印型のアイコンを作成（SVGを使用）
    const vehicleIcon = leafletRef.current.divIcon({
      className: "vehicle-marker",
      html: `
        <svg width="24" height="24" viewBox="0 0 24 24" style="transform: rotate(${bearing}deg); transform-origin: center center;">
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/>
            </filter>
          </defs>
          <path
            d="M 12 2 L 20 18 L 12 14 L 4 18 Z"
            fill="#00C950"
            stroke="white"
            stroke-width="2"
            filter="url(#shadow)"
          />
          <circle cx="12" cy="12" r="4" fill="white" stroke="#00C950" stroke-width="1.5"/>
        </svg>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12], // 中心を位置に合わせる
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

    if (locations.length > 1) {
      const traveledPath = locations.map((loc) => [loc.latitude, loc.longitude]) as [number, number][]

      if (traveledRouteRef.current) {
        traveledRouteRef.current.setLatLngs(traveledPath)
      } else {
        traveledRouteRef.current = leafletRef.current
          .polyline(traveledPath, {
            color: "#51A2FF",
            weight: 3,
            opacity: 0.6,
            dashArray: "10, 10",
          })
          .addTo(mapRef.current)
      }
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
            width: 18px;
            height: 18px;
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
