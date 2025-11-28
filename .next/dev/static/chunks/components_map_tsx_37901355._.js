(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Map({ locations, plannedRoute, onMapReady, userLocation }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vehicleMarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const routeLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const traveledRouteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leafletRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userMarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Map.useEffect": ()=>{
            const loadLeaflet = {
                "Map.useEffect.loadLeaflet": async ()=>{
                    if (leafletRef.current) return;
                    const L = await __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)");
                    delete L.default.Icon.Default.prototype._getIconUrl;
                    L.default.Icon.Default.mergeOptions({
                        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
                    });
                    leafletRef.current = L.default;
                }
            }["Map.useEffect.loadLeaflet"];
            loadLeaflet();
        }
    }["Map.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Map.useEffect": ()=>{
            if (!containerRef.current || mapRef.current || !leafletRef.current) {
                return;
            }
            const L = leafletRef.current;
            const map = L.map(containerRef.current, {
                zoomControl: false,
                dragging: true,
                touchZoom: true,
                scrollWheelZoom: true,
                doubleClickZoom: true,
                boxZoom: true,
                tap: true
            }).setView([
                35.6393079,
                140.0465158
            ], 15);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "© OpenStreetMap contributors",
                maxZoom: 19
            }).addTo(map);
            mapRef.current = map;
            if (onMapReady) {
                onMapReady(map);
            }
            const timeoutId = setTimeout({
                "Map.useEffect.timeoutId": ()=>{
                    if (mapRef.current && mapRef.current.invalidateSize) {
                        mapRef.current.invalidateSize();
                    }
                }
            }["Map.useEffect.timeoutId"], 100);
            return ({
                "Map.useEffect": ()=>{
                    clearTimeout(timeoutId);
                    if (mapRef.current) {
                        mapRef.current.remove();
                        mapRef.current = null;
                    }
                }
            })["Map.useEffect"];
        }
    }["Map.useEffect"], [
        onMapReady,
        leafletRef.current
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Map.useEffect": ()=>{
            if (!mapRef.current || !plannedRoute || plannedRoute.length === 0 || !leafletRef.current) return;
            if (routeLayerRef.current) {
                routeLayerRef.current.remove();
            }
            const updateRouteStyle = {
                "Map.useEffect.updateRouteStyle": ()=>{
                    if (!mapRef.current || !routeLayerRef.current) return;
                    const zoom = mapRef.current.getZoom();
                    const weight = Math.max(4, Math.min(14, 4 + (zoom - 15) * 2));
                    routeLayerRef.current.setStyle({
                        weight
                    });
                }
            }["Map.useEffect.updateRouteStyle"];
            const routeLayer = leafletRef.current.polyline(plannedRoute, {
                color: "#2B7FFF",
                weight: 4,
                opacity: 0.8
            }).addTo(mapRef.current);
            routeLayerRef.current = routeLayer;
            mapRef.current.on("zoomend", updateRouteStyle);
            updateRouteStyle();
            return ({
                "Map.useEffect": ()=>{
                    if (mapRef.current) {
                        mapRef.current.off("zoomend", updateRouteStyle);
                    }
                }
            })["Map.useEffect"];
        }
    }["Map.useEffect"], [
        plannedRoute
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Map.useEffect": ()=>{
            if (!mapRef.current || locations.length === 0 || !leafletRef.current) return;
            const latestLocation = locations[locations.length - 1];
            // 進行方向を計算（最新の位置とその前の位置から角度を計算）
            let bearing = 0;
            if (locations.length > 1) {
                const prevLocation = locations[locations.length - 2];
                const lat1 = prevLocation.latitude * Math.PI / 180;
                const lat2 = latestLocation.latitude * Math.PI / 180;
                const dLon = (latestLocation.longitude - prevLocation.longitude) * Math.PI / 180;
                const y = Math.sin(dLon) * Math.cos(lat2);
                const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
                bearing = Math.atan2(y, x) * 180 / Math.PI;
                bearing = (bearing + 360) % 360; // 0-360度に正規化
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
                iconSize: [
                    24,
                    24
                ],
                iconAnchor: [
                    12,
                    12
                ]
            });
            if (vehicleMarkerRef.current) {
                vehicleMarkerRef.current.setLatLng([
                    latestLocation.latitude,
                    latestLocation.longitude
                ]);
                // アイコンを更新（角度が変わった場合）
                vehicleMarkerRef.current.setIcon(vehicleIcon);
            } else {
                vehicleMarkerRef.current = leafletRef.current.marker([
                    latestLocation.latitude,
                    latestLocation.longitude
                ], {
                    icon: vehicleIcon
                }).addTo(mapRef.current);
            }
            if (locations.length > 1) {
                const traveledPath = locations.map({
                    "Map.useEffect.traveledPath": (loc)=>[
                            loc.latitude,
                            loc.longitude
                        ]
                }["Map.useEffect.traveledPath"]);
                if (traveledRouteRef.current) {
                    traveledRouteRef.current.setLatLngs(traveledPath);
                } else {
                    traveledRouteRef.current = leafletRef.current.polyline(traveledPath, {
                        color: "#51A2FF",
                        weight: 3,
                        opacity: 0.6,
                        dashArray: "10, 10"
                    }).addTo(mapRef.current);
                }
            }
        }
    }["Map.useEffect"], [
        locations
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Map.useEffect": ()=>{
            if (!mapRef.current || !userLocation || !leafletRef.current) {
                return;
            }
            if (userMarkerRef.current) {
                userMarkerRef.current.setLatLng([
                    userLocation.lat,
                    userLocation.lng
                ]);
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
                    iconSize: [
                        18,
                        18
                    ],
                    iconAnchor: [
                        9,
                        9
                    ]
                });
                userMarkerRef.current = leafletRef.current.marker([
                    userLocation.lat,
                    userLocation.lng
                ], {
                    icon: userIcon
                }).addTo(mapRef.current);
            }
        }
    }["Map.useEffect"], [
        userLocation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            isolation: "isolate"
        }
    }, void 0, false, {
        fileName: "[project]/components/map.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_s(Map, "Zw70LtNQte49KqZQ7cuM5ejLcF4=");
_c = Map;
var _c;
__turbopack_context__.k.register(_c, "Map");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/map.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/map.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_map_tsx_37901355._.js.map