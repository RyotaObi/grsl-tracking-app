(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_leaflet_dist_leaflet-src_7a2c47a5.js",
  "static/chunks/components_map_tsx_37901355._.js",
  "static/chunks/components_map_tsx_406f9644._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/map.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);