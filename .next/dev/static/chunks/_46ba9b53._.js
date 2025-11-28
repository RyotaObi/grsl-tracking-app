(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/map-wrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapWrapper",
    ()=>MapWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
;
;
const Map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/map.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center bg-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-600",
                children: "地図を読み込んでいます..."
            }, void 0, false, {
                fileName: "[project]/components/map-wrapper.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/map-wrapper.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = Map;
function MapWrapper(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Map, {
        ...props
    }, void 0, false, {
        fileName: "[project]/components/map-wrapper.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c1 = MapWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "Map");
__turbopack_context__.k.register(_c1, "MapWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/zoom-controls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZoomControls",
    ()=>ZoomControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ZoomControls({ map, onUserLocation, onVehicleLocation }) {
    const handleZoomIn = ()=>{
        if (map) {
            map.zoomIn();
        }
    };
    const handleZoomOut = ()=>{
        if (map) {
            map.zoomOut();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "12px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleZoomIn,
                style: {
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer"
                },
                "aria-label": "拡大",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#364153",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "11",
                            cy: "11",
                            r: "8"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M21 21l-4.35-4.35"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "11",
                            y1: "8",
                            x2: "11",
                            y2: "14"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "8",
                            y1: "11",
                            x2: "14",
                            y2: "11"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/zoom-controls.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/zoom-controls.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleZoomOut,
                style: {
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer"
                },
                "aria-label": "縮小",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#364153",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "11",
                            cy: "11",
                            r: "8"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M21 21l-4.35-4.35"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "8",
                            y1: "11",
                            x2: "14",
                            y2: "11"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/zoom-controls.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/zoom-controls.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onUserLocation,
                style: {
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2B7FFF 0%, #51A2FF 100%)",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer"
                },
                "aria-label": "現在位置",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "3 11 22 2 13 21 11 13 3 11"
                    }, void 0, false, {
                        fileName: "[project]/components/zoom-controls.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/zoom-controls.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/zoom-controls.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onVehicleLocation,
                style: {
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00C950 0%, #00D492 100%)",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer"
                },
                "aria-label": "車両位置",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5 17h-2v-6l2-5h9l4 5v6h-2"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "7",
                            cy: "17",
                            r: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 17h6"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "17",
                            cy: "17",
                            r: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M16 5l3 5"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5 11h11"
                        }, void 0, false, {
                            fileName: "[project]/components/zoom-controls.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/zoom-controls.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/zoom-controls.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/zoom-controls.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = ZoomControls;
var _c;
__turbopack_context__.k.register(_c, "ZoomControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/passenger-count.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PassengerCount",
    ()=>PassengerCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const DEFAULT_API_URL = "https://script.google.com/macros/s/AKfycbwThG3VL9uOp66B0GWPZ7Atfx94kum0otelGilFWFx6_WnYct_48I2EjqkiS961XFbT/exec";
const MAX_SEATS = 5;
function ChairIcon({ size }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 70 70",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        width: size,
        height: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M25 45 L40 45",
                stroke: "#68707F",
                strokeWidth: "6",
                strokeLinecap: "round",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/passenger-count.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40 45 L47 15",
                stroke: "#68707F",
                strokeWidth: "6",
                strokeLinecap: "round",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/passenger-count.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/passenger-count.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = ChairIcon;
function PersonIcon({ size }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 70 70",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        width: size,
        height: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "45",
                cy: "8",
                r: "8",
                fill: "#68707F"
            }, void 0, false, {
                fileName: "[project]/components/passenger-count.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M42 23 L37 43",
                stroke: "#68707F",
                strokeWidth: "12",
                strokeLinecap: "round",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/passenger-count.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M37 45 L22 45",
                stroke: "#68707F",
                strokeWidth: "8",
                strokeLinecap: "round",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/passenger-count.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 45 L22 65",
                stroke: "#68707F",
                strokeWidth: "8",
                strokeLinecap: "round",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/passenger-count.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/passenger-count.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = PersonIcon;
function PassengerCount() {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [overrideCount, setOverrideCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PassengerCount.useState": ()=>{
            const envValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PASSENGER_COUNT_OVERRIDE;
            if (!envValue) return null;
            const parsed = Number(envValue);
            return Number.isFinite(parsed) ? Math.max(0, parsed) : null;
        }
    }["PassengerCount.useState"]);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const apiUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PassengerCount.useMemo[apiUrl]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PASSENGER_COUNT_API ?? DEFAULT_API_URL
    }["PassengerCount.useMemo[apiUrl]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PassengerCount.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const params = new URLSearchParams(window.location.search);
            const debugParam = params.get("debugCount");
            if (debugParam !== null) {
                const parsed = Number(debugParam);
                if (Number.isFinite(parsed)) {
                    setOverrideCount(Math.max(0, parsed));
                }
            }
        }
    }["PassengerCount.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PassengerCount.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const matcher = window.matchMedia("(max-width: 640px)");
            const handler = {
                "PassengerCount.useEffect.handler": (event)=>{
                    setIsMobile(event.matches);
                }
            }["PassengerCount.useEffect.handler"];
            handler(matcher);
            matcher.addEventListener("change", handler);
            return ({
                "PassengerCount.useEffect": ()=>matcher.removeEventListener("change", handler)
            })["PassengerCount.useEffect"];
        }
    }["PassengerCount.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PassengerCount.useEffect": ()=>{
            if (overrideCount !== null) {
                setCount(overrideCount);
                setError(null);
                return;
            }
            let isMounted = true;
            async function fetchCount() {
                try {
                    const controller = new AbortController();
                    const timeoutId = setTimeout({
                        "PassengerCount.useEffect.fetchCount.timeoutId": ()=>controller.abort()
                    }["PassengerCount.useEffect.fetchCount.timeoutId"], 10000) // 10秒でタイムアウト
                    ;
                    const res = await fetch(`${apiUrl}?mode=last&t=${Date.now()}`, {
                        signal: controller.signal,
                        mode: "cors",
                        cache: "no-cache"
                    });
                    clearTimeout(timeoutId);
                    if (!res.ok) {
                        throw new Error(`API responded with ${res.status}`);
                    }
                    const data = await res.json();
                    const raw = Number(data?.count) - 2;
                    const sanitized = Number.isFinite(raw) ? Math.max(0, raw) : 0;
                    if (isMounted) {
                        setCount(sanitized);
                        setError(null);
                    }
                } catch (err) {
                    // エラーをログに記録するが、ユーザーには表示しない
                    // 次回の取得（5秒後）で成功する可能性があるため
                    if (err instanceof Error) {
                        if (err.name === "AbortError") {
                            console.warn("[v0] Passenger count fetch timeout");
                        } else if (err.message.includes("Failed to fetch") || err.message.includes("NetworkError")) {
                            console.warn("[v0] Passenger count fetch failed (network error) - will retry");
                        } else {
                            console.error("[v0] Failed to fetch passenger count:", err.message);
                        }
                    } else {
                        console.error("[v0] Failed to fetch passenger count:", err);
                    }
                // エラーが発生しても既存のカウントを保持
                // 初回取得失敗時は count が null のままなので、"取得中..." が表示される
                }
            }
            fetchCount();
            const timer = setInterval(fetchCount, 60000) // 1分ごとにアクセス（スプレッドシートの更新頻度に合わせる）
            ;
            return ({
                "PassengerCount.useEffect": ()=>{
                    isMounted = false;
                    clearInterval(timer);
                }
            })["PassengerCount.useEffect"];
        }
    }["PassengerCount.useEffect"], [
        apiUrl,
        overrideCount
    ]);
    const iconSize = isMobile ? 28 : 48;
    const seatSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PassengerCount.useMemo[seatSlots]": ()=>{
            const active = Math.min(Math.max(count ?? 0, 0), MAX_SEATS);
            return Array.from({
                length: MAX_SEATS
            }).map({
                "PassengerCount.useMemo[seatSlots]": (_, index)=>{
                    const filled = index < active;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: iconSize,
                            height: iconSize
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    opacity: 0.9
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChairIcon, {
                                    size: iconSize
                                }, void 0, false, {
                                    fileName: "[project]/components/passenger-count.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/passenger-count.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            filled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: -5,
                                    left: -4
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PersonIcon, {
                                    size: iconSize
                                }, void 0, false, {
                                    fileName: "[project]/components/passenger-count.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/passenger-count.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/passenger-count.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this);
                }
            }["PassengerCount.useMemo[seatSlots]"]);
        }
    }["PassengerCount.useMemo[seatSlots]"], [
        count,
        iconSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "16px",
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            padding: isMobile ? "8px 12px" : "12px 16px",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "8px" : "12px",
            minWidth: isMobile ? "140px" : "220px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: isMobile ? "8px" : "12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: isMobile ? 18 : 24,
                        height: isMobile ? 18 : 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#364153",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                            }, void 0, false, {
                                fileName: "[project]/components/passenger-count.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "9",
                                cy: "7",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/passenger-count.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M23 21v-2a4 4 0 0 0-3-3.87"
                            }, void 0, false, {
                                fileName: "[project]/components/passenger-count.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M16 3.13a4 4 0 0 1 0 7.75"
                            }, void 0, false, {
                                fileName: "[project]/components/passenger-count.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/passenger-count.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: isMobile ? "10px" : "12px",
                                    color: "#4B5563"
                                },
                                children: "現在の混雑状況"
                            }, void 0, false, {
                                fileName: "[project]/components/passenger-count.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: isMobile ? "14px" : "18px",
                                    fontWeight: "bold",
                                    color: "#111827"
                                },
                                children: error ? error : count === null ? "取得中..." : `${count}人`
                            }, void 0, false, {
                                fileName: "[project]/components/passenger-count.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/passenger-count.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/passenger-count.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: isMobile ? "2px" : "4px"
                },
                children: seatSlots
            }, void 0, false, {
                fileName: "[project]/components/passenger-count.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/passenger-count.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(PassengerCount, "qELRJgwMmmv25WzM5Ah2UJcN/8A=");
_c2 = PassengerCount;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ChairIcon");
__turbopack_context__.k.register(_c1, "PersonIcon");
__turbopack_context__.k.register(_c2, "PassengerCount");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/route-info.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteInfo",
    ()=>RouteInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function RouteInfo({ schedule, isOperating }) {
    if (!schedule || !isOperating) {
        return null;
    }
    const displayText = schedule.routeType === "循環ルート" ? `循環ルート走行中 ${schedule.startTime}～${schedule.endTime}` : `フリー運行中 ${schedule.startTime}～${schedule.endTime}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "24px 24px 0 0",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                padding: "16px 24px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#111827"
                    },
                    children: displayText
                }, void 0, false, {
                    fileName: "[project]/components/route-info.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/route-info.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/route-info.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/route-info.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = RouteInfo;
var _c;
__turbopack_context__.k.register(_c, "RouteInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/simplify-route.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Douglas-Peucker アルゴリズムを使用してルートを簡略化
__turbopack_context__.s([
    "removeDuplicatePoints",
    ()=>removeDuplicatePoints,
    "simplifyRoute",
    ()=>simplifyRoute,
    "snapToRoads",
    ()=>snapToRoads
]);
function simplifyRoute(points, tolerance = 0.0001) {
    if (points.length <= 2) {
        return points;
    }
    // 最初と最後のポイントを結ぶ線からの最大距離を持つポイントを見つける
    let maxDistance = 0;
    let maxIndex = 0;
    const start = points[0];
    const end = points[points.length - 1];
    for(let i = 1; i < points.length - 1; i++){
        const distance = perpendicularDistance(points[i], start, end);
        if (distance > maxDistance) {
            maxDistance = distance;
            maxIndex = i;
        }
    }
    // 最大距離がtoleranceより大きい場合、再帰的に分割
    if (maxDistance > tolerance) {
        const left = simplifyRoute(points.slice(0, maxIndex + 1), tolerance);
        const right = simplifyRoute(points.slice(maxIndex), tolerance);
        // 結合（中間のポイントを重複させないため、leftの最後を除く）
        return [
            ...left.slice(0, -1),
            ...right
        ];
    } else {
        // toleranceより小さい場合、最初と最後のポイントだけを返す
        return [
            start,
            end
        ];
    }
}
// ポイントから線分への垂直距離を計算
function perpendicularDistance(point, lineStart, lineEnd) {
    const x = point.lng;
    const y = point.lat;
    const x1 = lineStart.lng;
    const y1 = lineStart.lat;
    const x2 = lineEnd.lng;
    const y2 = lineEnd.lat;
    const A = x - x1;
    const B = y - y1;
    const C = x2 - x1;
    const D = y2 - y1;
    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let param = -1;
    if (lenSq !== 0) {
        param = dot / lenSq;
    }
    let xx, yy;
    if (param < 0) {
        xx = x1;
        yy = y1;
    } else if (param > 1) {
        xx = x2;
        yy = y2;
    } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
    }
    const dx = x - xx;
    const dy = y - yy;
    return Math.sqrt(dx * dx + dy * dy);
}
function removeDuplicatePoints(points, minDistance = 0.00001) {
    if (points.length <= 1) {
        return points;
    }
    const result = [
        points[0]
    ];
    for(let i = 1; i < points.length; i++){
        const prev = result[result.length - 1];
        const curr = points[i];
        const distance = Math.sqrt(Math.pow(curr.lat - prev.lat, 2) + Math.pow(curr.lng - prev.lng, 2));
        if (distance >= minDistance) {
            result.push(curr);
        }
    }
    return result;
}
async function snapToRoads(points) {
    try {
        // OSRM has a limit of 100 points per request
        // First simplify to reduce points if necessary
        let processedPoints = points;
        if (points.length > 100) {
            processedPoints = simplifyRoute(points, 0.0002); // More aggressive simplification
            console.log(`[v0] Reduced points for OSRM: ${points.length} → ${processedPoints.length}`);
        }
        // Format coordinates for OSRM: "lng,lat;lng,lat;..."
        const coordinates = processedPoints.map((p)=>`${p.lng},${p.lat}`).join(";");
        // Call OSRM Map Matching API
        const url = `https://router.project-osrm.org/match/v1/driving/${coordinates}?overview=full&geometries=geojson`;
        console.log(`[v0] Calling OSRM Map Matching API with ${processedPoints.length} points...`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`OSRM API error: ${response.status}`);
        }
        const data = await response.json();
        if (data.code !== "Ok" || !data.matchings || data.matchings.length === 0) {
            console.error("[v0] OSRM matching failed:", data.message);
            return null;
        }
        // Extract matched coordinates
        const matchedCoordinates = data.matchings[0].geometry.coordinates.map((coord)=>({
                lng: coord[0],
                lat: coord[1]
            }));
        console.log(`[v0] OSRM Map Matching successful: ${processedPoints.length} → ${matchedCoordinates.length} points`);
        return matchedCoordinates;
    } catch (error) {
        console.error("[v0] Error in road snapping:", error);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "db",
    ()=>db,
    "getActiveRoute",
    ()=>getActiveRoute,
    "getAllLocationsFromCollection",
    ()=>getAllLocationsFromCollection,
    "getCurrentScheduleStatus",
    ()=>getCurrentScheduleStatus,
    "getDateCollections",
    ()=>getDateCollections,
    "getMonthSchedule",
    ()=>getMonthSchedule,
    "getRealtimeLocations",
    ()=>getRealtimeLocations,
    "getSavedRoute",
    ()=>getSavedRoute,
    "getSavedRoutes",
    ()=>getSavedRoutes,
    "saveCustomRoute",
    ()=>saveCustomRoute,
    "saveMonthSchedule",
    ()=>saveMonthSchedule,
    "saveRouteAsActive",
    ()=>saveRouteAsActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$simplify$2d$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/simplify-route.ts [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDT5K8KNKYv1FpJYuL9bZcd8JSrfu1ekpw"),
    authDomain: ("TURBOPACK compile-time value", "grsl-tracker.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "grsl-tracker"),
    storageBucket: ("TURBOPACK compile-time value", "grsl-tracker.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "64998644297"),
    appId: ("TURBOPACK compile-time value", "1:64998644297:web:81a4bc49689fa6877d3d98"),
    measurementId: ("TURBOPACK compile-time value", "G-SZVGQRVQ8C")
};
// Initialize Firebase (singleton pattern)
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
function getRealtimeLocations(collectionName, callback) {
    const locationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, collectionName);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(locationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("timestamp", "asc"));
    const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snapshot)=>{
        const locations = [];
        snapshot.forEach((doc)=>{
            const data = doc.data();
            locations.push({
                id: doc.id,
                latitude: data.latitude,
                longitude: data.longitude,
                timestamp: data.timestamp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"] ? data.timestamp.toDate() : new Date(data.timestamp),
                speed: data.speed,
                accuracy: data.accuracy
            });
        });
        callback(locations);
    }, (error)=>{
        console.error("[v0] Firestore error:", error);
    });
    return unsubscribe;
}
async function getActiveRoute() {
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, "settings", "active-route");
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            return data.routeId;
        }
        return null;
    } catch (error) {
        console.error("[v0] Error getting active route:", error);
        return null;
    }
}
async function getSavedRoute(routeId) {
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, "saved-routes", routeId);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        }
        return null;
    } catch (error) {
        console.error("[v0] Error getting saved route:", error);
        return null;
    }
}
async function getSavedRoutes() {
    try {
        const routesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, "saved-routes");
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(routesRef);
        return snapshot.docs.map((docSnap)=>{
            const data = docSnap.data();
            return {
                id: docSnap.id,
                name: data.name || docSnap.id,
                pointCount: data.points?.length || 0
            };
        });
    } catch (error) {
        console.error("[v0] Error listing saved routes:", error);
        return [];
    }
}
async function getDateCollections() {
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, "date-index", "dates");
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            const dateList = data.dateList;
            // Sort by date descending (newest first)
            return dateList.sort((a, b)=>{
                const dateA = a.split("_")[0];
                const dateB = b.split("_")[0];
                return dateB.localeCompare(dateA);
            });
        }
        return [];
    } catch (error) {
        console.error("[v0] Error getting date index:", error);
        return [];
    }
}
async function getAllLocationsFromCollection(collectionName) {
    try {
        const locationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, collectionName);
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(locationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("timestamp", "asc"));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const locations = [];
        snapshot.forEach((doc)=>{
            const data = doc.data();
            locations.push({
                id: doc.id,
                latitude: data.latitude,
                longitude: data.longitude,
                timestamp: data.timestamp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"] ? data.timestamp.toDate() : new Date(data.timestamp),
                speed: data.speed,
                accuracy: data.accuracy
            });
        });
        return locations;
    } catch (error) {
        console.error("[v0] Error getting locations from collection:", error);
        return [];
    }
}
async function saveRouteAsActive(routeId, locations) {
    try {
        const points = locations.map((loc)=>({
                lat: loc.latitude,
                lng: loc.longitude,
                timestamp: loc.timestamp instanceof Date ? loc.timestamp.toISOString() : loc.timestamp
            }));
        const deduplicated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$simplify$2d$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeDuplicatePoints"])(points);
        console.log(`[v0] Step 1 - Deduplication: ${points.length} → ${deduplicated.length} points`);
        const snapped = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$simplify$2d$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapToRoads"])(deduplicated);
        let finalPoints;
        if (snapped) {
            console.log(`[v0] Step 2 - Road snapping successful: ${snapped.length} points`);
            finalPoints = snapped;
        } else {
            console.log("[v0] Step 2 - Road snapping failed, using Douglas-Peucker instead");
            const simplified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$simplify$2d$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simplifyRoute"])(deduplicated, 0.0001);
            console.log(`[v0] Step 2 - Simplification: ${deduplicated.length} → ${simplified.length} points`);
            finalPoints = simplified;
        }
        // Save route data to /saved-routes/{routeId}
        const routeDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, "saved-routes", routeId);
        const savedRoute = {
            name: `${routeId}のルート`,
            createdAt: new Date().toISOString(),
            points: finalPoints
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(routeDocRef, savedRoute);
        // Update /settings/active-route to point to this route
        const settingsDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, "settings", "active-route");
        const activeSettings = {
            routeId: routeId,
            updatedAt: new Date().toISOString()
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(settingsDocRef, activeSettings);
        return true;
    } catch (error) {
        console.error("[v0] Error saving route:", error);
        return false;
    }
}
async function saveCustomRoute(routeId, points, options) {
    try {
        const routeDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, "saved-routes", routeId);
        const savedRoute = {
            name: options?.name || `${routeId}のルート`,
            createdAt: new Date().toISOString(),
            points: points.map(([lat, lng])=>({
                    lat,
                    lng
                }))
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(routeDocRef, savedRoute);
        return true;
    } catch (error) {
        console.error("[v0] Error saving custom route:", error);
        return false;
    }
}
async function saveMonthSchedule(yearMonth, schedule) {
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, "schedules", yearMonth);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
            yearMonth,
            days: schedule,
            updatedAt: new Date().toISOString()
        });
        return true;
    } catch (error) {
        console.error("[v0] Error saving schedule:", error);
        return false;
    }
}
async function getMonthSchedule(yearMonth) {
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, "schedules", yearMonth);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            const schedule = data.days;
            // 後方互換性: 単一のDayScheduleを配列に変換
            const normalized = {};
            for (const [dateStr, daySchedule] of Object.entries(schedule)){
                if (Array.isArray(daySchedule)) {
                    normalized[dateStr] = daySchedule;
                } else {
                    normalized[dateStr] = [
                        daySchedule
                    ];
                }
            }
            return normalized;
        }
        return null;
    } catch (error) {
        console.error("[v0] Error getting schedule:", error);
        return null;
    }
}
async function getCurrentScheduleStatus() {
    try {
        const now = new Date();
        const yearMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
        const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
        const schedule = await getMonthSchedule(yearMonth);
        if (!schedule || !schedule[dateStr]) {
            const nextOp = await findNextOperation(now);
            return {
                isOperating: false,
                schedule: null,
                nextOperation: nextOp
            };
        }
        const daySchedules = Array.isArray(schedule[dateStr]) ? schedule[dateStr] : [
            schedule[dateStr]
        ];
        const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        // 現在の時間に該当するスケジュールを探す
        const activeSchedule = daySchedules.find((s)=>s.isOperating && currentTime >= s.startTime && currentTime <= s.endTime);
        if (activeSchedule) {
            return {
                isOperating: true,
                schedule: activeSchedule
            };
        }
        // 運行中ではない場合、次回の運行を探す
        const nextOp = await findNextOperation(now);
        return {
            isOperating: false,
            schedule: daySchedules[0] || null,
            nextOperation: nextOp
        };
    } catch (error) {
        console.error("[v0] Error getting current schedule status:", error);
        return null;
    }
}
async function findNextOperation(fromDate) {
    try {
        const dayNames = [
            "日",
            "月",
            "火",
            "水",
            "木",
            "金",
            "土"
        ];
        // 今日から30日後まで検索
        for(let i = 0; i < 30; i++){
            const checkDate = new Date(fromDate);
            checkDate.setDate(checkDate.getDate() + i);
            const yearMonth = `${checkDate.getFullYear()}-${String(checkDate.getMonth() + 1).padStart(2, "0")}`;
            const dateStr = `${checkDate.getFullYear()}-${String(checkDate.getMonth() + 1).padStart(2, "0")}-${String(checkDate.getDate()).padStart(2, "0")}`;
            const schedule = await getMonthSchedule(yearMonth);
            if (!schedule || !schedule[dateStr]) continue;
            const daySchedules = Array.isArray(schedule[dateStr]) ? schedule[dateStr] : [
                schedule[dateStr]
            ];
            const operatingSchedules = daySchedules.filter((s)=>s.isOperating);
            if (operatingSchedules.length === 0) continue;
            const currentTime = `${String(fromDate.getHours()).padStart(2, "0")}:${String(fromDate.getMinutes()).padStart(2, "0")}`;
            // 同日の場合は、運行開始時刻が現在時刻より後のスケジュールを探す
            if (i === 0) {
                const futureSchedules = operatingSchedules.filter((s)=>s.startTime > currentTime);
                if (futureSchedules.length > 0) {
                    // 最も近い未来のスケジュールを選択
                    const nextSchedule = futureSchedules.sort((a, b)=>a.startTime.localeCompare(b.startTime))[0];
                    return {
                        date: `${checkDate.getMonth() + 1}/${checkDate.getDate()}`,
                        dayOfWeek: dayNames[checkDate.getDay()],
                        startTime: nextSchedule.startTime,
                        endTime: nextSchedule.endTime,
                        startLocation: nextSchedule.startLocation || "ヤンマー前"
                    };
                }
                continue;
            }
            // 他の日の場合は、最初のスケジュールを返す
            const firstSchedule = operatingSchedules.sort((a, b)=>a.startTime.localeCompare(b.startTime))[0];
            return {
                date: `${checkDate.getMonth() + 1}/${checkDate.getDate()}`,
                dayOfWeek: dayNames[checkDate.getDay()],
                startTime: firstSchedule.startTime,
                endTime: firstSchedule.endTime,
                startLocation: firstSchedule.startLocation || "ヤンマー前"
            };
        }
        return undefined;
    } catch (error) {
        console.error("[v0] Error finding next operation:", error);
        return undefined;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map-wrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$zoom$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/zoom-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$passenger$2d$count$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/passenger-count.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$route$2d$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/route-info.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Home() {
    _s();
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [collectionName, setCollectionName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userLocation, setUserLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [plannedRoute, setPlannedRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentSchedule, setCurrentSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isOperating, setIsOperating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nextOperation, setNextOperation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 今日の日付からコレクション名を生成
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, "0");
            const day = String(today.getDate()).padStart(2, "0");
            const todayCollection = `${year}${month}${day}`;
            setCollectionName(todayCollection);
        }
    }["Home.useEffect"], []);
    // Firestoreからリアルタイムでデータを取得
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!collectionName) return;
            console.log("[v0] Subscribing to collection:", collectionName);
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRealtimeLocations"])(collectionName, {
                "Home.useEffect.unsubscribe": (newLocations)=>{
                    console.log("[v0] Received locations:", newLocations.length);
                    setLocations(newLocations);
                }
            }["Home.useEffect.unsubscribe"]);
            return ({
                "Home.useEffect": ()=>{
                    console.log("[v0] Unsubscribing from collection");
                    unsubscribe();
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        collectionName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("geolocation" in navigator) {
                console.log("[v0] Starting continuous location tracking...");
                const watchId = navigator.geolocation.watchPosition({
                    "Home.useEffect.watchId": (position)=>{
                        const location = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        setUserLocation(location);
                        console.log("[v0] User location updated:", location);
                    }
                }["Home.useEffect.watchId"], {
                    "Home.useEffect.watchId": (error)=>{
                        console.error("[v0] Geolocation error:", error.code, error.message);
                        if (error.code === 1) {
                            console.error("[v0] Location permission denied by user");
                        } else if (error.code === 2) {
                            console.error("[v0] Location unavailable");
                        } else if (error.code === 3) {
                            console.error("[v0] Location request timeout");
                        }
                    }
                }["Home.useEffect.watchId"], {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                });
                return ({
                    "Home.useEffect": ()=>{
                        console.log("[v0] Stopping location tracking");
                        navigator.geolocation.clearWatch(watchId);
                    }
                })["Home.useEffect"];
            } else {
                console.error("[v0] Geolocation not supported by browser");
            }
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            let startTimer = null;
            let endTimer = null;
            let scheduleCheckInterval = null;
            // 運行開始・終了時刻を計算してタイマーを設定する関数
            const setupTimers = {
                "Home.useEffect.setupTimers": async ()=>{
                    const status = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScheduleStatus"])();
                    if (!status) return;
                    // 既存のタイマーをクリア
                    if (startTimer) clearTimeout(startTimer);
                    if (endTimer) clearTimeout(endTimer);
                    setIsOperating(status.isOperating);
                    setCurrentSchedule(status.schedule);
                    setNextOperation(status.nextOperation || null);
                    const now = new Date();
                    const currentTime = now.getTime();
                    if (status.isOperating && status.schedule) {
                        // 現在運行中の場合：運行終了時刻にタイマーを設定
                        const [endHour, endMinute] = status.schedule.endTime.split(":").map(Number);
                        const endDate = new Date(now);
                        endDate.setHours(endHour, endMinute, 0, 0);
                        // 終了時刻が今日の場合はそのまま、過去の場合は明日に設定
                        if (endDate.getTime() <= currentTime) {
                            endDate.setDate(endDate.getDate() + 1);
                        }
                        const timeUntilEnd = endDate.getTime() - currentTime;
                        if (timeUntilEnd > 0) {
                            endTimer = setTimeout({
                                "Home.useEffect.setupTimers": async ()=>{
                                    setIsOperating(false);
                                    // 終了後に次の運行を取得
                                    await setupTimers();
                                }
                            }["Home.useEffect.setupTimers"], timeUntilEnd);
                            console.log(`[v0] 運行終了タイマーを設定: ${endDate.toLocaleString()}`);
                        }
                    } else if (status.nextOperation) {
                        // 現在運行時間外の場合：次の運行開始時刻にタイマーを設定
                        // nextOperation.dateは "12/2(火)" のような形式なので、日付部分を抽出
                        const dateMatch = status.nextOperation.date.match(/^(\d+)\/(\d+)/);
                        if (dateMatch) {
                            const [, monthStr, dayStr] = dateMatch;
                            const month = parseInt(monthStr, 10);
                            const day = parseInt(dayStr, 10);
                            const [startHour, startMinute] = status.nextOperation.startTime.split(":").map(Number);
                            // 現在の年を基準に日付を作成
                            let startDate = new Date(now.getFullYear(), month - 1, day, startHour, startMinute, 0, 0);
                            // 開始時刻が過去の場合は、次の年を試す
                            if (startDate.getTime() <= currentTime) {
                                startDate = new Date(now.getFullYear() + 1, month - 1, day, startHour, startMinute, 0, 0);
                            }
                            // それでも過去の場合は、今月の該当日を探す（月をまたぐ場合）
                            if (startDate.getTime() <= currentTime) {
                                const currentMonth = now.getMonth();
                                const currentYear = now.getFullYear();
                                // 今月の該当日を試す
                                startDate = new Date(currentYear, currentMonth, day, startHour, startMinute, 0, 0);
                                // それでも過去の場合は来月
                                if (startDate.getTime() <= currentTime) {
                                    startDate = new Date(currentYear, currentMonth + 1, day, startHour, startMinute, 0, 0);
                                }
                            }
                            const timeUntilStart = startDate.getTime() - currentTime;
                            if (timeUntilStart > 0 && timeUntilStart < 30 * 24 * 60 * 60 * 1000) {
                                // 30日以内の場合のみタイマーを設定
                                startTimer = setTimeout({
                                    "Home.useEffect.setupTimers": async ()=>{
                                        // 開始時にスケジュールを再読み込み
                                        await setupTimers();
                                    }
                                }["Home.useEffect.setupTimers"], timeUntilStart);
                                console.log(`[v0] 運行開始タイマーを設定: ${startDate.toLocaleString()}`);
                            }
                        }
                    }
                }
            }["Home.useEffect.setupTimers"];
            // 初回読み込み
            setupTimers();
            // スケジュール変更対応のため、1時間ごとに再チェック
            // （スケジュール変更はめったにないため、1時間ごとで十分）
            scheduleCheckInterval = setInterval(setupTimers, 60 * 60 * 1000); // 1時間
            return ({
                "Home.useEffect": ()=>{
                    if (startTimer) clearTimeout(startTimer);
                    if (endTimer) clearTimeout(endTimer);
                    if (scheduleCheckInterval) clearInterval(scheduleCheckInterval);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const loadActiveRoute = {
                "Home.useEffect.loadActiveRoute": async ()=>{
                    if (!isOperating || !currentSchedule || currentSchedule.routeType !== "循環ルート") {
                        console.log("[v0] Not loading route - not operating or not circular route");
                        setPlannedRoute([]);
                        return;
                    }
                    console.log("[v0] Loading active route...");
                    const routeId = currentSchedule.routeId;
                    if (routeId) {
                        console.log("[v0] Active route ID:", routeId);
                        const savedRoute = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavedRoute"])(routeId);
                        if (savedRoute) {
                            console.log("[v0] Loaded saved route:", savedRoute.name, "with", savedRoute.points.length, "points");
                            const routeCoords = savedRoute.points.map({
                                "Home.useEffect.loadActiveRoute.routeCoords": (p)=>[
                                        p.lat,
                                        p.lng
                                    ]
                            }["Home.useEffect.loadActiveRoute.routeCoords"]);
                            setPlannedRoute(routeCoords);
                        } else {
                            console.log("[v0] No saved route data found for ID:", routeId);
                            setPlannedRoute([]);
                        }
                    } else {
                        console.log("[v0] No route ID set for circular route");
                        setPlannedRoute([]);
                    }
                }
            }["Home.useEffect.loadActiveRoute"];
            loadActiveRoute();
        }
    }["Home.useEffect"], [
        isOperating,
        currentSchedule
    ]); // Updated dependency to include currentSchedule
    // ユーザーの現在位置を中心に
    const handleUserLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleUserLocation]": ()=>{
            if (!map) return;
            if (userLocation) {
                map.setView([
                    userLocation.lat,
                    userLocation.lng
                ], 16);
            } else {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition({
                        "Home.useCallback[handleUserLocation]": (position)=>{
                            const newLocation = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            };
                            setUserLocation(newLocation);
                            map.setView([
                                newLocation.lat,
                                newLocation.lng
                            ], 16);
                        }
                    }["Home.useCallback[handleUserLocation]"], {
                        "Home.useCallback[handleUserLocation]": (error)=>{
                            console.error("[v0] Geolocation error:", error.code, error.message);
                            if (error.code === 1) {
                                console.error("[v0] Location permission denied by user");
                            } else if (error.code === 2) {
                                console.error("[v0] Location unavailable");
                            } else if (error.code === 3) {
                                console.error("[v0] Location request timeout");
                            }
                            alert("位置情報の取得に失敗しました");
                        }
                    }["Home.useCallback[handleUserLocation]"]);
                } else {
                    alert("このブラウザは位置情報に対応していません");
                }
            }
        }
    }["Home.useCallback[handleUserLocation]"], [
        map,
        userLocation
    ]);
    // 車両の現在位置を中心に
    const handleVehicleLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleVehicleLocation]": ()=>{
            if (!map || locations.length === 0) {
                console.log("[v0] Vehicle location not available");
                return;
            }
            const latestLocation = locations[locations.length - 1];
            console.log("[v0] Centering on vehicle:", latestLocation);
            map.setView([
                latestLocation.latitude,
                latestLocation.longitude
            ], 16);
        }
    }["Home.useCallback[handleVehicleLocation]"], [
        map,
        locations
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full h-screen relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapWrapper"], {
                    locations: locations,
                    onMapReady: setMap,
                    userLocation: userLocation,
                    plannedRoute: plannedRoute
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            !isOperating && nextOperation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "32px",
                        color: "#000"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "20px",
                                fontWeight: "500",
                                lineHeight: "1.6"
                            },
                            children: "次回の運行は"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 302,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "24px",
                                fontWeight: "700",
                                marginTop: "8px",
                                lineHeight: "1.4"
                            },
                            children: [
                                nextOperation.date,
                                "(",
                                nextOperation.dayOfWeek,
                                ")[",
                                nextOperation.startTime,
                                "~",
                                nextOperation.endTime,
                                "]"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 303,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "20px",
                                fontWeight: "500",
                                marginTop: "8px"
                            },
                            children: "です"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "18px",
                                marginTop: "16px",
                                color: "#000"
                            },
                            children: [
                                "スタート地点は",
                                nextOperation.startLocation,
                                "です"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 295,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this),
            isOperating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: "16px",
                    left: "16px",
                    zIndex: 9999,
                    pointerEvents: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$passenger$2d$count$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PassengerCount"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 324,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 315,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: "16px",
                    right: "16px",
                    zIndex: 9999,
                    pointerEvents: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$zoom$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZoomControls"], {
                    map: map,
                    onUserLocation: handleUserLocation,
                    onVehicleLocation: handleVehicleLocation
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            isOperating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    pointerEvents: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$route$2d$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteInfo"], {
                    schedule: currentSchedule,
                    isOperating: isOperating
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 351,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 341,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, this);
}
_s(Home, "ISgcPpi7uYGTpTHsJ9PsTsqZ6+Q=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_46ba9b53._.js.map