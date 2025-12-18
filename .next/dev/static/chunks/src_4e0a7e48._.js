(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "bc494e3580ec6544527300000d6478ad6786be68669c0d755ec232c1971de415") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bc494e3580ec6544527300000d6478ad6786be68669c0d755ec232c1971de415";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `bg-white rounded-2xl shadow-ultra border border-gray-100 p-6 ${className}`;
    let t3;
    if ($[1] !== children || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "debounce",
    ()=>debounce,
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime,
    "formatNumber",
    ()=>formatNumber,
    "generateId",
    ()=>generateId,
    "getStatusColor",
    ()=>getStatusColor,
    "sleep",
    ()=>sleep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount);
}
function formatNumber(num) {
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
}
function formatDate(date) {
    const d = new Date(date);
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(d);
}
function formatDateTime(date) {
    const d = new Date(date);
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(d);
}
function getStatusColor(status) {
    const colors = {
        active: 'bg-green-100 text-green-800',
        online: 'bg-green-100 text-green-800',
        paid: 'bg-green-100 text-green-800',
        inactive: 'bg-gray-100 text-gray-800',
        offline: 'bg-red-100 text-red-800',
        overdue: 'bg-red-100 text-red-800',
        pending: 'bg-blue-100 text-blue-800',
        maintenance: 'bg-amber-100 text-amber-800',
        suspended: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
}
function debounce(func, wait) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
}
function generateId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "66e2d0acccd0c79d8b1953aa538980919efc1c1581faec185d92d5331b34cdad") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "66e2d0acccd0c79d8b1953aa538980919efc1c1581faec185d92d5331b34cdad";
    }
    const { children, variant: t1, size: t2, onClick, className, disabled: t3, type: t4, icon, fullWidth: t5 } = t0;
    const variant = t1 === undefined ? "primary" : t1;
    const size = t2 === undefined ? "md" : t2;
    const disabled = t3 === undefined ? false : t3;
    const type = t4 === undefined ? "button" : t4;
    const fullWidth = t5 === undefined ? false : t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== className || $[2] !== disabled || $[3] !== fullWidth || $[4] !== onClick || $[5] !== size || $[6] !== type || $[7] !== variant) {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
            ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
            danger: "bg-red-600 text-white hover:bg-red-700"
        };
        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-4 py-2.5 text-sm",
            lg: "px-6 py-3 text-base"
        };
        t6 = type;
        t7 = onClick;
        t8 = disabled;
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium rounded-xl transition-all duration-200 flex items-center justify-center", variants[variant], sizes[size], fullWidth && "w-full", disabled && "opacity-50 cursor-not-allowed", className);
        $[1] = className;
        $[2] = disabled;
        $[3] = fullWidth;
        $[4] = onClick;
        $[5] = size;
        $[6] = type;
        $[7] = variant;
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
        $[11] = t9;
    } else {
        t6 = $[8];
        t7 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    let t10;
    if ($[12] !== icon) {
        t10 = icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mr-2",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 79,
            columnNumber: 19
        }, this);
        $[12] = icon;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== children || $[15] !== t10 || $[16] !== t6 || $[17] !== t7 || $[18] !== t8 || $[19] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: t6,
            onClick: t7,
            disabled: t8,
            className: t9,
            children: [
                t10,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 87,
            columnNumber: 11
        }, this);
        $[14] = children;
        $[15] = t10;
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    return t11;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionCell",
    ()=>ActionCell,
    "Table",
    ()=>Table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Table(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "1199075a7cf682307fdcad69b58280b12b55c52be5fa5e65cbe417c300538833") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1199075a7cf682307fdcad69b58280b12b55c52be5fa5e65cbe417c300538833";
    }
    const { data, columns, className, onRowClick, emptyMessage: t1 } = t0;
    const emptyMessage = t1 === undefined ? "No data available" : t1;
    let t2;
    if ($[1] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-x-auto bg-white rounded-2xl shadow-ultra border border-gray-100", className);
        $[1] = className;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== columns) {
        t3 = columns.map(_TableColumnsMap);
        $[3] = columns;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "border-b border-gray-200",
                children: t3
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Table.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Table.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== columns || $[8] !== data || $[9] !== emptyMessage || $[10] !== onRowClick) {
        t5 = data.length > 0 ? data.map({
            "Table[data.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    onClick: {
                        "Table[data.map() > <tr>.onClick]": ()=>onRowClick?.(item)
                    }["Table[data.map() > <tr>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-gray-50/50 transition-colors", onRowClick && "cursor-pointer"),
                    children: columns.map({
                        "Table[data.map() > columns.map()]": (column_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-4 px-6",
                                children: column_0.render ? column_0.render(item) : String(item[column_0.key] || "")
                            }, String(column_0.key), false, {
                                fileName: "[project]/src/components/ui/Table.tsx",
                                lineNumber: 64,
                                columnNumber: 60
                            }, this)
                    }["Table[data.map() > columns.map()]"])
                }, item.id, false, {
                    fileName: "[project]/src/components/ui/Table.tsx",
                    lineNumber: 61,
                    columnNumber: 36
                }, this)
        }["Table[data.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: columns.length,
                className: "py-12 text-center text-gray-500",
                children: emptyMessage
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Table.tsx",
                lineNumber: 66,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Table.tsx",
            lineNumber: 66,
            columnNumber: 31
        }, this);
        $[7] = columns;
        $[8] = data;
        $[9] = emptyMessage;
        $[10] = onRowClick;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            className: "divide-y divide-gray-100",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Table.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t4 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Table.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t2 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Table.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[17] = t2;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
}
_c = Table;
// Action Cell Component for tables
function _TableColumnsMap(column) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-left py-4 px-6 font-semibold text-gray-900 text-sm", column.className),
        children: column.header
    }, String(column.key), false, {
        fileName: "[project]/src/components/ui/Table.tsx",
        lineNumber: 106,
        columnNumber: 10
    }, this);
}
function ActionCell(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "1199075a7cf682307fdcad69b58280b12b55c52be5fa5e65cbe417c300538833") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1199075a7cf682307fdcad69b58280b12b55c52be5fa5e65cbe417c300538833";
    }
    const { actions } = t0;
    let t1;
    if ($[1] !== actions) {
        t1 = actions.map(_ActionCellActionsMap);
        $[1] = actions;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-2",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Table.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_c1 = ActionCell;
function _ActionCellActionsMap(action, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: {
            "ActionCell[actions.map() > <button>.onClick]": (e)=>{
                e.stopPropagation();
                action.onClick();
            }
        }["ActionCell[actions.map() > <button>.onClick]"],
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-lg transition-colors", action.variant === "danger" ? "text-red-600 hover:text-red-700 hover:bg-red-50" : "text-gray-600 hover:text-primary hover:bg-primary/5"),
        title: action.label,
        children: action.icon
    }, index, false, {
        fileName: "[project]/src/components/ui/Table.tsx",
        lineNumber: 146,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "ActionCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/billing/InvoiceViewModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvoiceViewModal",
    ()=>InvoiceViewModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function InvoiceViewModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(135);
    if ($[0] !== "a8edda7387ff7c81a684841bfe373a7314508ade338ada8ef9f5f00f12a0111a") {
        for(let $i = 0; $i < 135; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a8edda7387ff7c81a684841bfe373a7314508ade338ada8ef9f5f00f12a0111a";
    }
    const { invoice, isOpen, onClose, onEdit, onDelete, onSend, onMarkAsPaid } = t0;
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] !== invoice.clientName || $[2] !== invoice.date || $[3] !== invoice.dueDate || $[4] !== invoice.invoiceNumber || $[5] !== invoice.status || $[6] !== invoice.total) {
        t1 = ({
            "InvoiceViewModal[copyToClipboard]": ()=>{
                const text = `
Invoice Number: ${invoice.invoiceNumber}
Client: ${invoice.clientName}
Date: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(invoice.date)}
Due Date: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(invoice.dueDate)}
Status: ${invoice.status.toUpperCase()}
Total: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoice.total)}
    `.trim();
                navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout({
                    "InvoiceViewModal[copyToClipboard > setTimeout()]": ()=>setCopied(false)
                }["InvoiceViewModal[copyToClipboard > setTimeout()]"], 2000);
            }
        })["InvoiceViewModal[copyToClipboard]"];
        $[1] = invoice.clientName;
        $[2] = invoice.date;
        $[3] = invoice.dueDate;
        $[4] = invoice.invoiceNumber;
        $[5] = invoice.status;
        $[6] = invoice.total;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    const copyToClipboard = t1;
    let t2;
    if ($[8] !== onClose) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-sm",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[8] = onClose;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== invoice.invoiceNumber) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-gray-900",
            children: [
                "Invoice #",
                invoice.invoiceNumber
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[10] = invoice.invoiceNumber;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== invoice.date) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(invoice.date);
        $[12] = invoice.date;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: [
                "Issued on ",
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t3 || $[17] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[16] = t3;
        $[17] = t5;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    const t7 = `px-3 py-1 rounded-full text-sm font-medium ${invoice.status === "paid" ? "bg-green-100 text-green-800" : invoice.status === "sent" ? "bg-blue-100 text-blue-800" : invoice.status === "overdue" ? "bg-red-100 text-red-800" : invoice.status === "draft" ? "bg-gray-100 text-gray-800" : "bg-amber-100 text-amber-800"}`;
    let t8;
    if ($[19] !== invoice.status) {
        t8 = invoice.status.charAt(0).toUpperCase();
        $[19] = invoice.status;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    const t9 = t8 + invoice.status.slice(1);
    let t10;
    if ($[21] !== t7 || $[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t7,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[21] = t7;
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== copied) {
        t11 = copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "h-5 w-5 text-green-600"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 131,
            columnNumber: 20
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 131,
            columnNumber: 67
        }, this);
        $[24] = copied;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== copyToClipboard || $[27] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: copyToClipboard,
            className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg",
            title: "Copy details",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[26] = copyToClipboard;
        $[27] = t11;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== onClose) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[30] = onClose;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t10 || $[33] !== t12 || $[34] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-3",
            children: [
                t10,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t12;
        $[34] = t14;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== t15 || $[37] !== t6) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-gray-200 px-6 py-4",
            children: [
                t6,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[36] = t15;
        $[37] = t6;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    let t17;
    let t18;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-medium text-gray-500 mb-2",
                    children: "BILL FROM"
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 183,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-bold text-lg",
                    children: "USSD Services Inc."
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 183,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "123 Tech Street"
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 183,
                    columnNumber: 140
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "San Francisco, CA 94107"
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 183,
                    columnNumber: 188
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "billing@ussdservices.com"
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 183,
                    columnNumber: 244
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-medium text-gray-500 mb-2",
            children: "BILL TO"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[39] = t17;
        $[40] = t18;
    } else {
        t17 = $[39];
        t18 = $[40];
    }
    let t19;
    if ($[41] !== invoice.clientName) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-bold text-lg",
            children: invoice.clientName
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[41] = invoice.clientName;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] !== invoice.clientEmail) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600",
            children: invoice.clientEmail
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[43] = invoice.clientEmail;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t19 || $[46] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-8 mb-8",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t18,
                        t19,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 209,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[45] = t19;
        $[46] = t20;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: "Invoice Number"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== invoice.invoiceNumber) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium",
                    children: invoice.invoiceNumber
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 225,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[49] = invoice.invoiceNumber;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    let t24;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: "Date"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[51] = t24;
    } else {
        t24 = $[51];
    }
    let t25;
    if ($[52] !== invoice.date) {
        t25 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(invoice.date);
        $[52] = invoice.date;
        $[53] = t25;
    } else {
        t25 = $[53];
    }
    let t26;
    if ($[54] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium",
                    children: t25
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 248,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[54] = t25;
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: "Due Date"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] !== invoice.dueDate) {
        t28 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(invoice.dueDate);
        $[57] = invoice.dueDate;
        $[58] = t28;
    } else {
        t28 = $[58];
    }
    let t29;
    if ($[59] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium",
                    children: t28
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 271,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[59] = t28;
        $[60] = t29;
    } else {
        t29 = $[60];
    }
    let t30;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: "Payment Status"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[61] = t30;
    } else {
        t30 = $[61];
    }
    const t31 = `font-medium ${invoice.status === "paid" ? "text-green-600" : invoice.status === "overdue" ? "text-red-600" : "text-amber-600"}`;
    let t32;
    if ($[62] !== invoice.status) {
        t32 = invoice.status.charAt(0).toUpperCase();
        $[62] = invoice.status;
        $[63] = t32;
    } else {
        t32 = $[63];
    }
    const t33 = t32 + invoice.status.slice(1);
    let t34;
    if ($[64] !== t31 || $[65] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: t31,
                    children: t33
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 296,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[64] = t31;
        $[65] = t33;
        $[66] = t34;
    } else {
        t34 = $[66];
    }
    let t35;
    if ($[67] !== t23 || $[68] !== t26 || $[69] !== t29 || $[70] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 gap-4 mb-8 bg-gray-50 p-4 rounded-xl",
            children: [
                t23,
                t26,
                t29,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[67] = t23;
        $[68] = t26;
        $[69] = t29;
        $[70] = t34;
        $[71] = t35;
    } else {
        t35 = $[71];
    }
    let t36;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "text-left py-3 px-4 font-medium text-gray-900",
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                        lineNumber: 316,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "text-left py-3 px-4 font-medium text-gray-900",
                        children: "Quantity"
                    }, void 0, false, {
                        fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                        lineNumber: 316,
                        columnNumber: 123
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "text-left py-3 px-4 font-medium text-gray-900",
                        children: "Unit Price"
                    }, void 0, false, {
                        fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                        lineNumber: 316,
                        columnNumber: 198
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "text-left py-3 px-4 font-medium text-gray-900",
                        children: "Total"
                    }, void 0, false, {
                        fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                        lineNumber: 316,
                        columnNumber: 275
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 316,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[72] = t36;
    } else {
        t36 = $[72];
    }
    let t37;
    if ($[73] !== invoice.items) {
        t37 = invoice.items.map(_InvoiceViewModalInvoiceItemsMap);
        $[73] = invoice.items;
        $[74] = t37;
    } else {
        t37 = $[74];
    }
    let t38;
    if ($[75] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: [
                    t36,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-gray-200",
                        children: t37
                    }, void 0, false, {
                        fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                        lineNumber: 331,
                        columnNumber: 64
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 331,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[75] = t37;
        $[76] = t38;
    } else {
        t38 = $[76];
    }
    let t39;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-600",
            children: "Subtotal"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[77] = t39;
    } else {
        t39 = $[77];
    }
    let t40;
    if ($[78] !== invoice.subtotal) {
        t40 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoice.subtotal);
        $[78] = invoice.subtotal;
        $[79] = t40;
    } else {
        t40 = $[79];
    }
    let t41;
    if ($[80] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: t40
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 354,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[80] = t40;
        $[81] = t41;
    } else {
        t41 = $[81];
    }
    let t42;
    if ($[82] !== invoice.discount) {
        t42 = invoice.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-600",
                    children: "Discount"
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 362,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-red-600",
                    children: [
                        "-",
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoice.discount)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 362,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 362,
            columnNumber: 35
        }, this);
        $[82] = invoice.discount;
        $[83] = t42;
    } else {
        t42 = $[83];
    }
    let t43;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-600",
            children: "Tax"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[84] = t43;
    } else {
        t43 = $[84];
    }
    let t44;
    if ($[85] !== invoice.tax) {
        t44 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoice.tax);
        $[85] = invoice.tax;
        $[86] = t44;
    } else {
        t44 = $[86];
    }
    let t45;
    if ($[87] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t43,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: [
                        "+",
                        t44
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 385,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[87] = t44;
        $[88] = t45;
    } else {
        t45 = $[88];
    }
    let t46;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-lg font-bold",
            children: "Total"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[89] = t46;
    } else {
        t46 = $[89];
    }
    let t47;
    if ($[90] !== invoice.total) {
        t47 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoice.total);
        $[90] = invoice.total;
        $[91] = t47;
    } else {
        t47 = $[91];
    }
    let t48;
    if ($[92] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-gray-300 pt-2 mt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    t46,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-bold text-primary",
                        children: t47
                    }, void 0, false, {
                        fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                        lineNumber: 408,
                        columnNumber: 106
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 408,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[92] = t47;
        $[93] = t48;
    } else {
        t48 = $[93];
    }
    let t49;
    if ($[94] !== t41 || $[95] !== t42 || $[96] !== t45 || $[97] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-auto w-64 space-y-2",
            children: [
                t41,
                t42,
                t45,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[94] = t41;
        $[95] = t42;
        $[96] = t45;
        $[97] = t48;
        $[98] = t49;
    } else {
        t49 = $[98];
    }
    let t50;
    if ($[99] !== invoice.notes) {
        t50 = invoice.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 p-4 bg-blue-50 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-medium text-blue-900 mb-2",
                    children: "Notes"
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 427,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-blue-800",
                    children: invoice.notes
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 427,
                    columnNumber: 133
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 427,
            columnNumber: 28
        }, this);
        $[99] = invoice.notes;
        $[100] = t50;
    } else {
        t50 = $[100];
    }
    let t51;
    if ($[101] !== t21 || $[102] !== t35 || $[103] !== t38 || $[104] !== t49 || $[105] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                t21,
                t35,
                t38,
                t49,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[101] = t21;
        $[102] = t35;
        $[103] = t38;
        $[104] = t49;
        $[105] = t50;
        $[106] = t51;
    } else {
        t51 = $[106];
    }
    let t52;
    if ($[107] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: _InvoiceViewModalButtonOnClick,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 447,
                columnNumber: 84
            }, void 0),
            children: "Print"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[107] = t52;
    } else {
        t52 = $[107];
    }
    let t53;
    if ($[108] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: _InvoiceViewModalButtonOnClick2,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 454,
                columnNumber: 85
            }, void 0),
            children: "Download PDF"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[108] = t53;
    } else {
        t53 = $[108];
    }
    const t54 = invoice.status === "sent";
    let t55;
    if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 462,
            columnNumber: 11
        }, this);
        $[109] = t55;
    } else {
        t55 = $[109];
    }
    let t56;
    if ($[110] !== onSend || $[111] !== t54) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-3",
            children: [
                t52,
                t53,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    onClick: onSend,
                    disabled: t54,
                    icon: t55,
                    children: "Send Email"
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                    lineNumber: 469,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[110] = onSend;
        $[111] = t54;
        $[112] = t56;
    } else {
        t56 = $[112];
    }
    let t57;
    if ($[113] !== invoice.status || $[114] !== onDelete) {
        t57 = invoice.status === "draft" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "danger",
            onClick: onDelete,
            children: "Delete"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 478,
            columnNumber: 41
        }, this);
        $[113] = invoice.status;
        $[114] = onDelete;
        $[115] = t57;
    } else {
        t57 = $[115];
    }
    let t58;
    if ($[116] !== invoice.status || $[117] !== onMarkAsPaid) {
        t58 = invoice.status === "sent" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "primary",
            onClick: onMarkAsPaid,
            children: "Mark as Paid"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 487,
            columnNumber: 40
        }, this);
        $[116] = invoice.status;
        $[117] = onMarkAsPaid;
        $[118] = t58;
    } else {
        t58 = $[118];
    }
    let t59;
    if ($[119] !== onEdit) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "secondary",
            onClick: onEdit,
            children: "Edit Invoice"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[119] = onEdit;
        $[120] = t59;
    } else {
        t59 = $[120];
    }
    let t60;
    if ($[121] !== t57 || $[122] !== t58 || $[123] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-3",
            children: [
                t57,
                t58,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[121] = t57;
        $[122] = t58;
        $[123] = t59;
        $[124] = t60;
    } else {
        t60 = $[124];
    }
    let t61;
    if ($[125] !== t56 || $[126] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-gray-200 px-6 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t56,
                    t60
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 514,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 514,
            columnNumber: 11
        }, this);
        $[125] = t56;
        $[126] = t60;
        $[127] = t61;
    } else {
        t61 = $[127];
    }
    let t62;
    if ($[128] !== t16 || $[129] !== t51 || $[130] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-50 w-full max-w-4xl bg-white rounded-2xl shadow-2xl",
            children: [
                t16,
                t51,
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[128] = t16;
        $[129] = t51;
        $[130] = t61;
        $[131] = t62;
    } else {
        t62 = $[131];
    }
    let t63;
    if ($[132] !== t2 || $[133] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 overflow-y-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen items-center justify-center p-4",
                children: [
                    t2,
                    t62
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 533,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[132] = t2;
        $[133] = t62;
        $[134] = t63;
    } else {
        t63 = $[134];
    }
    return t63;
}
_s(InvoiceViewModal, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = InvoiceViewModal;
function _InvoiceViewModalButtonOnClick2() {}
function _InvoiceViewModalButtonOnClick() {
    return window.print();
}
function _InvoiceViewModalInvoiceItemsMap(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-4",
                children: item.description
            }, void 0, false, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 547,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-4",
                children: item.quantity
            }, void 0, false, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 547,
                columnNumber: 77
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-4",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.unitPrice)
            }, void 0, false, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 547,
                columnNumber: 123
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-4 font-medium",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.total)
            }, void 0, false, {
                fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
                lineNumber: 547,
                columnNumber: 186
            }, this)
        ]
    }, item.id, true, {
        fileName: "[project]/src/components/billing/InvoiceViewModal.tsx",
        lineNumber: 547,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "InvoiceViewModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/billing/InvoiceFormModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvoiceFormModal",
    ()=>InvoiceFormModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function InvoiceFormModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(133);
    if ($[0] !== "ec164782b2c1322f51a1d3975bd0baf91775bb4e53829ca10a4975aeaebf6d30") {
        for(let $i = 0; $i < 133; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ec164782b2c1322f51a1d3975bd0baf91775bb4e53829ca10a4975aeaebf6d30";
    }
    const { isOpen, onClose, onSubmit, initialData, clients } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Date().toISOString().split("T");
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = t1[0];
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = new Date(Date.now() + 2592000000).toISOString().split("T");
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            clientId: "",
            clientName: "",
            clientEmail: "",
            invoiceNumber: "",
            date: t2,
            dueDate: t3[0],
            items: [
                {
                    id: "1",
                    description: "",
                    quantity: 1,
                    unitPrice: 0,
                    total: 0
                }
            ],
            notes: "",
            tax: 0,
            discount: 0
        };
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            subtotal: 0,
            total: 0
        };
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    const [calculations, setCalculations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    let t7;
    if ($[5] !== initialData) {
        t6 = ({
            "InvoiceFormModal[useEffect()]": ()=>{
                if (initialData) {
                    setFormData({
                        clientId: initialData.clientId,
                        clientName: initialData.clientName,
                        clientEmail: initialData.clientEmail,
                        invoiceNumber: initialData.invoiceNumber,
                        date: initialData.date,
                        dueDate: initialData.dueDate,
                        items: initialData.items,
                        notes: initialData.notes || "",
                        tax: initialData.tax,
                        discount: initialData.discount
                    });
                } else {
                    const year = new Date().getFullYear();
                    const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
                    const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
                    setFormData({
                        "InvoiceFormModal[useEffect() > setFormData()]": (prev)=>({
                                ...prev,
                                invoiceNumber: `INV-${year}${month}-${random}`
                            })
                    }["InvoiceFormModal[useEffect() > setFormData()]"]);
                }
            }
        })["InvoiceFormModal[useEffect()]"];
        t7 = [
            initialData
        ];
        $[5] = initialData;
        $[6] = t6;
        $[7] = t7;
    } else {
        t6 = $[6];
        t7 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    let t9;
    if ($[8] !== formData.discount || $[9] !== formData.items || $[10] !== formData.tax) {
        t8 = ({
            "InvoiceFormModal[useEffect()]": ()=>{
                const subtotal = formData.items.reduce(_InvoiceFormModalUseEffectFormDataItemsReduce, 0);
                const total = subtotal + formData.tax - formData.discount;
                setCalculations({
                    subtotal,
                    total
                });
            }
        })["InvoiceFormModal[useEffect()]"];
        t9 = [
            formData.items,
            formData.tax,
            formData.discount
        ];
        $[8] = formData.discount;
        $[9] = formData.items;
        $[10] = formData.tax;
        $[11] = t8;
        $[12] = t9;
    } else {
        t8 = $[11];
        t9 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    if (!isOpen) {
        return null;
    }
    let t10;
    if ($[13] !== clients) {
        t10 = ({
            "InvoiceFormModal[handleClientChange]": (clientId)=>{
                const client = clients.find({
                    "InvoiceFormModal[handleClientChange > clients.find()]": (c)=>c.id === clientId
                }["InvoiceFormModal[handleClientChange > clients.find()]"]);
                if (client) {
                    setFormData({
                        "InvoiceFormModal[handleClientChange > setFormData()]": (prev_0)=>({
                                ...prev_0,
                                clientId,
                                clientName: client.name,
                                clientEmail: client.email
                            })
                    }["InvoiceFormModal[handleClientChange > setFormData()]"]);
                }
            }
        })["InvoiceFormModal[handleClientChange]"];
        $[13] = clients;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const handleClientChange = t10;
    let t11;
    if ($[15] !== formData.items) {
        t11 = ({
            "InvoiceFormModal[handleItemChange]": (index, field, value)=>{
                const newItems = [
                    ...formData.items
                ];
                const item_0 = {
                    ...newItems[index]
                };
                if (field === "description") {
                    item_0.description = value;
                } else {
                    if (field === "quantity") {
                        item_0.quantity = parseInt(value) || 0;
                    } else {
                        if (field === "unitPrice") {
                            item_0.unitPrice = parseFloat(value) || 0;
                        }
                    }
                }
                item_0.total = item_0.quantity * item_0.unitPrice;
                newItems[index] = item_0;
                setFormData({
                    "InvoiceFormModal[handleItemChange > setFormData()]": (prev_1)=>({
                            ...prev_1,
                            items: newItems
                        })
                }["InvoiceFormModal[handleItemChange > setFormData()]"]);
            }
        })["InvoiceFormModal[handleItemChange]"];
        $[15] = formData.items;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    const handleItemChange = t11;
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "InvoiceFormModal[addItem]": ()=>{
                setFormData(_InvoiceFormModalAddItemSetFormData);
            }
        })["InvoiceFormModal[addItem]"];
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    const addItem = t12;
    let t13;
    if ($[18] !== formData.items) {
        t13 = ({
            "InvoiceFormModal[removeItem]": (index_0)=>{
                if (formData.items.length > 1) {
                    const newItems_0 = formData.items.filter({
                        "InvoiceFormModal[removeItem > formData.items.filter()]": (_, i)=>i !== index_0
                    }["InvoiceFormModal[removeItem > formData.items.filter()]"]);
                    setFormData({
                        "InvoiceFormModal[removeItem > setFormData()]": (prev_3)=>({
                                ...prev_3,
                                items: newItems_0
                            })
                    }["InvoiceFormModal[removeItem > setFormData()]"]);
                }
            }
        })["InvoiceFormModal[removeItem]"];
        $[18] = formData.items;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    const removeItem = t13;
    let t14;
    if ($[20] !== formData || $[21] !== onClose || $[22] !== onSubmit) {
        t14 = ({
            "InvoiceFormModal[handleSubmit]": (e)=>{
                e.preventDefault();
                onSubmit(formData);
                onClose();
            }
        })["InvoiceFormModal[handleSubmit]"];
        $[20] = formData;
        $[21] = onClose;
        $[22] = onSubmit;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    const handleSubmit = t14;
    let t15;
    if ($[24] !== onClose) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-sm",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[24] = onClose;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    const t16 = initialData ? "Edit Invoice" : "Create New Invoice";
    let t17;
    if ($[26] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-gray-900",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[26] = t16;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== onClose) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[29] = onClose;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] !== t17 || $[32] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-gray-200 px-6 py-4",
            children: [
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[31] = t17;
        $[32] = t19;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Client *"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    const t22 = formData.clientId;
    let t23;
    if ($[35] !== handleClientChange) {
        t23 = ({
            "InvoiceFormModal[<select>.onChange]": (e_0)=>handleClientChange(e_0.target.value)
        })["InvoiceFormModal[<select>.onChange]"];
        $[35] = handleClientChange;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Select a client"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    let t25;
    if ($[38] !== clients) {
        t25 = clients.map(_InvoiceFormModalClientsMap);
        $[38] = clients;
        $[39] = t25;
    } else {
        t25 = $[39];
    }
    let t26;
    if ($[40] !== formData.clientId || $[41] !== t23 || $[42] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: t22,
                    onChange: t23,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    required: true,
                    children: [
                        t24,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 341,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[40] = formData.clientId;
        $[41] = t23;
        $[42] = t25;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Invoice Date *"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[44] = t27;
    } else {
        t27 = $[44];
    }
    let t28;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "InvoiceFormModal[<input>.onChange]": (e_1)=>setFormData({
                    "InvoiceFormModal[<input>.onChange > setFormData()]": (prev_4)=>({
                            ...prev_4,
                            date: e_1.target.value
                        })
                }["InvoiceFormModal[<input>.onChange > setFormData()]"])
        })["InvoiceFormModal[<input>.onChange]"];
        $[45] = t28;
    } else {
        t28 = $[45];
    }
    let t29;
    if ($[46] !== formData.date) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    value: formData.date,
                    onChange: t28,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 372,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[46] = formData.date;
        $[47] = t29;
    } else {
        t29 = $[47];
    }
    let t30;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Due Date *"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[48] = t30;
    } else {
        t30 = $[48];
    }
    let t31;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "InvoiceFormModal[<input>.onChange]": (e_2)=>setFormData({
                    "InvoiceFormModal[<input>.onChange > setFormData()]": (prev_5)=>({
                            ...prev_5,
                            dueDate: e_2.target.value
                        })
                }["InvoiceFormModal[<input>.onChange > setFormData()]"])
        })["InvoiceFormModal[<input>.onChange]"];
        $[49] = t31;
    } else {
        t31 = $[49];
    }
    let t32;
    if ($[50] !== formData.dueDate) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    value: formData.dueDate,
                    onChange: t31,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 401,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[50] = formData.dueDate;
        $[51] = t32;
    } else {
        t32 = $[51];
    }
    let t33;
    if ($[52] !== t29 || $[53] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t29,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[52] = t29;
        $[53] = t32;
        $[54] = t33;
    } else {
        t33 = $[54];
    }
    let t34;
    if ($[55] !== t26 || $[56] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-6",
            children: [
                t26,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[55] = t26;
        $[56] = t33;
        $[57] = t34;
    } else {
        t34 = $[57];
    }
    let t35;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-medium text-gray-900",
            children: "Items"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[58] = t35;
    } else {
        t35 = $[58];
    }
    let t36;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-4",
            children: [
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: addItem,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                        lineNumber: 434,
                        columnNumber: 146
                    }, void 0),
                    children: "Add Item"
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 434,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[59] = t36;
    } else {
        t36 = $[59];
    }
    let t37;
    if ($[60] !== formData.items || $[61] !== handleItemChange || $[62] !== removeItem) {
        let t38;
        if ($[64] !== formData.items.length || $[65] !== handleItemChange || $[66] !== removeItem) {
            t38 = ({
                "InvoiceFormModal[formData.items.map()]": (item_1, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-12 gap-4 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Description",
                                    value: item_1.description,
                                    onChange: {
                                        "InvoiceFormModal[formData.items.map() > <input>.onChange]": (e_3)=>handleItemChange(index_1, "description", e_3.target.value)
                                    }["InvoiceFormModal[formData.items.map() > <input>.onChange]"],
                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                                    lineNumber: 444,
                                    columnNumber: 170
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                                lineNumber: 444,
                                columnNumber: 142
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "Qty",
                                    value: item_1.quantity,
                                    onChange: {
                                        "InvoiceFormModal[formData.items.map() > <input>.onChange]": (e_4)=>handleItemChange(index_1, "quantity", e_4.target.value)
                                    }["InvoiceFormModal[formData.items.map() > <input>.onChange]"],
                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                                    min: "1",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                                    lineNumber: 446,
                                    columnNumber: 248
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                                lineNumber: 446,
                                columnNumber: 220
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "Unit Price",
                                    value: item_1.unitPrice,
                                    onChange: {
                                        "InvoiceFormModal[formData.items.map() > <input>.onChange]": (e_5)=>handleItemChange(index_1, "unitPrice", e_5.target.value)
                                    }["InvoiceFormModal[formData.items.map() > <input>.onChange]"],
                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                                    step: "0.01",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                                    lineNumber: 448,
                                    columnNumber: 256
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                                lineNumber: 448,
                                columnNumber: 228
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1 font-medium",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item_1.total)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                                lineNumber: 450,
                                columnNumber: 232
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: formData.items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "InvoiceFormModal[formData.items.map() > <button>.onClick]": ()=>removeItem(index_1)
                                    }["InvoiceFormModal[formData.items.map() > <button>.onClick]"],
                                    className: "p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                                        lineNumber: 452,
                                        columnNumber: 152
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                                    lineNumber: 450,
                                    columnNumber: 366
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                                lineNumber: 450,
                                columnNumber: 308
                            }, this)
                        ]
                    }, item_1.id, true, {
                        fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                        lineNumber: 444,
                        columnNumber: 72
                    }, this)
            })["InvoiceFormModal[formData.items.map()]"];
            $[64] = formData.items.length;
            $[65] = handleItemChange;
            $[66] = removeItem;
            $[67] = t38;
        } else {
            t38 = $[67];
        }
        t37 = formData.items.map(t38);
        $[60] = formData.items;
        $[61] = handleItemChange;
        $[62] = removeItem;
        $[63] = t37;
    } else {
        t37 = $[63];
    }
    let t38;
    if ($[68] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: t37
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 471,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[68] = t37;
        $[69] = t38;
    } else {
        t38 = $[69];
    }
    let t39;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Tax Amount ($)"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[70] = t39;
    } else {
        t39 = $[70];
    }
    let t40;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = ({
            "InvoiceFormModal[<input>.onChange]": (e_6)=>setFormData({
                    "InvoiceFormModal[<input>.onChange > setFormData()]": (prev_6)=>({
                            ...prev_6,
                            tax: parseFloat(e_6.target.value) || 0
                        })
                }["InvoiceFormModal[<input>.onChange > setFormData()]"])
        })["InvoiceFormModal[<input>.onChange]"];
        $[71] = t40;
    } else {
        t40 = $[71];
    }
    let t41;
    if ($[72] !== formData.tax) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    value: formData.tax,
                    onChange: t40,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    step: "0.01"
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 500,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 500,
            columnNumber: 11
        }, this);
        $[72] = formData.tax;
        $[73] = t41;
    } else {
        t41 = $[73];
    }
    let t42;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Discount ($)"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, this);
        $[74] = t42;
    } else {
        t42 = $[74];
    }
    let t43;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = ({
            "InvoiceFormModal[<input>.onChange]": (e_7)=>setFormData({
                    "InvoiceFormModal[<input>.onChange > setFormData()]": (prev_7)=>({
                            ...prev_7,
                            discount: parseFloat(e_7.target.value) || 0
                        })
                }["InvoiceFormModal[<input>.onChange > setFormData()]"])
        })["InvoiceFormModal[<input>.onChange]"];
        $[75] = t43;
    } else {
        t43 = $[75];
    }
    let t44;
    if ($[76] !== formData.discount) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t42,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    value: formData.discount,
                    onChange: t43,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    step: "0.01"
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 529,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 529,
            columnNumber: 11
        }, this);
        $[76] = formData.discount;
        $[77] = t44;
    } else {
        t44 = $[77];
    }
    let t45;
    if ($[78] !== t41 || $[79] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-6",
            children: [
                t41,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        $[78] = t41;
        $[79] = t44;
        $[80] = t45;
    } else {
        t45 = $[80];
    }
    let t46;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Notes"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 546,
            columnNumber: 11
        }, this);
        $[81] = t46;
    } else {
        t46 = $[81];
    }
    let t47;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = ({
            "InvoiceFormModal[<textarea>.onChange]": (e_8)=>setFormData({
                    "InvoiceFormModal[<textarea>.onChange > setFormData()]": (prev_8)=>({
                            ...prev_8,
                            notes: e_8.target.value
                        })
                }["InvoiceFormModal[<textarea>.onChange > setFormData()]"])
        })["InvoiceFormModal[<textarea>.onChange]"];
        $[82] = t47;
    } else {
        t47 = $[82];
    }
    let t48;
    if ($[83] !== formData.notes) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t46,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: formData.notes,
                    onChange: t47,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    rows: 3,
                    placeholder: "Additional notes or terms..."
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 567,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        $[83] = formData.notes;
        $[84] = t48;
    } else {
        t48 = $[84];
    }
    let t49;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-600",
            children: "Subtotal:"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 575,
            columnNumber: 11
        }, this);
        $[85] = t49;
    } else {
        t49 = $[85];
    }
    let t50;
    if ($[86] !== calculations.subtotal) {
        t50 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(calculations.subtotal);
        $[86] = calculations.subtotal;
        $[87] = t50;
    } else {
        t50 = $[87];
    }
    let t51;
    if ($[88] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between mb-2",
            children: [
                t49,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: t50
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 590,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[88] = t50;
        $[89] = t51;
    } else {
        t51 = $[89];
    }
    let t52;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-600",
            children: "Tax:"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 598,
            columnNumber: 11
        }, this);
        $[90] = t52;
    } else {
        t52 = $[90];
    }
    let t53;
    if ($[91] !== formData.tax) {
        t53 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(formData.tax);
        $[91] = formData.tax;
        $[92] = t53;
    } else {
        t53 = $[92];
    }
    let t54;
    if ($[93] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between mb-2",
            children: [
                t52,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: [
                        "+",
                        t53
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 613,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 613,
            columnNumber: 11
        }, this);
        $[93] = t53;
        $[94] = t54;
    } else {
        t54 = $[94];
    }
    let t55;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-600",
            children: "Discount:"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 621,
            columnNumber: 11
        }, this);
        $[95] = t55;
    } else {
        t55 = $[95];
    }
    let t56;
    if ($[96] !== formData.discount) {
        t56 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(formData.discount);
        $[96] = formData.discount;
        $[97] = t56;
    } else {
        t56 = $[97];
    }
    let t57;
    if ($[98] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between mb-2",
            children: [
                t55,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-red-600",
                    children: [
                        "-",
                        t56
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                    lineNumber: 636,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[98] = t56;
        $[99] = t57;
    } else {
        t57 = $[99];
    }
    let t58;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-lg font-bold",
            children: "Total:"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 644,
            columnNumber: 11
        }, this);
        $[100] = t58;
    } else {
        t58 = $[100];
    }
    let t59;
    if ($[101] !== calculations.total) {
        t59 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(calculations.total);
        $[101] = calculations.total;
        $[102] = t59;
    } else {
        t59 = $[102];
    }
    let t60;
    if ($[103] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-gray-300 pt-2 mt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    t58,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-bold text-primary",
                        children: t59
                    }, void 0, false, {
                        fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                        lineNumber: 659,
                        columnNumber: 106
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                lineNumber: 659,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 659,
            columnNumber: 11
        }, this);
        $[103] = t59;
        $[104] = t60;
    } else {
        t60 = $[104];
    }
    let t61;
    if ($[105] !== t51 || $[106] !== t54 || $[107] !== t57 || $[108] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 p-4 rounded-xl",
            children: [
                t51,
                t54,
                t57,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 667,
            columnNumber: 11
        }, this);
        $[105] = t51;
        $[106] = t54;
        $[107] = t57;
        $[108] = t60;
        $[109] = t61;
    } else {
        t61 = $[109];
    }
    let t62;
    if ($[110] !== t34 || $[111] !== t38 || $[112] !== t45 || $[113] !== t48 || $[114] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t34,
                t38,
                t45,
                t48,
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 678,
            columnNumber: 11
        }, this);
        $[110] = t34;
        $[111] = t38;
        $[112] = t45;
        $[113] = t48;
        $[114] = t61;
        $[115] = t62;
    } else {
        t62 = $[115];
    }
    let t63;
    if ($[116] !== onClose) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: onClose,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 690,
            columnNumber: 11
        }, this);
        $[116] = onClose;
        $[117] = t63;
    } else {
        t63 = $[117];
    }
    const t64 = initialData ? "Update Invoice" : "Create Invoice";
    let t65;
    if ($[118] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            variant: "primary",
            children: t64
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, this);
        $[118] = t64;
        $[119] = t65;
    } else {
        t65 = $[119];
    }
    let t66;
    if ($[120] !== t63 || $[121] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end space-x-3 mt-8",
            children: [
                t63,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 707,
            columnNumber: 11
        }, this);
        $[120] = t63;
        $[121] = t65;
        $[122] = t66;
    } else {
        t66 = $[122];
    }
    let t67;
    if ($[123] !== handleSubmit || $[124] !== t62 || $[125] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "p-6",
            children: [
                t62,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 716,
            columnNumber: 11
        }, this);
        $[123] = handleSubmit;
        $[124] = t62;
        $[125] = t66;
        $[126] = t67;
    } else {
        t67 = $[126];
    }
    let t68;
    if ($[127] !== t20 || $[128] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-50 w-full max-w-4xl bg-white rounded-2xl shadow-2xl",
            children: [
                t20,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 726,
            columnNumber: 11
        }, this);
        $[127] = t20;
        $[128] = t67;
        $[129] = t68;
    } else {
        t68 = $[129];
    }
    let t69;
    if ($[130] !== t15 || $[131] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 overflow-y-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen items-center justify-center p-4",
                children: [
                    t15,
                    t68
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
                lineNumber: 735,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
            lineNumber: 735,
            columnNumber: 11
        }, this);
        $[130] = t15;
        $[131] = t68;
        $[132] = t69;
    } else {
        t69 = $[132];
    }
    return t69;
}
_s(InvoiceFormModal, "uSRXGd44BGuqKwGW0GyT/s4Ox00=");
_c = InvoiceFormModal;
function _InvoiceFormModalClientsMap(client_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: client_0.id,
        children: [
            client_0.name,
            " (",
            client_0.email,
            ")"
        ]
    }, client_0.id, true, {
        fileName: "[project]/src/components/billing/InvoiceFormModal.tsx",
        lineNumber: 745,
        columnNumber: 10
    }, this);
}
function _InvoiceFormModalAddItemSetFormData(prev_2) {
    return {
        ...prev_2,
        items: [
            ...prev_2.items,
            {
                id: Date.now().toString(),
                description: "",
                quantity: 1,
                unitPrice: 0,
                total: 0
            }
        ]
    };
}
function _InvoiceFormModalUseEffectFormDataItemsReduce(sum, item) {
    return sum + item.quantity * item.unitPrice;
}
var _c;
__turbopack_context__.k.register(_c, "InvoiceFormModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/billing/PaymentModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaymentModal",
    ()=>PaymentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function PaymentModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    if ($[0] !== "32a9adacf45cb123555cda2b62d5d372b549bed7527d8cb057dc0e3281de8c22") {
        for(let $i = 0; $i < 64; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "32a9adacf45cb123555cda2b62d5d372b549bed7527d8cb057dc0e3281de8c22";
    }
    const { invoice, isOpen, onClose, onSubmit } = t0;
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("credit_card");
    const [reference, setReference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Date().toISOString().split("T");
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1[0]);
    if (!isOpen) {
        return null;
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                id: "credit_card",
                label: "Credit Card",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
            },
            {
                id: "bank_transfer",
                label: "Bank Transfer",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bank"]
            },
            {
                id: "cash",
                label: "Cash",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
            },
            {
                id: "paypal",
                label: "PayPal",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
            }
        ];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const paymentMethods = t2;
    let t3;
    if ($[3] !== date || $[4] !== onClose || $[5] !== onSubmit || $[6] !== paymentMethod || $[7] !== reference) {
        t3 = ({
            "PaymentModal[handleSubmit]": (e)=>{
                e.preventDefault();
                onSubmit({
                    method: paymentMethod,
                    reference,
                    date
                });
                onClose();
            }
        })["PaymentModal[handleSubmit]"];
        $[3] = date;
        $[4] = onClose;
        $[5] = onSubmit;
        $[6] = paymentMethod;
        $[7] = reference;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const handleSubmit = t3;
    let t4;
    if ($[9] !== onClose) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-sm",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[9] = onClose;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-gray-900",
            children: "Record Payment"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== invoice.invoiceNumber) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: [
                        "Invoice #",
                        invoice.invoiceNumber
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/PaymentModal.tsx",
                    lineNumber: 109,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[12] = invoice.invoiceNumber;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== onClose) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[15] = onClose;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t6 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-gray-200 px-6 py-4",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-600",
            children: "Client:"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== invoice.clientName) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between mb-2",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: invoice.clientName
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/PaymentModal.tsx",
                    lineNumber: 148,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[21] = invoice.clientName;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-600",
            children: "Amount Due:"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== invoice.total) {
        t13 = invoice.total.toFixed(2);
        $[24] = invoice.total;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between mb-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-bold text-primary",
                    children: [
                        "$",
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/PaymentModal.tsx",
                    lineNumber: 171,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[26] = t13;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t11 || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-50 p-4 rounded-xl",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-3",
            children: "Payment Method"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== paymentMethod) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: paymentMethods.map({
                        "PaymentModal[paymentMethods.map()]": (method)=>{
                            const Icon = method.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "PaymentModal[paymentMethods.map() > <button>.onClick]": ()=>setPaymentMethod(method.id)
                                }["PaymentModal[paymentMethods.map() > <button>.onClick]"],
                                className: `p-4 border rounded-xl transition-all ${paymentMethod === method.id ? "border-primary bg-primary/5" : "border-gray-300 hover:border-gray-400"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-2 rounded-lg ${paymentMethod === method.id ? "bg-primary text-white" : "bg-gray-100 text-gray-600"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/PaymentModal.tsx",
                                                lineNumber: 200,
                                                columnNumber: 395
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/PaymentModal.tsx",
                                            lineNumber: 200,
                                            columnNumber: 274
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: method.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/PaymentModal.tsx",
                                            lineNumber: 200,
                                            columnNumber: 429
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/PaymentModal.tsx",
                                    lineNumber: 200,
                                    columnNumber: 229
                                }, this)
                            }, method.id, false, {
                                fileName: "[project]/src/components/billing/PaymentModal.tsx",
                                lineNumber: 198,
                                columnNumber: 20
                            }, this);
                        }
                    }["PaymentModal[paymentMethods.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/PaymentModal.tsx",
                    lineNumber: 195,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[32] = paymentMethod;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Reference Number"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "PaymentModal[<input>.onChange]": (e_0)=>setReference(e_0.target.value)
        })["PaymentModal[<input>.onChange]"];
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] !== reference) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: reference,
                    onChange: t19,
                    placeholder: "TRX-12345 or Check #",
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/PaymentModal.tsx",
                    lineNumber: 226,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[36] = reference;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Payment Date"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "PaymentModal[<input>.onChange]": (e_1)=>setDate(e_1.target.value)
        })["PaymentModal[<input>.onChange]"];
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] !== date) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    value: date,
                    onChange: t22,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/PaymentModal.tsx",
                    lineNumber: 250,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[40] = date;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    if ($[42] !== t20 || $[43] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[42] = t20;
        $[43] = t23;
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    let t25;
    if ($[45] !== t15 || $[46] !== t17 || $[47] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t15,
                t17,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[45] = t15;
        $[46] = t17;
        $[47] = t24;
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    let t26;
    if ($[49] !== onClose) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: onClose,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[49] = onClose;
        $[50] = t26;
    } else {
        t26 = $[50];
    }
    let t27;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            variant: "primary",
            children: "Record Payment"
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    if ($[52] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end space-x-3 mt-8",
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[52] = t26;
        $[53] = t28;
    } else {
        t28 = $[53];
    }
    let t29;
    if ($[54] !== handleSubmit || $[55] !== t25 || $[56] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "p-6",
            children: [
                t25,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[54] = handleSubmit;
        $[55] = t25;
        $[56] = t28;
        $[57] = t29;
    } else {
        t29 = $[57];
    }
    let t30;
    if ($[58] !== t29 || $[59] !== t9) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl",
            children: [
                t9,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[58] = t29;
        $[59] = t9;
        $[60] = t30;
    } else {
        t30 = $[60];
    }
    let t31;
    if ($[61] !== t30 || $[62] !== t4) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 overflow-y-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen items-center justify-center p-4",
                children: [
                    t4,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/billing/PaymentModal.tsx",
                lineNumber: 319,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/billing/PaymentModal.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[61] = t30;
        $[62] = t4;
        $[63] = t31;
    } else {
        t31 = $[63];
    }
    return t31;
}
_s(PaymentModal, "TfoC1WAHeKTgUPIbCSdQ6mJ2CVM=");
_c = PaymentModal;
var _c;
__turbopack_context__.k.register(_c, "PaymentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiClient",
    ()=>ApiClient,
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
class ApiClient {
    async fetch(endpoint, options = {}) {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        return response.json();
    }
    // Client endpoints
    async getClients() {
        return this.fetch('/clients');
    }
    async getClient(id) {
        return this.fetch(`/clients/${id}`);
    }
    async createClient(client) {
        return this.fetch('/clients', {
            method: 'POST',
            body: JSON.stringify(client)
        });
    }
    async updateClient(id, client) {
        return this.fetch(`/clients/${id}`, {
            method: 'PUT',
            body: JSON.stringify(client)
        });
    }
    // Provider endpoints
    async getProviders() {
        return this.fetch('/providers');
    }
    async updateProviderStatus(id, status) {
        return this.fetch(`/providers/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({
                status
            })
        });
    }
    // Billing endpoints
    async getInvoices() {
        return this.fetch('/billing');
    }
    async createInvoice(invoice) {
        return this.fetch('/billing', {
            method: 'POST',
            body: JSON.stringify(invoice)
        });
    }
    async getUsageStats() {
        return this.fetch('/stats/usage');
    }
}
const api = new ApiClient();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/billing/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BillingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$billing$2f$InvoiceViewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/billing/InvoiceViewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$billing$2f$InvoiceFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/billing/InvoiceFormModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$billing$2f$PaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/billing/PaymentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function BillingPage() {
    _s();
    // State
    const [invoices, setInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [payments, setPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalRevenue: 0,
        pendingAmount: 0,
        overdueAmount: 0,
        paidInvoices: 0,
        pendingInvoices: 0,
        overdueInvoices: 0
    });
    // Modals
    const [selectedInvoice, setSelectedInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isViewModalOpen, setIsViewModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFormModalOpen, setIsFormModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Filters
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        start: '',
        end: ''
    });
    // Fetch data
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BillingPage.useCallback[fetchData]": async ()=>{
            try {
                const [invoicesData, paymentsData, clientsData, statsData] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getInvoices(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getPayments(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getClients(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getUsageStats()
                ]);
                setInvoices(invoicesData || []);
                setPayments(paymentsData || []);
                setClients(clientsData?.map({
                    "BillingPage.useCallback[fetchData]": (c)=>({
                            id: c.id,
                            name: c.name,
                            email: c.email
                        })
                }["BillingPage.useCallback[fetchData]"]) || []);
                setStats({
                    totalRevenue: statsData?.revenue || 0,
                    pendingAmount: 0,
                    // Calculate from invoices
                    overdueAmount: 0,
                    // Calculate from invoices
                    paidInvoices: invoicesData?.filter({
                        "BillingPage.useCallback[fetchData]": (i)=>i.status === 'paid'
                    }["BillingPage.useCallback[fetchData]"]).length || 0,
                    pendingInvoices: invoicesData?.filter({
                        "BillingPage.useCallback[fetchData]": (i_0)=>i_0.status === 'sent'
                    }["BillingPage.useCallback[fetchData]"]).length || 0,
                    overdueInvoices: invoicesData?.filter({
                        "BillingPage.useCallback[fetchData]": (i_1)=>i_1.status === 'overdue'
                    }["BillingPage.useCallback[fetchData]"]).length || 0
                });
            } catch (error) {
                console.error('Error fetching billing data:', error);
            }
        }
    }["BillingPage.useCallback[fetchData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BillingPage.useEffect": ()=>{
            fetchData();
        }
    }["BillingPage.useEffect"], [
        fetchData
    ]);
    // Filter invoices
    const filteredInvoices = invoices.filter((invoice)=>{
        const matchesSearch = searchTerm === '' || invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
        const matchesDate = (!dateRange.start || invoice.date >= dateRange.start) && (!dateRange.end || invoice.date <= dateRange.end);
        return matchesSearch && matchesStatus && matchesDate;
    });
    // Handlers
    const handleViewInvoice = (invoice_0)=>{
        setSelectedInvoice(invoice_0);
        setIsViewModalOpen(true);
    };
    const handleEditInvoice = (invoice_1)=>{
        setSelectedInvoice(invoice_1);
        setIsFormModalOpen(true);
    };
    const handleDeleteInvoice = async ()=>{
        if (!selectedInvoice) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].deleteInvoice(selectedInvoice.id);
            await fetchData();
            setIsDeleteConfirmOpen(false);
            setSelectedInvoice(null);
        } catch (error_0) {
            console.error('Error deleting invoice:', error_0);
        }
    };
    const handleCreateInvoice = ()=>{
        setSelectedInvoice(null);
        setIsFormModalOpen(true);
    };
    const handleSaveInvoice = async (formData)=>{
        try {
            if (selectedInvoice) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].updateInvoice(selectedInvoice.id, formData);
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].createInvoice(formData);
            }
            await fetchData();
        } catch (error_1) {
            console.error('Error saving invoice:', error_1);
        }
    };
    const handleSendInvoice = async ()=>{
        if (!selectedInvoice) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].sendInvoice(selectedInvoice.id);
            await fetchData();
            setIsViewModalOpen(false);
        } catch (error_2) {
            console.error('Error sending invoice:', error_2);
        }
    };
    const handleRecordPayment = async (paymentData)=>{
        if (!selectedInvoice) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].markInvoiceAsPaid(selectedInvoice.id, paymentData);
            await fetchData();
            setIsViewModalOpen(false);
        } catch (error_3) {
            console.error('Error recording payment:', error_3);
        }
    };
    const handleExport = ()=>{
        // Export logic here
        const csv = [
            [
                'Invoice #',
                'Client',
                'Date',
                'Due Date',
                'Status',
                'Amount'
            ].join(','),
            ...filteredInvoices.map((inv)=>[
                    inv.invoiceNumber,
                    inv.clientName,
                    inv.date,
                    inv.dueDate,
                    inv.status,
                    inv.total
                ].join(','))
        ].join('\n');
        const blob = new Blob([
            csv
        ], {
            type: 'text/csv'
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `invoices-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };
    // Table columns
    const columns = [
        {
            key: 'invoiceNumber',
            header: 'Invoice #',
            render: (invoice_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-medium text-gray-900",
                            children: invoice_2.invoiceNumber
                        }, void 0, false, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 158,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500",
                            children: invoice_2.clientName
                        }, void 0, false, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 159,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/billing/page.tsx",
                    lineNumber: 157,
                    columnNumber: 37
                }, this)
        },
        {
            key: 'date',
            header: 'Date',
            render: (invoice_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(invoice_3.date)
                        }, void 0, false, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 165,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500",
                            children: [
                                "Due: ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(invoice_3.dueDate)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 166,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/billing/page.tsx",
                    lineNumber: 164,
                    columnNumber: 37
                }, this)
        },
        {
            key: 'amount',
            header: 'Amount',
            render: (invoice_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold text-gray-900",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoice_4.total)
                }, void 0, false, {
                    fileName: "[project]/src/app/billing/page.tsx",
                    lineNumber: 171,
                    columnNumber: 37
                }, this)
        },
        {
            key: 'status',
            header: 'Status',
            render: (invoice_5)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-3 py-1 rounded-full text-xs font-medium ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusColor"])(invoice_5.status)}`,
                    children: invoice_5.status.charAt(0).toUpperCase() + invoice_5.status.slice(1)
                }, void 0, false, {
                    fileName: "[project]/src/app/billing/page.tsx",
                    lineNumber: 175,
                    columnNumber: 37
                }, this)
        },
        {
            key: 'actions',
            header: 'Actions',
            render: (invoice_6)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionCell"], {
                    actions: [
                        {
                            label: 'View',
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, void 0),
                            onClick: ()=>handleViewInvoice(invoice_6)
                        },
                        {
                            label: 'Edit',
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, void 0),
                            onClick: ()=>handleEditInvoice(invoice_6),
                            variant: invoice_6.status === 'paid' ? 'default' : 'default'
                        },
                        {
                            label: invoice_6.status === 'sent' ? 'Record Payment' : 'Send',
                            icon: invoice_6.status === 'sent' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 192,
                                columnNumber: 43
                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 192,
                                columnNumber: 80
                            }, void 0),
                            onClick: ()=>{
                                setSelectedInvoice(invoice_6);
                                if (invoice_6.status === 'sent') {
                                    setIsPaymentModalOpen(true);
                                } else {
                                    handleSendInvoice();
                                }
                            }
                        },
                        {
                            label: 'Delete',
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, void 0),
                            onClick: ()=>{
                                setSelectedInvoice(invoice_6);
                                setIsDeleteConfirmOpen(true);
                            },
                            variant: 'danger'
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/billing/page.tsx",
                    lineNumber: 181,
                    columnNumber: 37
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "Billing"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 215,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-2",
                                children: "Manage invoices, payments, and billing cycles"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 216,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 214,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: handleExport,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 76
                                }, void 0),
                                children: "Export"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                onClick: handleCreateInvoice,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 83
                                }, void 0),
                                children: "New Invoice"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/billing/page.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-green-100 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                        className: "h-6 w-6 text-green-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Total Revenue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold mt-1",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(stats.totalRevenue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 231,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 230,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-blue-100 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-6 w-6 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Paid Invoices"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold mt-1",
                                            children: stats.paidInvoices
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 243,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 242,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-amber-100 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                        className: "h-6 w-6 text-amber-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Pending"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold mt-1",
                                            children: stats.pendingInvoices
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 255,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 254,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-red-100 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-6 w-6 text-red-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Overdue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold mt-1",
                                            children: stats.overdueInvoices
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 273,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 271,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 267,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 266,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/billing/page.tsx",
                lineNumber: 229,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center gap-4 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search invoices by client or invoice #",
                                        className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 283,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 282,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                                    value: statusFilter,
                                    onChange: (e_0)=>setStatusFilter(e_0.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "draft",
                                            children: "Draft"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 292,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "sent",
                                            children: "Sent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "paid",
                                            children: "Paid"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "overdue",
                                            children: "Overdue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    className: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                                    value: dateRange.start,
                                    onChange: (e_1)=>setDateRange((prev)=>({
                                                ...prev,
                                                start: e_1.target.value
                                            })),
                                    placeholder: "From"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    className: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",
                                    value: dateRange.end,
                                    onChange: (e_2)=>setDateRange((prev_0)=>({
                                                ...prev_0,
                                                end: e_2.target.value
                                            })),
                                    placeholder: "To"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>{
                                        setSearchTerm('');
                                        setStatusFilter('all');
                                        setDateRange({
                                            start: '',
                                            end: ''
                                        });
                                    },
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 20
                                    }, void 0),
                                    children: "Clear Filters"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/billing/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 289,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/billing/page.tsx",
                    lineNumber: 281,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/billing/page.tsx",
                lineNumber: 280,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-2xl shadow-ultra border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                        data: filteredInvoices,
                        columns: columns,
                        onRowClick: handleViewInvoice,
                        emptyMessage: "No invoices found. Create your first invoice!"
                    }, void 0, false, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 324,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-t border-gray-200 px-6 py-4 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-500",
                                children: [
                                    "Showing ",
                                    filteredInvoices.length,
                                    " of ",
                                    invoices.length,
                                    " invoices"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 328,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        disabled: true,
                                        children: "Previous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "primary",
                                        size: "sm",
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 331,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 327,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/billing/page.tsx",
                lineNumber: 323,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-900",
                                children: "Recent Payments"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 348,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>{},
                                children: "View All"
                            }, void 0, false, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 349,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 347,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: payments.slice(0, 5).map((payment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-green-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "h-5 w-5 text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/billing/page.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/billing/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-gray-900",
                                                        children: payment.clientName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/billing/page.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            payment.invoiceNumber,
                                                            " • ",
                                                            payment.method.replace('_', ' ').toUpperCase()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/billing/page.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/billing/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-gray-900",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(payment.amount)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/billing/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(payment.date)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/billing/page.tsx",
                                                lineNumber: 369,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 367,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, payment.id, true, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 355,
                                columnNumber: 58
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 354,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/billing/page.tsx",
                lineNumber: 346,
                columnNumber: 13
            }, this),
            selectedInvoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$billing$2f$InvoiceViewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvoiceViewModal"], {
                        invoice: selectedInvoice,
                        isOpen: isViewModalOpen,
                        onClose: ()=>setIsViewModalOpen(false),
                        onEdit: ()=>{
                            setIsViewModalOpen(false);
                            setIsFormModalOpen(true);
                        },
                        onDelete: ()=>{
                            setIsViewModalOpen(false);
                            setIsDeleteConfirmOpen(true);
                        },
                        onSend: handleSendInvoice,
                        onMarkAsPaid: ()=>{
                            setIsViewModalOpen(false);
                            setIsPaymentModalOpen(true);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 377,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$billing$2f$PaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentModal"], {
                        invoice: selectedInvoice,
                        isOpen: isPaymentModalOpen,
                        onClose: ()=>setIsPaymentModalOpen(false),
                        onSubmit: handleRecordPayment
                    }, void 0, false, {
                        fileName: "[project]/src/app/billing/page.tsx",
                        lineNumber: 388,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$billing$2f$InvoiceFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvoiceFormModal"], {
                isOpen: isFormModalOpen,
                onClose: ()=>setIsFormModalOpen(false),
                onSubmit: handleSaveInvoice,
                initialData: selectedInvoice,
                clients: clients
            }, void 0, false, {
                fileName: "[project]/src/app/billing/page.tsx",
                lineNumber: 391,
                columnNumber: 13
            }, this),
            isDeleteConfirmOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-screen items-center justify-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 bg-black/50 backdrop-blur-sm",
                            onClick: ()=>setIsDeleteConfirmOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 396,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-6 w-6 text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/billing/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-4 text-lg font-bold text-gray-900",
                                        children: "Delete Invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-gray-600",
                                        children: [
                                            "Are you sure you want to delete invoice #",
                                            selectedInvoice?.invoiceNumber,
                                            "? This action cannot be undone."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 405,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex justify-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                onClick: ()=>setIsDeleteConfirmOpen(false),
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/billing/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "danger",
                                                onClick: handleDeleteInvoice,
                                                children: "Delete Invoice"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/billing/page.tsx",
                                                lineNumber: 415,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/billing/page.tsx",
                                        lineNumber: 410,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/billing/page.tsx",
                                lineNumber: 399,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/billing/page.tsx",
                            lineNumber: 398,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/billing/page.tsx",
                    lineNumber: 395,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/billing/page.tsx",
                lineNumber: 394,
                columnNumber: 37
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/billing/page.tsx",
        lineNumber: 211,
        columnNumber: 10
    }, this);
}
_s(BillingPage, "cF1tqgiKj5NMahrylZL4k7YpfD8=");
_c = BillingPage;
var _c;
__turbopack_context__.k.register(_c, "BillingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4e0a7e48._.js.map