(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_leaflet_dist_leaflet-src_87283f11.js",
  "static/chunks/components_map_tsx_37901355._.js",
  "static/chunks/components_map_tsx_a3b17303._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/map.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);