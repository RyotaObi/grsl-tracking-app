module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/lib/utils/simplify-route.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/firebase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "saveMonthSchedule",
    ()=>saveMonthSchedule,
    "saveRouteAsActive",
    ()=>saveRouteAsActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$simplify$2d$route$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/simplify-route.ts [app-ssr] (ecmascript)");
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
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])()[0];
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
function getRealtimeLocations(collectionName, callback) {
    const locationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(db, collectionName);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(locationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])("timestamp", "asc"));
    const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snapshot)=>{
        const locations = [];
        snapshot.forEach((doc)=>{
            const data = doc.data();
            locations.push({
                id: doc.id,
                latitude: data.latitude,
                longitude: data.longitude,
                timestamp: data.timestamp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"] ? data.timestamp.toDate() : new Date(data.timestamp),
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
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, "settings", "active-route");
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
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
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, "saved-routes", routeId);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        }
        return null;
    } catch (error) {
        console.error("[v0] Error getting saved route:", error);
        return null;
    }
}
async function getDateCollections() {
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, "date-index", "dates");
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
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
        const locationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(db, collectionName);
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(locationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])("timestamp", "asc"));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const locations = [];
        snapshot.forEach((doc)=>{
            const data = doc.data();
            locations.push({
                id: doc.id,
                latitude: data.latitude,
                longitude: data.longitude,
                timestamp: data.timestamp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"] ? data.timestamp.toDate() : new Date(data.timestamp),
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
        const deduplicated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$simplify$2d$route$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeDuplicatePoints"])(points);
        console.log(`[v0] Step 1 - Deduplication: ${points.length} → ${deduplicated.length} points`);
        const snapped = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$simplify$2d$route$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapToRoads"])(deduplicated);
        let finalPoints;
        if (snapped) {
            console.log(`[v0] Step 2 - Road snapping successful: ${snapped.length} points`);
            finalPoints = snapped;
        } else {
            console.log("[v0] Step 2 - Road snapping failed, using Douglas-Peucker instead");
            const simplified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$simplify$2d$route$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simplifyRoute"])(deduplicated, 0.0001);
            console.log(`[v0] Step 2 - Simplification: ${deduplicated.length} → ${simplified.length} points`);
            finalPoints = simplified;
        }
        // Save route data to /saved-routes/{routeId}
        const routeDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, "saved-routes", routeId);
        const savedRoute = {
            name: `${routeId}のルート`,
            createdAt: new Date().toISOString(),
            points: finalPoints
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(routeDocRef, savedRoute);
        // Update /settings/active-route to point to this route
        const settingsDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, "settings", "active-route");
        const activeSettings = {
            routeId: routeId,
            updatedAt: new Date().toISOString()
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(settingsDocRef, activeSettings);
        return true;
    } catch (error) {
        console.error("[v0] Error saving route:", error);
        return false;
    }
}
async function saveMonthSchedule(yearMonth, schedule) {
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, "schedules", yearMonth);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
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
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, "schedules", yearMonth);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            return data.days;
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
        const daySchedule = schedule[dateStr];
        if (!daySchedule.isOperating) {
            const nextOp = await findNextOperation(now);
            return {
                isOperating: false,
                schedule: daySchedule,
                nextOperation: nextOp
            };
        }
        // Check if current time is within operating hours
        const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        const isWithinHours = currentTime >= daySchedule.startTime && currentTime <= daySchedule.endTime;
        if (!isWithinHours) {
            const nextOp = await findNextOperation(now);
            return {
                isOperating: false,
                schedule: daySchedule,
                nextOperation: nextOp
            };
        }
        return {
            isOperating: isWithinHours,
            schedule: daySchedule
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
            if (schedule && schedule[dateStr] && schedule[dateStr].isOperating) {
                const daySchedule = schedule[dateStr];
                // 同日の場合は、運行開始時刻が現在時刻より後かチェック
                if (i === 0) {
                    const currentTime = `${String(fromDate.getHours()).padStart(2, "0")}:${String(fromDate.getMinutes()).padStart(2, "0")}`;
                    if (daySchedule.startTime <= currentTime) {
                        continue; // 今日の運行時間は過ぎているので次の日を探す
                    }
                }
                return {
                    date: `${checkDate.getMonth() + 1}/${checkDate.getDate()}`,
                    dayOfWeek: dayNames[checkDate.getDay()],
                    startTime: daySchedule.startTime,
                    endTime: daySchedule.endTime,
                    startLocation: daySchedule.startLocation || "コア前"
                };
            }
        }
        return undefined;
    } catch (error) {
        console.error("[v0] Error finding next operation:", error);
        return undefined;
    }
}
}),
"[project]/app/operator/schedule/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScheduleManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-ssr] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ScheduleManagement() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [schedules, setSchedules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [availableRoutes, setAvailableRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadSchedule();
        loadAvailableRoutes();
    }, [
        selectedMonth
    ]);
    async function loadSchedule() {
        const yearMonth = `${selectedMonth.getFullYear()}-${String(selectedMonth.getMonth() + 1).padStart(2, "0")}`;
        const schedule = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthSchedule"])(yearMonth);
        if (schedule) {
            setSchedules(schedule);
        } else {
            setSchedules({});
        }
    }
    async function loadAvailableRoutes() {
        const routes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDateCollections"])();
        setAvailableRoutes(routes);
    }
    async function handleSaveSchedule() {
        setSaving(true);
        setMessage("");
        const yearMonth = `${selectedMonth.getFullYear()}-${String(selectedMonth.getMonth() + 1).padStart(2, "0")}`;
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveMonthSchedule"])(yearMonth, schedules);
        if (success) {
            setMessage("スケジュールを保存しました");
        } else {
            setMessage("保存に失敗しました");
        }
        setSaving(false);
        setTimeout(()=>setMessage(""), 3000);
    }
    function getDaysInMonth(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const days = [];
        for(let day = 1; day <= lastDay.getDate(); day++){
            const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            days.push({
                day,
                dateStr
            });
        }
        return {
            days,
            firstDayOfWeek: firstDay.getDay()
        };
    }
    const { days, firstDayOfWeek } = getDaysInMonth(selectedMonth);
    function handlePreviousMonth() {
        setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1));
        setSelectedDate(null);
    }
    function handleNextMonth() {
        setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1));
        setSelectedDate(null);
    }
    function handleDayClick(dateStr) {
        setSelectedDate(dateStr);
    }
    function updateSchedule(dateStr, updates) {
        setSchedules((prev)=>({
                ...prev,
                [dateStr]: {
                    ...prev[dateStr],
                    ...updates
                }
            }));
    }
    function toggleOperating(dateStr) {
        const current = schedules[dateStr];
        if (current?.isOperating) {
            const newSchedules = {
                ...schedules
            };
            delete newSchedules[dateStr];
            setSchedules(newSchedules);
        } else {
            updateSchedule(dateStr, {
                isOperating: true,
                startTime: "10:00",
                endTime: "11:30",
                routeType: "循環ルート",
                routeId: availableRoutes[0] || undefined,
                startLocation: "コア前"
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const selectedRouteId = searchParams.get("selectedRoute");
        const dateParam = searchParams.get("date");
        if (selectedRouteId && dateParam) {
            updateSchedule(dateParam, {
                routeId: selectedRouteId
            });
            // URLパラメータをクリア
            router.replace("/operator/schedule");
        }
    }, [
        searchParams
    ]);
    function handleSelectRouteFromMap() {
        if (!selectedDate) return;
        router.push(`/operator/route?selectMode=true&date=${selectedDate}`);
    }
    const monthName = selectedMonth.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long"
    });
    const selectedSchedule = selectedDate ? schedules[selectedDate] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            backgroundColor: "#f3f4f6",
            overflowY: "auto",
            padding: 16
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 900,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "white",
                        borderRadius: 16,
                        padding: 24,
                        marginBottom: 16,
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "start",
                            marginBottom: 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: 24,
                                        fontWeight: 700,
                                        color: "#1f2937",
                                        marginBottom: 8
                                    },
                                    children: "スケジュール設定"
                                }, void 0, false, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#6b7280",
                                        fontSize: 14
                                    },
                                    children: "カレンダーから日付を選択して、運行スケジュールを設定してください"
                                }, void 0, false, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/operator/schedule/page.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/operator/schedule/page.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/operator/schedule/page.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid #10b981",
                        color: "#065f46",
                        padding: "12px 16px",
                        borderRadius: 8,
                        marginBottom: 16,
                        fontSize: 14,
                        fontWeight: 600
                    },
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/operator/schedule/page.tsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "white",
                        borderRadius: 16,
                        padding: "16px",
                        marginBottom: 16,
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePreviousMonth,
                                    style: {
                                        width: 36,
                                        height: 36,
                                        borderRadius: 8,
                                        border: "1px solid #e5e7eb",
                                        backgroundColor: "white",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/operator/schedule/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: "#1f2937"
                                    },
                                    children: monthName
                                }, void 0, false, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNextMonth,
                                    style: {
                                        width: 36,
                                        height: 36,
                                        borderRadius: 8,
                                        border: "1px solid #e5e7eb",
                                        backgroundColor: "white",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/operator/schedule/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/operator/schedule/page.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(7, 1fr)",
                                gap: 4,
                                marginBottom: 4
                            },
                            children: [
                                "日",
                                "月",
                                "火",
                                "水",
                                "木",
                                "金",
                                "土"
                            ].map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        fontSize: 11,
                                        fontWeight: 600,
                                        color: index === 0 ? "#ef4444" : index === 6 ? "#3b82f6" : "#6b7280",
                                        padding: 4
                                    },
                                    children: day
                                }, day, false, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/operator/schedule/page.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(7, 1fr)",
                                gap: 4
                            },
                            children: [
                                Array.from({
                                    length: firstDayOfWeek
                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, `empty-${index}`, false, {
                                        fileName: "[project]/app/operator/schedule/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this)),
                                days.map(({ day, dateStr })=>{
                                    const schedule = schedules[dateStr];
                                    const isOperating = schedule?.isOperating;
                                    const isSelected = selectedDate === dateStr;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDayClick(dateStr),
                                        style: {
                                            aspectRatio: "1",
                                            borderRadius: 8,
                                            border: isSelected ? "2px solid #3b82f6" : "1px solid #e5e7eb",
                                            backgroundColor: isOperating ? "#dbeafe" : "white",
                                            cursor: "pointer",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: 4,
                                            position: "relative",
                                            transition: "all 0.2s"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: isOperating ? "#1e40af" : "#1f2937"
                                            },
                                            children: day
                                        }, void 0, false, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this)
                                    }, dateStr, false, {
                                        fileName: "[project]/app/operator/schedule/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/operator/schedule/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/operator/schedule/page.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "white",
                        borderRadius: 16,
                        padding: 24,
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                        marginBottom: 80
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontSize: 18,
                                fontWeight: 700,
                                color: "#1f2937",
                                marginBottom: 16
                            },
                            children: [
                                selectedDate,
                                "の設定"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/operator/schedule/page.tsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 24
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: selectedSchedule?.isOperating || false,
                                        onChange: ()=>toggleOperating(selectedDate),
                                        style: {
                                            width: 20,
                                            height: 20,
                                            marginRight: 12,
                                            cursor: "pointer"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/operator/schedule/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 16,
                                            fontWeight: 600,
                                            color: "#1f2937"
                                        },
                                        children: "この日は運行する"
                                    }, void 0, false, {
                                        fileName: "[project]/app/operator/schedule/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/operator/schedule/page.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/operator/schedule/page.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this),
                        selectedSchedule?.isOperating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 24
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: "block",
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: "#374151",
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 16,
                                                    style: {
                                                        display: "inline",
                                                        marginRight: 8
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 21
                                                }, this),
                                                "運行時間"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    value: selectedSchedule.startTime,
                                                    onChange: (e)=>updateSchedule(selectedDate, {
                                                            startTime: e.target.value
                                                        }),
                                                    style: {
                                                        flex: 1,
                                                        padding: "12px 16px",
                                                        border: "1px solid #d1d5db",
                                                        borderRadius: 8,
                                                        fontSize: 16
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#6b7280"
                                                    },
                                                    children: "〜"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    value: selectedSchedule.endTime,
                                                    onChange: (e)=>updateSchedule(selectedDate, {
                                                            endTime: e.target.value
                                                        }),
                                                    style: {
                                                        flex: 1,
                                                        padding: "12px 16px",
                                                        border: "1px solid #d1d5db",
                                                        borderRadius: 8,
                                                        fontSize: 16
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 24
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: "block",
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: "#374151",
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                                    size: 16,
                                                    style: {
                                                        display: "inline",
                                                        marginRight: 8
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 21
                                                }, this),
                                                "ルートタイプ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateSchedule(selectedDate, {
                                                            routeType: "循環ルート"
                                                        }),
                                                    style: {
                                                        flex: 1,
                                                        padding: "12px 16px",
                                                        border: selectedSchedule.routeType === "循環ルート" ? "2px solid #3b82f6" : "1px solid #d1d5db",
                                                        borderRadius: 8,
                                                        backgroundColor: selectedSchedule.routeType === "循環ルート" ? "#dbeafe" : "white",
                                                        cursor: "pointer",
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                        color: selectedSchedule.routeType === "循環ルート" ? "#1e40af" : "#6b7280",
                                                        transition: "all 0.2s"
                                                    },
                                                    children: "循環ルート"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateSchedule(selectedDate, {
                                                            routeType: "フリー運行"
                                                        }),
                                                    style: {
                                                        flex: 1,
                                                        padding: "12px 16px",
                                                        border: selectedSchedule.routeType === "フリー運行" ? "2px solid #3b82f6" : "1px solid #d1d5db",
                                                        borderRadius: 8,
                                                        backgroundColor: selectedSchedule.routeType === "フリー運行" ? "#dbeafe" : "white",
                                                        cursor: "pointer",
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                        color: selectedSchedule.routeType === "フリー運行" ? "#1e40af" : "#6b7280",
                                                        transition: "all 0.2s"
                                                    },
                                                    children: "フリー運行"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 17
                                }, this),
                                selectedSchedule.routeType === "循環ルート" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 24
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: "block",
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: "#374151",
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                                    size: 16,
                                                    style: {
                                                        display: "inline",
                                                        marginRight: 8
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 23
                                                }, this),
                                                "使用するルート"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 12
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSelectRouteFromMap,
                                                style: {
                                                    flex: 1,
                                                    padding: "16px 20px",
                                                    border: "2px dashed #3b82f6",
                                                    borderRadius: 12,
                                                    backgroundColor: "white",
                                                    cursor: "pointer",
                                                    fontSize: 16,
                                                    fontWeight: 600,
                                                    color: "#3b82f6",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: 8,
                                                    transition: "all 0.2s"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operator/schedule/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 25
                                                    }, this),
                                                    "地図でルートを選択"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/operator/schedule/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 21
                                        }, this),
                                        selectedSchedule.routeId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 12,
                                                padding: "12px 16px",
                                                backgroundColor: "#dbeafe",
                                                borderRadius: 8,
                                                border: "1px solid #3b82f6",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 12,
                                                                color: "#6b7280",
                                                                marginBottom: 4
                                                            },
                                                            children: "選択中のルート"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 16,
                                                                fontWeight: 700,
                                                                color: "#1e40af"
                                                            },
                                                            children: selectedSchedule.routeId
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateSchedule(selectedDate, {
                                                            routeId: undefined
                                                        }),
                                                    style: {
                                                        padding: "6px 12px",
                                                        backgroundColor: "white",
                                                        border: "1px solid #d1d5db",
                                                        borderRadius: 6,
                                                        fontSize: 12,
                                                        color: "#6b7280",
                                                        cursor: "pointer"
                                                    },
                                                    children: "解除"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 24
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: "block",
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: "#374151",
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 16,
                                                    style: {
                                                        display: "inline",
                                                        marginRight: 8
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 21
                                                }, this),
                                                "スタート地点"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 456,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: selectedSchedule.startLocation || "",
                                            onChange: (e)=>updateSchedule(selectedDate, {
                                                    startLocation: e.target.value
                                                }),
                                            placeholder: "例：コア前",
                                            style: {
                                                width: "100%",
                                                padding: "12px 16px",
                                                border: "1px solid #d1d5db",
                                                borderRadius: 8,
                                                fontSize: 16
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 460,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSaveSchedule,
                                    disabled: saving,
                                    style: {
                                        width: "100%",
                                        padding: "16px 24px",
                                        backgroundColor: saving ? "#9ca3af" : "#10b981",
                                        color: "white",
                                        border: "none",
                                        borderRadius: 12,
                                        fontSize: 16,
                                        fontWeight: 700,
                                        cursor: saving ? "not-allowed" : "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 8,
                                        transition: "all 0.2s"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/operator/schedule/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 19
                                        }, this),
                                        saving ? "保存中..." : "スケジュールを保存"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/operator/schedule/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/operator/schedule/page.tsx",
                    lineNumber: 276,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/operator/schedule/page.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/operator/schedule/page.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__945c488c._.js.map