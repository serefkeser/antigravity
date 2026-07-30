const React = typeof window !== "undefined" && window.React ? window.React : typeof globalThis !== "undefined" && globalThis.React ? globalThis.React : {};
const { useState, useRef, useEffect, useCallback } = React;
const ICONS = {
  Download: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" })),
  RotateCcw: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("polyline", { points: "1 4 1 10 7 10" }), /* @__PURE__ */ React.createElement("polyline", { points: "23 20 23 14 17 14" }), /* @__PURE__ */ React.createElement("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })),
  UploadCloud: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }), /* @__PURE__ */ React.createElement("path", { d: "M12 12v9" }), /* @__PURE__ */ React.createElement("path", { d: "m16 16-4-4-4 4" })),
  Music: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 18V5l12-2v13" }), /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "18", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "16", r: "3" })),
  Trash2: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 6h18" }), /* @__PURE__ */ React.createElement("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }), /* @__PURE__ */ React.createElement("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })),
  Volume2: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }), /* @__PURE__ */ React.createElement("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }), /* @__PURE__ */ React.createElement("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" })),
  Clock: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("polyline", { points: "12 6 12 12 16 14" })),
  Loader2: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "2", x2: "12", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "18", x2: "12", y2: "22" }), /* @__PURE__ */ React.createElement("line", { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" }), /* @__PURE__ */ React.createElement("line", { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" }), /* @__PURE__ */ React.createElement("line", { x1: "2", y1: "12", x2: "6", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "18", y1: "12", x2: "22", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" }), /* @__PURE__ */ React.createElement("line", { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" })),
  Copy: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })),
  AlertCircle: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })),
  Activity: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })),
  Server: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })),
  Database: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }), /* @__PURE__ */ React.createElement("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })),
  ShieldCheck: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), /* @__PURE__ */ React.createElement("polyline", { points: "9 12 11 14 15 10" })),
  ImagePlus: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "8.5", cy: "8.5", r: "1.5" }), /* @__PURE__ */ React.createElement("polyline", { points: "21 15 16 10 5 21" })),
  Smartphone: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })),
  Clapperboard: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M16 6h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4" }), /* @__PURE__ */ React.createElement("path", { d: "M4 6h10" }), /* @__PURE__ */ React.createElement("line", { x1: "2", y1: "12", x2: "6", y2: "12" })),
  Type: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("polyline", { points: "4 7 4 4 20 4 20 7" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "20", x2: "15", y2: "20" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "4", x2: "12", y2: "20" })),
  Palette: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "13.5", cy: "6.5", r: "2.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "17.5", cy: "10.5", r: "2.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "8.5", cy: "7.5", r: "2.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "6.5", cy: "12.5", r: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" })),
  Globe: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("line", { x1: "2", y1: "12", x2: "22", y2: "12" }), /* @__PURE__ */ React.createElement("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })),
  MessageSquare: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })),
  Monitor: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "21", x2: "16", y2: "21" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "17", x2: "12", y2: "21" })),
  Filter: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" })),
  Wand2: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "m3 21 9-9" }), /* @__PURE__ */ React.createElement("path", { d: "M12 22V8" }), /* @__PURE__ */ React.createElement("path", { d: "M12 2 4 10" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "6", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "18", r: "3" })),
  CloudRain: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "18" }), /* @__PURE__ */ React.createElement("line", { x1: "10", y1: "17", x2: "14", y2: "17" })),
  ChevronDown: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("polyline", { points: "6 9 12 15 18 9" })),
  Film: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "2", width: "20", height: "20", rx: "2.18", ry: "2.18" }), /* @__PURE__ */ React.createElement("line", { x1: "2", y1: "10", x2: "22", y2: "10" }), /* @__PURE__ */ React.createElement("line", { x1: "10", y1: "2", x2: "10", y2: "22" })),
  FileText: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), /* @__PURE__ */ React.createElement("polyline", { points: "14 2 14 8 20 8" }), /* @__PURE__ */ React.createElement("line", { x1: "16", y1: "13", x2: "8", y2: "13" }), /* @__PURE__ */ React.createElement("line", { x1: "16", y1: "17", x2: "8", y2: "17" }), /* @__PURE__ */ React.createElement("polyline", { points: "10 9 9 9 8 9" })),
  Layers: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }), /* @__PURE__ */ React.createElement("polyline", { points: "2 17 12 22 22 17" }), /* @__PURE__ */ React.createElement("polyline", { points: "2 12 12 17 22 12" })),
  RefreshCw: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("polyline", { points: "1 4 1 10 7 10" }), /* @__PURE__ */ React.createElement("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })),
  Share2: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "5", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "12", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "19", r: "3" }), /* @__PURE__ */ React.createElement("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }), /* @__PURE__ */ React.createElement("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" })),
  Check: ({ size = 14, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("polyline", { points: "20 6 9 17 4 12" })),
  Link2: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), /* @__PURE__ */ React.createElement("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })),
  Newspaper: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" }), /* @__PURE__ */ React.createElement("line", { x1: "18", y1: "14", x2: "18", y2: "18" }), /* @__PURE__ */ React.createElement("line", { x1: "15", y1: "18", x2: "21", y2: "18" }), /* @__PURE__ */ React.createElement("line", { x1: "6", y1: "7", x2: "10", y2: "7" }), /* @__PURE__ */ React.createElement("line", { x1: "6", y1: "11", x2: "10", y2: "11" }), /* @__PURE__ */ React.createElement("line", { x1: "6", y1: "15", x2: "10", y2: "15" })),
  Scissors: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "6", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "18", r: "3" }), /* @__PURE__ */ React.createElement("line", { x1: "20", y1: "4", x2: "8.12", y2: "15.88" }), /* @__PURE__ */ React.createElement("line", { x1: "14.47", y1: "14.48", x2: "20", y2: "20" }), /* @__PURE__ */ React.createElement("line", { x1: "8.12", y1: "8.12", x2: "12", y2: "12" })),
  ExternalLink: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }), /* @__PURE__ */ React.createElement("polyline", { points: "15 3 21 3 21 9" }), /* @__PURE__ */ React.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" })),
  Eye: ({ size = 16, ...p }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" }))
};
const { Download, RotateCcw, UploadCloud, Music, Trash2, Volume2, Clock, Loader2, Copy, AlertCircle, Activity, Server, Database, ShieldCheck, ImagePlus, Smartphone, Clapperboard, Type, Palette, Globe, MessageSquare, Monitor, Filter, Wand2, CloudRain, ChevronDown, Film, FileText, Layers, RefreshCw, Share2, Check, Link2, Newspaper, Scissors, ExternalLink, Eye } = ICONS;
let firebaseApp = null;
let firebaseAuth = null;
let firebaseDb = null;
let firebaseAppId = "default-app-id";
try {
  if (typeof firebaseAppGlobal !== "undefined") {
    firebaseApp = firebaseAppGlobal;
    firebaseAuth = typeof firebaseAuthGlobal !== "undefined" ? firebaseAuthGlobal : null;
    firebaseDb = typeof firebaseDbGlobal !== "undefined" ? firebaseDbGlobal : null;
  }
} catch (e) {
}
const APP_VERSION = {
  name: "anti 1.0",
  major: 1,
  minor: 0,
  patch: 14,
  toString() {
    return `${this.name}.${this.patch}`;
  },
  toBadge() {
    return `${this.name.toUpperCase()}.${this.patch} \u2022 Studio`;
  }
};
const RENDER_CONFIG = {
  FPS: 30,
  TIMER_WORKER_INTERVAL_MS: 25,
  WINDOW_SIZE: 5,
  VOICE_VOLUME: 0.8,
  BGM_VOLUME: 0.29,
  VIDEO_BITS_PER_SECOND: 4e6,
  MIN_CROP_SIZE: 10,
  MAX_BLOCKS: 10,
  SCALE_FACTOR: 1,
  MAX_CUSTOM_SCENE_IMAGES: 5
};
const AI_CONFIG = {
  TEMPERATURE: 0.8,
  MAX_OUTPUT_TOKENS: 150,
  SCENE_COUNT: 3,
  GEMINI_MODEL: "gemini-2.5-flash-preview-09-2025",
  OCR_MODELS: ["gemini-2.5-flash-preview-09-2025", "gemini-1.5-flash", "gemini-1.5-pro"]
};
const ECONOMIC_DATA = {
  aclikSiniri: { value: "35.759 TL", note: "d\xF6rt ki\u015Filik aile, T\xDCRK-\u0130\u015E", dataAsOf: "Haziran 2026", base2002: "350 TL (T\xDCRK-\u0130\u015E 2002)" },
  yoksullukSiniri: { value: "116.478 TL", note: "d\xF6rt ki\u015Filik aile, T\xDCRK-\u0130\u015E", dataAsOf: "Haziran 2026", base2002: "1.150 TL (T\xDCRK-\u0130\u015E 2002)" },
  asgariUcret: { value: "28.075 TL", note: "net", dataAsOf: "Ocak 2026", base2002: "184 TL Net (2002)" },
  enDusukEmekliMaasi: { value: "23.552 TL", note: "", dataAsOf: null, base2002: "257 TL (2002)" },
  tufeYillik: { value: "%32.11", note: "T\xDC\u0130K", dataAsOf: "Haziran 2026", base2002: "%29.7 (T\xDC\u0130K 2002 Y\u0131l Sonu)" },
  tufeAylik: { value: "%0.99", note: "T\xDC\u0130K", dataAsOf: "Haziran 2026" },
  tcmbYilSonuBeklenti: { value: "%29", note: "", dataAsOf: null },
  tcmbPolitikaFaizi: { value: "%37", note: "", dataAsOf: null, base2002: "%45.0 (TCMB 2002)" },
  dolarTl: { value: "47.05 TL", note: "", dataAsOf: "16 Temmuz 2026", base2002: "1.50 TL (2002 Ortalama)" },
  euroTl: { value: "54.07 TL", note: "", dataAsOf: "16 Temmuz 2026", base2002: "1.50 TL (2002)" },
  gramAltin: { value: "6.222 TL", note: "", dataAsOf: "16 Temmuz 2026", base2002: "19 TL (2002)" },
  ceyrekAltin: { value: "10.223 TL", note: "", dataAsOf: "16 Temmuz 2026", base2002: "32 TL (2002)" },
  issizlik: { value: "%8.2", note: "", dataAsOf: null, base2002: "%10.3 (T\xDC\u0130K 2002)" }
};
const buildEconomicDataBlock = () => {
  const d = ECONOMIC_DATA;
  const withDate = (item) => item.dataAsOf ? `${item.note ? item.note + " " : ""}${item.dataAsOf}`.trim() : item.note;
  const baseStr = (item) => item.base2002 ? ` [2002 Baz Verisi: ${item.base2002}]` : "";
  return [
    `- A\xE7l\u0131k S\u0131n\u0131r\u0131: G\xFCncel ${d.aclikSiniri.value} (${withDate(d.aclikSiniri)})${baseStr(d.aclikSiniri)}`,
    `- Yoksulluk S\u0131n\u0131r\u0131: G\xFCncel ${d.yoksullukSiniri.value} (${withDate(d.yoksullukSiniri)})${baseStr(d.yoksullukSiniri)}`,
    `- Asgari \xDCcret: G\xFCncel ${d.asgariUcret.value} (${withDate(d.asgariUcret)})${baseStr(d.asgariUcret)}`,
    `- En D\xFC\u015F\xFCk Emekli Maa\u015F\u0131: G\xFCncel ${d.enDusukEmekliMaasi.value}${baseStr(d.enDusukEmekliMaasi)}`,
    `- T\xDCFE Y\u0131ll\u0131k Enflasyon: G\xFCncel ${d.tufeYillik.value} (${withDate(d.tufeYillik)})${baseStr(d.tufeYillik)}`,
    `- T\xDCFE Ayl\u0131k Enflasyon: G\xFCncel ${d.tufeAylik.value} (${withDate(d.tufeAylik)})`,
    `- TCMB Y\u0131l Sonu Enflasyon Beklentisi: G\xFCncel ${d.tcmbYilSonuBeklenti.value}`,
    `- TCMB Politika Faizi: G\xFCncel ${d.tcmbPolitikaFaizi.value}${baseStr(d.tcmbPolitikaFaizi)}`,
    `- Dolar/TL Kuru: G\xFCncel ${d.dolarTl.value} (${d.dolarTl.dataAsOf})${baseStr(d.dolarTl)}`,
    `- Euro/TL Kuru: G\xFCncel ${d.euroTl.value} (${d.euroTl.dataAsOf})${baseStr(d.euroTl)}`,
    `- Gram Alt\u0131n: G\xFCncel ${d.gramAltin.value} (${d.gramAltin.dataAsOf})${baseStr(d.gramAltin)}`,
    `- \xC7eyrek Alt\u0131n: G\xFCncel ${d.ceyrekAltin.value} (${d.ceyrekAltin.dataAsOf})${baseStr(d.ceyrekAltin)}`,
    `- \u0130\u015Fsizlik Oran\u0131: G\xFCncel ${d.issizlik.value}${baseStr(d.issizlik)}`
  ].join("\n");
};
const ERROR_PATTERNS = [
  /görselde\s+(herhangi\s+)?bir\s+metin\s+bulunmamaktadır/i,
  /bu\s+görselde\s+metin\s+yok/i,
  /no\s+text\s+found\s+in\s+(the\s+)?image/i,
  /görselde\s+yazı\s+bulunamadı/i,
  /metin\s+bulunamadı/i,
  /cannot\s+(read|find|detect)\s+text/i,
  /ocr\s+(failed|error|başarısız)/i,
  /bu\s+resimde\s+yazı\s+yok/i,
  /otomatik\s+çözümleme/i,
  /metin\s+analizi\s+sistemimiz/i,
  /desteklenmeyen\s+bir\s+format/i,
  /içeriği\s+ayrıştırılamadı/i,
  /ses\s+veya\s+konuşma\s+dili/i,
  /video.*içeriğindeki.*ses/i,
  /unsupported\s+format/i,
  /cannot\s+parse/i,
  /audio\s+track\s+not\s+supported/i
];
const isLocalhostAllowed = () => {
  if (typeof window === "undefined") return false;
  const isHttp = window.location.protocol === "http:";
  const isLocalHost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  return isHttp || isLocalHost;
};
let _linkedInServerUrl = "";
const getLinkedInServerUrl = async () => {
  if (_linkedInServerUrl) return _linkedInServerUrl;
  const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
  if (isHttps) {
    try {
      const r = await fetch("https://localhost:3001/", { signal: AbortSignal.timeout(1200) });
      if (r.ok) {
        _linkedInServerUrl = "https://localhost:3001";
        addSystemLog("\u2713 LinkedIn & Buffer HTTPS sunucusu ba\u011Fland\u0131: https://localhost:3001", "success");
        return _linkedInServerUrl;
      }
    } catch (e) {
    }
    try {
      const r = await fetch("https://127.0.0.1:3001/", { signal: AbortSignal.timeout(1200) });
      if (r.ok) {
        _linkedInServerUrl = "https://127.0.0.1:3001";
        addSystemLog("\u2713 LinkedIn & Buffer HTTPS sunucusu ba\u011Fland\u0131: https://127.0.0.1:3001", "success");
        return _linkedInServerUrl;
      }
    } catch (e) {
    }
  }
  try {
    const r = await fetch("http://localhost:3000/", { signal: AbortSignal.timeout(1200) });
    if (r.ok) {
      _linkedInServerUrl = "http://localhost:3000";
      addSystemLog("\u2713 Yerel FFmpeg & LinkedIn sunucu bulundu: http://localhost:3000", "success");
      return _linkedInServerUrl;
    }
  } catch (e) {
  }
  try {
    const r = await fetch("http://127.0.0.1:3000/", { signal: AbortSignal.timeout(1200) });
    if (r.ok) {
      _linkedInServerUrl = "http://127.0.0.1:3000";
      addSystemLog("\u2713 Yerel FFmpeg & LinkedIn sunucu bulundu: http://127.0.0.1:3000", "success");
      return _linkedInServerUrl;
    }
  } catch (e) {
  }
  return "";
};
const shareToLinkedInAPI = async (text, imageBase64 = null, linkUrl = null, linkTitle = null, videoBase64 = null) => {
  const baseUrl = await getLinkedInServerUrl();
  if (!baseUrl) throw new Error("LinkedIn sunucu bulunamad\u0131 \u2014 linkedin_server.py \xE7al\u0131\u015F\u0131yor mu?");
  const body = { commentary: text };
  if (imageBase64) body.image_base64 = imageBase64;
  if (linkUrl) body.link_url = linkUrl;
  if (linkTitle) body.link_title = linkTitle;
  if (videoBase64) body.video_base64 = videoBase64;
  let r;
  if (videoBase64) {
    const base64Data = videoBase64.includes(",") ? videoBase64.split(",")[1] : videoBase64;
    const byteChars = atob(base64Data);
    const byteArray = new Uint8Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) byteArray[i] = byteChars.charCodeAt(i);
    const videoBlob = new Blob([byteArray], { type: "video/mp4" });
    const totalSize = videoBlob.size;
    const chunkSize = 800 * 1024;
    const totalChunks = Math.ceil(totalSize / chunkSize);
    const uploadId = "vid_" + Date.now() + "_" + Math.random().toString(36).substr(2, 6);
    addSystemLog("Video par\xE7al\u0131 y\xFCkleme: " + (totalSize / 1024 / 1024).toFixed(1) + " MB, " + totalChunks + " par\xE7a", "info");
    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, totalSize);
      const chunk = videoBlob.slice(start, end);
      const formData = new FormData();
      formData.append("upload_id", uploadId);
      formData.append("chunk_index", i.toString());
      formData.append("total_chunks", totalChunks.toString());
      formData.append("chunk", chunk, "chunk_" + i + ".bin");
      const cr = await fetch(`${baseUrl}/linkedin/upload-chunk`, {
        method: "POST",
        body: formData
      });
      if (!cr.ok) {
        const err = await cr.json().catch(() => ({}));
        throw new Error("Chunk " + (i + 1) + " y\xFCkleme hatas\u0131: " + (err.detail || cr.status));
      }
      addSystemLog("Par\xE7a " + (i + 1) + "/" + totalChunks + " y\xFCklendi", "info");
    }
    addSystemLog("Video LinkedIn'e y\xFCkleniyor...", "info");
    const shareForm = new FormData();
    shareForm.append("upload_id", uploadId);
    shareForm.append("commentary", text);
    r = await fetch(`${baseUrl}/linkedin/share-chunked`, {
      method: "POST",
      body: shareForm
    });
  } else {
    r = await fetch(`${baseUrl}/linkedin/share`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
  }
  if (!r.ok) {
    const err = await r.json().catch(() => ({}));
    throw new Error(err.detail || `LinkedIn API hatas\u0131: ${r.status}`);
  }
  return await r.json();
};
const blobUrlToBase64 = async (blobUrl) => {
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  const sizeMB = (blob.size / 1024 / 1024).toFixed(1);
  addSystemLog("Video dosya boyutu: " + sizeMB + " MB", "info");
  if (blob.size > 100 * 1024 * 1024) {
    throw new Error("Video \xE7ok b\xFCy\xFCk (" + sizeMB + " MB). LinkedIn limiti 100MB.");
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
const fetchWikimediaImages = async (query, limit = 3) => {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=filetype:bitmap+${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1280&format=json`;
    const r = await fetch(searchUrl);
    if (!r.ok) return [];
    const data = await r.json();
    const images = [];
    const pages = data.query?.pages || {};
    for (const page of Object.values(pages)) {
      const ii = page.imageinfo?.[0];
      if (ii?.mime?.startsWith("image/")) {
        images.push(ii.thumburl || ii.url);
      }
    }
    return images;
  } catch (e) {
    return [];
  }
};
const GAZETE_PROXY_ENDPOINTS = {
  gazeteoku: "http://localhost:3457/gazeteoku",
  aydinlik: "http://localhost:3457/aydinlik",
  yenimesaj: "http://localhost:3457/yenimesaj",
  gzt: "http://localhost:3457/gzt"
};
const ALLOWED_GAZETELER = [
  "Ak\u015Fam",
  "Analiz",
  "Ayd\u0131nl\u0131k",
  "BirG\xFCn",
  "Cumhuriyet",
  "Dirili\u015F Postas\u0131",
  "D\xFCnya",
  "Evrensel",
  "Fanatik",
  "Fotoma\xE7",
  "H\xFCrriyet",
  "Karar",
  "Korkusuz",
  "Milat",
  "Milli Gazete",
  "Milliyet",
  "Nas\u0131l Bir Ekonomi",
  "Nefes",
  "Posta",
  "Sabah",
  "S\xF6zc\xFC",
  "Takvim",
  "Tav\u0131r Gazetesi",
  "T\xFCrkiye",
  "Yeni\xE7a\u011F",
  "Yeni Asya",
  "Yeni Birlik",
  "Yeni Mesaj",
  "Yeni \u015Eafak"
];
const _isCanvasHttps = typeof window !== "undefined" && window.location?.protocol === "https:";
const CORS_PROXIES = [
  { url: (u) => `https://www.whateverorigin.org/get?url=${encodeURIComponent(u)}`, json: true },
  { url: (u) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`, json: false },
  { url: (u) => `https://api.allorigins.win/get?url=${encodeURIComponent(u)}`, json: true },
  { url: (u) => `https://corsproxy.io/?${encodeURIComponent(u)}`, json: false },
  ..._isCanvasHttps ? [] : [{ url: (u) => `http://localhost:3457/proxy?url=${encodeURIComponent(u)}`, json: false, local: true }]
];
const SafeStorage = {
  memoryStore: {},
  getItem: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return SafeStorage.memoryStore[key] || null;
    }
  },
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      SafeStorage.memoryStore[key] = value;
    }
  }
};
let apiKey = typeof window !== "undefined" && (window.apiKey || window.__google_api_key) || SafeStorage.getItem("GEMINI_API_KEY") || "";
const setGeminiApiKey = (key) => {
  apiKey = key || "";
  SafeStorage.setItem("GEMINI_API_KEY", apiKey);
};
const getGeminiApiKey = () => typeof window !== "undefined" && (window.apiKey || window.__google_api_key) || apiKey || SafeStorage.getItem("GEMINI_API_KEY") || "";
const NVIDIA_API_KEY = "";
const GROQ_API_KEY = "";
const _getAudioCtx = () => {
  if (!window._globalAudioCtx) {
    window._globalAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (window._globalAudioCtx.state === "suspended") {
    window._globalAudioCtx.resume().catch((e) => {
      ErrorHandler.silent(e);
    });
  }
  return window._globalAudioCtx;
};
const _suspendAudioCtx = () => {
  if (window._globalAudioCtx && window._globalAudioCtx.state === "running") {
    window._globalAudioCtx.suspend().catch((e) => {
      ErrorHandler.silent(e);
    });
  }
};
class EventBus {
  constructor() {
    this.listeners = {};
  }
  on(event, callback) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }
  emit(event, data) {
    if (this.listeners[event]) this.listeners[event].forEach((cb) => cb(data));
  }
}
const sysEventBus = new EventBus();
const _logBuffer = [];
const addSystemLog = (text, type = "info") => {
  const time = (/* @__PURE__ */ new Date()).toLocaleTimeString("tr-TR");
  const entry = { text, type, timestamp: time };
  _logBuffer.push(entry);
  sysEventBus.emit("SYS_LOG_ADD", entry);
  console.log(`[SYS_LOG] [${type.toUpperCase()}] ${text}`);
};
window.addSystemLog = addSystemLog;
const ErrorHandler = {
  silent(e) {
    console.warn("[OTONOM]", e?.message || e);
  },
  log(e, context = "") {
    addSystemLog(`${context ? context + ": " : ""}${e?.message || e}`, "warn");
  },
  fatal(e, context = "") {
    addSystemLog(`${context ? context + ": " : ""}${e?.message || e}`, "error");
    throw e;
  },
  sync(e) {
    console.warn("Otomatik senkronizasyon hatas\u0131:", e);
  }
};
const sanitizeText = (text) => {
  if (!text || typeof text !== "string") return "";
  let cleaned = text.replace(/<[^>]*>/g, "");
  cleaned = cleaned.replace(/javascript:/gi, "");
  cleaned = cleaned.replace(/on\w+\s*=/gi, "");
  cleaned = cleaned.replace(/data:/gi, "");
  cleaned = cleaned.replace(/vbscript:/gi, "");
  cleaned = cleaned.replace(/&#\d+;/g, "");
  cleaned = cleaned.replace(/&#x[0-9a-f]+;/gi, "");
  cleaned = cleaned.replace(/\s+/g, " ").trim();
  return cleaned;
};
const sanitizeForLog = (text, maxLen = 100) => {
  const cleaned = sanitizeText(text);
  return cleaned.length > maxLen ? cleaned.substring(0, maxLen) + "..." : cleaned;
};
const useDebounce = (value, delay = 300) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
};
const ObjectURLManager = {
  _urls: /* @__PURE__ */ new Set(),
  create(blob) {
    const url = URL.createObjectURL(blob);
    this._urls.add(url);
    return url;
  },
  revoke(url) {
    if (url && this._urls.has(url)) {
      URL.revokeObjectURL(url);
      this._urls.delete(url);
    } else if (url) {
      URL.revokeObjectURL(url);
    }
  },
  revokeAll() {
    this._urls.forEach((u) => URL.revokeObjectURL(u));
    this._urls.clear();
  }
};
const exportWorkflowLog = (jobState) => {
  const lines = ["=== AI News Studio Workflow Log ===", `Tarih: ${(/* @__PURE__ */ new Date()).toLocaleString("tr-TR")}`, `Versiyon: ${APP_VERSION.toString()}`, ""];
  lines.push("--- Sistem Loglar\u0131 ---");
  for (const e of _logBuffer) lines.push(`[${e.timestamp}] [${e.type.toUpperCase()}] ${e.text}`);
  lines.push("");
  lines.push("--- Workflow State ---");
  lines.push(`Job ID: ${jobState?.jobId || "N/A"}`);
  lines.push(`Status: ${jobState?.status || "N/A"}`);
  lines.push(`Slides: ${jobState?.script?.videoSlides?.length || 0}`);
  lines.push(`ImageBlocks: ${jobState?.script?.imageBlocks?.length || 0}`);
  lines.push(`Images generated: ${jobState?.assets?.images?.filter(Boolean).length || 0}/${jobState?.assets?.images?.length || 0}`);
  lines.push(`Audio generated: ${jobState?.assets?.audio?.filter(Boolean).length || 0}/${jobState?.assets?.audio?.length || 0}`);
  lines.push(`Config: ${JSON.stringify(jobState?.config || {}, null, 2)}`);
  lines.push("");
  lines.push("--- Slide Details ---");
  for (const [i, s] of (jobState?.script?.videoSlides || []).entries()) {
    lines.push(`S${i + 1}: "${(s.spokenText || "").substring(0, 80)}..." img=${!!jobState?.assets?.images?.[i]} aud=${!!jobState?.assets?.audio?.[i]}`);
  }
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = ObjectURLManager.create(blob);
  a.download = `log_${Date.now()}.txt`;
  a.click();
};
window.exportWorkflowLog = exportWorkflowLog;
const getWPS = (lang) => ({ "en": 2.5, "es": 2.6, "fr": 2.4, "tr": 2.2, "ar": 2.2, "de": 2, "ru": 2 })[lang] || 2.2;
const _getCurrentMonthYearTR = () => {
  const now = /* @__PURE__ */ new Date();
  const months = ["Ocak", "\u015Eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011Fustos", "Eyl\xFCl", "Ekim", "Kas\u0131m", "Aral\u0131k"];
  return months[now.getMonth()] + " " + now.getFullYear();
};
const _getCurrentDateTR = () => {
  const now = /* @__PURE__ */ new Date();
  const months = ["Ocak", "\u015Eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011Fustos", "Eyl\xFCl", "Ekim", "Kas\u0131m", "Aral\u0131k"];
  return now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();
};
const getDurationBounds = (dur) => {
  if (dur === "15") return { min: 15, max: 30 };
  if (dur === "30") return { min: 30, max: 60 };
  if (dur === "60") return { min: 60, max: 90 };
  if (dur === "90") return { min: 90, max: 120 };
  return { min: 0, max: 9999 };
};
let app, auth, db, appId;
const initFirebase = () => {
  try {
    const firebaseConfig = typeof __firebase_config !== "undefined" ? JSON.parse(__firebase_config) : {};
    if (Object.keys(firebaseConfig).length > 0 && typeof firebaseAppGlobal !== "undefined") {
      app = firebaseAppGlobal;
      auth = typeof firebaseAuthGlobal !== "undefined" ? firebaseAuthGlobal : null;
      db = typeof firebaseDbGlobal !== "undefined" ? firebaseDbGlobal : null;
      appId = typeof __app_id !== "undefined" ? __app_id : "default-app-id";
      return true;
    }
  } catch (e) {
    console.warn("[INFRA] Firebase ba\u015Flat\u0131lamad\u0131, izole modda \xE7al\u0131\u015F\u0131l\u0131yor.");
  }
  return false;
};
const isFirebaseActive = initFirebase();
const attemptSilentReauth = async () => {
  try {
    if (auth) {
      addSystemLog("Yetkilendirme anahtar\u0131 yenileniyor (Silent Re-Auth)...", "warn");
      if (typeof __initial_auth_token !== "undefined" && __initial_auth_token) await signInWithCustomToken(auth, __initial_auth_token);
      else await signInAnonymously(auth);
      addSystemLog("Oturum anahtar\u0131 arka planda ba\u015Far\u0131yla tazelendi!", "success");
      return true;
    }
  } catch (e) {
    addSystemLog("Sessiz re-auth denemesi ba\u015Far\u0131s\u0131z oldu: " + e.message, "error");
  }
  return false;
};
const NetworkUtils = {
  fetchWithRetry: async (url, options, retries = 5) => {
    const baseDelay = 1e3;
    const maxDelay = 3e4;
    for (let i = 0; i < retries; i++) {
      const delay = Math.min(baseDelay * Math.pow(2, i), maxDelay);
      const jitter = Math.random() * 500;
      const totalDelay = delay + jitter;
      try {
        const res = await fetch(url, options);
        if (res.ok) return res;
        if (res.status === 400 || res.status === 403 || res.status === 404) throw new Error(`HTTP_FAIL_${res.status}`);
        if (res.status === 401) {
          addSystemLog(`Oturum hatas\u0131 (401) alg\u0131land\u0131, sessiz yenileme deneniyor...`, "warn");
          const success = await attemptSilentReauth();
          if (success) {
            addSystemLog(`Sessiz kimlik do\u011Frulama tazelendi, istek yeniden deneniyor.`, "success");
            continue;
          }
          if (i === retries - 1) {
            sysEventBus.emit("AUTH_EXPIRED", true);
            throw new Error("Oturum s\xFCresi doldu (401).");
          }
          await new Promise((r) => setTimeout(r, totalDelay));
          continue;
        }
        if (res.status === 429 || res.status >= 500) {
          addSystemLog(`Yava\u015Fl\u0131k (HTTP ${res.status}). Yeniden deneme (${i + 1}/${retries}) - ${(totalDelay / 1e3).toFixed(1)}sn...`, "warn");
          await new Promise((r) => setTimeout(r, totalDelay));
          continue;
        }
        throw new Error(`HTTP Error ${res.status}`);
      } catch (err) {
        if (err.message.startsWith("HTTP_FAIL_") || err.message.includes("Oturum s\xFCresi doldu")) throw err;
        if (i === retries - 1) throw err;
        addSystemLog(`Ba\u011Flant\u0131 kesintisi. Yeniden deneniyor (${i + 1}/${retries}) - ${(totalDelay / 1e3).toFixed(1)}sn...`, "warn");
        await new Promise((r) => setTimeout(r, totalDelay));
      }
    }
    throw new Error("fetchWithRetry: t\xFCm denemeler ba\u015Far\u0131s\u0131z");
  },
  loadImage: (src) => new Promise((resolve) => {
    if (!src) return resolve(null);
    if (typeof src !== "string") {
      console.warn("loadImage: src string de\u011Fil", typeof src);
      return resolve(null);
    }
    const img = new Image();
    if (src.startsWith("http")) img.crossOrigin = "Anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  }),
  fileToBase64: (file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  }),
  compressImage: (file) => new Promise((resolve) => {
    if (!file.type.startsWith("image/")) {
      const reader2 = new FileReader();
      reader2.onload = (e) => resolve(e.target.result);
      reader2.readAsDataURL(file);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let w = img.width;
        let h = img.height;
        const maxW = 1080;
        if (w > maxW || h > maxW) {
          if (w > h) {
            h = Math.round(h / w * maxW);
            w = maxW;
          } else {
            w = Math.round(w / h * maxW);
            h = maxW;
          }
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "medium";
        ctx.drawImage(img, 0, 0, w, h);
        const res = canvas.toDataURL("image/jpeg", 0.7);
        canvas.width = 0;
        canvas.height = 0;
        resolve(res);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }),
  getProxyServerUrl: async () => await getLinkedInServerUrl() || "http://localhost:3000"
};
const ASSET_DB = "AINewsSaaS_Assets_v5";
const STORE_MEDIA = "media_cache";
const STORE_JOBS = "temporal_jobs";
const LIB_STORE = "musicLib";
const DIR_STORE = "dirHandles";
class AssetManagerService {
  static async getDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(ASSET_DB, 2);
      req.onupgradeneeded = (e) => {
        const db2 = e.target.result;
        if (!db2.objectStoreNames.contains(STORE_MEDIA)) db2.createObjectStore(STORE_MEDIA, { keyPath: "id" });
        if (!db2.objectStoreNames.contains(STORE_JOBS)) db2.createObjectStore(STORE_JOBS, { keyPath: "jobId" });
        if (!db2.objectStoreNames.contains(LIB_STORE)) db2.createObjectStore(LIB_STORE, { keyPath: "id" });
        if (!db2.objectStoreNames.contains(DIR_STORE)) db2.createObjectStore(DIR_STORE, { keyPath: "id" });
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  static async saveMedia(id, data) {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(STORE_MEDIA, "readwrite");
      tx.objectStore(STORE_MEDIA).put({ id, data, timestamp: Date.now() });
      return new Promise((r) => tx.oncomplete = () => r(true));
    } catch (e) {
      return false;
    }
  }
  static async loadMedia(id) {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(STORE_MEDIA, "readonly");
      const req = tx.objectStore(STORE_MEDIA).get(id);
      return new Promise((r) => req.onsuccess = () => r(req.result?.data || null));
    } catch (e) {
      return null;
    }
  }
  static async deleteMedia(id) {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(STORE_MEDIA, "readwrite");
      tx.objectStore(STORE_MEDIA).delete(id);
      return new Promise((r) => tx.oncomplete = () => r(true));
    } catch (e) {
      return false;
    }
  }
  static async saveJobState(jobData) {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(STORE_JOBS, "readwrite");
      tx.objectStore(STORE_JOBS).put(jobData);
      return new Promise((r) => tx.oncomplete = () => r(true));
    } catch (e) {
      return false;
    }
  }
  static async getPendingJob() {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(STORE_JOBS, "readonly");
      const req = tx.objectStore(STORE_JOBS).getAll();
      return new Promise((r) => req.onsuccess = () => {
        const jobs = req.result || [];
        const pending = jobs.find((j) => j.status !== "COMPLETED" && j.status !== "FAILED");
        r(pending || null);
      });
    } catch (e) {
      return null;
    }
  }
  static async clearJob(jobId) {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(STORE_JOBS, "readwrite");
      tx.objectStore(STORE_JOBS).delete(jobId);
    } catch (e) {
      ErrorHandler.silent(e);
    }
  }
  static async saveMusicToLib(musicObj) {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(LIB_STORE, "readwrite");
      tx.objectStore(LIB_STORE).put(musicObj);
      return new Promise((r) => tx.oncomplete = () => r(true));
    } catch (e) {
      return false;
    }
  }
  static async getAllMusicFromLib() {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(LIB_STORE, "readonly");
      const req = tx.objectStore(LIB_STORE).getAll();
      return new Promise((r) => req.onsuccess = () => r(req.result || []));
    } catch (e) {
      return [];
    }
  }
  static async getMusicFromLib(id) {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(LIB_STORE, "readonly");
      const req = tx.objectStore(LIB_STORE).get(id);
      return new Promise((r) => req.onsuccess = () => r(req.result || null));
    } catch (e) {
      return null;
    }
  }
  static async removeMusicFromLib(id) {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(LIB_STORE, "readwrite");
      tx.objectStore(LIB_STORE).delete(id);
      return new Promise((r) => tx.oncomplete = () => r(true));
    } catch (e) {
      return false;
    }
  }
  static async saveDirHandle(handle) {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(DIR_STORE, "readwrite");
      tx.objectStore(DIR_STORE).put({ id: "musicDir", handle, name: handle.name, lastSync: Date.now() });
      return new Promise((r) => tx.oncomplete = () => r(true));
    } catch (e) {
      return false;
    }
  }
  static async getDirHandle() {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(DIR_STORE, "readonly");
      const req = tx.objectStore(DIR_STORE).get("musicDir");
      return new Promise((r) => req.onsuccess = () => r(req.result || null));
    } catch (e) {
      return null;
    }
  }
  static async removeDirHandle() {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(DIR_STORE, "readwrite");
      tx.objectStore(DIR_STORE).delete("musicDir");
      return new Promise((r) => tx.oncomplete = () => r(true));
    } catch (e) {
      return false;
    }
  }
  // İndirilenler klasörü için directory handle
  static async saveDownloadsDirHandle(handle) {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(DIR_STORE, "readwrite");
      tx.objectStore(DIR_STORE).put({ id: "downloadsDir", handle, name: handle.name, timestamp: Date.now() });
      return new Promise((r) => tx.oncomplete = () => r(true));
    } catch (e) {
      return false;
    }
  }
  static async getDownloadsDirHandle() {
    try {
      const db2 = await this.getDB();
      const tx = db2.transaction(DIR_STORE, "readonly");
      const req = tx.objectStore(DIR_STORE).get("downloadsDir");
      return new Promise((r) => req.onsuccess = () => r(req.result || null));
    } catch (e) {
      return null;
    }
  }
}
const syncMusicFromDir = async (dirHandle, existingMusic) => {
  if (!dirHandle || typeof dirHandle.values !== "function") return 0;
  const audioExts = [".mp3", ".wav", ".ogg", ".flac", ".m4a", ".aac", ".wma"];
  const existingIds = new Set(existingMusic.map((m) => m.id));
  let newCount = 0;
  try {
    for await (const entry of dirHandle.values()) {
      if (entry.kind === "file" && audioExts.some((ext) => entry.name.toLowerCase().endsWith(ext))) {
        const file = await entry.getFile();
        const id = "fm_" + file.name.replace(/[^a-zA-Z0-9]/g, "_") + "_" + file.size;
        if (existingIds.has(id)) continue;
        const b64 = await NetworkUtils.fileToBase64(file);
        await AssetManagerService.saveMusicToLib({ id, name: file.name, data: b64 });
        newCount++;
      }
    }
    if (dirHandle.name) {
      const db2 = await AssetManagerService.getDB();
      const tx = db2.transaction(DIR_STORE, "readwrite");
      tx.objectStore(DIR_STORE).put({ id: "musicDir", handle: dirHandle, name: dirHandle.name, lastSync: Date.now() });
    }
  } catch (e) {
    ErrorHandler.sync(e);
  }
  return newCount;
};
const analyzeQuoteEmotion = (text) => {
  const lower = text.toLowerCase();
  const mutluKelimeler = ["mutlu", "sevin\xE7", "ne\u015Fe", "g\xFCle", "e\u011Flen", "co\u015Fku", "ba\u015Far\u0131", "zafer", "kazan", "umut", "g\xFCne\u015F", "ayd\u0131nl\u0131k", "g\xFCzel", "sevgi", "a\u015Fk", "sev", "tatl\u0131", "tat", "bal", "\xE7i\xE7ek", "bahar", "yaz", "d\xFCnya", "ya\u015Fam", "hayat"];
  const h\u00FCz\u00FCnl\u00FCKelimeler = ["h\xFCz\xFCn", "\xFCzg\xFCn", "a\u011Fla", "g\xF6z ya\u015F", "keder", "ac\u0131", "kay\u0131p", "\xF6l\xFCm", "ayr\u0131l\u0131k", "yaln\u0131z", "yaln\u0131zl\u0131k", "karanl\u0131k", "gece", "son", "biti\u015F", "veda", "g\xF6\xE7", "h\u0131\xE7k\u0131r\u0131k", "f\u0131rt\u0131na", "ya\u011Fmur", "k\u0131\u015F", "so\u011Fuk", "don", "g\xF6z ya\u015F"];
  const romantikKelimeler = ["a\u015Fk", "sevda", "sevgili", "kalp", "g\xF6n\xFCl", "dudak", "\xF6p", "sar\u0131", "kokla", "tatl\u0131", "bal", "g\xFCl", "ay", "y\u0131ld\u0131z", "gece", "rk", "d\xFC\u015F", "r\xFCya", "\xF6zlem", "bekle", "hasret", "vuslat", "bulu\u015F"];
  let mutluSkor = 0, h\u00FCz\u00FCnl\u00FCSkor = 0, romantikSkor = 0;
  mutluKelimeler.forEach((k) => {
    if (lower.includes(k)) mutluSkor++;
  });
  h\u00FCz\u00FCnl\u00FCKelimeler.forEach((k) => {
    if (lower.includes(k)) h\u00FCz\u00FCnl\u00FCSkor++;
  });
  romantikKelimeler.forEach((k) => {
    if (lower.includes(k)) romantikSkor++;
  });
  const maxSkor = Math.max(mutluSkor, h\u00FCz\u00FCnl\u00FCSkor, romantikSkor);
  if (maxSkor === 0) return "notr";
  if (mutluSkor === maxSkor) return "mutlu";
  if (h\u00FCz\u00FCnl\u00FCSkor === maxSkor) return "h\xFCz\xFCnl\xFC";
  return "romantik";
};
const matchMusicToEmotion = (emotion, musicList) => {
  if (!musicList || musicList.length === 0) return null;
  const emotionKeywords = {
    "mutlu": ["happy", "upbeat", "energetic", "pop", "joy", "dance", "fun", "bright", "major", "optimistic", "mutlu", "ne\u015Feli", "co\u015Fkulu", "e\u011Flence"],
    "h\xFCz\xFCnl\xFC": ["sad", "melancholy", "emotional", "piano", "strings", "slow", "deep", "minor", "cry", "sorrow", "h\xFCz\xFCn", "\xFCz\xFCnt\xFC", "agir", "yavas", "duygusal"],
    "romantik": ["romantic", "love", "soft", "gentle", "dream", "ambient", "chill", "relax", "calm", "a\u015Fk", "sevgi", "roma", "duygusal", "yavas"],
    "notr": ["background", "ambient", "chill", "lofi", "calm", "soft", "neutral", "minimal"]
  };
  const keywords = emotionKeywords[emotion] || emotionKeywords["notr"];
  let bestMatch = null;
  let bestScore = -1;
  for (const track of musicList) {
    const name = (track.name || "").toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      if (name.includes(kw)) score += 2;
    }
    const ext = name.split(".").pop();
    if (["mp3", "wav", "ogg", "flac"].includes(ext)) score += 0.5;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = track;
    }
  }
  if (bestScore <= 0) {
    const idx = Math.floor(Math.random() * musicList.length);
    return musicList[idx];
  }
  return bestMatch;
};
const _splitIntoStrips = (srcB64, stripCount) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const strips = [];
      const stripHeight = Math.ceil(img.height / stripCount);
      for (let i = 0; i < stripCount; i++) {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = stripHeight;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, i * stripHeight, img.width, stripHeight, 0, 0, img.width, stripHeight);
        strips.push(canvas.toDataURL("image/jpeg", 0.95).split(",")[1]);
      }
      resolve(strips);
    };
    img.onerror = () => resolve([srcB64]);
    img.src = "data:image/jpeg;base64," + srcB64;
  });
};
const _extractVideoFrame = (videoFile) => new Promise((resolve) => {
  if (!videoFile || !videoFile.data) return resolve(null);
  try {
    const video = document.createElement("video");
    video.muted = true;
    video.playsInline = true;
    const raw = videoFile.data.includes(",") ? videoFile.data.split(",")[1] : videoFile.data;
    const blob = _base64ToBlob(raw, videoFile.type || "video/mp4");
    video.src = ObjectURLManager.create(blob);
    video.onloadeddata = () => {
      video.currentTime = Math.min(1, (video.duration || 10) * 0.1);
    };
    video.onseeked = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
        ObjectURLManager.revoke(video.src);
        resolve(canvas.toDataURL("image/jpeg", 0.9).split(",")[1]);
      } catch (e) {
        ObjectURLManager.revoke(video.src);
        resolve(null);
      }
    };
    video.onerror = () => {
      ObjectURLManager.revoke(video.src);
      resolve(null);
    };
    setTimeout(() => {
      ObjectURLManager.revoke(video.src);
      resolve(null);
    }, 1e4);
  } catch (e) {
    resolve(null);
  }
});
const _ocrCall = async (imageB64, prompt, model, imgType, apiKey2) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey2}`;
  const r = await NetworkUtils.fetchWithRetry(url, {
    method: "POST",
    body: JSON.stringify({
      contents: [{ parts: [
        { inlineData: { mimeType: imgType, data: imageB64 } },
        { text: prompt }
      ] }],
      generationConfig: { temperature: 0, maxOutputTokens: 2048 }
    })
  });
  if (!r) return "";
  const data = await r.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
};
const _OCR_MODELS = AI_CONFIG.OCR_MODELS;
const ocrWithFallback = async (b64Data, imgType, apiKey2, logPrefix = "G\xF6rsel") => {
  const models = _OCR_MODELS;
  const strategies = [
    { strips: 3, prompt: "Bu \u015Feritteki yaz\u0131y\u0131 oku. Sadece metni yaz, ba\u015Fka bir \u015Fey yazma.", label: "3 \u015Ferit" },
    { strips: 5, prompt: "Bu g\xF6rsel \u015Feritteki yaz\u0131y\u0131 tam olarak oku. Sadece metni ver.", label: "5 \u015Ferit" },
    { strips: 0, prompt: "Bu resimdeki t\xFCm yaz\u0131y\u0131 en \xFCstten en alta, sat\u0131r sat\u0131r yaz. Sadece metni ver.", label: "tam g\xF6rsel" }
  ];
  for (const strategy of strategies) {
    if (strategy.strips > 0) {
      addSystemLog(`${logPrefix}: ${strategy.label} denemesi...`, "info");
    } else {
      addSystemLog(`${logPrefix}: ${strategy.label} denemesi...`, "info");
    }
    for (const model of models) {
      try {
        if (strategy.strips > 0) {
          const strips = await _splitIntoStrips(b64Data, strategy.strips);
          const stripTexts = [];
          for (let i = 0; i < strips.length; i++) {
            const result = await _ocrCall(strips[i], strategy.prompt, model, imgType, apiKey2);
            if (result.length > 2) {
              stripTexts.push(result);
              addSystemLog(`  \u015Eerit ${i + 1}: "${result.substring(0, 40)}..."`, "info");
            }
          }
          if (stripTexts.length > 0) {
            const text = stripTexts.join("\n");
            addSystemLog(`\u2713 ${model} ${strategy.label} ba\u015Far\u0131l\u0131: ${text.length} karakter`, "success");
            return text;
          }
        } else {
          const result = await _ocrCall(b64Data, strategy.prompt, model, imgType, apiKey2);
          if (result.length > 15) {
            addSystemLog(`\u2713 ${model} ${strategy.label} ba\u015Far\u0131l\u0131: ${result.length} karakter`, "success");
            return result;
          }
        }
      } catch (e) {
        addSystemLog(`  ${model} ${strategy.label} hatas\u0131: ${e.message}`, "warn");
      }
    }
  }
  return "";
};
const _callGeminiAndParse = async (url, payload) => {
  const r = await NetworkUtils.fetchWithRetry(url, { method: "POST", body: JSON.stringify(payload) });
  if (!r) throw new Error("API yan\u0131t d\xF6nd\xFCrmedi");
  const data = await r.json();
  if (data.candidates?.[0]?.finishReason === "SAFETY") throw new Error("\u0130\xE7erik g\xFCvenlik filtresine tak\u0131ld\u0131.");
  if (!data.candidates?.[0]?.content) throw new Error("Yapay Zeka API bo\u015F yan\u0131t d\xF6nd\xFCrd\xFC.");
  let responseText = data.candidates[0].content.parts[0].text;
  responseText = responseText.replace(/```json/gi, "").replace(/```/g, "").trim();
  const jsonStart = responseText.indexOf("{");
  const jsonEnd = responseText.lastIndexOf("}");
  if (jsonStart !== -1 && jsonEnd !== -1) responseText = responseText.substring(jsonStart, jsonEnd + 1);
  return JSON.parse(responseText);
};
const _base64ToBlob = (b64, mimeType = "audio/mpeg") => {
  const raw = b64.includes(",") ? b64.split(",")[1] : b64;
  const byteString = atob(raw);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ab], { type: mimeType });
};
const _getLangInstruction = (lang) => {
  const map = { tr: "T\xDCRK\xC7E", en: "\u0130NG\u0130L\u0130ZCE", fr: "FRANSIZCA", de: "ALMANCA", es: "\u0130SPANYOLCA", ar: "ARAP\xC7A", ru: "RUS\xC7A" };
  return `B\xDCT\xDCN SENARYOYU ${map[lang] || "T\xDCRK\xC7E"} YAZACAKSIN.`;
};
const _createTimerWorker = () => {
  const frameInterval = 1e3 / 30;
  try {
    const code = `let interval; self.onmessage = function(e) { if (e.data === 'start') interval = setInterval(() => self.postMessage('tick'), ${frameInterval}); if (e.data === 'stop') clearInterval(interval); };`;
    const blob = new Blob([code], { type: "application/javascript" });
    const blobUrl = ObjectURLManager.create(blob);
    return new Worker(blobUrl);
  } catch (e) {
    console.warn("[OTONOM] Web Worker CSP engeli, main-thread timer yedek devreye girdi:", e?.message || e);
    let interval;
    const dummyWorker = {
      onmessage: null,
      postMessage(msg) {
        if (msg === "start") {
          interval = setInterval(() => {
            if (this.onmessage) this.onmessage({ data: "tick" });
          }, frameInterval);
        } else if (msg === "stop") {
          clearInterval(interval);
        }
      },
      terminate() {
        clearInterval(interval);
      }
    };
    return dummyWorker;
  }
};
const _createSilentOsc = (audioCtx, audioDest) => {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  gain.gain.value = 1e-3;
  osc.connect(gain);
  gain.connect(audioDest);
  osc.start();
  return { osc, gain };
};
const _getFontFamily = (fontStyle) => {
  if (fontStyle === "classic") return "Georgia, 'Times New Roman', serif";
  if (fontStyle === "typewriter") return "'Courier New', Courier, monospace";
  return "'Inter', 'Arial Black', Arial, sans-serif";
};
let _ffmpegInstance = null;
const _loadScript = (src) => new Promise((resolve, reject) => {
  if (document.querySelector('script[src="' + src + '"]')) return resolve();
  const s = document.createElement("script");
  s.src = src;
  s.onload = () => resolve();
  s.onerror = () => reject(new Error("Script y\xFCklenemedi: " + src));
  document.head.appendChild(s);
});
const _loadFFmpeg = async () => {
  if (_ffmpegInstance) return _ffmpegInstance;
  await _loadScript("https://unpkg.com/@ffmpeg/ffmpeg@0.11.6/dist/ffmpeg.min.js");
  const FFmpegLib = window.FFmpeg;
  if (!FFmpegLib || !FFmpegLib.createFFmpeg) throw new Error("ffmpeg.wasm y\xFCklenemedi");
  const ffmpeg = FFmpegLib.createFFmpeg({
    log: false,
    corePath: "https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js"
  });
  await ffmpeg.load();
  _ffmpegInstance = { ffmpeg, fetchFile: FFmpegLib.fetchFile };
  return _ffmpegInstance;
};
const convertWebMtoMP4 = async (inputBlob, onProgress) => {
  addSystemLog("Instagram uyumlu 30 FPS MP4 d\xF6n\xFC\u015Ft\xFCrme ba\u015Flat\u0131l\u0131yor...", "info");
  try {
    const formData = new FormData();
    formData.append("file", inputBlob, "input.webm");
    let baseUrl = await NetworkUtils.getProxyServerUrl();
    if (!baseUrl) baseUrl = await getLinkedInServerUrl() || "http://localhost:3000";
    const proxyUrl = baseUrl + "/convert_mp4";
    const resp = await fetch(proxyUrl, { method: "POST", body: formData });
    if (resp.ok) {
      const mp4Blob = await resp.blob();
      if (mp4Blob && mp4Blob.size > 0) {
        addSystemLog("\u2705 Yerel ffmpeg ile 30 FPS MP4 d\xF6n\xFC\u015F\xFCm\xFC BA\u015EARIYLA TAMAMLANDI!", "success");
        return mp4Blob;
      }
    }
  } catch (e) {
    addSystemLog("Yerel ffmpeg servisi denendi, WASM fallback kullan\u0131l\u0131yor: " + e.message, "warn");
  }
  try {
    const { ffmpeg, fetchFile } = await _loadFFmpeg();
    if (onProgress) ffmpeg.setProgress(({ ratio }) => {
      if (ratio > 0 && ratio <= 1) onProgress(Math.round(ratio * 100));
    });
    const inputFileName = inputBlob.type.includes("mp4") ? "input.mp4" : "input.webm";
    ffmpeg.FS("writeFile", inputFileName, await fetchFile(inputBlob));
    await ffmpeg.run(
      "-i",
      inputFileName,
      "-vf",
      "fps=fps=30",
      "-r",
      "30",
      "-vsync",
      "cfr",
      "-c:v",
      "libx264",
      "-preset",
      "fast",
      "-pix_fmt",
      "yuv420p",
      "-c:a",
      "aac",
      "-b:a",
      "128k",
      "-ar",
      "44100",
      "-movflags",
      "+faststart",
      "output.mp4"
    );
    const data = ffmpeg.FS("readFile", "output.mp4");
    const mp4Blob = new Blob([data.buffer], { type: "video/mp4" });
    try {
      ffmpeg.FS("unlink", inputFileName);
      ffmpeg.FS("unlink", "output.mp4");
    } catch (e) {
      ErrorHandler.silent(e);
    }
    addSystemLog("\u2705 WASM ffmpeg ile 30 FPS MP4 d\xF6n\xFC\u015Ft\xFCr\xFCld\xFC!", "success");
    return mp4Blob;
  } catch (err) {
    addSystemLog("FFmpeg MP4 d\xF6n\xFC\u015F\xFCm hatas\u0131: " + err.message, "error");
    throw err;
  }
};
const _OUTRO_TEXTS = {
  tr: ["Abone olmay\u0131,", "be\u011Fenmeyi ve", "payla\u015Fmay\u0131", "ihmal etmeyin."],
  en: ["Don't forget to", "subscribe, like", "and share."],
  fr: ["N'oubliez pas de", "vous abonner,", "aimer et partager."],
  de: ["Vergessen Sie nicht", "zu abonnieren, liken", "und zu teilen."],
  es: ["No olvides", "suscribirte, dar", "me gusta y compartir."],
  ar: ["\u0644\u0627 \u062A\u0646\u0633\u064E", "\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0648\u0627\u0644\u0625\u0639\u062C\u0627\u0628", "\u0648\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629."],
  ru: ["\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435", "\u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F, \u043B\u0430\u0439\u043A\u043D\u0443\u0442\u044C", "\u0438 \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F."]
};
const _CTA_LABELS = {
  tr: { sub: "Abone Ol", like: "Be\u011Fen", share: "Payla\u015F" },
  en: { sub: "Subscribe", like: "Like", share: "Share" },
  fr: { sub: "S'abonner", like: "Aimer", share: "Partager" },
  de: { sub: "Abonnieren", like: "Liken", share: "Teilen" },
  es: { sub: "Suscribir", like: "Me gusta", share: "Compartir" },
  ar: { sub: "\u0627\u0634\u062A\u0631\u0627\u0643", like: "\u0625\u0639\u062C\u0627\u0628", share: "\u0645\u0634\u0627\u0631\u0643\u0629" },
  ru: { sub: "\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430", like: "\u041B\u0430\u0439\u043A", share: "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F" }
};
class LogicEngineService {
  static validateCurrency(text) {
    if (!text) return text;
    if (text.indexOf("$") > -1 && (text.indexOf("aclik") > -1 || text.indexOf("asgari") > -1 || text.indexOf("emekli") > -1 || text.indexOf("yoksulluk") > -1 || text.indexOf("maas") > -1)) {
      text = text.replace(/\$/g, "TL");
    }
    return text;
  }
  static validateTurkishText(text) {
    if (!text) return text;
    const fixes = {
      "Turkiye": "T\xFCrkiye",
      "turkiye": "t\xFCrkiye",
      "Istanbul": "\u0130stanbul",
      "istanbul": "istanbul",
      "Izmir": "\u0130zmir",
      "izmir": "izmir",
      "Ankara": "Ankara",
      "ankara": "ankara",
      "asgari ucret": "asgari \xFCcret",
      "Asgari Ucret": "Asgari \xFCcret",
      "issizlik": "i\u015Fsizlik",
      "Issizlik": "\u0130\u015Fsizlik",
      "buyume": "b\xFCy\xFCme",
      "Buyume": "B\xFCy\xFCme",
      "doviz": "d\xF6viz",
      "Doviz": "D\xF6viz",
      "borc": "bor\xE7",
      "Borc": "Bor\xE7",
      "butce": "b\xFCt\xE7e",
      "Butce": "B\xFCt\xE7e",
      "enflasyon": "enflasyon",
      "Enflasyon": "Enflasyon",
      "faiz": "faiz",
      "Faiz": "Faiz",
      "maas": "maa\u015F",
      "Maas": "Maa\u015F",
      "ucurum": "u\xE7urum",
      "Ucurum": "U\xE7urum",
      "yuzde": "y\xFCzde",
      "Yuzde": "Y\xFCzde",
      "Turk": "T\xFCrk",
      "turk": "t\xFCrk",
      "Turkce": "T\xFCrk\xE7e",
      "turkce": "t\xFCrk\xE7e",
      "Aclik": "A\xE7l\u0131k",
      "aclik": "a\xE7l\u0131k",
      "Yoksulluk": "Yoksulluk",
      "yoksulluk": "yoksulluk",
      "Emekli": "Emekli",
      "emekli": "emekli",
      "Memur": "Memur",
      "memur": "memur",
      "isci": "i\u015F\xE7i",
      "Isci": "\u0130\u015F\xE7i",
      "ogretmen": "\xF6\u011Fretmen",
      "Ogretmen": "\xD6\u011Fretmen",
      "doktor": "doktor",
      "Doktor": "Doktor",
      "hemsire": "hem\u015Fire",
      "Hemsire": "Hem\u015Fire",
      "muhendis": "m\xFChendis",
      "Muhendis": "M\xFChendis",
      "avukat": "avukat",
      "Avukat": "Avukat"
    };
    Object.keys(fixes).forEach(function(wrong) {
      text = text.split(wrong).join(fixes[wrong]);
    });
    return text;
  }
  static getRecentSonSozList() {
    try {
      const raw = localStorage.getItem("otonom_recent_son_soz");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }
  static addRecentSonSoz(quote) {
    try {
      if (!quote || typeof quote !== "string" || quote.trim().length < 5) return;
      let list = LogicEngineService.getRecentSonSozList();
      const clean = quote.trim();
      if (!list.some((item) => item.toLowerCase() === clean.toLowerCase())) {
        list.unshift(clean);
        if (list.length > 50) list = list.slice(0, 50);
        localStorage.setItem("otonom_recent_son_soz", JSON.stringify(list));
      }
    } catch (e) {
    }
  }
  static _buildSonSozRule() {
    const recent = LogicEngineService.getRecentSonSozList();
    const recentText = recent.length > 0 ? `

SON V\u0130DEOLARDA KULLANILMI\u015E S\xD6ZLER (BUNLARI KES\u0130NL\u0130KLE TEKRAR ETME!):
${recent.slice(0, 15).map((s) => `\u2022 "${s}"`).join("\n")}` : "";
    return `

ZORUNLU SON S\xD6Z ZENG\u0130NL\u0130\u011E\u0130 VE B\u0130LGE D\xDC\u015E\xDCN\xDCR KURALLARI:
- 'sonSoz' alan\u0131na KES\u0130NL\u0130KLE her videoda konunun \xF6z\xFCne ve hissiyat\u0131na cuk diye oturan, Y\xDCZDE 100 FARKLI VE \xD6ZG\xDCN B\u0130R S\xD6Z YAZ!
- S\u0131radan veya a\u015F\u0131r\u0131 ezberlenmi\u015F "Damlaya damla g\xF6l olur", "Sab\u0131r ac\u0131d\u0131r meyvesi tatl\u0131d\u0131r", "G\xFCne\u015F girmeyen eve doktor girer" gibi basma kal\u0131p atas\xF6zlerini KES\u0130NL\u0130KLE KULLANMA!
- T\xFCrk ve d\xFCnya edebiyat\u0131ndan, felsefesinden, sosyolojisinden, tarihinden ve b\xFCy\xFCk d\xFC\u015F\xFCn\xFCrlerinden (\xF6rne\u011Fin: Mevlana, Yunus Emre, Mustafa Kemal Atat\xFCrk, Platon, Aristoteles, Konf\xFC\xE7y\xFCs, Montaigne, Friedrich Nietzsche, Marcus Aurelius, Seneca, Fyodor Dostoyevski, Baruch Spinoza, Victor Hugo, \u0130bn Haldun, Niccol\xF2 Machiavelli, Naz\u0131m Hikmet, Cemil Meri\xE7, Mehmet Akif Ersoy, Franz Kafka, Lev Tolstoy, Albert Camus vb.) veya derin anlam ta\u015F\u0131yan \xF6zg\xFCn halk vecizelerinden tamamen farkl\u0131 bir bilge s\xF6z\xFC se\xE7 ve yaz.${recentText}`;
  }
  static validateEconomyData(data) {
    const errors = [];
    if (!data || !data.videoSlides) return errors;
    data.videoSlides.forEach(function(slide, i) {
      const text = (slide.spokenText || "") + " " + (slide.topText || "");
      if (text.indexOf("Turkiye") > -1 || text.indexOf("turkiye") > -1) {
        errors.push("Sahne " + (i + 1) + ": Turkiye yerine T\xFCrkiye yaz\u0131lmal\u0131");
      }
      if (text.indexOf("$") > -1 && (text.indexOf("a\xE7l\u0131k") > -1 || text.indexOf("asgari") > -1 || text.indexOf("emekli") > -1)) {
        errors.push("Sahne " + (i + 1) + ": T\xFCrk ekonomik verisi $ ile g\xF6sterilmi\u015F, TL olmal\u0131");
      }
    });
    return errors;
  }
  static getEconomyDataPrompt() {
    return "ZORUNLU EKONOMI VERILERI:\nT\xDCFE, TCMB Beklentisi, Politika Faizi, A\xE7l\u0131k S\u0131n\u0131r\u0131, Yoksulluk S\u0131n\u0131r\u0131, Asgari \xDCcret, Emekli Maa\u015F\u0131, Memur Maa\u015F\u0131, \u0130\u015F\xE7i Maa\u015F\u0131, Dolar/TL, Euro/TL, Gram Alt\u0131n, \xC7eyrek Alt\u0131n, \u0130\u015Fsizlik, B\xFCy\xFCme\nKURALLAR: T\xFCrk\xE7e karakter, TL para birimi, 85.450 TL say\u0131 bi\xE7imi, kaynak belirt\n";
  }
  static async analyzeContent(inputData, inputType, config) {
    addSystemLog("\u0130\xE7erik analiz ediliyor...", "info");
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${AI_CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;
    if (config.tip === "guzel_soz") {
      return LogicEngineService._buildGuzelSozScript(inputData, inputType, config);
    }
    if (config.tip === "iddia_analizi") {
      return LogicEngineService._analyzeIddia(inputData, inputType, config);
    }
    let isUnlimited = config.duration === "unlimited";
    let targetSec = isUnlimited ? 0 : config.duration === "15" ? 30 : config.duration === "30" ? 60 : config.duration === "60" ? 90 : config.duration === "90" ? 120 : 60;
    let sceneCount = 4;
    let words = "80-95";
    const useForceExact = !isUnlimited;
    if (useForceExact) {
      const wps = getWPS(config.language);
      if (config.duration === "15") {
        sceneCount = 4;
        words = `${Math.floor(15 * wps)}-${Math.floor(25 * wps)}`;
      } else if (config.duration === "30") {
        sceneCount = 6;
        words = `${Math.floor(30 * wps)}-${Math.floor(52 * wps)}`;
      } else if (config.duration === "60") {
        sceneCount = 9;
        words = `${Math.floor(60 * wps)}-${Math.floor(82 * wps)}`;
      } else if (config.duration === "90") {
        sceneCount = 13;
        words = `${Math.floor(90 * wps)}-${Math.floor(112 * wps)}`;
      }
    } else {
      sceneCount = "\u0130\xE7eri\u011Fe g\xF6re en az 10, ortalama 18-25 sahne";
      words = "\u0130\xE7eri\u011Fi eksiksiz anlatacak kadar esnek";
    }
    let styleInstruction = "Video stili: Tarafs\u0131z, analitik, ciddi ve keskin bir haber edit\xF6r\xFC.";
    if (config.videoStyle === "prompt_output") styleInstruction = "Video stili: \xD6zel Prompt \xC7\u0131kt\u0131s\u0131. Kullan\u0131c\u0131n\u0131n girdi\u011Fi metni do\u011Frudan uygula.";
    const langInstruction = _getLangInstruction(config.language);
    const isImageOutput = config.outputType === "image";
    let timeConstraint = isUnlimited ? `S\xDCRE SINIRI YOKTUR. Olay\u0131 detayl\u0131ca anlat.` : `D\u0130NAM\u0130K KISITLAYICI: Videonun hedef s\xFCresi ${config.duration === "15" ? "15-30" : config.duration === "30" ? "30-60" : config.duration === "60" ? "60-90" : "90-120"} saniyedir. Maksimum ${words.split("-")[1]} KEL\u0130ME.`;
    let dynamicRules = "";
    if (config.analysisMode === "yorumsuz") {
      dynamicRules = `B\u0130R\u0130NC\u0130 KURAL (SADECE HABER - YORUMSUZ): Girdiyi dikkatlice incele. SADECE haberi tarafs\u0131zca anlat. 5N1K kurallar\u0131n\u0131 uygula. Kendi yorumunu katma.
\u0130K\u0130NC\u0130 KURAL: 'mediaBlackout.show' de\u011Ferini false yap.
\xDC\xC7\xDCNC\xDC KURAL: 'sonSoz' alan\u0131n\u0131 tekrarlama.
D\xD6RD\xDCNC\xDC KURAL: Her sahnenin 'spokenText' metni NOKTA \u0130LE B\u0130TEN B\u0130R C\xDCMLE OLMALIDIR.
${timeConstraint}`;
    } else if (config.analysisMode === "deep_analysis") {
      dynamicRules = `B\u0130R\u0130NC\u0130 KURAL (DER\u0130N ANAL\u0130Z): 5N1K dengesini sorgula ve sosyolojik/ekonomik etkileri analiz et.
\u0130K\u0130NC\u0130 KURAL: Skandalsa 'mediaBlackout.show' true yap.
\xDC\xC7\xDCNC\xDC KURAL: 'sonSoz' alan\u0131n\u0131 tekrarlama.
D\xD6RD\xDCNC\xDC KURAL: Her sahnenin 'spokenText' metni NOKTA \u0130LE B\u0130TEN B\u0130R C\xDCMLE OLMALIDIR.
${timeConstraint}`;
    } else {
      dynamicRules = `B\u0130R\u0130NC\u0130 KURAL (HABER 5N1K): Girdiyi incele, 5N1K kural\u0131na sad\u0131k kalarak \xF6zetle.
\u0130K\u0130NC\u0130 KURAL: Skandal de\u011Filse 'mediaBlackout.show' false yap.
\xDC\xC7\xDCNC\xDC KURAL: 'sonSoz' alan\u0131n\u0131 tekrarlama.
D\xD6RD\xDCNC\xDC KURAL: Her sahnenin 'spokenText' metni NOKTA \u0130LE B\u0130TEN B\u0130R C\xDCMLE OLMALIDIR.
${timeConstraint}`;
    }
    let sonSozInstruction = "";
    if (!isImageOutput) sonSozInstruction = LogicEngineService._buildSonSozRule();
    const sysPrompt = `Sen TikTok ve Instagram Reels i\xE7in viral i\xE7erikler \xFCreten profesyonel bir i\xE7erik \xFCreticisisin. Karakterin: Zeki, ger\xE7ekleri s\xF6yleyen, 20 ya\u015F\u0131nda dertli bir gen\xE7.

SENARYOYU ${isImageOutput ? 1 : sceneCount} SAHNE olacak \u015Fekilde b\xF6l!
Toplam konu\u015Fma metni ${words} kelime aral\u0131\u011F\u0131nda olmal\u0131d\u0131r.

D\u0130L KURALI: ${langInstruction}
${styleInstruction}
${dynamicRules}

EKONOMI KURALLARI (ekonomi haberi ise): Turkce karakter kullan, TL para birimi, sayi bicimi 85.450 TL, kaynak belirt (TUIK, TCMB, TURK-IS), aclik/yoksulluk siniri guncel olsun. Bilgi kartlari olustur: ENFLASYON %XX, ACLIK SINIRI XX.XXX TL.

GAZETE BA\u015ELIKLARI: G\xF6rseldeki T\xDCM haber ba\u015Fl\u0131klar\u0131n\u0131 \xE7\u0131kar. Her ba\u015Fl\u0131k i\xE7in:
    - 'baslik': ba\u015Fl\u0131k metni
    - 'aciklama': haberin 2-3 c\xFCmlelik \xF6zeti
    - 'x': ba\u015Fl\u0131\u011F\u0131n sol \xFCst x koordinat\u0131 (0-100 aras\u0131 y\xFCzde)
    - 'y': ba\u015Fl\u0131\u011F\u0131n sol \xFCst y koordinat\u0131 (0-100 aras\u0131 y\xFCzde)
    - 'w': ba\u015Fl\u0131\u011F\u0131n geni\u015Fli\u011Fi (0-100 aras\u0131 y\xFCzde)
    - 'h': ba\u015Fl\u0131\u011F\u0131n y\xFCksekli\u011Fi (0-100 aras\u0131 y\xFCzde)
    En az 1, en fazla 15 ba\u015Fl\u0131k \xE7\u0131kar. Kal\u0131n siyah veya k\u0131rm\u0131z\u0131 yaz\u0131 ile yaz\u0131lan ba\u015Fl\u0131klar\u0131 al. Reklam, bulmaca, ilan HAR\u0130\xC7.

    KAPAK VE V\u0130RAL HOOK KURALLARI (MAKS\u0130MUM 3 KEL\u0130ME KURALI):
    1. 'thumbnailText': KES\u0130NL\u0130KLE MAKS\u0130MUM 3 KEL\u0130ME olan ultra-t\u0131klama odakl\u0131 bir ba\u015Fl\u0131k yaz! (\xD6rn: "BUNU G\u0130ZL\u0130YORLAR!", "YEN\u0130 REKOR KIRILDI!", "SAKIN KA\xC7IRMA!")
    2. 'topText' (Sahnelerdeki Ekran \xDCst\xFC Ba\u015Fl\u0131klar): KES\u0130NL\u0130KLE MAKS\u0130MUM 3 KEL\u0130ME olmal\u0131d\u0131r! (\xD6rn: "ASGAR\u0130 \xDCCRET ER\u0130D\u0130!", "A\xC7LIK SINIRI 35.759!")
    3. 'thumbnailImagePrompt': G\xF6rseldeki/haberdeki olay\u0131 tam analiz ederek buna \xF6zel ultra-dramatik, sinematik, 8K HDR \u0130ngilizce kapak g\xF6rsel promptu olu\u015Ftur.

    CLICKBAIT KANCA & GAZETE V\u0130DEO AKI\u015E KURALLARI (ZORUNLU FORMAT):
    1. \u0130LK SAHNE (CLICKBAIT HOOK SAHNES\u0130):
       - 'thumbnailText': KES\u0130NL\u0130KLE MAKS\u0130MUM 3 KEL\u0130ME olan a\u015F\u0131r\u0131 vurucu Clickbait kanca ba\u015Fl\u0131\u011F\u0131 yaz! (\xD6rn: "BUNU G\u0130ZL\u0130YORLAR!", "YEN\u0130 REKOR KIRILDI!", "SAKIN KA\xC7IRMA!")
       - 'thumbnailImagePrompt': Haberi/konuyu zorlayarak tam bir Clickbait tarz\u0131na uygun, a\u015F\u0131r\u0131 dramatik, \u015Fok edici, y\xFCksek kontrastl\u0131, sinematik 8K \u0130ngilizce AI g\xF6rsel promptu yaz! KES\u0130NL\u0130KLE HER ZAMAN SIFIRDAN \xC7\u0130Z\u0130LECEKT\u0130R! (T\xFCrkiye dokusu ekle: set in Turkey, realistic Turkish news atmosphere, dramatic lighting).

    2. DEVAM SAHNELER\u0130 (GAZETE \u0130LK SAYFASI & MAN\u015EETLER):
       - Clickbait giri\u015Ften sonra gelen T\xDCM sahnelerde G\xD6R\xDCNT\xDC DE\u011E\u0130\u015EMEDEN SAB\u0130T GAZETE \u0130LK SAYFASI kalacakt\u0131r!
       - Bu sahneler i\xE7in YAPAY ZEKA G\xD6RSEL\u0130 \xC7\u0130ZME! 'imagePrompts' dizisini KES\u0130NL\u0130KLE BO\u015E D\u0130Z\u0130 [] OLARAK BIRAK!
       - Sahneler sadece gazeteden \xE7\u0131kan ba\u015Fl\u0131klar\u0131 ve 2-3 c\xFCmlelik detay \xF6zetlerini s\u0131rayla okuyacakt\u0131r.
       - 'topText': KES\u0130NL\u0130KLE MAKS\u0130MUM 3 KEL\u0130ME olmal\u0131d\u0131r! (\xD6rn: "ZAM ORANI %35!", "A\xC7LIK SINIRI 35.759!")
       - 'spokenText': Sadece okunacak haber ba\u015Fl\u0131\u011F\u0131 ve detay a\xE7\u0131klamas\u0131 olmal\u0131d\u0131r.

    3. KAPANIS SAHNES\u0130 (SON S\xD6Z VE ABONE OL):
       - 'sonSoz': Konuya cuk diye oturan, T\xFCrk/D\xFCnya edebiyat\u0131 ve b\xFCy\xFCk d\xFC\u015F\xFCn\xFCrlerinden (Atat\xFCrk, Mevlana, Yunus Emre, Platon, Nietzsche, Seneca, Montaigne vb.) derlenmi\u015F \xE7ok vurucu ve BENZERS\u0130Z bir s\xF6z!
       - 'lastQuote': "Daha fazlas\u0131 i\xE7in takip edin ve kanala abone olun!" mesaj\u0131.

    - SIFIR HAL\xDCS\u0130NASYON: Okuyamad\u0131ysan 'isContentUnreadable' true yap.
    - ATAT\xDCRK HASSAS\u0130YET\u0130: 'Atat\xFCrk' ge\xE7erse 'imagePrompts' k\u0131sm\u0131na "Mustafa Kemal Atat\xFCrk, highly detailed, respectful portrait" ekle!${sonSozInstruction}

D\xF6n\xFC\u015F ZORUNLU olarak JSON format\u0131nda olmal\u0131.`;
    let parts = [];
    let extractStatsHint = "Olay\u0131 tam anla ve KISA B\u0130R \xD6ZET ver.";
    if (config.analysisMode === "yorumsuz") extractStatsHint = "SADECE haberi tarafs\u0131zca oku.";
    if (inputType === "media" && Array.isArray(inputData)) {
      parts = inputData.map((file) => {
        const b64 = file.data.split(",")[1];
        return { inlineData: { mimeType: file.type || "application/octet-stream", data: b64 } };
      });
      const isVideo = inputData.some((f) => f.type?.startsWith("video"));
      const hasDoc = inputData.some((f) => f.type && !f.type.startsWith("video") && !f.type.startsWith("image"));
      let introText = `G\xF6rselleri detayl\u0131ca incele.`;
      if (isVideo) introText = `G\xF6nderilen medyalar\u0131 izle.`;
      if (hasDoc) introText = `G\xF6nderilen belgeleri oku, verileri analiz et.`;
      parts.unshift({ text: `${introText} ${extractStatsHint}` });
    } else if (inputType === "prompt") {
      parts = [{ text: `A\u015EA\u011EIDAK\u0130 TAL\u0130MATI UYGULA:

${inputData}

${extractStatsHint}` }];
    } else if (inputType === "url") {
      parts = [{ text: `[KR\u0130T\u0130K G\xD6REV]: URL'yi oku. 
URL: ${inputData}

\u0130\xE7eri\u011Fe ula\u015Ft\u0131ysan haberi \xF6zetle. ${extractStatsHint}` }];
    } else {
      parts = [{ text: `A\u015Fa\u011F\u0131daki konuyu internette ara\u015Ft\u0131r. Haberi \xF6zetle. 

${inputData}

${extractStatsHint}` }];
    }
    const payload = {
      contents: [{ role: "user", parts }],
      systemInstruction: { parts: [{ text: sysPrompt }] },
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            isContentUnreadable: { type: "BOOLEAN" },
            videoSlides: { type: "ARRAY", items: { type: "OBJECT", properties: { topText: { type: "STRING" }, spokenText: { type: "STRING" }, imagePrompts: { type: "ARRAY", items: { type: "STRING" } } }, required: ["topText", "spokenText", "imagePrompts"] } },
            thumbnailText: { type: "STRING" },
            sonSoz: { type: "STRING" },
            lastQuote: { type: "STRING" },
            thumbnailImagePrompt: { type: "STRING" },
            tiktokTitle: { type: "STRING" },
            tiktokDescription: { type: "STRING" },
            tiktokHashtags: { type: "ARRAY", items: { type: "STRING" } },
            kaynaklar: { type: "ARRAY", items: { type: "OBJECT", properties: { baslik: { type: "STRING" }, url: { type: "STRING" }, tarih: { type: "STRING" } }, required: ["baslik", "url"] } },
            mediaBlackout: { type: "OBJECT", properties: { show: { type: "BOOLEAN" }, percentageCovered: { type: "NUMBER" }, percentageIgnored: { type: "NUMBER" }, mediaNames: { type: "ARRAY", items: { type: "STRING" } }, explanation: { type: "STRING" } }, required: ["show", "percentageCovered", "percentageIgnored", "mediaNames", "explanation"] },
            gazeteBasliklari: { type: "ARRAY", items: { type: "OBJECT", properties: { baslik: { type: "STRING" }, aciklama: { type: "STRING" }, x: { type: "NUMBER" }, y: { type: "NUMBER" }, w: { type: "NUMBER" }, h: { type: "NUMBER" } }, required: ["baslik", "aciklama"] } },
            chartData: { type: "OBJECT", properties: { show: { type: "BOOLEAN" }, type: { type: "STRING" }, title: { type: "STRING" }, note: { type: "STRING" }, items: { type: "ARRAY", items: { type: "OBJECT", properties: { label: { type: "STRING" }, value: { type: "NUMBER" } }, required: ["label", "value"] } } } }
          },
          required: ["isContentUnreadable", "videoSlides", "thumbnailText", "sonSoz", "lastQuote", "thumbnailImagePrompt", "tiktokTitle", "tiktokDescription", "tiktokHashtags", "mediaBlackout"]
        }
      },
      tools: [{ google_search: {} }]
    };
    const parsedData = await _callGeminiAndParse(url, payload);
    if (parsedData.isContentUnreadable) throw new Error("Orijinal metne ula\u015F\u0131lamad\u0131.");
    if (parsedData.sonSoz) LogicEngineService.addRecentSonSoz(parsedData.sonSoz);
    const _cleanMaxThreeWords = (text) => {
      if (!text) return "BUNU G\u0130ZL\u0130YORLAR!";
      let cleaned = text.replace(/\d{1,2}\s+[A-Za-zĞÜŞİÖÇğüşıöç]+\s+\d{4}/g, "").replace(/(Pazartesi|Salı|Çarşamba|Perşembe|Cuma|Cumartesi|Pazar)/gi, "").replace(/Dünya|Pencere|Hürriyet|Milliyet|Sözcü|Sabah|Cumhuriyet/gi, "").replace(/[.,:;!?"-]+/g, " ").trim();
      const words2 = cleaned.split(/\s+/).filter(Boolean);
      if (words2.length === 0) return "BUNU G\u0130ZL\u0130YORLAR!";
      if (words2.length > 3) {
        return words2.slice(0, 3).join(" ").toUpperCase() + "!";
      }
      return words2.join(" ").toUpperCase() + "!";
    };
    if (parsedData.thumbnailText) {
      parsedData.thumbnailText = _cleanMaxThreeWords(parsedData.thumbnailText);
    }
    if (parsedData.videoSlides) {
      const errPatterns = [/görselde.*metin.*bulunmamaktadır/i, /no.*text.*found/i, /metin.*bulunamadı/i, /cannot.*read.*text/i];
      parsedData.videoSlides = parsedData.videoSlides.map((slide) => {
        let updatedSlide = { ...slide };
        if (updatedSlide.topText) {
          updatedSlide.topText = _cleanMaxThreeWords(updatedSlide.topText);
        }
        if (updatedSlide.spokenText && errPatterns.some((p) => p.test(updatedSlide.spokenText))) {
          updatedSlide.spokenText = updatedSlide.topText || "Bu g\xF6rseldeki i\xE7erik hakk\u0131nda bilgi veriliyor.";
        }
        updatedSlide.imagePrompts = [];
        return updatedSlide;
      });
    }
    if (!parsedData.thumbnailImagePrompt || parsedData.thumbnailImagePrompt.trim() === "") {
      parsedData.thumbnailImagePrompt = "Ultra-dramatic high-contrast news clickbait concept art, shocked expressions, red neon question marks, set in Turkey, authentic Turkish news atmosphere, 8k resolution cinematic lighting";
    } else if (!parsedData.thumbnailImagePrompt.toLowerCase().includes("turkey") && !parsedData.thumbnailImagePrompt.toLowerCase().includes("turkish")) {
      parsedData.thumbnailImagePrompt += ", set in Turkey, authentic Turkish setting, realistic Turkish environment, clickbait style";
    }
    if (parsedData.thumbnailImagePrompt) {
      if (!parsedData.thumbnailImagePrompt.toLowerCase().includes("turkey") && !parsedData.thumbnailImagePrompt.toLowerCase().includes("turkish")) {
        parsedData.thumbnailImagePrompt += ", set in Turkey, authentic Turkish setting, realistic Turkish environment, Turkish people";
      }
    }
    return parsedData;
  }
  // Tek bir görsel için 2-3 sahne üretir (sıralı akış için)
  static async analyzeContentForImage(inputData, inputType, config, imageIndex, totalImages, previousContext) {
    addSystemLog(`G\xF6rsel ${imageIndex + 1}/${totalImages} i\xE7in sahneler \xFCretiliyor...`, "info");
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${AI_CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;
    let styleInstruction = "Video stili: Tarafs\u0131z, analitik, ciddi ve keskin bir haber edit\xF6r\xFC.";
    if (config.videoStyle === "prompt_output") styleInstruction = "Video stili: \xD6zel Prompt \xC7\u0131kt\u0131s\u0131. Kullan\u0131c\u0131n\u0131n girdi\u011Fi metni do\u011Frudan uygula.";
    const langInstruction = _getLangInstruction(config.language);
    let dynamicRules = "";
    if (config.analysisMode === "yorumsuz") {
      dynamicRules = `B\u0130R\u0130NC\u0130 KURAL (SADECE HABER - YORUMSUZ): Girdiyi dikkatlice incele. SADECE haberi tarafs\u0131zca anlat. 5N1K kurallar\u0131n\u0131 uygula. Kendi yorumunu katma.
\u0130K\u0130NC\u0130 KURAL: 'mediaBlackout.show' de\u011Ferini false yap.
\xDC\xC7\xDCNC\xDC KURAL: Her sahnenin 'spokenText' metni NOKTA \u0130LE B\u0130TEN B\u0130R C\xDCMLE OLMALIDIR.`;
    } else if (config.analysisMode === "deep_analysis") {
      dynamicRules = `B\u0130R\u0130NC\u0130 KURAL (DER\u0130N ANAL\u0130Z): 5N1K dengesini sorgula ve sosyolojik/ekonomik etkileri analiz et.
\u0130K\u0130NC\u0130 KURAL: Skandalsa 'mediaBlackout.show' true yap.
\xDC\xC7\xDCNC\xDC KURAL: Her sahnenin 'spokenText' metni NOKTA \u0130LE B\u0130TEN B\u0130R C\xDCMLE OLMALIDIR.`;
    } else {
      dynamicRules = `B\u0130R\u0130NC\u0130 KURAL (HABER 5N1K): Girdiyi incele, 5N1K kural\u0131na sad\u0131k kalarak \xF6zetle.
\u0130K\u0130NC\u0130 KURAL: Skandal de\u011Filse 'mediaBlackout.show' false yap.
\xDC\xC7\xDCNC\xDC KURAL: Her sahnenin 'spokenText' metni NOKTA \u0130LE B\u0130TEN B\u0130R C\xDCMLE OLMALIDIR.`;
    }
    const contextBlock = previousContext ? `
\xD6NCEK\u0130 BLOKLARIN \xD6ZET\u0130: ${previousContext}
Bu bilgileri tekrarlama, SADECE bu g\xF6rsel/e\u011Ferseldeki yeni i\xE7eri\u011Fe odaklan.` : "";
    const isLastImage = imageIndex === totalImages - 1;
    const sonSozRule = isLastImage ? `

YED\u0130NC\u0130 KURAL (SON S\xD6Z): Konuya cuk diye oturan \xE7ok vurucu bir ATAS\xD6Z\xDC veya \xD6ZL\xDC S\xD6Z belirle. Bunu 'sonSoz' alan\u0131na kaydet.` : "";
    const sysPrompt = `Bu, ${totalImages} g\xF6rsellik bir videonun ${imageIndex + 1}. blo\u011Fudur.
Sen TikTok ve Instagram Reels i\xE7in viral i\xE7erikler \xFCreten profesyonel bir i\xE7erik \xFCreticisisin.

SENARYOYU TAM OLARAK 2 SAHNE olacak \u015Fekilde b\xF6l! G\xF6rseldeki haberi/konuyu 2 farkl\u0131 a\xE7\u0131dan anlat.
Her sahne bu g\xF6rsele ait haberi anlatmal\u0131.
Toplam konu\u015Fma metni bu blok i\xE7in 30-50 kelime aral\u0131\u011F\u0131nda olmal\u0131d\u0131r.

D\u0130L KURALI: ${langInstruction}
${styleInstruction}
${dynamicRules}
${contextBlock}

GAZETE BA\u015ELIKLARI: G\xF6rseldeki T\xDCM haber ba\u015Fl\u0131klar\u0131n\u0131 \xE7\u0131kar. Her ba\u015Fl\u0131k i\xE7in:
    - 'baslik': ba\u015Fl\u0131k metni
    - 'aciklama': haberin 2-3 c\xFCmlelik \xF6zeti
    - 'x': ba\u015Fl\u0131\u011F\u0131n sol \xFCst x koordinat\u0131 (0-100 aras\u0131 y\xFCzde)
    - 'y': ba\u015Fl\u0131\u011F\u0131n sol \xFCst y koordinat\u0131 (0-100 aras\u0131 y\xFCzde)
    - 'w': ba\u015Fl\u0131\u011F\u0131n geni\u015Fli\u011Fi (0-100 aras\u0131 y\xFCzde)
    - 'h': ba\u015Fl\u0131\u011F\u0131n y\xFCksekli\u011Fi (0-100 aras\u0131 y\xFCzde)
    En az 1, en fazla 15 ba\u015Fl\u0131k \xE7\u0131kar. Kal\u0131n siyah veya k\u0131rm\u0131z\u0131 yaz\u0131 ile yaz\u0131lan ba\u015Fl\u0131klar\u0131 al. Reklam, bulmaca, ilan HAR\u0130\xC7.

    KAPAK VE V\u0130RAL HOOK KURALLARI (MAKS\u0130MUM 3 KEL\u0130ME KURALI):
    1. 'thumbnailText': KES\u0130NL\u0130KLE MAKS\u0130MUM 3 KEL\u0130ME olan ultra-t\u0131klama odakl\u0131 bir ba\u015Fl\u0131k yaz! (\xD6rn: "BUNU G\u0130ZL\u0130YORLAR!", "YEN\u0130 REKOR KIRILDI!", "SAKIN KA\xC7IRMA!")
    2. 'topText' (Sahnelerdeki Ekran \xDCst\xFC Ba\u015Fl\u0131klar): KES\u0130NL\u0130KLE MAKS\u0130MUM 3 KEL\u0130ME olmal\u0131d\u0131r! (\xD6rn: "ASGAR\u0130 \xDCCRET ER\u0130D\u0130!", "A\xC7LIK SINIRI 35.759!")
    3. 'thumbnailImagePrompt': G\xF6rseldeki/haberdeki olay\u0131 tam analiz ederek buna \xF6zel ultra-dramatik, sinematik, 8K HDR \u0130ngilizce kapak g\xF6rsel promptu olu\u015Ftur.

    GAZETE \u0130LK SAYFASI VE YERL\u0130 G\xD6RSEL KURALLARI:
    1. GAZETE \u0130LK SAYFASI / MAN\u015EET KURALI (KR\u0130T\u0130K): E\u011Fer y\xFCklenen/analiz edilen g\xF6rsel bir gazete ilk sayfas\u0131, gazete man\u015Feti veya gazete kup\xFCr\xFC ise SAHNELER \u0130\xC7\u0130N YAPAY ZEKA G\xD6RSEL PROMPTU ('imagePrompts') OLU\u015ETURMA! 'imagePrompts' dizisini KES\u0130NL\u0130KLE BO\u015E D\u0130Z\u0130 [] OLARAK BIRAK! Orijinal gazete g\xF6rseli kullan\u0131lacakt\u0131r.
    2. GAZETE HAR\u0130C\u0130 \u0130\xC7ER\u0130KLER \u0130\xC7\u0130N: HER B\u0130R SAHNE / HABER BA\u015ELI\u011EI \u0130\xC7\u0130N 'imagePrompts' D\u0130Z\u0130S\u0130NDE SADECE VE TAM OLARAK 1 ADET AI G\xD6RSEL PROMPTU YAZILACAKTIR!
    3. T\xDCRK\u0130YE VE T\xDCRK K\xDCLT\xDCR\xDC BAZ ALINACAK: \xDCretilen T\xDCM \u0130ngilizce g\xF6rsel promptlar\u0131 ('imagePrompts' ve 'thumbnailImagePrompt') KES\u0130NL\u0130KLE T\xFCrkiye'yi baz almal\u0131d\u0131r! Yabanc\u0131, \u0130ngiliz, Amerikan veya Arap k\xFClt\xFCr\xFC/insanlar\u0131/mimarisi KES\u0130NL\u0130KLE OLMAYACAK!
    4. G\xF6rsel komutlar\u0131na mutlaka 'set in Turkey, authentic Turkish setting, realistic Turkish environment, Turkish people, Turkish news atmosphere' detaylar\u0131 eklenecek; paradan bahsediliyorsa T\xFCrk Liras\u0131 (TL) banknotlar\u0131 kullan\u0131lacakt\u0131r.
    - ATAT\xDCRK HASSAS\u0130YET\u0130: 'Atat\xFCrk' ge\xE7erse 'imagePrompts' k\u0131sm\u0131na "Mustafa Kemal Atat\xFCrk, highly detailed, respectful portrait" ekle!${sonSozRule}

D\xF6n\xFC\u015F ZORUNLU olarak JSON format\u0131nda olmal\u0131.`;
    let parts = [];
    let extractStatsHint = "Olay\u0131 tam anla ve KISA B\u0130R \xD6ZET ver.";
    if (config.analysisMode === "yorumsuz") extractStatsHint = "SADECE haberi tarafs\u0131zca oku.";
    if (inputType === "media" && Array.isArray(inputData)) {
      const targetFile = inputData[0];
      if (targetFile) {
        const b64 = targetFile.data.split(",")[1];
        parts = [{ inlineData: { mimeType: targetFile.type || "application/octet-stream", data: b64 } }, { text: "Bu g\xF6rseldeki haberi/konuyu detayl\u0131ca incele ve 2 sahnede anlat." }];
      } else {
        parts = [{ text: `G\xF6rsel bulunamad\u0131.` }];
      }
    } else if (inputType === "prompt") {
      parts = [{ text: `A\u015EA\u011EIDAK\u0130 TAL\u0130MATI UYGULA (Bu ${imageIndex + 1}/${totalImages} blok):

${inputData}

${extractStatsHint}` }];
    } else if (inputType === "url") {
      parts = [{ text: `[KR\u0130T\u0130K G\xD6REV]: URL'yi oku.
URL: ${inputData}
Bu ${imageIndex + 1}/${totalImages} blok i\xE7in i\xE7eri\u011Fe dayanarak haberi \xF6zetle. ${extractStatsHint}` }];
    } else {
      parts = [{ text: `A\u015Fa\u011F\u0131daki konuyu internette ara\u015Ft\u0131r. Bu ${imageIndex + 1}/${totalImages} blok i\xE7in haberi \xF6zetle.

${inputData}

${extractStatsHint}` }];
    }
    const payload = {
      contents: [{ role: "user", parts }],
      systemInstruction: { parts: [{ text: sysPrompt }] },
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            isContentUnreadable: { type: "BOOLEAN" },
            videoSlides: { type: "ARRAY", items: { type: "OBJECT", properties: { topText: { type: "STRING" }, spokenText: { type: "STRING" }, imagePrompts: { type: "ARRAY", items: { type: "STRING" } } }, required: ["topText", "spokenText", "imagePrompts"] } },
            thumbnailText: { type: "STRING" },
            sonSoz: { type: "STRING" },
            lastQuote: { type: "STRING" },
            thumbnailImagePrompt: { type: "STRING" },
            kaynaklar: { type: "ARRAY", items: { type: "OBJECT", properties: { baslik: { type: "STRING" }, url: { type: "STRING" }, tarih: { type: "STRING" } }, required: ["baslik", "url"] } },
            mediaBlackout: { type: "OBJECT", properties: { show: { type: "BOOLEAN" }, percentageCovered: { type: "NUMBER" }, percentageIgnored: { type: "NUMBER" }, mediaNames: { type: "ARRAY", items: { type: "STRING" } }, explanation: { type: "STRING" } }, required: ["show", "percentageCovered", "percentageIgnored", "mediaNames", "explanation"] },
            gazeteBasliklari: { type: "ARRAY", items: { type: "OBJECT", properties: { baslik: { type: "STRING" }, aciklama: { type: "STRING" }, x: { type: "NUMBER" }, y: { type: "NUMBER" }, w: { type: "NUMBER" }, h: { type: "NUMBER" } }, required: ["baslik", "aciklama"] } },
            chartData: { type: "OBJECT", properties: { show: { type: "BOOLEAN" }, type: { type: "STRING" }, title: { type: "STRING" }, note: { type: "STRING" }, items: { type: "ARRAY", items: { type: "OBJECT", properties: { label: { type: "STRING" }, value: { type: "NUMBER" } }, required: ["label", "value"] } } } }
          },
          required: ["isContentUnreadable", "videoSlides", "thumbnailText", "sonSoz", "lastQuote", "thumbnailImagePrompt", "mediaBlackout", "gazeteBasliklari"]
        }
      },
      tools: [{ google_search: {} }]
    };
    const parsedData = await _callGeminiAndParse(url, payload);
    if (parsedData.isContentUnreadable) throw new Error("Orijinal metne ula\u015F\u0131lamad\u0131.");
    const _cleanMaxThreeWords = (text) => {
      if (!text) return "BUNU G\u0130ZL\u0130YORLAR!";
      let cleaned = text.replace(/\d{1,2}\s+[A-Za-zĞÜŞİÖÇğüşıöç]+\s+\d{4}/g, "").replace(/(Pazartesi|Salı|Çarşamba|Perşembe|Cuma|Cumartesi|Pazar)/gi, "").replace(/Dünya|Pencere|Hürriyet|Milliyet|Sözcü|Sabah|Cumhuriyet/gi, "").replace(/[.,:;!?"-]+/g, " ").trim();
      const words = cleaned.split(/\s+/).filter(Boolean);
      if (words.length === 0) return "BUNU G\u0130ZL\u0130YORLAR!";
      if (words.length > 3) {
        return words.slice(0, 3).join(" ").toUpperCase() + "!";
      }
      return words.join(" ").toUpperCase() + "!";
    };
    if (parsedData.thumbnailText) {
      parsedData.thumbnailText = _cleanMaxThreeWords(parsedData.thumbnailText);
    }
    if (parsedData.videoSlides) {
      const errPatterns = [/görselde.*metin.*bulunmamaktadır/i, /no.*text.*found/i, /metin.*bulunamadı/i, /cannot.*read.*text/i];
      parsedData.videoSlides = parsedData.videoSlides.map((slide) => {
        let updatedSlide = { ...slide };
        if (updatedSlide.topText) {
          updatedSlide.topText = _cleanMaxThreeWords(updatedSlide.topText);
        }
        if (updatedSlide.spokenText && errPatterns.some((p) => p.test(updatedSlide.spokenText))) {
          updatedSlide.spokenText = updatedSlide.topText || "Bu g\xF6rseldeki i\xE7erik hakk\u0131nda bilgi veriliyor.";
        }
        return updatedSlide;
      });
    }
    addSystemLog(`G\xF6rsel ${imageIndex + 1} i\xE7in ${parsedData.videoSlides?.length || 0} sahne \xFCretildi.`, "success");
    return parsedData;
  }
  static async _buildElestiriScript(inputData, inputType, config) {
    addSystemLog("Ele\u015Ftiri analizi ba\u015Fl\u0131yor...", "info");
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${AI_CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;
    let parts = [];
    let contentText = "";
    if (inputType === "media" && Array.isArray(inputData)) {
      parts = inputData.map((file) => {
        const b64 = file.data.split(",")[1];
        return { inlineData: { mimeType: file.type || "application/octet-stream", data: b64 } };
      });
      const isVideo = inputData.some((f) => f.type?.startsWith("video"));
      parts.unshift({ text: isVideo ? "Bu videoyu izle ve i\xE7eri\u011Fini analiz et." : "Bu g\xF6rseli incele ve i\xE7eri\u011Fini analiz et." });
    } else if (inputType === "prompt" || inputType === "text") {
      contentText = typeof inputData === "string" ? inputData : "";
      parts = [{ text: `A\u015Fa\u011F\u0131daki i\xE7eri\u011Fi analiz et:

${contentText}` }];
    } else if (inputType === "url") {
      parts = [{ text: `Bu URL'deki i\xE7eri\u011Fi oku ve analiz et: ${inputData}` }];
    }
    const sysPrompt = `Sen bir T\xFCrk medya ele\u015Ftirmeni ve fact-checker's\u0131n. G\xF6revin:

    1. Verilen i\xE7eri\u011Fi dikkatle analiz et
    2. \u0130\xE7erideki iddialar\u0131, savunulan g\xF6r\xFC\u015Fleri tespit et
    3. Her iddiay\u0131 T\xFCrkiye'nin G\xDCNCEL GER\xC7EKLER\u0130 ile kar\u015F\u0131la\u015Ft\u0131r

    G\xDCNCEL VER\u0130 ZORUNLULU\u011EU (${(/* @__PURE__ */ new Date()).getFullYear()}):
    - En g\xFCncel T\xDC\u0130K verilerini kullan (${_getCurrentMonthYearTR()})
    - En g\xFCncel TCMB verilerini kullan (${_getCurrentMonthYearTR()})
    - En g\xFCncel Hazine verilerini kullan
    - Verilerin tarihini BEL\u0130RT (\xF6rn: "T\xDC\u0130K ${_getCurrentMonthYearTR()} verilerine g\xF6re...")
    - Eski veri kullanma, g\xFCncel olan\u0131 bul

    KAYNAKLAR (her sahne sonunda link ekle):
    - T\xDC\u0130K: https://data.tuik.gov.tr
    - TCMB: https://www.tcmb.gov.tr
    - Hazine: https://www.hmb.gov.tr
    - D\u0130SK-AR: https://disk.org.tr/arastirma/
    - IMF: https://www.imf.org
    - D\xFCnya Bankas\u0131: https://data.worldbank.org

    ELE ALINACAK KONULAR:
    - Ekonomi: Enflasyon (T\xDCFE/\xDCFE), faiz, d\xF6viz kuru (USD/TRY), d\u0131\u015F bor\xE7, GSMH, i\u015Fsizlik, asgari \xFCcret
    - Sosyal: Yoksulluk oran\u0131, gelir da\u011F\u0131l\u0131m\u0131 (Gini), a\xE7l\u0131k/yoksulluk s\u0131n\u0131r\u0131, ultra zengin vs fakir say\u0131s\u0131
    - E\u011Fitim: PISA sonu\xE7lar\u0131, \xF6\u011Fretmen maa\u015Flar\u0131
    - Sa\u011Fl\u0131k: OECD kar\u015F\u0131la\u015Ft\u0131rmalar\u0131

    \xC7IKTI FORMATI:
    - Her sahne: \u0130DD\u0130A \u2192 GER\xC7EK \u2192 KAYNAK (link ile)
    - Do\u011Fruysa: \xD6rneklerle destekle
    - Yanl\u0131\u015Fsa: Resmi verilerle \xE7\xFCr\xFCt + kaynak linki
    - Tarih belirt (\xF6rn: "${_getCurrentMonthYearTR()}")
    - Tarafs\u0131z ve objektif ol

    SON SAHNE (KAYNAKLAR L\u0130STES\u0130):
    - T\xFCm kaynaklar\u0131 listele (ba\u015Fl\u0131k + URL + tarih)

    KURALLAR:
    - 'dezenformasyon' kelimesini kullanma
    - 5N1K kural\u0131na uy
    - Her sahne NOKTA ile biten c\xFCmle olmal\u0131
    - Clickbait: sansasyonel ama do\u011Fru`;
    const payload = {
      contents: [{ role: "user", parts }],
      systemInstruction: { parts: [{ text: sysPrompt }] },
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            isContentUnreadable: { type: "BOOLEAN" },
            videoSlides: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  topText: { type: "STRING" },
                  spokenText: { type: "STRING" },
                  imagePrompts: { type: "ARRAY", items: { type: "STRING" } }
                },
                required: ["topText", "spokenText", "imagePrompts"]
              }
            },
            thumbnailText: { type: "STRING" },
            sonSoz: { type: "STRING" },
            lastQuote: { type: "STRING" },
            thumbnailImagePrompt: { type: "STRING" },
            mediaBlackout: {
              type: "OBJECT",
              properties: {
                show: { type: "BOOLEAN" },
                percentageCovered: { type: "NUMBER" },
                percentageIgnored: { type: "NUMBER" },
                mediaNames: { type: "ARRAY", items: { type: "STRING" } },
                explanation: { type: "STRING" }
              },
              required: ["show", "percentageCovered", "percentageIgnored", "mediaNames", "explanation"]
            }
          },
          required: ["isContentUnreadable", "videoSlides", "thumbnailText", "sonSoz", "lastQuote", "thumbnailImagePrompt", "mediaBlackout", "kaynaklar"]
        }
      },
      tools: [{ google_search: {} }]
    };
    const parsedData = await _callGeminiAndParse(url, payload);
    if (parsedData.isContentUnreadable) throw new Error("\u0130\xE7erik okunamad\u0131.");
    addSystemLog(`Ele\u015Ftiri analizi tamamland\u0131: ${parsedData.videoSlides?.length || 0} sahne.`, "success");
    return parsedData;
  }
  static async _analyzeIddia(inputData, inputType, config) {
    addSystemLog("\u0130ddia Analizi ba\u015Fl\u0131yor...", "info");
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${AI_CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;
    let parts = [];
    if (inputType === "media" && Array.isArray(inputData)) {
      parts = inputData.map(function(file) {
        const b64 = file.data.split(",")[1];
        return { inlineData: { mimeType: file.type || "application/octet-stream", data: b64 } };
      });
      const videoFile = inputData.find(function(f) {
        return f.type && f.type.startsWith("video");
      });
      if (videoFile) {
        addSystemLog("Videodan kare \xE7\u0131kar\u0131l\u0131yor...", "info");
        const frameB64 = await _extractVideoFrame(videoFile);
        if (frameB64) {
          parts.push({ inlineData: { mimeType: "image/jpeg", data: frameB64 } });
          addSystemLog("Videodan kare \xE7\u0131kar\u0131ld\u0131 ve analize eklendi.", "success");
        }
        parts.unshift({ text: "Bu videoyu izle ve g\xF6rsellerini incele. \u0130\xE7indeki do\u011Frulanabilir iddialar\u0131 \xE7\u0131kar." });
      } else {
        parts.unshift({ text: "Bu g\xF6rseli incele. \u0130\xE7indeki do\u011Frulanabilir iddialar\u0131 \xE7\u0131kar." });
      }
    } else if (inputType === "prompt" || inputType === "text") {
      parts = [{ text: "A\u015Fa\u011F\u0131daki metindeki do\u011Frulanabilir iddialar\u0131 \xE7\u0131kar: " + (typeof inputData === "string" ? inputData : "") }];
    } else if (inputType === "url") {
      parts = [{ text: "Bu URL icindeki icerigi oku. Dogrulanabilir iddialari cikar: " + inputData }];
    }
    const _curMonthYear = _getCurrentMonthYearTR();
    const _curDate = _getCurrentDateTR();
    const sysPrompt = `Sen T\xFCrkiye ger\xE7eklerine tam hakim, tarafs\u0131z, mutlak do\u011Fruluktan \xF6d\xFCn vermeyen k\u0131demli bir Fact-Check (Do\u011Frulama), Adalet ve Ekonomi Analiz Uzman\u0131s\u0131n.

\u015EU ANDAK\u0130 G\xDCNCEL TAR\u0130H VE D\xD6NEM: ${_curMonthYear} (B\xFCt\xFCn tarih, istatistik ve kaynak d\xF6nem ifadelerinde bu g\xFCncel tarihi kullan).

ZORUNLU M\u0130SYON VE \u0130DD\u0130A ANAL\u0130Z KURALLARI:

1. B\u0130REB\u0130R VE \xD6ZG\xDCN ANAL\u0130Z (EZBER/KALIP C\xDCMLE YASAKTIR):
   - Y\xFCklenen girdiyi (metin, g\xF6rsel, video, ses, URL) tamamen birebir ve \xF6zg\xFCn olarak analiz et. S\xFCrekli ayn\u0131 basma kal\u0131p \u015Fablonlar\u0131 tekrarlama.
   - \u0130\xE7erikteki DO\u011ERULANAB\u0130L\u0130R iddia ve c\xFCmleleri tek tek \xE7\u0131kar (ki\u015Fisel g\xF6r\xFC\u015F, temenni ve hakaretler hari\xE7). Her iddiay\u0131 ba\u011F\u0131ms\u0131z kart olarak incele.

2. KES\u0130NT\u0130S\u0130Z SES VEYA V\u0130DEO OYNATMA ZORUNLULU\u011EU (H\u0130\xC7B\u0130R YER\u0130 KES\u0130LMEDEN):
   - Clickbait kapak / hook sahnesinden HEMEN SONRA, y\xFCklenen ses veya video H\u0130\xC7B\u0130R YER\u0130 KES\u0130LMEDEN OLDU\u011EU G\u0130B\u0130 TAM OYNATILMALIDIR!
   - Orijinal medya eksiksiz olarak dinletildikten/izletildikten HEMEN SONRA detayl\u0131 analiz ve do\u011Frulama a\u015Famas\u0131na ge\xE7ilecektir.

3. YA\u015EANAN SOMUT OLAYLAR, ADALET VE EMSAL \xD6RNEKLERLE \u0130F\u015EA:
   - Medya dinletildikten/izletildikten sonra, iddiadaki yanl\u0131\u015Flar veya eksikler GER\xC7EKTE YA\u015EANAN SOMUT OLAYLAR, MAHKEME/ADALET KARARLARI, EMSAL VAKALAR VE REEL YA\u015EAM VER\u0130LER\u0130 \xD6RNEK VER\u0130LEREK NET \u015EEK\u0130LDE \u0130F\u015EA ED\u0130LECEKT\u0130R.
   - Ya\u015Fanan bu somut emsal \xF6rnekler ve veriler \u0131\u015F\u0131\u011F\u0131nda iddia adalet ve ger\xE7eklik s\xFCzgecinden ge\xE7irilip a\xE7\u0131k\xE7a if\u015Fa edilir.

4. EN G\xDCNCEL DEVLET VE RESM\u0130 KURUM VER\u0130LER\u0130 (${_curMonthYear}) VE 2002 KIYASLAMASI:
   - De\u011Ferlendirmelerde devletin sundu\u011Fu EN RESM\u0130 VE EN G\xDCNCEL VER\u0130LER (${_curMonthYear} - \xD6rn: Temmuz 2026) esas al\u0131n\u0131r.
   - \u0130ddia veya analiz konusu ekonomi, al\u0131m g\xFCc\xFC, maa\u015Flar, enflasyon, d\xF6viz kurlar\u0131, adalet veya kamu politikas\u0131 ise; MUTLAKA 2002 y\u0131l\u0131 ve en g\xFCncel devlet verileri (${_curMonthYear}) ile kar\u015F\u0131la\u015Ft\u0131rma yap ("2002 y\u0131l\u0131nda X verisi \u015Fu kadard\u0131, g\xFCn\xFCm\xFCz ${_curMonthYear} itibar\u0131yla \u015Fu oldu" \u015Feklinde d\xF6n\xFC\u015F\xFCm\xFC vurgula).

5. MUTLAKA YAZILACAK RESM\u0130 KAYNAK VE L\u0130NK ZORUNLULU\u011EU:
   - B\xFCt\xFCn de\u011Ferlendirmelerinde resmi kurum verilerini (T\xDC\u0130K, TCMB, T\xDCRK-\u0130\u015E, Hazine ve Maliye Bakanl\u0131\u011F\u0131, Adalet Bakanl\u0131\u011F\u0131, Resmi Gazete vb.) kullan.
   - Sahnelerde ve \xE7\u0131kar\u0131lan kan\u0131tlarda MUTLAKA RESM\u0130 KAYNAK ADINI, TAR\u0130H\u0130N\u0130 (${_curMonthYear}) VE VARSA WEB ADRES\u0130N\u0130 (URL) a\xE7\u0131k\xE7a yaz. \u0130zleyici okudu\u011Funda ve dinledi\u011Finde %100 ikna olmal\u0131d\u0131r.

6. MUTLAK DO\u011ERULUK VE \u015EEFFAFLIK (ASLA YALAN YAZMA / B\u0130LM\u0130YORSAN "B\u0130LM\u0130YORUM" DE):
   - Asla tahmini, uydurma, yalan veya do\u011Frulanamayan veri sunma. Daima sadece ger\xE7e\u011Fi s\xF6yle.
   - Resmi kurum verisi bulunmayan, mu\u011Flak veya kan\u0131tlanamayan iddialar i\xE7in \xC7EK\u0130NMEDEN durum etiketini "Do\u011Frulanabiliyor / Veri Yetersiz" olarak belirle ve analiz a\xE7\u0131klamas\u0131nda "Resmi kaynaklarda bu iddiay\u0131 do\u011Frudan do\u011Frulayacak a\xE7\u0131k veri bulunmamaktad\u0131r" de.

7. G\xDCNCEL RESM\u0130 EKONOM\u0130 VE TAR\u0130HSEL BAZ VER\u0130LER\u0130 (${_curMonthYear}):
${buildEconomicDataBlock()}

8. G\xD6REV VE V\u0130DEO SENARYO AKI\u015EI (videoSlides):
   - 5sn Vurucu Clickbait Hook -> Y\xFCklenen Ses veya Videonun Kesintisiz Tam Oynat\u0131m\u0131 -> Ya\u015Fanan Somut Olay / Adalet Emsali / \u0130f\u015Fa \xD6rne\u011Fi -> En G\xFCncel Devlet Verisi (${_curMonthYear}) & 2002 Kar\u015F\u0131la\u015Ft\u0131rmas\u0131 -> Resmi Kaynakl\u0131 Sonu\xE7 ve Kapan\u0131\u015F.${LogicEngineService._buildSonSozRule()}

D\xF6n\xFC\u015F ZORUNLU olarak ge\xE7erli JSON format\u0131nda olmal\u0131d\u0131r.`;
    const payload = {
      contents: [{ role: "user", parts }],
      systemInstruction: { parts: [{ text: sysPrompt }] },
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            isContentUnreadable: { type: "BOOLEAN" },
            videoSlides: { type: "ARRAY", items: { type: "OBJECT", properties: { topText: { type: "STRING" }, spokenText: { type: "STRING" }, imagePrompts: { type: "ARRAY", items: { type: "STRING" } } }, required: ["topText", "spokenText", "imagePrompts"] } },
            thumbnailText: { type: "STRING" },
            sonSoz: { type: "STRING" },
            lastQuote: { type: "STRING" },
            thumbnailImagePrompt: { type: "STRING" },
            iddialar: { type: "ARRAY", items: { type: "OBJECT", properties: {
              iddia: { type: "STRING" },
              durum: { type: "STRING" },
              guvenSkoru: { type: "NUMBER" },
              analiz: { type: "STRING" },
              kanitlar: { type: "ARRAY", items: { type: "OBJECT", properties: { kaynak: { type: "STRING" }, url: { type: "STRING" }, veri: { type: "STRING" } }, required: ["kaynak", "veri"] } },
              sonuc: { type: "STRING" }
            }, required: ["iddia", "durum", "guvenSkoru", "analiz", "kanitlar", "sonuc"] } },
            mediaBlackout: { type: "OBJECT", properties: { show: { type: "BOOLEAN" }, percentageCovered: { type: "NUMBER" }, percentageIgnored: { type: "NUMBER" }, mediaNames: { type: "ARRAY", items: { type: "STRING" } }, explanation: { type: "STRING" } }, required: ["show", "percentageCovered", "percentageIgnored", "mediaNames", "explanation"] }
          },
          required: ["isContentUnreadable", "videoSlides", "thumbnailText", "sonSoz", "lastQuote", "thumbnailImagePrompt", "iddialar", "mediaBlackout"]
        }
      },
      tools: [{ google_search: {} }]
    };
    const parsedData = await _callGeminiAndParse(url, payload);
    if (parsedData.sonSoz) LogicEngineService.addRecentSonSoz(parsedData.sonSoz);
    const hasErrorText = (parsedData.videoSlides || []).some((s) => ERROR_PATTERNS.some((p) => p.test(s.spokenText || "") || p.test(s.topText || ""))) || (parsedData.iddialar || []).some((i) => ERROR_PATTERNS.some((p) => p.test(i.iddia || "") || p.test(i.analiz || "")));
    if (parsedData.isContentUnreadable || hasErrorText) {
      addSystemLog("Video/medya i\xE7erisindeki ses veya metin yapay zeka taraf\u0131ndan ayr\u0131\u015Ft\u0131r\u0131lamad\u0131.", "warn");
      throw new Error("Y\xFCklenen videodaki ses veya metin yapay zeka taraf\u0131ndan do\u011Frudan okunamad\u0131. L\xFCtfen ara\u015Ft\u0131r\u0131lacak iddiay\u0131 metin olarak yaz\u0131n veya net bir haber g\xF6rseli y\xFCkleyin.");
    }
    addSystemLog("\u0130ddia Analizi tamamland\u0131: " + (parsedData.iddialar ? parsedData.iddialar.length : 0) + " iddia.", "success");
    return parsedData;
  }
  static getGuzelSozAnalysis(quoteText) {
    const themes = {
      "sabir": ["sab\u0131r", "bekle", "zaman", "dayan"],
      "azim": ["azim", "\xE7aba", "gayret", "m\xFCcadele", "vazge\xE7me"],
      "ba\u015Far\u0131": ["ba\u015Far\u0131", "kazan", "hedef", "zafer"],
      "hayat": ["hayat", "ya\u015Fam", "\xF6m\xFCr", "nefes"],
      "mutluluk": ["mutluluk", "sevin\xE7", "ne\u015Fe", "g\xFCl\xFCmse"],
      "sevgi": ["sevgi", "a\u015Fk", "kalp", "sev"],
      "anne": ["anne", "annem", "ana"],
      "baba": ["baba", "babam"],
      "dostluk": ["dost", "arkada\u015F", "karde\u015F"],
      "inan\xE7": ["inan\xE7", "iman", "tanr\u0131", "allah"],
      "umut": ["umut", "beklenti", "gelecek"],
      "\xF6zg\xFCrl\xFCk": ["\xF6zg\xFCrl\xFCk", "h\xFCr", "serbest"],
      "cesaret": ["cesaret", "korkusuz", "yi\u011Fit"],
      "zaman": ["zaman", "vakit", "dakika", "saat"],
      "bilgelik": ["bilgi", "bilge", "ak\u0131l", "hikmet"],
      "yaln\u0131zl\u0131k": ["yaln\u0131z", "tek", "kimsesiz"],
      "huzur": ["huzur", "s\xFCkunet", "dingin"],
      "\u015F\xFCk\xFCr": ["\u015F\xFCk\xFCr", "minnet", "hamd"],
      "do\u011Fa": ["do\u011Fa", "a\u011Fa\xE7", "deniz", "g\xFCne\u015F", "y\u0131ld\u0131z"]
    };
    let detectedTheme = "hayat";
    let maxScore = 0;
    const textLower = quoteText.toLowerCase();
    Object.keys(themes).forEach(function(theme) {
      let score = 0;
      themes[theme].forEach(function(keyword) {
        if (textLower.indexOf(keyword) > -1) score++;
      });
      if (score > maxScore) {
        maxScore = score;
        detectedTheme = theme;
      }
    });
    const emotions = {
      "h\xFCz\xFCn": ["h\xFCz\xFCn", "ac\u0131", "g\xF6zya\u015F\u0131", "a\u011Fla", "keder"],
      "umut": ["umut", "bekle", "gelecek", "iyi"],
      "a\u015Fk": ["a\u015Fk", "sevgi", "kalp", "sev"],
      "nefret": ["nefret", "kin", "\xF6fke"],
      "korku": ["korku", "kork", "tehlike"],
      "sevin\xE7": ["sevin\xE7", "mutlu", "g\xFCl", "ne\u015Fe"],
      "\xF6fke": ["\xF6fke", "k\u0131z", "sinir"],
      "gurur": ["gurur", "onur", "\u015Feref"],
      "\xF6zlem": ["\xF6zlem", "hasret", "bekle"]
    };
    let detectedEmotion = "umut";
    maxScore = 0;
    Object.keys(emotions).forEach(function(emo) {
      let score = 0;
      emotions[emo].forEach(function(keyword) {
        if (textLower.indexOf(keyword) > -1) score++;
      });
      if (score > maxScore) {
        maxScore = score;
        detectedEmotion = emo;
      }
    });
    const styleMap = {
      "sabir": "minimal",
      "azim": "dark",
      "ba\u015Far\u0131": "luxury",
      "hayat": "nature",
      "mutluluk": "warm",
      "sevgi": "romantic",
      "umut": "light",
      "cesaret": "epik",
      "bilgelik": "vintage",
      "yaln\u0131zl\u0131k": "film_noir",
      "huzur": "nature",
      "do\u011Fa": "nature",
      "zaman": "minimal",
      "inanc": "spiritual",
      "dostluk": "warm"
    };
    const detectedStyle = styleMap[detectedTheme] || "cinematic";
    const musicMap = {
      "sabir": "soft piano",
      "azim": "motivational",
      "ba\u015Far\u0131": "cinematic orchestral",
      "hayat": "contemplative piano",
      "mutluluk": "upbeat",
      "sevgi": "romantic piano",
      "anne": "warm orchestral",
      "baba": "strong strings",
      "umut": "soft piano",
      "cesaret": "epic cinematic",
      "do\u011Fa": "nature sounds",
      "bilgelik": "meditation",
      "yaln\u0131zl\u0131k": "melancholic piano",
      "huzur": "ambient",
      "\u015F\xFCk\xFCr": "light strings",
      "zaman": "minimal piano",
      "inanc": "spiritual ambient",
      "dostluk": "warm acoustic"
    };
    const suggestedMusic = musicMap[detectedTheme] || "contemplative piano";
    const paletteMap = {
      "sabir": { ana: "#2c3e50", ikincil: "#34495e", vurgu: "#3498db", yazi: "#ecf0f1", arka: "#1a252f" },
      "azim": { ana: "#1a1a2e", ikincil: "#16213e", vurgu: "#e94560", yazi: "#ffffff", arka: "#0f0f23" },
      "ba\u015Far\u0131": { ana: "#2d1b69", ikincil: "#11001c", vurgu: "#ffd700", yazi: "#ffffff", arka: "#0a0015" },
      "hayat": { ana: "#1b4332", ikincil: "#2d6a4f", vurgu: "#95d5b2", yazi: "#ffffff", arka: "#081c15" },
      "sevgi": { ana: "#4a0e0e", ikincil: "#6b1d1d", vurgu: "#ff6b6b", yazi: "#ffffff", arka: "#1a0505" },
      "umut": { ana: "#1a365d", ikincil: "#2a4a7f", vurgu: "#63b3ed", yazi: "#ffffff", arka: "#0f1f3d" },
      "h\xFCz\xFCn": { ana: "#2d3748", ikincil: "#4a5568", vurgu: "#a0aec0", yazi: "#e2e8f0", arka: "#1a202c" },
      "do\u011Fa": { ana: "#22543d", ikincil: "#276749", vurgu: "#68d391", yazi: "#ffffff", arka: "#1a3a2a" }
    };
    const palette = paletteMap[detectedTheme] || { ana: "#1a1a2e", ikincil: "#16213e", vurgu: "#e94560", yazi: "#ffffff", arka: "#0f0f23" };
    return {
      tema: detectedTheme,
      duygu: detectedEmotion,
      stil: detectedStyle,
      muzik: suggestedMusic,
      palet: palette,
      enerji: detectedEmotion === "cesaret" || detectedEmotion === "\xF6fke" ? 80 : 40,
      pozitiflik: detectedEmotion === "umut" || detectedEmotion === "sevin\xE7" ? 80 : 50
    };
  }
  static getGuzelSozImagePrompts(quoteText, analysis) {
    const tema = analysis.tema || "hayat";
    const stil = analysis.stil || "cinematic";
    const duygu = analysis.duygu || "umut";
    return [
      "Ultra realistic " + stil + " style, " + tema + " theme, 8K HDR, professional lighting, depth of field, film color grading, golden ratio composition, volumetric light, photorealistic masterpiece.",
      "Cinematic emotional shot, " + duygu + " feeling, " + stil + " aesthetic, dramatic lighting, 8K HDR, award winning photography, professional color grading, bokeh background.",
      "Symbolic powerful image, " + tema + " concept, " + stil + " style, epic composition, 8K HDR, volumetric light, cinematic depth, masterpiece quality."
    ];
  }
  static async _buildGuzelSozScript(inputData, inputType, config) {
    let quoteText = "";
    if (typeof inputData === "string") {
      quoteText = inputData.trim();
      addSystemLog(`Metin girdisi: ${quoteText.length} karakter, ${quoteText.split(/\s+/).length} kelime`, "info");
    } else if (Array.isArray(inputData) && inputData.length > 0) {
      const videoFile = inputData.find((f) => f.type?.startsWith("video/"));
      const imageFile = inputData.find((f) => f.type?.startsWith("image/"));
      if (videoFile) {
        addSystemLog("Video dosyas\u0131 alg\u0131land\u0131, kare \xE7\u0131kar\u0131l\u0131yor...", "info");
        const extractFrame = () => new Promise((resolve) => {
          const video = document.createElement("video");
          video.muted = true;
          video.playsInline = true;
          const raw = videoFile.data.includes(",") ? videoFile.data.split(",")[1] : videoFile.data;
          const blob = _base64ToBlob(raw, videoFile.type || "video/mp4");
          video.src = ObjectURLManager.create(blob);
          video.onloadeddata = () => {
            video.currentTime = Math.min(1, video.duration * 0.1);
          };
          video.onseeked = () => {
            try {
              const canvas = document.createElement("canvas");
              canvas.width = video.videoWidth || 640;
              canvas.height = video.videoHeight || 480;
              canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
              ObjectURLManager.revoke(video.src);
              resolve(canvas.toDataURL("image/jpeg", 0.9).split(",")[1]);
            } catch (e) {
              ObjectURLManager.revoke(video.src);
              resolve(null);
            }
          };
          video.onerror = () => {
            ObjectURLManager.revoke(video.src);
            resolve(null);
          };
          setTimeout(() => {
            ObjectURLManager.revoke(video.src);
            resolve(null);
          }, 1e4);
        });
        const frameB64 = await extractFrame();
        if (frameB64) {
          addSystemLog("Videodan kare ba\u015Far\u0131yla \xE7\u0131kar\u0131ld\u0131, OCR ba\u015Fl\u0131yor...", "success");
          const imgType = "image/jpeg";
          quoteText = await ocrWithFallback(frameB64, imgType, apiKey, "Video OCR");
        }
        if (!quoteText) {
          quoteText = videoFile.name?.replace(/[_-]/g, " ").replace(/\.[^.]+$/, "") || "G\xFCzel bir s\xF6z";
          addSystemLog("OCR ba\u015Far\u0131s\u0131z, dosya ad\u0131 kullan\u0131ld\u0131.", "warn");
        }
      } else if (imageFile) {
        addSystemLog("Resim OCR ba\u015Fl\u0131yor (\u015Ferit tabanl\u0131)...", "info");
        const b64Data = imageFile.data.split(",")[1] || imageFile.data;
        const ocrImgType = imageFile.type || "image/jpeg";
        quoteText = await ocrWithFallback(b64Data, ocrImgType, apiKey, "G\xF6rsel OCR");
        if (!quoteText) {
          const rawName = imageFile.name.replace(/[_-]/g, " ").replace(/\.[^.]+$/, "");
          quoteText = rawName.length > 5 ? rawName : "G\xFCzel bir s\xF6z";
          addSystemLog("OCR ba\u015Far\u0131s\u0131z, dosya ad\u0131 kullan\u0131ld\u0131.", "warn");
        }
      } else {
        quoteText = inputData[0].name?.replace(/[_-]/g, " ").replace(/\.[^.]+$/, "") || "G\xFCzel bir s\xF6z";
      }
    }
    const isError = ERROR_PATTERNS.some((p) => p.test(quoteText));
    if (isError) {
      addSystemLog(`OCR hata mesaj\u0131 alg\u0131land\u0131: "${quoteText.substring(0, 50)}" \u2192 dosya ad\u0131 kullan\u0131lacak`, "warn");
      if (inputType === "media" && Array.isArray(inputData) && inputData[0]?.name) {
        quoteText = inputData[0].name.replace(/[_-]/g, " ").replace(/\.[^.]+$/, "");
      } else {
        quoteText = "G\xFCzel bir s\xF6z";
      }
    }
    if (!quoteText || quoteText.length < 3) quoteText = "G\xFCzel bir s\xF6z";
    addSystemLog(`Son s\xF6z metni: ${quoteText.length} karakter`, "info");
    const emotion = analyzeQuoteEmotion(quoteText);
    addSystemLog(`G\xFCzel s\xF6z: "${quoteText.substring(0, 60)}..." (duygu: ${emotion})`, "info");
    const ataturkKeywords = ["atat\xFCrk", "mustafa kemal", "samsun", "kurtulu\u015F", "cumhuriyet", "ba\u011F\u0131ms\u0131zl\u0131k", "milli m\xFCcadele", "ink\u0131lap", "devrim", "pa\u015Fa", "gazi", "an\u0131tkabir", "19 may\u0131s", "ulus"];
    const lowerQuote = quoteText.toLowerCase();
    const isAtaturkRelated = ataturkKeywords.some((kw) => lowerQuote.includes(kw));
    if (isAtaturkRelated) addSystemLog("Atat\xFCrk i\xE7erikli s\xF6z tespit edildi \u2014 \xF6zel g\xF6rseller \xFCretilecek.", "info");
    let sceneDescriptions = [];
    const sceneCount = AI_CONFIG.SCENE_COUNT;
    const perspectivePrompts = isAtaturkRelated ? [
      `Mustafa Kemal Atat\xFCrk standing heroically at Samsun harbor in 1919, dawn light, Turkish flag waving, cinematic patriotic scene, epic composition.`,
      `A dramatic scene of the Turkish War of Independence: soldiers marching through Anatolian mountains, Atat\xFCrk leading the charge, golden sunset, heroic atmosphere.`,
      `Modern Turkey's founding vision: Atat\xFCrk's reforms symbolized \u2014 women in modern clothing, new Turkish alphabet, secular education, Ankara parliament building, hopeful dawn light.`
    ] : [
      `A cinematic scene representing the meaning of this quote. Focus on the MAIN MESSAGE.`,
      `An artistic interpretation of this quote's emotional core. Focus on the FEELING.`,
      `A symbolic visual metaphor for this quote. Focus on the DEEPER MEANING.`
    ];
    for (let i = 0; i < sceneCount; i++) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${AI_CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;
        const payload = {
          contents: [{ parts: [{ text: `Generate a detailed English image prompt for this quote.

Quote: "${quoteText}"
Emotion: ${emotion}
Perspective: ${perspectivePrompts[i]}

Rules:
- 1-2 sentences, detailed and visual
- NO text in the image
- Cinematic lighting and composition
- Match the emotional tone` }] }],
          generationConfig: { temperature: AI_CONFIG.TEMPERATURE, maxOutputTokens: AI_CONFIG.MAX_OUTPUT_TOKENS }
        };
        const r = await NetworkUtils.fetchWithRetry(url, { method: "POST", body: JSON.stringify(payload) });
        if (!r) continue;
        const data = await r.json();
        const desc = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
        if (desc) {
          sceneDescriptions.push(desc);
          addSystemLog(`Sahne ${i + 1} tan\u0131mland\u0131.`, "success");
        }
      } catch (e) {
        addSystemLog(`Sahne ${i + 1} hatas\u0131: ${e.message}`, "warn");
      }
    }
    if (sceneDescriptions.length === 0) {
      if (isAtaturkRelated) {
        sceneDescriptions = [
          "Mustafa Kemal Atat\xFCrk at Samsun harbor 1919, dawn, Turkish flag, cinematic patriotic scene, epic composition",
          "Turkish War of Independence, soldiers marching through Anatolian mountains, golden sunset, heroic atmosphere",
          "Founding of modern Turkey, Ankara parliament, secular reforms, hopeful dawn light, national pride"
        ];
      } else {
        const stopWords = ["bir", "ile", "i\xE7in", "olan", "de\u011Fil", "daha", "\xE7ok", "kadar", "sonra", "\xF6nce", "b\xF6yle", "\u015F\xF6yle", "ancak", "hem", "ya", "ki", "ise", "gibi", "ama", "ve", "da", "de", "mi", "m\u0131", "mu", "m\xFC", "ben", "sen", "biz", "siz", "o", "bu", "\u015Fu", "ne", "nas\u0131l", "neden", "ni\xE7in", "kim", "kime", "kimin", "her", "hi\xE7"];
        const words = quoteText.toLowerCase().replace(/[^\wçğıöşüÇĞIİÖŞÜ\s]/g, "").split(/\s+/).filter((w) => w.length > 2 && !stopWords.includes(w));
        const uniqueWords = [...new Set(words)].slice(0, 8);
        const emotionSceneMap = {
          "mutlu": "bright, sunny, joyful atmosphere, warm golden colors, people smiling, soft bokeh lights, celebration mood",
          "h\xFCz\xFCnl\xFC": "melancholic, rainy window, emotional, soft blue lighting, contemplative mood, lone figure, misty atmosphere",
          "romantik": "romantic sunset, candlelight, intimate setting, soft focus, dreamy atmosphere, warm tones, couple silhouette",
          "notr": "artistic, symbolic, abstract geometric, dramatic lighting, cinematic composition"
        };
        const emotionScene = emotionSceneMap[emotion] || emotionSceneMap["notr"];
        for (let i = 0; i < 3; i++) {
          sceneDescriptions.push(uniqueWords.length > 0 ? `A symbolic ${emotionScene} scene variation ${i + 1} representing: ${uniqueWords.join(", ")} \u2014 highly detailed, cinematic composition` : `A beautiful artistic scene with ${emotionScene} variation ${i + 1} \u2014 highly detailed, cinematic composition`);
        }
      }
    }
    let realImageUrls = [];
    if (isAtaturkRelated) {
      addSystemLog("Atat\xFCrk g\xF6rselleri Wikimedia Commons'tan \xE7ekiliyor...", "info");
      const searchQueries = ["Mustafa Kemal Atat\xFCrk", "Samsun 1919", "Turkish War of Independence"];
      for (const q of searchQueries) {
        const urls = await fetchWikimediaImages(q, 1);
        realImageUrls.push(...urls);
      }
      if (realImageUrls.length > 0) {
        addSystemLog(`${realImageUrls.length} ger\xE7ek Atat\xFCrk g\xF6rseli bulundu.`, "success");
      } else {
        addSystemLog("Wikimedia'dan g\xF6rsel bulunamad\u0131 \u2014 AI g\xF6rseller kullan\u0131lacak.", "warn");
      }
    }
    return {
      isContentUnreadable: false,
      videoSlides: sceneDescriptions.map((desc, i) => ({
        topText: quoteText,
        spokenText: i === 0 ? quoteText : "",
        imagePrompts: [desc]
      })),
      thumbnailText: quoteText.length > 120 ? quoteText.substring(0, 120) + "..." : quoteText,
      sonSoz: "",
      lastQuote: quoteText,
      thumbnailImagePrompt: sceneDescriptions[0] || "",
      tiktokTitle: quoteText.substring(0, 60),
      tiktokDescription: quoteText,
      tiktokHashtags: isAtaturkRelated ? ["#atat\xFCrk", "#mustafakemal", "#samsun", "#19may\u0131s", "#kurtulu\u015Fsava\u015F\u0131", "#cumhuriyet"] : ["#g\xFCzels\xF6z", "#\xF6zls\xF6z", "#motivasyon"],
      _suggestedMusic: null,
      _isAtaturkRelated: isAtaturkRelated,
      _realImageUrls: realImageUrls,
      // Gerçek görseller (Atatürk vb.)
      mediaBlackout: { show: false, percentageCovered: 0, percentageIgnored: 0, mediaNames: [], explanation: "" },
      chartData: { show: false, type: "bar", title: "", note: "", items: [] },
      _isGuzelSoz: true,
      _emotion: emotion,
      _sceneCount: sceneDescriptions.length
    };
  }
}
class MediaSynthesisService {
  static generateProceduralFallback(prompt, imageStyle) {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    const grad = ctx.createRadialGradient(512, 512, 50, 512, 512, 600);
    grad.addColorStop(0, "#1e1b4b");
    grad.addColorStop(0.5, "#0f172a");
    grad.addColorStop(1, "#020617");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);
    ctx.strokeStyle = "rgba(99, 102, 241, 0.08)";
    ctx.lineWidth = 1;
    for (let x = 0; x < 1024; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1024);
      ctx.stroke();
    }
    for (let y = 0; y < 1024; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.font = "bold 24px 'Inter', Arial";
    ctx.textAlign = "center";
    ctx.fillText("OTONOM", 512, 950);
    return canvas.toDataURL("image/jpeg", 0.85);
  }
  static generateQuoteFallback(quoteText, emotion) {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    const colorMap = {
      "mutlu": { bg1: "#fbbf24", bg2: "#f59e0b", accent: "#fcd34d", glow: "#fef3c7" },
      "h\xFCz\xFCnl\xFC": { bg1: "#3b82f6", bg2: "#1d4ed8", accent: "#93c5fd", glow: "#dbeafe" },
      "romantik": { bg1: "#ec4899", bg2: "#be185d", accent: "#f9a8d4", glow: "#fce7f3" },
      "notr": { bg1: "#6366f1", bg2: "#4338ca", accent: "#a5b4fc", glow: "#e0e7ff" }
    };
    const colors = colorMap[emotion] || colorMap["notr"];
    const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
    grad.addColorStop(0, colors.bg1);
    grad.addColorStop(0.5, colors.bg2);
    grad.addColorStop(1, "#0f172a");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const r = 50 + Math.random() * 150;
      const circleGrad = ctx.createRadialGradient(x, y, 0, x, y, r);
      circleGrad.addColorStop(0, colors.accent + "40");
      circleGrad.addColorStop(1, "transparent");
      ctx.fillStyle = circleGrad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    const words = quoteText.split(/\s+/).filter((w) => w.length > 3).slice(0, 5);
    ctx.fillStyle = colors.glow + "30";
    ctx.font = "bold 80px Georgia, serif";
    ctx.textAlign = "center";
    words.forEach((word, i) => {
      const x = 150 + i % 3 * 250;
      const y = 300 + Math.floor(i / 3) * 200;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((Math.random() - 0.5) * 0.3);
      ctx.fillText(word.substring(0, 8), 0, 0);
      ctx.restore();
    });
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.font = "bold 120px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText('"', 150, 250);
    ctx.fillText('"', 900, 850);
    return canvas.toDataURL("image/jpeg", 0.9);
  }
  static async generateImage(prompt, imageStyle = "cinematic", resolution = "4K", isGuzelSoz = false, emotion = "notr", quoteText = "") {
    let resText = "8k resolution, highly detailed";
    if (resolution === "1K") resText = "1080p resolution, clear and sharp";
    if (resolution === "2K") resText = "4k resolution, high quality";
    const stylePrefixes = {
      "watercolor": `Abstract watercolor painting style, soft and artistic, ${resText}`,
      "sketch": `Pencil sketch drawing, black and white, ${resText}`,
      "oil_painting": `Classic oil painting style, ${resText}`,
      "minimalist": `Minimalist illustration, clean lines, ${resText}`,
      "cyberpunk": `Cyberpunk, futuristic, neon lights, ${resText}`,
      "retro": `Retro vintage style, 80s aesthetic, ${resText}`,
      "3d_render": `High quality 3D render, unreal engine 5 style, ${resText}`,
      "anime": `High quality anime style, Studio Ghibli inspired, ${resText}`
    };
    let stylePrefix = stylePrefixes[imageStyle] || `Cinematic, photorealistic, ${resText}`;
    const excludeStyles = ["watercolor", "sketch", "oil_painting", "retro", "anime"];
    if (!excludeStyles.includes(imageStyle)) stylePrefix += `, subtle AI neural network elements, neon accents`;
    const contextLabel = isGuzelSoz ? "quote illustration" : "news context";
    const fullPrompt = `${stylePrefix}, ${contextLabel}: ${prompt}. Safe, no text, no violence.`;
    try {
      addSystemLog(`G\xF6rsel \xE7iziliyor: "${prompt.substring(0, 40)}..."`, "info");
      const payload = { instances: { prompt: fullPrompt }, parameters: { sampleCount: 1 } };
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (r.ok) {
        const d = await r.json();
        if (d.predictions?.[0]?.bytesBase64Encoded) return `data:image/png;base64,${d.predictions[0].bytesBase64Encoded}`;
      }
    } catch (err) {
      ErrorHandler.silent(err);
    }
    try {
      const payload = { contents: [{ parts: [{ text: fullPrompt }] }], generationConfig: { responseModalities: ["TEXT", "IMAGE"] } };
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (r.ok) {
        const d = await r.json();
        const base64 = d.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)?.inlineData?.data;
        if (base64) return `data:image/jpeg;base64,${base64}`;
      }
    } catch (err) {
      ErrorHandler.silent(err);
    }
    if (isGuzelSoz && quoteText) {
      addSystemLog("Quote uyumlu fallback g\xF6rsel \xFCretiliyor...", "warn");
      return this.generateQuoteFallback(quoteText, emotion);
    }
    return this.generateProceduralFallback(prompt, imageStyle);
  }
  static async generateAudio(text, voice) {
    if (!text || voice === "none") return null;
    let cleanText = text.replace(/[*_#"']/g, "").replace(/\.\.\./g, ", ").replace(/\n/g, " ").replace(/[:;/\\|{}[\]<>^~`]/g, ", ").replace(/\s+/g, " ").trim();
    if (cleanText.length < 2) return null;
    const expectedMinDuration = Math.max(2, cleanText.split(/\s+/).length / 2.5);
    const maxRetries = 2;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        if (attempt === 0) addSystemLog(`Ses sentezleniyor (${voice}): "${cleanText.substring(0, 40)}..."`, "info");
        else addSystemLog(`TTS deneme ${attempt + 1}/${maxRetries + 1}...`, "info");
        const payload = { model: "gemini-2.5-flash-preview-tts", contents: [{ parts: [{ text: cleanText }] }], generationConfig: { responseModalities: ["AUDIO"], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } } };
        const r = await NetworkUtils.fetchWithRetry(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, { method: "POST", body: JSON.stringify(payload) });
        if (!r || !r.ok) {
          addSystemLog(`TTS API yan\u0131t hatas\u0131: ${r?.status || "undefined"}`, "warn");
          continue;
        }
        const d = await r.json();
        const b64Data = d.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!b64Data) {
          addSystemLog("TTS API bo\u015F ses d\xF6nd\xFCrd\xFC.", "warn");
          continue;
        }
        let sampleRate = 24e3;
        const binaryStr = atob(b64Data);
        const pcmBytes = new Uint8Array(binaryStr.length);
        for (let i = 0; i < binaryStr.length; i++) pcmBytes[i] = binaryStr.charCodeAt(i);
        const audioDuration = pcmBytes.length / (sampleRate * 2);
        if (audioDuration < expectedMinDuration * 0.5 && attempt < maxRetries) {
          addSystemLog(`Ses \xE7ok k\u0131sa (${audioDuration.toFixed(1)}sn), tekrar deneniyor...`, "warn");
          continue;
        }
        const pcmView = new DataView(pcmBytes.buffer);
        let maxAmplitude = 0;
        for (let i = 0; i < pcmView.byteLength - 1; i += 2) {
          const sample = Math.abs(pcmView.getInt16(i, true));
          if (sample > maxAmplitude) maxAmplitude = sample;
        }
        if (maxAmplitude > 0 && maxAmplitude < 16e3) {
          const boostFactor = Math.min(26e3 / maxAmplitude, 3);
          for (let i = 0; i < pcmView.byteLength - 1; i += 2) {
            let sample = pcmView.getInt16(i, true);
            sample = Math.round(sample * boostFactor);
            sample = Math.max(-32768, Math.min(32767, sample));
            pcmView.setInt16(i, sample, true);
          }
          addSystemLog(`Ses normalize edildi (boost: ${boostFactor.toFixed(1)}x)`, "info");
        }
        const numChannels = 1;
        const bitsPerSample = 16;
        const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
        const blockAlign = numChannels * (bitsPerSample / 8);
        const wavBuffer = new ArrayBuffer(44 + pcmBytes.length);
        const view = new DataView(wavBuffer);
        const writeString = (offset, str) => {
          for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
        };
        writeString(0, "RIFF");
        view.setUint32(4, 36 + pcmBytes.length, true);
        writeString(8, "WAVE");
        writeString(12, "fmt ");
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, byteRate, true);
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, bitsPerSample, true);
        writeString(36, "data");
        view.setUint32(40, pcmBytes.length, true);
        new Uint8Array(wavBuffer, 44).set(pcmBytes);
        addSystemLog(`Ses haz\u0131r: ${(pcmBytes.length / 1024).toFixed(0)}KB, ${sampleRate}Hz`, "success");
        return { wavBuffer, sampleRate };
      } catch (e) {
        addSystemLog(`TTS deneme ${attempt + 1} hatas\u0131: ${e.message}`, "warn");
        if (attempt === maxRetries) {
          addSystemLog("TTS t\xFCm denemeler ba\u015Far\u0131s\u0131z.", "error");
          return null;
        }
      }
    }
    return null;
  }
}
class AmbientAudioService {
  static createNoiseBuffer(audioCtx, type = "white") {
    const bufferSize = audioCtx.sampleRate * 5;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (type === "brown") {
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      } else {
        data[i] = white * 0.5;
      }
    }
    return buffer;
  }
  static getAmbientNode(audioCtx, type) {
    const noiseBuffer = this.createNoiseBuffer(audioCtx, type === "fire" ? "brown" : "white");
    const noiseSource = audioCtx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;
    const filter = audioCtx.createBiquadFilter();
    const gain = audioCtx.createGain();
    if (type === "rain") {
      filter.type = "lowpass";
      filter.frequency.value = 800;
      gain.gain.value = 0.3;
      noiseSource.connect(filter).connect(gain);
    } else if (type === "waves") {
      filter.type = "lowpass";
      filter.frequency.value = 400;
      const lfo = audioCtx.createOscillator();
      lfo.type = "sine";
      lfo.frequency.value = 0.1;
      const lfoGain = audioCtx.createGain();
      lfoGain.gain.value = 1.5;
      gain.gain.value = 0.3;
      lfo.connect(lfoGain).connect(gain.gain);
      lfo.start();
      noiseSource.connect(filter).connect(gain);
    } else return null;
    noiseSource.start(0);
    return { source: noiseSource, gainNode: gain };
  }
}
const RenderWorkerService = {
  _outroParticles: [],
  wrapText: (ctx, text, maxWidth) => {
    if (!text) return [];
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      if (ctx.measureText(currentLine + " " + words[i]).width < maxWidth) currentLine += " " + words[i];
      else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }
    lines.push(currentLine);
    return lines;
  },
  calculateSubtitles: (text, exactAudioDur) => {
    if (!text) return [];
    const words = text.replace(/\n/g, " ").split(/\s+/).filter(Boolean);
    if (words.length === 0) return [];
    const safeDur = Math.max(exactAudioDur, 0.1);
    const subs = [];
    const wordsPerSub = 2;
    const totalSubs = Math.ceil(words.length / wordsPerSub);
    const baseDurPerSub = safeDur / totalSubs;
    let currentStartTime = 0;
    for (let i = 0; i < words.length; i += wordsPerSub) {
      const word1 = words[i];
      const word2 = words[i + 1] || "";
      const chunkText = (word1 + " " + word2).trim();
      const isLastSub = i + wordsPerSub >= words.length;
      const chunkDur = isLastSub ? safeDur - currentStartTime : baseDurPerSub;
      subs.push({ text: chunkText, startSec: currentStartTime, endSec: Math.min(currentStartTime + chunkDur + 0.1, safeDur) });
      currentStartTime += chunkDur;
    }
    return subs;
  },
  drawImageContain: (ctx, img, w, h) => {
    const imgRatio = img.width / img.height;
    const canvasRatio = w / h;
    let drawW = w, drawH = h, offsetX = 0, offsetY = 0;
    if (imgRatio > canvasRatio) {
      drawH = w / imgRatio;
      offsetY = (h - drawH) / 2;
    } else {
      drawW = h * imgRatio;
      offsetX = (w - drawW) / 2;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  },
  drawImageCover: (ctx, img, w, h) => {
    const imgRatio = img.width / img.height;
    const canvasRatio = w / h;
    let drawW = w, drawH = h, offsetX = 0, offsetY = 0;
    if (imgRatio > canvasRatio) {
      drawW = h * imgRatio;
      offsetX = (w - drawW) / 2;
    } else {
      drawH = w / imgRatio;
      offsetY = (h - drawH) / 2;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  },
  drawThumbnail: (ctx, img, text, w, h, fontFamily, sourceName, config) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
    if (img) RenderWorkerService.drawImageContain(ctx, img, w, h);
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, "rgba(0,0,0,0.92)");
    grad.addColorStop(0.12, "rgba(0,0,0,0.20)");
    grad.addColorStop(0.8, "rgba(0,0,0,0.20)");
    grad.addColorStop(1, "rgba(0,0,0,0.92)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    const now = /* @__PURE__ */ new Date();
    const dateLocale = { tr: "tr-TR", en: "en-US", fr: "fr-FR", de: "de-DE", es: "es-ES", ar: "ar-SA", ru: "ru-RU" }[config?.language || "tr"] || "tr-TR";
    const dateStr = now.toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" });
    const dayStr = now.toLocaleDateString(dateLocale, { weekday: "long" });
    const dateLine = (dateStr + " " + dayStr).toUpperCase();
    const cx = w / 2;
    const barH = Math.round(h * 0.125);
    const sourceFontSize = Math.round(h * 0.022) + 4;
    const dateFontSize = Math.round(h * 0.018) + 4;
    const spacing = 3;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, barH);
    if (sourceName) {
      ctx.font = `900 ${sourceFontSize}px ${fontFamily}`;
      const textW = ctx.measureText(sourceName.toUpperCase()).width;
      const redBoxW = textW + 24;
      const redBoxH = sourceFontSize + 14;
      const redBoxX = cx - redBoxW / 2;
      const redBoxY = Math.round(barH * 0.38);
      const radius = redBoxH / 2;
      ctx.fillStyle = "#E30A17";
      ctx.beginPath();
      ctx.moveTo(redBoxX + radius, redBoxY);
      ctx.lineTo(redBoxX + redBoxW - radius, redBoxY);
      ctx.arc(redBoxX + redBoxW - radius, redBoxY + radius, radius, -Math.PI / 2, Math.PI / 2);
      ctx.lineTo(redBoxX + radius, redBoxY + redBoxH);
      ctx.arc(redBoxX + radius, redBoxY + radius, radius, Math.PI / 2, -Math.PI / 2);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = `900 ${sourceFontSize}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(sourceName.toUpperCase(), cx, redBoxY + redBoxH / 2);
    }
    const dateY = sourceName ? Math.round(barH * 0.38) + sourceFontSize + 14 + spacing + dateFontSize / 2 : barH * 0.78;
    ctx.fillStyle = "#FFFFFF";
    ctx.font = `900 ${dateFontSize}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(dateLine, cx, dateY);
    const titleAreaTop = barH + h * 0.02;
    const titleAreaBottom = h * 0.93;
    const titleAreaH = titleAreaBottom - titleAreaTop;
    let thumbFontSize = w > 800 ? 110 : 80;
    ctx.font = `900 ${thumbFontSize}px ${fontFamily}`;
    let lines = RenderWorkerService.wrapText(ctx, (text || "\u015EOK HABER!").toUpperCase(), w * 0.88);
    let lh = thumbFontSize * 1.12;
    while (lines.length * lh > titleAreaH && thumbFontSize > 28) {
      thumbFontSize -= 4;
      ctx.font = `900 ${thumbFontSize}px ${fontFamily}`;
      lines = RenderWorkerService.wrapText(ctx, (text || "\u015EOK HABER!").toUpperCase(), w * 0.9);
      lh = thumbFontSize * 1.12;
    }
    if (lines.length * lh > titleAreaH) lh = titleAreaH / lines.length;
    const totalTitleH = lines.length * lh;
    const titleStartY = titleAreaTop + (titleAreaH - totalTitleH) / 2;
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,1)";
    ctx.shadowBlur = 30;
    ctx.shadowOffsetY = 10;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    lines.forEach((l, i) => {
      const y = titleStartY + i * lh + lh / 2;
      ctx.lineWidth = Math.max(4, thumbFontSize * 0.22);
      ctx.strokeStyle = "#000000";
      ctx.lineJoin = "round";
      ctx.strokeText(l, cx, y);
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(l, cx, y);
    });
    ctx.restore();
  },
  drawStar: (ctx, cx, cy, spikes, outerRadius, innerRadius, color = "#FFFFFF") => {
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      let x = cx + Math.cos(rot) * outerRadius;
      let y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;
      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  },
  renderGuzelSoz: async (jobData, canvasElement, w, h, cx, fontFamily, preferences) => {
    addSystemLog("G\xFCzel s\xF6z render ba\u015Fl\u0131yor...", "info");
    const quoteText = jobData.script.videoSlides[0]?.spokenText || "";
    const audioData = jobData.assets.audio[0];
    const FPS = 30;
    canvasElement.width = w;
    canvasElement.height = h;
    const ctx = canvasElement.getContext("2d");
    addSystemLog(`Canvas: ${w}x${h}`, "info");
    const audioCtx = _getAudioCtx();
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume().catch((e) => {
      ErrorHandler.silent(e);
    });
    const audioDest = audioCtx ? audioCtx.createMediaStreamDestination() : null;
    const { osc: silentOsc, gain: silentGain } = _createSilentOsc(audioCtx, audioDest);
    let audioDuration = 8;
    const wordCount = quoteText.split(/\s+/).filter(Boolean).length;
    const minDurFromWords = Math.max(5, wordCount / 2.2 + 3);
    const maxAllowedDur = 120;
    addSystemLog(`Kelime: ${wordCount}, beklenen: ${minDurFromWords.toFixed(1)}sn`, "info");
    let audioPlayed = false;
    if (audioData?.wavBuffer) {
      try {
        let bufferCopy;
        if (audioData.wavBuffer instanceof ArrayBuffer) bufferCopy = audioData.wavBuffer.slice(0);
        else if (audioData.wavBuffer.buffer instanceof ArrayBuffer) bufferCopy = audioData.wavBuffer.buffer.slice(0);
        else bufferCopy = audioData.wavBuffer;
        const audioBuf = await audioCtx.decodeAudioData(bufferCopy);
        const source = audioCtx.createBufferSource();
        source.buffer = audioBuf;
        source.playbackRate.value = 1;
        const rawDur = audioBuf.duration + 0.5;
        audioDuration = Math.min(Math.max(rawDur, minDurFromWords), maxAllowedDur);
        if (rawDur > maxAllowedDur) addSystemLog(`Ses \xE7ok uzun (${rawDur.toFixed(0)}sn), ${maxAllowedDur}sn'ye s\u0131n\u0131rland\u0131.`, "warn");
        addSystemLog(`Ses: ${audioBuf.duration.toFixed(1)}sn \u2192 Video: ${audioDuration.toFixed(1)}sn`, "info");
        const gain = audioCtx.createGain();
        gain.gain.value = preferences?.narratorVolume ?? 0.8;
        source.connect(gain);
        gain.connect(audioDest);
        source.start(0);
        audioPlayed = true;
      } catch (e) {
        addSystemLog("Ses decode hatas\u0131: " + e.message, "warn");
      }
    }
    if (!audioPlayed) {
      audioDuration = Math.min(minDurFromWords, maxAllowedDur);
      addSystemLog(`Ses yok, video: ${audioDuration.toFixed(1)}sn`, "warn");
    }
    const bufferTime = 1;
    const totalDuration = Math.min(audioDuration + bufferTime, maxAllowedDur + bufferTime);
    const totalFrames = Math.round(totalDuration * FPS);
    addSystemLog(`Toplam s\xFCre: ${totalDuration.toFixed(1)}sn (${audioDuration.toFixed(1)}sn ses + ${bufferTime}sn buffer)`, "info");
    let ambientSound = jobData.preferences?.ambientSound || SafeStorage.getItem("ns_selectedBgmId") || "none";
    if (ambientSound === "none") {
      try {
        const allMusic = await AssetManagerService.getAllMusicFromLib();
        if (allMusic.length > 0) {
          ambientSound = allMusic[0].id;
          addSystemLog(`M\xFCzik otomatik se\xE7ildi: ${allMusic[0].name}`, "info");
        }
      } catch (e) {
        ErrorHandler.silent(e);
      }
    }
    if (ambientSound !== "none") {
      const ambientTypes = ["rain", "wind", "waves", "fire"];
      if (ambientTypes.includes(ambientSound)) {
        try {
          const ambientObj = AmbientAudioService.getAmbientNode(audioCtx, ambientSound);
          if (ambientObj) {
            bgmSource = ambientObj.source;
            masterGain = audioCtx.createGain();
            masterGain.gain.value = preferences?.backgroundMusicVolume ?? 0.3;
            ambientObj.gainNode.connect(masterGain);
            masterGain.connect(audioDest);
            addSystemLog("Atmosfer sesi: " + ambientSound, "success");
          }
        } catch (e) {
          addSystemLog("Atmosfer sesi hatas\u0131: " + e.message, "warn");
        }
      } else {
        try {
          const track = await AssetManagerService.getMusicFromLib(ambientSound);
          if (track && track.data) {
            const blob = _base64ToBlob(track.data);
            const musicUrl = ObjectURLManager.create(blob);
            const res = await fetch(musicUrl);
            const buf = await audioCtx.decodeAudioData(await res.arrayBuffer());
            if (!bgmSource) {
              bgmSource = audioCtx.createBufferSource();
              bgmSource.buffer = buf;
              bgmSource.loop = true;
            }
            masterGain = audioCtx.createGain();
            masterGain.gain.value = preferences?.backgroundMusicVolume ?? 0.3;
            bgmSource.connect(masterGain);
            masterGain.connect(audioDest);
            bgmSource.start(0);
            addSystemLog("M\xFCzik y\xFCklendi: " + track.name, "success");
          } else {
            addSystemLog(`M\xFCzik bulunamad\u0131: ${ambientSound}`, "warn");
          }
        } catch (e) {
          addSystemLog("M\xFCzik y\xFCkleme hatas\u0131: " + e.message, "warn");
        }
      }
    } else {
      addSystemLog("M\xFCzik se\xE7ilmedi", "warn");
    }
    const stream = canvasElement.captureStream(0);
    const videoTrack = stream.getVideoTracks()[0];
    if (audioDest) {
      audioDest.stream.getAudioTracks().forEach((t) => stream.addTrack(t));
    }
    let mimeType = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
    if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = "video/mp4";
    if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = "video/webm; codecs=vp8,opus";
    if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = "video/webm";
    const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 4e6, audioBitsPerSecond: 128e3 });
    const chunks = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };
    recorder.start(100);
    const images = jobData.assets.images.filter((img) => img);
    const loadedImages = [];
    for (const imgData of images) {
      const img = await NetworkUtils.loadImage(imgData);
      if (img) loadedImages.push(img);
    }
    if (loadedImages.length === 0) loadedImages.push(null);
    addSystemLog(`${loadedImages.length} g\xF6rsel y\xFCklendi, ${totalFrames} kare render edilecek.`, "info");
    const framesPerImage = Math.floor(totalFrames / loadedImages.length);
    const crossfadeFrames = Math.floor(FPS * 0.5);
    const timerWorker = _createTimerWorker();
    timerWorker.postMessage("start");
    let frameResolvers = [];
    timerWorker.onmessage = () => {
      const resolvers = frameResolvers;
      frameResolvers = [];
      resolvers.forEach((r) => r());
    };
    const nextFrame = () => new Promise((resolve) => {
      frameResolvers.push(resolve);
    });
    sysEventBus.emit("PROGRESS", { step: "RENDER", percent: 30, text: "G\xFCzel s\xF6z render ediliyor..." });
    const kenBurnsDir = Math.floor(Math.random() * 4);
    for (let frame = 0; frame < totalFrames; frame++) {
      const progress = frame / totalFrames;
      const elapsed = frame / FPS;
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);
      const currentImageIndex = Math.min(Math.floor(frame / framesPerImage), loadedImages.length - 1);
      const nextImageIndex = Math.min(currentImageIndex + 1, loadedImages.length - 1);
      const frameInImage = frame % framesPerImage;
      if (loadedImages[currentImageIndex]) {
        const t = frameInImage / framesPerImage;
        const zoom = 1 + 0.08 * t;
        const panX = [-0.04, 0.04, 0, 0][kenBurnsDir] * w * t;
        const panY = [0, 0, -0.04, 0.04][kenBurnsDir] * h * t;
        ctx.save();
        ctx.translate(w / 2 + panX, h / 2 + panY);
        ctx.scale(zoom, zoom);
        const imgRatio = loadedImages[currentImageIndex].width / loadedImages[currentImageIndex].height;
        const canRatio = w / h;
        let sx, sy, sw, sh;
        if (imgRatio > canRatio) {
          sh = loadedImages[currentImageIndex].height;
          sw = sh * canRatio;
          sx = (loadedImages[currentImageIndex].width - sw) / 2;
          sy = 0;
        } else {
          sw = loadedImages[currentImageIndex].width;
          sh = sw / canRatio;
          sx = 0;
          sy = (loadedImages[currentImageIndex].height - sh) / 2;
        }
        ctx.drawImage(loadedImages[currentImageIndex], sx, sy, sw, sh, -w / 2, -h / 2, w, h);
        ctx.restore();
      }
      if (frameInImage > framesPerImage - crossfadeFrames && nextImageIndex !== currentImageIndex && loadedImages[nextImageIndex]) {
        const fadeProgress = (frameInImage - (framesPerImage - crossfadeFrames)) / crossfadeFrames;
        ctx.globalAlpha = fadeProgress;
        ctx.drawImage(loadedImages[nextImageIndex], 0, 0, w, h);
        ctx.globalAlpha = 1;
      }
      const ov = ctx.createLinearGradient(0, 0, 0, h);
      ov.addColorStop(0, "rgba(0,0,0,0.5)");
      ov.addColorStop(0.3, "rgba(0,0,0,0.1)");
      ov.addColorStop(0.7, "rgba(0,0,0,0.1)");
      ov.addColorStop(1, "rgba(0,0,0,0.6)");
      ctx.fillStyle = ov;
      ctx.fillRect(0, 0, w, h);
      const fadeIn = Math.min(1, elapsed / 0.8);
      ctx.save();
      ctx.globalAlpha = fadeIn;
      const maxLines = Math.floor(h * 0.7 / (36 * 1.5));
      const testFontSize = w > 800 ? 42 : 32;
      ctx.font = `bold ${testFontSize}px ${fontFamily}`;
      const allLines = RenderWorkerService.wrapText(ctx, quoteText, w * 0.82);
      const isLongText = allLines.length > maxLines;
      if (isLongText) {
        const scrollOffset = Math.floor(progress * allLines.length);
        const visibleLines = allLines.slice(scrollOffset, scrollOffset + maxLines);
        const lh = testFontSize * 1.5;
        const startY = h * 0.15;
        visibleLines.forEach((line, i) => {
          const y = startY + i * lh + lh / 2;
          const lineProgress = (scrollOffset + i) / allLines.length;
          const lineAlpha = lineProgress < 0.05 ? lineProgress / 0.05 : lineProgress > 0.95 ? (1 - lineProgress) / 0.05 : 1;
          ctx.globalAlpha = fadeIn * Math.max(0, Math.min(1, lineAlpha));
          ctx.font = `bold ${testFontSize}px ${fontFamily}`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.lineWidth = 5;
          ctx.strokeStyle = "#000000";
          ctx.lineJoin = "round";
          ctx.strokeText(line, cx, y);
          ctx.fillStyle = "#FFFFFF";
          ctx.fillText(line, cx, y);
        });
      } else {
        let fitFontSize = w > 800 ? 48 : 38;
        let fitLines = allLines;
        let lh = fitFontSize * 1.5;
        let totalH = fitLines.length * lh;
        while (totalH > h * 0.7 && fitFontSize > 18) {
          fitFontSize -= 2;
          ctx.font = `bold ${fitFontSize}px ${fontFamily}`;
          fitLines = RenderWorkerService.wrapText(ctx, quoteText, w * 0.82);
          lh = fitFontSize * 1.5;
          totalH = fitLines.length * lh;
        }
        ctx.font = `bold ${fitFontSize}px ${fontFamily}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const startY = (h - totalH) / 2;
        fitLines.forEach((line, i) => {
          const y = startY + i * lh + lh / 2;
          ctx.lineWidth = 5;
          ctx.strokeStyle = "#000000";
          ctx.lineJoin = "round";
          ctx.strokeText(line, cx, y);
          ctx.fillStyle = "#FFFFFF";
          ctx.fillText(line, cx, y);
        });
      }
      ctx.restore();
      if (videoTrack && videoTrack.requestFrame) videoTrack.requestFrame();
      if (frame % 30 === 0) sysEventBus.emit("PROGRESS", { step: "RENDER", percent: Math.min(90, 30 + progress * 60), text: `${elapsed.toFixed(1)}sn / ${totalDuration.toFixed(1)}sn` });
      await nextFrame();
    }
    if (bgmSource) {
      try {
        bgmSource.stop();
      } catch (e) {
        ErrorHandler.silent(e);
      }
    }
    if (masterGain) masterGain.disconnect();
    silentOsc.stop();
    silentOsc.disconnect();
    timerWorker.postMessage("stop");
    timerWorker.terminate();
    addSystemLog("Recorder durduruluyor...", "info");
    const videoPromise = new Promise((resolve, reject) => {
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: mimeType });
        addSystemLog(`Video haz\u0131r: ${(blob.size / 1024).toFixed(0)}KB, ${totalDuration.toFixed(1)}sn`, blob.size > 0 ? "success" : "error");
        if (blob.size === 0) return reject(new Error("Video olu\u015Fturulamad\u0131."));
        resolve({ url: ObjectURLManager.create(blob), blobType: blob.type });
      };
    });
    if (recorder.state !== "inactive") {
      try {
        recorder.requestData();
      } catch (e) {
        ErrorHandler.silent(e);
      }
      await new Promise((r) => setTimeout(r, 200));
      recorder.stop();
    }
    stream.getTracks().forEach((t) => t.stop());
    return await videoPromise;
  },
  executeRender: async (jobData, canvasElement, preferences) => {
    if (jobData.script) {
      if (jobData.script.thumbnailText) jobData.script.thumbnailText = LogicEngineService.validateTurkishText(jobData.script.thumbnailText);
      if (jobData.script.sonSoz) jobData.script.sonSoz = LogicEngineService.validateTurkishText(jobData.script.sonSoz);
      if (jobData.script.lastQuote) jobData.script.lastQuote = LogicEngineService.validateTurkishText(jobData.script.lastQuote);
      if (jobData.script.videoSlides) {
        jobData.script.videoSlides.forEach(function(slide) {
          if (slide.spokenText) slide.spokenText = LogicEngineService.validateTurkishText(slide.spokenText);
          if (slide.topText) slide.topText = LogicEngineService.validateTurkishText(slide.topText);
        });
      }
    }
    const econErrors = LogicEngineService.validateEconomyData(jobData.script);
    if (econErrors.length > 0) {
      addSystemLog("Ekonomi uyarilari: " + econErrors.join(", "), "warn");
    }
    addSystemLog("Video render ba\u015Flat\u0131l\u0131yor...", "info");
    const aspectRatio = jobData.config.aspectRatio || "9:16";
    const w = aspectRatio === "16:9" ? 1280 : aspectRatio === "1:1" ? 1080 : 720;
    const h = aspectRatio === "16:9" ? 720 : aspectRatio === "1:1" ? 1080 : 1280;
    const cx = w / 2;
    canvasElement.width = w;
    canvasElement.height = h;
    const ctx = canvasElement.getContext("2d");
    ctx.fillStyle = "#0B0F19";
    ctx.fillRect(0, 0, w, h);
    if (jobData.config.outputType === "image") {
      sysEventBus.emit("PROGRESS", { step: "RENDER", percent: 90, text: "G\xF6rsel Paketleniyor..." });
      const promptImageToUse = jobData.assets.images[0] || jobData.assets.thumbnail;
      if (promptImageToUse) {
        const sImg = await NetworkUtils.loadImage(promptImageToUse);
        if (sImg) RenderWorkerService.drawImageContain(ctx, sImg, w, h);
      }
      return new Promise((resolve) => {
        canvasElement.toBlob((blob) => resolve(ObjectURLManager.create(blob)), "image/png");
      });
    }
    if (jobData.script._isGuzelSoz) {
      return RenderWorkerService.renderGuzelSoz(jobData, canvasElement, w, h, cx, _getFontFamily(jobData.config.fontStyle), preferences);
    }
    const targetDurStr = jobData.config.duration || "30";
    const isUnlimited = targetDurStr === "unlimited";
    const hasMultipleBlocks = (jobData.script.imageBlocks || []).length > 1;
    const useForceExact = !isUnlimited && !hasMultipleBlocks;
    const bounds = getDurationBounds(targetDurStr);
    const limitSec = useForceExact ? bounds.max : 9999;
    let globalRenderedSec = 0;
    const getAudioDur = (audioData, fallbackText) => {
      if (audioData?.wavBuffer) {
        let byteLength = 0;
        if (audioData.wavBuffer instanceof ArrayBuffer) byteLength = audioData.wavBuffer.byteLength;
        else if (audioData.wavBuffer.buffer instanceof ArrayBuffer) byteLength = audioData.wavBuffer.buffer.byteLength;
        else if (audioData.wavBuffer.byteLength) byteLength = audioData.wavBuffer.byteLength;
        if (byteLength > 44) {
          const sampleRate = audioData.sampleRate || 24e3;
          return (byteLength - 44) / (sampleRate * 2);
        }
      }
      const wordsCount = (fallbackText || "").trim().split(/\s+/).filter(Boolean).length;
      if (wordsCount === 0) return 0.5;
      return Math.max(1, wordsCount / getWPS(jobData.config.language));
    };
    let rawKapakDur = jobData.assets.thumbnailAudio ? getAudioDur(jobData.assets.thumbnailAudio, jobData.script.thumbnailText) : 1;
    let rawSonSozDur = jobData.script.sonSoz ? getAudioDur(jobData.assets.sonSozAudio, jobData.script.sonSoz) : 0;
    let rawOutroDur = Math.max(4, getAudioDur(jobData.assets.outroAudio, jobData.script.lastQuote));
    let rawSlideSecs = jobData.script.videoSlides.map((s, i) => getAudioDur(jobData.assets.audio[i], s.spokenText));
    let rawCushion = 1e-3;
    let totalNaturalSec = rawKapakDur + rawSonSozDur + rawOutroDur + rawCushion + rawSlideSecs.reduce((a, b) => a + b, 0);
    const scaleFactor = 1;
    addSystemLog(`Do\u011Fal okuma h\u0131z\u0131 (1.0x): Toplam ${totalNaturalSec.toFixed(1)}sn.`, "info");
    const timerWorker = _createTimerWorker();
    timerWorker.postMessage("start");
    let frameResolvers = [];
    timerWorker.onmessage = () => {
      if (audioCtx && audioCtx.state === "suspended") audioCtx.resume().catch(() => {
      });
      const resolvers = frameResolvers;
      frameResolvers = [];
      resolvers.forEach((r) => r());
    };
    const nextFrame = () => new Promise((resolve) => {
      frameResolvers.push(resolve);
    });
    const audioCtx = _getAudioCtx();
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume().catch((e) => {
      ErrorHandler.silent(e);
    });
    const audioDest = audioCtx ? audioCtx.createMediaStreamDestination() : null;
    const { osc: silentOsc, gain: silentGain } = _createSilentOsc(audioCtx, audioDest);
    const keepAliveOsc = audioCtx.createOscillator();
    const keepAliveGain = audioCtx.createGain();
    keepAliveGain.gain.value = 1e-5;
    keepAliveOsc.connect(keepAliveGain);
    keepAliveGain.connect(audioCtx.destination);
    keepAliveGain.connect(audioDest);
    keepAliveOsc.start();
    const fontFamily = _getFontFamily(jobData.config.fontStyle);
    const FPS = 30;
    const stream = canvasElement.captureStream(0);
    const videoTrack = stream.getVideoTracks()[0];
    const audioTracks = audioDest ? audioDest.stream.getAudioTracks() : [];
    const combinedStream = new MediaStream([...stream.getVideoTracks(), ...audioTracks]);
    let mimeType = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
    if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = "video/mp4";
    if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = 'video/webm; codecs="vp8, opus"';
    if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = "video/webm";
    const playAudio = async (audioData, requestedDuration = null, fallbackText = "") => {
      if (audioCtx && audioCtx.state === "suspended") await audioCtx.resume().catch((e) => {
        ErrorHandler.silent(e);
      });
      let baseExactDur = getAudioDur(audioData, fallbackText);
      let audioEndPromise = null;
      if (audioData?.wavBuffer && audioCtx) {
        try {
          let bufferCopy;
          if (audioData.wavBuffer instanceof ArrayBuffer) bufferCopy = audioData.wavBuffer.slice(0);
          else if (audioData.wavBuffer.buffer instanceof ArrayBuffer) bufferCopy = audioData.wavBuffer.buffer.slice(0);
          else if (typeof audioData.wavBuffer === "object") {
            const uint8 = new Uint8Array(Object.values(audioData.wavBuffer));
            bufferCopy = uint8.buffer.slice(0);
          } else bufferCopy = audioData.wavBuffer;
          const audioBuf = await audioCtx.decodeAudioData(bufferCopy);
          const source = audioCtx.createBufferSource();
          source.buffer = audioBuf;
          source.playbackRate.value = 1;
          const gain = audioCtx.createGain();
          gain.gain.value = preferences?.narratorVolume ?? 0.8;
          source.connect(gain);
          gain.connect(audioDest);
          source.start(0);
          baseExactDur = Math.min(audioBuf.duration, 180);
          audioEndPromise = new Promise((resolve) => {
            source.onended = resolve;
          });
        } catch (e) {
          console.warn("Ses decode hatas\u0131:", e);
        }
      }
      let scaledExactDur = baseExactDur;
      let totalDur = requestedDuration !== null ? requestedDuration : scaledExactDur;
      return { exactDur: scaledExactDur, totalDur, audioEndPromise };
    };
    const renderSonSozScene = async (text, audioData, duration) => {
      let startT = performance.now();
      const safeText = text || "";
      const sonSozResult = await playAudio(audioData, duration, safeText);
      const sonSozAudioEnd = sonSozResult.audioEndPromise;
      const lang = jobData.config.language || "tr";
      const hasYorum = jobData.config.yorum && jobData.config.yorum.trim().length > 0;
      let yorumAudioResult = null;
      if (hasYorum) {
        const yorumText = jobData.config.yorum || "";
        if (jobData.assets.yorumAudio) {
          yorumAudioResult = await playAudio(jobData.assets.yorumAudio, null, yorumText);
        } else {
          const wps = getWPS(lang);
          const words = yorumText.trim().split(/\s+/).filter(Boolean).length;
          const fakeDur = Math.max(1, words / wps) + 0.3;
          yorumAudioResult = { totalDur: fakeDur, audioEndPromise: null };
        }
      }
      const sonSozFrames = Math.max(1, Math.round(sonSozResult.totalDur * FPS));
      const yorumFrames = Math.max(0, Math.round((yorumAudioResult?.totalDur || 0) * FPS));
      const totalFrames = sonSozFrames + yorumFrames;
      let yorumStarted = false;
      let yorumAudioEnd = null;
      const topSafe = h * 0.08;
      const headerH = h * 0.1;
      const bottomLimit = h * 0.48;
      const headerText = (() => {
        if (lang === "de") return "SCHLUSSWORT";
        if (lang === "en") return "FINAL WORDS";
        if (lang === "fr") return "MOT DE LA FIN";
        if (lang === "es") return "\xDALTIMAS PALABRAS";
        if (lang === "ar") return "\u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629";
        if (lang === "ru") return "\u041F\u041E\u0421\u041B\u0415\u0421\u041B\u041E\u0412\u0418\u0415";
        return "SON S\xD6Z";
      })();
      const fullContent = hasYorum ? `${text} \u2014 ${jobData.config.yorum}`.replace(/\n+/g, " ") : text;
      let bodyFontSize = w > 800 ? 42 : 30;
      ctx.font = `900 ${bodyFontSize}px ${fontFamily}`;
      let lines = RenderWorkerService.wrapText(ctx, fullContent, w * 0.85);
      let lh = bodyFontSize * 1.35;
      const startYBase = topSafe + headerH + h * 0.02;
      const availableH = bottomLimit - startYBase - h * 0.02;
      while (lines.length * lh > availableH && bodyFontSize > 14) {
        bodyFontSize -= 2;
        ctx.font = `900 ${bodyFontSize}px ${fontFamily}`;
        lines = RenderWorkerService.wrapText(ctx, fullContent, w * 0.85);
        lh = bodyFontSize * 1.35;
      }
      const totalTextH = lines.length * lh;
      const startY = startYBase + Math.max(0, (availableH - totalTextH) / 2);
      for (let frame = 0; frame < totalFrames; frame++) {
        if (hasYorum && frame >= sonSozFrames && !yorumStarted) {
          yorumAudioEnd = yorumAudioResult?.audioEndPromise || null;
          yorumStarted = true;
        }
        ctx.fillStyle = "#030712";
        ctx.fillRect(0, 0, w, h / 2);
        ctx.fillStyle = "#E11D48";
        ctx.font = `900 ${w > 800 ? 54 : 44}px ${fontFamily}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(headerText.toUpperCase(), cx, topSafe + headerH / 2);
        ctx.font = `900 ${bodyFontSize}px ${fontFamily}`;
        ctx.fillStyle = "#F3F4F6";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        lines.forEach((line, idx) => {
          ctx.fillText(line, cx, startY + idx * lh);
        });
        const fX = 0, fY = h / 2, fW = w, fH = h / 2;
        ctx.save();
        switch (lang.toLowerCase()) {
          case "tr": {
            ctx.fillStyle = "#E30A17";
            ctx.fillRect(fX, fY, fW, fH);
            const centerX = fX + fW / 2;
            const centerY = fY + fH / 2;
            const rOuter = fH * 0.28;
            const rInner = fH * 0.22;
            const shiftX = fH * 0.08;
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.arc(centerX - shiftX / 2, centerY, rOuter, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#E30A17";
            ctx.beginPath();
            ctx.arc(centerX - shiftX / 2 + shiftX, centerY, rInner, 0, Math.PI * 2);
            ctx.fill();
            RenderWorkerService.drawStar(ctx, centerX + fH * 0.16, centerY, 5, fH * 0.1, fH * 0.04, "#FFFFFF");
            break;
          }
          case "de": {
            const sH = fH / 3;
            ctx.fillStyle = "#000000";
            ctx.fillRect(fX, fY, fW, sH);
            ctx.fillStyle = "#DD0000";
            ctx.fillRect(fX, fY + sH, fW, sH);
            ctx.fillStyle = "#FFCE00";
            ctx.fillRect(fX, fY + sH * 2, fW, sH);
            break;
          }
          case "en": {
            ctx.fillStyle = "#012169";
            ctx.fillRect(fX, fY, fW, fH);
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = fH * 0.1;
            ctx.beginPath();
            ctx.moveTo(fX, fY);
            ctx.lineTo(fX + fW, fY + fH);
            ctx.moveTo(fX + fW, fY);
            ctx.lineTo(fX, fY + fH);
            ctx.stroke();
            ctx.strokeStyle = "#C8102E";
            ctx.lineWidth = fH * 0.04;
            ctx.beginPath();
            ctx.moveTo(fX, fY);
            ctx.lineTo(fX + fW, fY + fH);
            ctx.moveTo(fX + fW, fY);
            ctx.lineTo(fX, fY + fH);
            ctx.stroke();
            ctx.fillStyle = "#FFFFFF";
            const cwW = fW * 0.16;
            const cwH = fH * 0.16;
            ctx.fillRect(fX + fW / 2 - cwW / 2, fY, cwW, fH);
            ctx.fillRect(fX, fY + fH / 2 - cwH / 2, fW, cwH);
            ctx.fillStyle = "#C8102E";
            const rcwW = fW * 0.1;
            const rcwH = fH * 0.1;
            ctx.fillRect(fX + fW / 2 - rcwW / 2, fY, rcwW, fH);
            ctx.fillRect(fX, fY + fH / 2 - rcwH / 2, fW, rcwH);
            break;
          }
          case "fr": {
            const sW = fW / 3;
            ctx.fillStyle = "#00209F";
            ctx.fillRect(fX, fY, sW, fH);
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(fX + sW, fY, sW, fH);
            ctx.fillStyle = "#F63847";
            ctx.fillRect(fX + sW * 2, fY, sW, fH);
            break;
          }
          case "es": {
            const rH = fH / 4;
            const yH = fH / 2;
            ctx.fillStyle = "#C60B1E";
            ctx.fillRect(fX, fY, fW, rH);
            ctx.fillStyle = "#F1BF00";
            ctx.fillRect(fX, fY + rH, fW, yH);
            ctx.fillStyle = "#C60B1E";
            ctx.fillRect(fX, fY + rH + yH, fW, rH);
            break;
          }
          case "ru": {
            const sH = fH / 3;
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(fX, fY, fW, sH);
            ctx.fillStyle = "#0039A6";
            ctx.fillRect(fX, fY + sH, fW, sH);
            ctx.fillStyle = "#D52B1E";
            ctx.fillRect(fX, fY + sH * 2, fW, sH);
            break;
          }
          case "ar": {
            const rW = fW * 0.22;
            ctx.fillStyle = "#E01E37";
            ctx.fillRect(fX, fY, rW, fH);
            const restW = fW - rW;
            const sH = fH / 3;
            ctx.fillStyle = "#107C41";
            ctx.fillRect(fX + rW, fY, restW, sH);
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(fX + rW, fY + sH, restW, sH);
            ctx.fillStyle = "#000000";
            ctx.fillRect(fX + rW, fY + sH * 2, restW, sH);
            break;
          }
          default: {
            ctx.fillStyle = "#111827";
            ctx.fillRect(fX, fY, fW, fH);
            break;
          }
        }
        ctx.restore();
        globalRenderedSec += 1 / FPS;
        if (videoTrack && videoTrack.requestFrame) videoTrack.requestFrame();
        await nextFrame();
      }
      if (sonSozAudioEnd) await sonSozAudioEnd;
      if (yorumAudioEnd) await yorumAudioEnd;
      addSystemLog(`Son s\xF6z sahnesi render edildi.`, "success");
    };
    const SAFE_ZONE = { topUnsafe: 0.08, subtitleY: 0.72, bottomUnsafe: 0.78, rightUnsafeStart: 0.86 };
    const renderScene = async (imgObj, text, audioData, duration, isThumbnail = false, isOutro = false, topText = null, slideIndex = -1, chartData = null, transition = "none", useContain = false, zoomCoords = null) => {
      let startT = performance.now();
      const { exactDur, totalDur, audioEndPromise } = await playAudio(audioData, duration, text);
      const subs = isThumbnail || isOutro ? [] : RenderWorkerService.calculateSubtitles(text, exactDur);
      const totalFrames = Math.max(1, Math.round(totalDur * FPS));
      const transitionFrames = Math.min(8, Math.floor(totalFrames * 0.15));
      for (let frame = 0; frame < totalFrames; frame++) {
        const progress = frame / totalFrames;
        const elapsedSec = frame / FPS;
        const activeSub = subs.find((s) => elapsedSec >= s.startSec && elapsedSec < s.endSec)?.text || "";
        let alpha = 1;
        let offsetX = 0;
        if (transition === "fadeIn" && frame < transitionFrames) {
          alpha = frame / transitionFrames;
        } else if (transition === "fadeOut" && frame > totalFrames - transitionFrames) {
          alpha = (totalFrames - frame) / transitionFrames;
        } else if (transition === "crossfade" && frame < transitionFrames) {
          alpha = frame / transitionFrames;
        } else if (transition === "slideIn" && frame < transitionFrames) {
          offsetX = w * (1 - frame / transitionFrames);
        } else if (transition === "slideOut" && frame > totalFrames - transitionFrames) {
          offsetX = -w * ((frame - (totalFrames - transitionFrames)) / transitionFrames);
        }
        ctx.save();
        ctx.globalAlpha = alpha;
        if (offsetX !== 0) ctx.translate(offsetX, 0);
        if (imgObj) {
          if (zoomCoords) {
            const z = zoomCoords;
            const zx = z.x / 100 * imgObj.width;
            const zy = z.y / 100 * imgObj.height;
            const zw = z.w / 100 * imgObj.width;
            const zh = z.h / 100 * imgObj.height;
            const t = progress;
            const zoom = 1 + 0.15 * t;
            const panX = (Math.random() - 0.5) * 20 * t;
            const panY = (Math.random() - 0.5) * 20 * t;
            ctx.save();
            ctx.translate(w / 2 + panX, h / 2 + panY);
            ctx.scale(zoom, zoom);
            const scale = Math.max(w / zw, h / zh);
            const drawW = zw * scale;
            const drawH = zh * scale;
            ctx.drawImage(imgObj, zx, zy, zw, zh, -drawW / 2, -drawH / 2, drawW, drawH);
            ctx.restore();
          } else if (useContain) {
            RenderWorkerService.drawImageContain(ctx, imgObj, w, h);
          } else {
            RenderWorkerService.drawImageCover(ctx, imgObj, w, h);
          }
        }
        if (isThumbnail) {
          RenderWorkerService.drawThumbnail(ctx, imgObj, text, w, h, fontFamily, jobData.config.sourceName, jobData.config);
        } else if (!isOutro) {
          const grad = ctx.createLinearGradient(0, h * 0.45, 0, h);
          grad.addColorStop(0, "transparent");
          grad.addColorStop(1, "rgba(0,0,0,0.95)");
          ctx.fillStyle = grad;
          ctx.fillRect(0, h * 0.45, w, h * 0.55);
          if (topText) {
            let topFontSize = w > 800 ? 46 : 38;
            ctx.font = `900 ${topFontSize}px ${fontFamily}`;
            let lines = RenderWorkerService.wrapText(ctx, topText, w * 0.85);
            const maxLines = jobData.script._isGuzelSoz ? 10 : 5;
            while (lines.length > maxLines && topFontSize > 18) {
              topFontSize -= 2;
              ctx.font = `900 ${topFontSize}px ${fontFamily}`;
              lines = RenderWorkerService.wrapText(ctx, topText, w * 0.85);
            }
            const lh = topFontSize * 1.3;
            const boxH = lines.length * lh + 30;
            const boxW = Math.min(w * 0.92, w * 0.85 + 80);
            const boxX = cx - boxW / 2;
            const boxY = h * 0.06;
            ctx.fillStyle = "rgba(0,0,0,0.75)";
            ctx.beginPath();
            if (ctx.roundRect) ctx.roundRect(boxX, boxY, boxW, boxH, 16);
            else ctx.rect(boxX, boxY, boxW, boxH);
            ctx.fill();
            ctx.fillStyle = "#FFD700";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            lines.forEach((line, i) => {
              ctx.fillText(line.trim(), cx, boxY + boxH / 2 - (lines.length - 1) * lh / 2 + i * lh);
            });
          }
          if (jobData.config.sourceName && slideIndex > 0) {
            const srcText = jobData.config.sourceName;
            const srcFontSize = w > 800 ? 50 : 40;
            ctx.font = `900 ${srcFontSize}px 'Inter', Arial`;
            const textW = ctx.measureText(srcText).width;
            const bubbleW = textW + 60;
            const bubbleH = srcFontSize + 40;
            const bubbleX = w - bubbleW - 16;
            const bubbleY = 16;
            ctx.fillStyle = "#DC2626";
            ctx.beginPath();
            const bR = bubbleH / 2;
            ctx.moveTo(bubbleX + bR, bubbleY);
            ctx.lineTo(bubbleX + bubbleW - bR, bubbleY);
            ctx.arc(bubbleX + bubbleW - bR, bubbleY + bR, bR, -Math.PI / 2, Math.PI / 2);
            ctx.lineTo(bubbleX + bR, bubbleY + bubbleH);
            ctx.arc(bubbleX + bR, bubbleY + bR, bR, Math.PI / 2, -Math.PI / 2);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(bubbleX + 20, bubbleY + bubbleH);
            ctx.lineTo(bubbleX + 10, bubbleY + bubbleH + 14);
            ctx.lineTo(bubbleX + 35, bubbleY + bubbleH);
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(srcText, bubbleX + bubbleW / 2, bubbleY + bubbleH / 2);
          }
          if (activeSub && jobData.config.subtitles !== "off") {
            let subFontSize = w > 800 ? 65 : 50;
            ctx.font = `900 ${subFontSize}px ${fontFamily}`;
            let displaySub = activeSub.trim();
            while (ctx.measureText(displaySub).width > w * 0.95 && subFontSize > 30) {
              subFontSize -= 2;
              ctx.font = `900 ${subFontSize}px ${fontFamily}`;
            }
            const subTextW = ctx.measureText(displaySub).width;
            const subPadX = 20;
            const subPadY = 8;
            const subBoxW = subTextW + subPadX * 2;
            const subBoxH = subFontSize + subPadY * 2;
            const subBoxX = cx - subBoxW / 2;
            const subBoxY = h * SAFE_ZONE.subtitleY - subBoxH / 2;
            ctx.fillStyle = "#2563EB";
            ctx.beginPath();
            if (ctx.roundRect) ctx.roundRect(subBoxX, subBoxY, subBoxW, subBoxH, 8);
            else ctx.rect(subBoxX, subBoxY, subBoxW, subBoxH);
            ctx.fill();
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "white";
            ctx.fillText(displaySub, cx, h * SAFE_ZONE.subtitleY);
          }
        }
        if (isOutro) {
          const outroElapsed = elapsedSec;
          const outroDur = totalDur;
          const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
          bgGrad.addColorStop(0, "#0a0015");
          bgGrad.addColorStop(0.4, "#1a0533");
          bgGrad.addColorStop(0.7, "#0f0a2e");
          bgGrad.addColorStop(1, "#050010");
          ctx.fillStyle = bgGrad;
          ctx.fillRect(0, 0, w, h);
          if (!RenderWorkerService._outroParticles || RenderWorkerService._outroParticles.length === 0) {
            RenderWorkerService._outroParticles = [];
            for (let p = 0; p < 20; p++) {
              RenderWorkerService._outroParticles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: 8 + Math.random() * 35,
                speed: 0.3 + Math.random() * 0.8,
                phase: Math.random() * Math.PI * 2,
                alpha: 0.05 + Math.random() * 0.15,
                hue: Math.random() > 0.5 ? 270 : 320
              });
            }
          }
          RenderWorkerService._outroParticles.forEach((p) => {
            const py = ((p.y - outroElapsed * p.speed * 30) % h + h) % h;
            const pulse = 1 + 0.2 * Math.sin(outroElapsed * 1.5 + p.phase);
            const grad = ctx.createRadialGradient(p.x, py, 0, p.x, py, p.r * pulse);
            grad.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${p.alpha})`);
            grad.addColorStop(0.6, `hsla(${p.hue}, 80%, 40%, ${p.alpha * 0.4})`);
            grad.addColorStop(1, "transparent");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, py, p.r * pulse * 1.5, 0, Math.PI * 2);
            ctx.fill();
          });
          const lang = jobData?.config?.language || "tr";
          const titleLines = _OUTRO_TEXTS[lang] || _OUTRO_TEXTS["tr"];
          let titleFontSize = w > 800 ? 52 : 38;
          const titleLh = titleFontSize * 1.5;
          const titleStartY = h * 0.22;
          titleLines.forEach((line, i) => {
            const lineDelay = i * 0.35;
            const lineProgress = Math.max(0, Math.min(1, (outroElapsed - lineDelay) / 0.5));
            const fadeAlpha = lineProgress;
            const slideOffset = (1 - lineProgress) * 40;
            ctx.save();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = `800 ${titleFontSize}px ${fontFamily}`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const tg = ctx.createLinearGradient(cx - w * 0.4, 0, cx + w * 0.4, 0);
            tg.addColorStop(0, "#FFD700");
            tg.addColorStop(0.3, "#FFA500");
            tg.addColorStop(0.7, "#FFD700");
            tg.addColorStop(1, "#FFC107");
            const yPos = titleStartY + i * titleLh + slideOffset;
            ctx.shadowColor = "rgba(255, 165, 0, 0.6)";
            ctx.shadowBlur = 20;
            ctx.shadowOffsetY = 4;
            ctx.lineWidth = titleFontSize * 0.25;
            ctx.strokeStyle = "#000";
            ctx.lineJoin = "round";
            ctx.strokeText(line, cx, yPos);
            ctx.fillStyle = tg;
            ctx.fillText(line, cx, yPos);
            ctx.restore();
          });
          const cta = _CTA_LABELS[lang] || _CTA_LABELS["tr"];
          const buttons = [
            { label: cta.sub, icon: "bell", delay: 1.8, color1: "#E30A17", color2: "#FF4444" },
            { label: cta.like, icon: "heart", delay: 2.2, color1: "#E91E63", color2: "#FF5C8A" },
            { label: cta.share, icon: "share", delay: 2.6, color1: "#2196F3", color2: "#64B5F6" }
          ];
          const btnAreaY = h * 0.58;
          const btnRadius = Math.min(w * 0.12, 55);
          const btnSpacing = btnRadius * 3.2;
          const btnStartX = cx - btnSpacing;
          buttons.forEach((btn, i) => {
            const bx = btnStartX + i * btnSpacing;
            const by = btnAreaY;
            const btnProgress = Math.max(0, Math.min(1, (outroElapsed - btn.delay) / 0.4));
            const slideFrom = (1 - btnProgress) * 80;
            const fadeAlpha = btnProgress;
            const pulseTime = Math.max(0, outroElapsed - btn.delay - 0.5);
            const pulse = 1 + 0.06 * Math.sin(pulseTime * 3);
            ctx.save();
            ctx.globalAlpha = fadeAlpha;
            const btnGrad = ctx.createRadialGradient(bx, by + slideFrom, 0, bx, by + slideFrom, btnRadius * pulse);
            btnGrad.addColorStop(0, btn.color2);
            btnGrad.addColorStop(1, btn.color1);
            ctx.fillStyle = btnGrad;
            ctx.shadowColor = btn.color1 + "88";
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(bx, by + slideFrom, btnRadius * pulse, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#FFFFFF";
            ctx.shadowBlur = 0;
            const iconSize = btnRadius * 0.45;
            const iy = by + slideFrom;
            if (btn.icon === "bell") {
              ctx.beginPath();
              ctx.arc(bx, iy - iconSize * 0.2, iconSize * 0.5, Math.PI, 0);
              ctx.lineTo(bx + iconSize * 0.6, iy + iconSize * 0.3);
              ctx.lineTo(bx - iconSize * 0.6, iy + iconSize * 0.3);
              ctx.closePath();
              ctx.fill();
              ctx.fillRect(bx - iconSize * 0.15, iy + iconSize * 0.35, iconSize * 0.3, iconSize * 0.15);
            } else if (btn.icon === "heart") {
              const hx = bx, hy = iy - iconSize * 0.1;
              const hr = iconSize * 0.3;
              ctx.beginPath();
              ctx.arc(hx - hr * 0.6, hy - hr * 0.3, hr * 0.6, 0, Math.PI * 2);
              ctx.arc(hx + hr * 0.6, hy - hr * 0.3, hr * 0.6, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.moveTo(hx - hr * 1.1, hy);
              ctx.lineTo(hx, hy + hr * 1.2);
              ctx.lineTo(hx + hr * 1.1, hy);
              ctx.fill();
            } else if (btn.icon === "share") {
              ctx.lineWidth = iconSize * 0.15;
              ctx.strokeStyle = "#FFFFFF";
              ctx.lineCap = "round";
              ctx.beginPath();
              ctx.arc(bx - iconSize * 0.25, iy, iconSize * 0.25, Math.PI * 0.7, Math.PI * 2.3);
              ctx.stroke();
              ctx.beginPath();
              ctx.arc(bx + iconSize * 0.25, iy, iconSize * 0.25, -Math.PI * 0.3, Math.PI * 1.3);
              ctx.stroke();
            }
            ctx.font = `700 ${Math.round(btnRadius * 0.28)}px ${fontFamily}`;
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillStyle = "#FFFFFF";
            ctx.shadowColor = "rgba(0,0,0,0.5)";
            ctx.shadowBlur = 4;
            ctx.fillText(btn.label, bx, by + slideFrom + btnRadius * pulse + 8);
            ctx.restore();
          });
          const discDelay = 3.5;
          const discAlpha = Math.max(0, Math.min(1, (outroElapsed - discDelay) / 0.8));
          const discH = Math.max(100, h * 0.15);
          const discY = h - discH;
          ctx.save();
          ctx.globalAlpha = discAlpha;
          const lineGrad = ctx.createLinearGradient(0, 0, w, 0);
          lineGrad.addColorStop(0, "transparent");
          lineGrad.addColorStop(0.3, "rgba(225,29,72,0.5)");
          lineGrad.addColorStop(0.7, "rgba(225,29,72,0.5)");
          lineGrad.addColorStop(1, "transparent");
          ctx.strokeStyle = lineGrad;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(0, discY);
          ctx.lineTo(w, discY);
          ctx.stroke();
          ctx.fillStyle = "rgba(241,245,249,0.8)";
          const discFontSize = w > 800 ? 22 : 16;
          ctx.font = `600 ${discFontSize}px 'Inter', Arial`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const discTexts = {
            tr: "Gemini bir yapay zeka modeli oldu\u011Fu i\xE7in ki\u015Filer de dahil olmak \xFCzere farkl\u0131 konular hakk\u0131nda yanl\u0131\u015F bilgi verebilir.",
            en: "As an AI model, Gemini may provide inaccurate information about various topics, including people.",
            fr: "En tant que mod\xE8le d'IA, Gemini peut fournir des informations inexactes sur divers sujets, y compris les personnes.",
            de: "Als KI-Modell kann Gemini ungenaue Informationen zu verschiedenen Themen liefern, einschlie\xDFlich Personen.",
            es: "Como modelo de IA, Gemini puede proporcionar informaci\xF3n inexacta sobre diversos temas, incluidas las personas.",
            ar: "\u0643\u0646\u0645\u0648\u0630\u062C \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A\u060C \u0642\u062F \u064A\u0648\u0641\u0631 Gemini \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u063A\u064A\u0631 \u062F\u0642\u064A\u0642\u0629 \u062D\u0648\u0644 \u0645\u0648\u0627\u0636\u064A\u0639 \u0645\u062E\u062A\u0644\u0641\u0629\u060C \u0628\u0645\u0627 \u0641\u064A \u0630\u0644\u0643 \u0627\u0644\u0623\u0634\u062E\u0627\u0635.",
            ru: "\u041A\u0430\u043A \u043C\u043E\u0434\u0435\u043B\u044C \u0418\u0418, Gemini \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0435\u0442\u043E\u0447\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043F\u043E \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C \u0442\u0435\u043C\u0430\u043C, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043B\u044E\u0434\u0435\u0439."
          };
          const discTxt = discTexts[lang] || discTexts["tr"];
          const discLines = RenderWorkerService.wrapText(ctx, discTxt, w * 0.88);
          const discLh = discFontSize * 1.5;
          const discTextStartY = discY + discH / 2 - (discLines.length - 1) * discLh / 2;
          discLines.forEach((line, idx) => {
            ctx.fillText(line.trim(), cx, discTextStartY + idx * discLh);
          });
          ctx.restore();
          if (progress > 0.95) RenderWorkerService._outroParticles = [];
        }
        ctx.restore();
        globalRenderedSec += 1 / FPS;
        if (videoTrack && videoTrack.requestFrame) videoTrack.requestFrame();
        await nextFrame();
      }
      if (audioEndPromise) await audioEndPromise;
      addSystemLog(`Sahne ${isThumbnail ? "kapak" : isOutro ? "kapan\u0131\u015F" : slideIndex} render edildi.`, "success");
    };
    try {
      let bgmSource2, bgmNode, masterGain2;
      let bgmInitialized = false;
      const loadBGM = async (musicId) => {
        if (bgmSource2) {
          try {
            bgmSource2.stop();
            bgmSource2.disconnect();
          } catch (e) {
            ErrorHandler.silent(e);
          }
        }
        if (bgmNode) {
          try {
            bgmNode.disconnect();
          } catch (e) {
            ErrorHandler.silent(e);
          }
        }
        if (masterGain2) {
          try {
            masterGain2.disconnect();
          } catch (e) {
            ErrorHandler.silent(e);
          }
        }
        bgmSource2 = null;
        bgmNode = null;
        masterGain2 = null;
        if (!musicId || musicId === "none") return;
        const ambientTypes = ["rain", "wind", "waves", "fire"];
        if (ambientTypes.includes(musicId)) {
          const ambientObj = AmbientAudioService.getAmbientNode(audioCtx, musicId);
          if (ambientObj) {
            bgmSource2 = ambientObj.source;
            bgmNode = ambientObj.gainNode;
            masterGain2 = audioCtx.createGain();
            masterGain2.gain.value = preferences?.backgroundMusicVolume ?? 0.3;
            bgmNode.connect(masterGain2);
            masterGain2.connect(audioDest);
          }
        } else {
          try {
            const track = await AssetManagerService.getMusicFromLib(musicId);
            if (track && track.data) {
              const blob = _base64ToBlob(track.data);
              const musicUrl = ObjectURLManager.create(blob);
              const res = await fetch(musicUrl);
              const buf = await audioCtx.decodeAudioData(await res.arrayBuffer());
              if (!bgmInitialized) {
                bgmSource2 = audioCtx.createBufferSource();
                bgmSource2.buffer = buf;
                bgmSource2.loop = true;
                bgmInitialized = true;
              }
              masterGain2 = audioCtx.createGain();
              masterGain2.gain.value = preferences?.backgroundMusicVolume ?? 0.3;
              bgmSource2.connect(masterGain2);
              masterGain2.connect(audioDest);
              bgmSource2.start(0);
            }
          } catch (e) {
            console.warn("M\xFCzik okunamad\u0131", e);
          }
        }
      };
      const initialBgmId = jobData.script._bgmId || preferences.ambientSound || "none";
      addSystemLog(`Render BGM: ${initialBgmId} (script._bgmId: ${jobData.script._bgmId || "yok"})`, "info");
      await loadBGM(initialBgmId);
      const tImg = await NetworkUtils.loadImage(jobData.assets.thumbnail);
      const customOutroData = await AssetManagerService.loadMedia("CUSTOM_OUTRO");
      const outroImg = await NetworkUtils.loadImage(customOutroData || jobData.assets.outroImage);
      if (tImg) {
        RenderWorkerService.drawThumbnail(ctx, tImg, jobData.script.thumbnailText, w, h, fontFamily, jobData.config.sourceName, jobData.config);
        if (videoTrack && videoTrack.requestFrame) videoTrack.requestFrame();
        for (let i = 0; i < 3; i++) await nextFrame();
      }
      let videoFileHandle = null;
      let videoWritable = null;
      let videoChunks = [];
      const useFileStreaming = async () => {
        try {
          if (!window.showSaveFilePicker) return false;
          videoFileHandle = await window.showSaveFilePicker({
            suggestedName: `otonom_${Date.now()}.webm`,
            types: [{ description: "Video", accept: { "video/webm": [".webm"], "video/mp4": [".mp4"] } }]
          });
          videoWritable = await videoFileHandle.createWritable();
          return true;
        } catch (e) {
          addSystemLog("Dosya ak\u0131\u015F\u0131 ba\u015Flat\u0131lamad\u0131, bellek i\xE7inde kay\u0131t kullan\u0131lacak: " + e.message, "warn");
          return false;
        }
      };
      const streamingEnabled = await useFileStreaming();
      const recorder = new MediaRecorder(combinedStream, { mimeType, audioBitsPerSecond: 192e3, videoBitsPerSecond: 4e6 });
      if (streamingEnabled && videoWritable) {
        recorder.ondataavailable = async (e) => {
          if (e.data && e.data.size > 0) {
            try {
              await videoWritable.write(e.data);
            } catch (err) {
              addSystemLog("Ak\u0131\u015F yazma hatas\u0131: " + err.message, "error");
            }
          }
        };
        recorder.onstop = async () => {
          try {
            await videoWritable.close();
            addSystemLog("Video dosyaya ak\u0131t\u0131ld\u0131: " + videoFileHandle.name, "success");
            const file = await videoFileHandle.getFile();
            return { url: ObjectURLManager.create(file), blobType: file.type, fileHandle: videoFileHandle };
          } catch (err) {
            addSystemLog("Dosya kapatma hatas\u0131: " + err.message, "error");
            return { url: "", blobType: mimeType };
          }
        };
      } else {
        recorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) videoChunks.push(e.data);
        };
        recorder.onstop = () => {
          const blob = new Blob(videoChunks, { type: mimeType });
          videoChunks = [];
          if (blob.size === 0) return { url: "", blobType: mimeType };
          return { url: ObjectURLManager.create(blob), blobType: blob.type };
        };
      }
      recorder.start(100);
      sysEventBus.emit("PROGRESS", { step: "RENDER", percent: 10, text: "Clickbait Kapak Olu\u015Fturuluyor..." });
      await renderScene(tImg, jobData.script.thumbnailText, jobData.assets.thumbnailAudio, rawKapakDur, true, false, null, 0, null, jobData.config.transition);
      const slideIsCustom = [];
      const blocks = jobData.script.imageBlocks || [];
      let gIdx = 0;
      for (const block of blocks) {
        if (block.imageType === "custom") {
          slideIsCustom[gIdx] = true;
        }
        gIdx += block.videoSlides.length;
      }
      for (let i = 0; i < jobData.script.videoSlides.length; i++) {
        const slide = jobData.script.videoSlides[i];
        sysEventBus.emit("PROGRESS", { step: "RENDER", percent: Math.min(80, 20 + (i + 1) / jobData.script.videoSlides.length * 60), text: `Sahne ${i + 1} Render Ediliyor...` });
        const isBasliklarScene = slide._isBasliklarList && slide._basliklar;
        const sImg = isBasliklarScene ? null : await NetworkUtils.loadImage(jobData.assets.images[i]) || tImg;
        const isCustomImg = !!slideIsCustom[i];
        if (slide._isBasliklarList && slide._basliklar) {
          const { exactDur, totalDur, audioEndPromise } = await playAudio(jobData.assets.audio[i], null, slide.spokenText);
          const totalFrames = Math.max(1, Math.round(totalDur * FPS));
          for (let frame = 0; frame < totalFrames; frame++) {
            const elapsedSec = frame / FPS;
            const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
            bgGrad.addColorStop(0, "#0a0015");
            bgGrad.addColorStop(0.4, "#1a0533");
            bgGrad.addColorStop(1, "#050010");
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, w, h);
            const titleFontSize = w > 800 ? 60 : 45;
            ctx.font = `900 ${titleFontSize}px ${fontFamily}`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#FFD700";
            ctx.shadowColor = "rgba(255, 165, 0, 0.6)";
            ctx.shadowBlur = 20;
            ctx.fillText(slide.topText, cx, h * 0.08);
            ctx.shadowBlur = 0;
            ctx.strokeStyle = "#E30A17";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(w * 0.1, h * 0.12);
            ctx.lineTo(w * 0.9, h * 0.12);
            ctx.stroke();
            const basliklar = slide._basliklar;
            let listFontSize = w > 800 ? 42 : 32;
            ctx.font = `700 ${listFontSize}px ${fontFamily}`;
            const availableH = h * 0.75;
            let totalLines = 0;
            basliklar.forEach((b) => {
              totalLines += RenderWorkerService.wrapText(ctx, b.baslik, w * 0.85).length + 0.5;
            });
            while (totalLines * listFontSize * 1.6 > availableH && listFontSize > 18) {
              listFontSize -= 2;
              ctx.font = `700 ${listFontSize}px ${fontFamily}`;
              totalLines = 0;
              basliklar.forEach((b) => {
                totalLines += RenderWorkerService.wrapText(ctx, b.baslik, w * 0.85).length + 0.5;
              });
            }
            const finalLineHeight = listFontSize * 1.6;
            let currentY = h * 0.16;
            basliklar.forEach((b, idx) => {
              ctx.font = `900 ${listFontSize}px ${fontFamily}`;
              ctx.fillStyle = "#E30A17";
              ctx.textAlign = "left";
              ctx.fillText(`${idx + 1}.`, w * 0.05, currentY);
              ctx.font = `700 ${listFontSize}px ${fontFamily}`;
              ctx.fillStyle = "#FFFFFF";
              const lines = RenderWorkerService.wrapText(ctx, b.baslik, w * 0.8);
              lines.forEach((line, lineIdx) => {
                ctx.fillText(line, w * 0.1, currentY + lineIdx * finalLineHeight);
              });
              currentY += lines.length * finalLineHeight + finalLineHeight * 0.5;
            });
            globalRenderedSec += 1 / FPS;
            if (videoTrack && videoTrack.requestFrame) videoTrack.requestFrame();
            await nextFrame();
          }
          if (audioEndPromise) await audioEndPromise;
          addSystemLog(`BA\u015ELIKLAR sahnesi render edildi.`, "success");
        } else if (slide._isKaynaklar && slide._kaynaklar) {
          const { exactDur, totalDur, audioEndPromise } = await playAudio(jobData.assets.audio[i], null, slide.spokenText);
          const totalFrames = Math.max(1, Math.round(totalDur * FPS));
          for (let frame = 0; frame < totalFrames; frame++) {
            ctx.fillStyle = "#030712";
            ctx.fillRect(0, 0, w, h);
            ctx.font = `900 ${w > 800 ? 50 : 38}px ${fontFamily}`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#E30A17";
            ctx.fillText("KAYNAKLAR", cx, h * 0.06);
            ctx.strokeStyle = "#E30A17";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(w * 0.1, h * 0.09);
            ctx.lineTo(w * 0.9, h * 0.09);
            ctx.stroke();
            const kaynaklar = slide._kaynaklar;
            let listFontSize = w > 800 ? 28 : 22;
            ctx.font = `700 ${listFontSize}px ${fontFamily}`;
            let currentY = h * 0.13;
            kaynaklar.forEach((k, idx) => {
              ctx.fillStyle = "#FFD700";
              ctx.textAlign = "left";
              ctx.font = `700 ${listFontSize}px ${fontFamily}`;
              ctx.fillText(`${idx + 1}. ${k.baslik}`, w * 0.05, currentY);
              currentY += listFontSize * 1.2;
              ctx.fillStyle = "#60A5FA";
              ctx.font = `400 ${listFontSize * 0.8}px ${fontFamily}`;
              ctx.fillText(k.url, w * 0.08, currentY);
              currentY += listFontSize * 1;
              if (k.tarih) {
                ctx.fillStyle = "#9CA3AF";
                ctx.font = `400 ${listFontSize * 0.7}px ${fontFamily}`;
                ctx.fillText(k.tarih, w * 0.08, currentY);
                currentY += listFontSize * 0.8;
              }
              currentY += listFontSize * 0.5;
            });
            globalRenderedSec += 1 / FPS;
            if (videoTrack && videoTrack.requestFrame) videoTrack.requestFrame();
            await nextFrame();
          }
          if (audioEndPromise) await audioEndPromise;
          addSystemLog("KAYNAKLAR sahnesi render edildi.", "success");
        } else {
          await renderScene(sImg, slide.spokenText, jobData.assets.audio[i], rawSlideSecs[i], false, false, slide.topText, i + 1, jobData.script.chartData, jobData.config.transition, isCustomImg, slide._zoomCoords || null);
        }
        if (i >= RENDER_CONFIG.WINDOW_SIZE) {
          const releaseIdx = i - RENDER_CONFIG.WINDOW_SIZE;
          jobData.assets.images[releaseIdx] = null;
          jobData.assets.audio[releaseIdx] = null;
        }
      }
      const lastSlideText = jobData.script.videoSlides.length > 0 ? jobData.script.videoSlides[jobData.script.videoSlides.length - 1].spokenText.toLowerCase() : "";
      const sonSozLower = (jobData.script.sonSoz || "").toLowerCase();
      const sonSozWords = sonSozLower.split(/\s+/).filter((w2) => w2.length > 2);
      const lastSlideWords = lastSlideText.split(/\s+/);
      const matchCount = sonSozWords.filter((w2) => lastSlideWords.some((lw) => lw.includes(w2) || w2.includes(lw))).length;
      const sonSozIsDuplicate = jobData.script.sonSoz && sonSozWords.length > 0 && (matchCount >= sonSozWords.length * 0.4 || lastSlideText.includes(sonSozLower) || sonSozLower.includes(lastSlideText));
      if (jobData.script.sonSoz && !sonSozIsDuplicate) {
        sysEventBus.emit("PROGRESS", { step: "RENDER", percent: 85, text: "Son S\xF6z Sahnesi Render Ediliyor..." });
        await renderSonSozScene(jobData.script.sonSoz, jobData.assets.sonSozAudio, rawSonSozDur);
      }
      {
        sysEventBus.emit("PROGRESS", { step: "RENDER", percent: 90, text: "Kapan\u0131\u015F Render Ediliyor..." });
        await renderScene(outroImg, jobData.script.lastQuote, jobData.assets.outroAudio, rawOutroDur, false, true, null, 99, null, jobData.config.transition);
      }
      if (bgmSource2) {
        try {
          bgmSource2.stop();
          bgmSource2.disconnect();
        } catch (e) {
          ErrorHandler.silent(e);
        }
      }
      if (bgmNode) {
        try {
          bgmNode.disconnect();
        } catch (e) {
          ErrorHandler.silent(e);
        }
      }
      if (masterGain2) {
        try {
          masterGain2.disconnect();
        } catch (e) {
          ErrorHandler.silent(e);
        }
      }
      silentOsc.stop();
      silentOsc.disconnect();
      keepAliveOsc.stop();
      keepAliveOsc.disconnect();
      keepAliveGain.disconnect();
      try {
        const totalFrames = Math.floor(rawCushion * scaleFactor * FPS);
        for (let i = 0; i < totalFrames; i++) {
          if (useForceExact && globalRenderedSec >= limitSec) break;
          globalRenderedSec += 1 / FPS;
          await nextFrame();
        }
      } catch (e) {
        console.warn("Kapan\u0131\u015F bekleme hatas\u0131:", e);
      }
      timerWorker.postMessage("stop");
      timerWorker.terminate();
      if (streamingEnabled && videoWritable) {
        return new Promise((resolve, reject) => {
          recorder.onstop = async () => {
            try {
              await videoWritable.close();
              addSystemLog("Video dosyaya ak\u0131t\u0131ld\u0131: " + videoFileHandle.name, "success");
              const file = await videoFileHandle.getFile();
              resolve({ url: ObjectURLManager.create(file), blobType: file.type, fileHandle: videoFileHandle });
            } catch (err) {
              addSystemLog("Dosya kapatma hatas\u0131: " + err.message, "error");
              reject(new Error(`Video kaydetme hatas\u0131: ${err.message}`));
            }
          };
          if (recorder.state !== "inactive") {
            try {
              recorder.requestData();
            } catch (e) {
              ErrorHandler.silent(e);
            }
            setTimeout(() => recorder.stop(), 100);
          }
        });
      } else {
        return new Promise((resolve, reject) => {
          recorder.onstop = () => {
            const blob = new Blob(videoChunks, { type: mimeType });
            videoChunks = [];
            if (blob.size === 0) return reject(new Error("Video olu\u015Fturulamad\u0131 (0 Bayt)."));
            resolve({ url: ObjectURLManager.create(blob), blobType: blob.type });
          };
          if (recorder.state !== "inactive") {
            try {
              recorder.requestData();
            } catch (e) {
              ErrorHandler.silent(e);
            }
            setTimeout(() => recorder.stop(), 100);
          }
        });
      }
    } catch (e) {
      if (typeof timerWorker !== "undefined") timerWorker.terminate();
      throw new Error(`Render failed: ${e.message}`);
    }
  }
};
class WorkflowCoordinator {
  constructor() {
    this.jobId = null;
    this.state = {};
  }
  async updateProgress(percent, text, step) {
    const safePercent = Math.min(100, Math.max(0, Math.round(percent)));
    this.state.progress = safePercent;
    this.state.statusText = text;
    await AssetManagerService.saveJobState(this.state);
    sysEventBus.emit("PROGRESS", { step, percent: safePercent, text });
  }
  async startWorkflow(inputData, inputType, config, preferences, canvasRef) {
    this.jobId = "job_" + Date.now();
    const customImages = config.customSceneImages || [];
    const uploadedMedia = inputType === "media" && Array.isArray(inputData) ? inputData : [];
    const allImages = [];
    if (customImages.length > 0 && uploadedMedia.length > 0) {
      const pairCount = Math.min(customImages.length, uploadedMedia.length, 10);
      for (let i = 0; i < pairCount; i++) {
        allImages.push({ type: "custom", data: customImages[i], mediaItem: uploadedMedia[i] });
      }
      addSystemLog(`E\u015Fle\u015Ftirme: ${pairCount} blok (S1+M1, S2+M2, ...)`, "info");
    } else if (customImages.length > 0) {
      for (const img of customImages) allImages.push({ type: "custom", data: img });
    } else {
      for (const m of uploadedMedia) allImages.push({ type: "uploaded", data: m });
    }
    this.state = {
      jobId: this.jobId,
      status: "INIT",
      inputData,
      inputType,
      config,
      preferences,
      script: { imageBlocks: [], thumbnailText: "", lastQuote: "", sonSoz: "", thumbnailImagePrompt: "", _isGuzelSoz: false },
      assets: { images: [], audio: [], thumbnail: null, thumbnailAudio: null, sonSozAudio: null, yorumAudio: null, outroAudio: null, blackoutAudio: null },
      imageQueue: allImages,
      processedImageCount: 0,
      progress: 0
    };
    await AssetManagerService.saveJobState(this.state);
    return this.resumeWorkflow(canvasRef);
  }
  async resumeWorkflow(canvasRef) {
    try {
      if (!this.state || !this.state.jobId) {
        const saved = await AssetManagerService.getPendingJob();
        if (saved) this.state = saved;
        else throw new Error("Bekleyen i\u015Flem bulunamad\u0131.");
      }
      sysEventBus.emit("WORKFLOW_STATE", { status: "RUNNING", job: this.state });
      if (this.state.status === "INIT") {
        if (this.state.config.tip === "guzel_soz" || this.state.config.tip === "iddia_analizi") {
          let startT = performance.now();
          const tipLabel = "G\xFCzel S\xF6z";
          await this.updateProgress(10, `${tipLabel} yap\u0131l\u0131yor...`, "LOGIC");
          const script = await LogicEngineService.analyzeContent(this.state.inputData, this.state.inputType, this.state.config);
          this.state.script = script;
          this.state.status = "GENERATING_ASSETS";
          await AssetManagerService.saveJobState(this.state);
          addSystemLog(`${tipLabel} tamamland\u0131 (${((performance.now() - startT) / 1e3).toFixed(1)}s).`, "success");
        } else if (this.state.inputType === "text" || this.state.inputType === "url" || this.state.inputType === "prompt") {
          let startT = performance.now();
          await this.updateProgress(10, "\u0130\xE7erik analiz ediliyor...", "LOGIC");
          const script = await LogicEngineService.analyzeContent(this.state.inputData, this.state.inputType, this.state.config);
          this.state.script = script;
          this.state.status = "GENERATING_ASSETS";
          await AssetManagerService.saveJobState(this.state);
          addSystemLog(`\u0130\xE7erik analizi tamamland\u0131 (${((performance.now() - startT) / 1e3).toFixed(1)}s).`, "success");
        } else {
          const queue = this.state.imageQueue || [];
          const totalImages = queue.length;
          if (totalImages === 0) throw new Error("\u0130\u015Flenecek g\xF6rsel bulunamad\u0131. L\xFCtfen en az bir sabit g\xF6rsel veya medya y\xFCkleyin.");
          addSystemLog(`Toplam ${totalImages} g\xF6rsel i\u015Flenecek.`, "info");
          let previousContext = "";
          for (let i = this.state.processedImageCount || 0; i < totalImages; i++) {
            const imgItem = queue[i];
            const blockNum = i + 1;
            await this.updateProgress(5 + blockNum / totalImages * 35, `Blok ${blockNum}/${totalImages} analiz ediliyor...`, "LOGIC");
            let blockResult;
            try {
              if (imgItem.type === "custom" && imgItem.mediaItem) {
                blockResult = await LogicEngineService.analyzeContentForImage([imgItem.mediaItem], "media", this.state.config, i, totalImages, previousContext);
              } else if (imgItem.type === "custom" && imgItem.data) {
                blockResult = await LogicEngineService.analyzeContentForImage([{ data: imgItem.data, type: "image/png" }], "media", this.state.config, i, totalImages, previousContext);
              } else if (imgItem.type === "uploaded" && imgItem.data) {
                blockResult = await LogicEngineService.analyzeContentForImage([imgItem.data], "media", this.state.config, i, totalImages, previousContext);
              } else {
                blockResult = await LogicEngineService.analyzeContentForImage(this.state.inputData, this.state.inputType, this.state.config, i, totalImages, previousContext);
              }
            } catch (e) {
              addSystemLog(`Blok ${blockNum} analiz hatas\u0131: ${e.message}`, "error");
              blockResult = { videoSlides: [], thumbnailText: "", thumbnailImagePrompt: "" };
            }
            if (i === 0) {
              if (!this.state.script.thumbnailText) {
                this.state.script.thumbnailText = blockResult.thumbnailText || "";
              }
              this.state.script.thumbnailImagePrompt = blockResult.thumbnailImagePrompt || "";
            }
            if (blockResult.sonSoz) this.state.script.sonSoz = blockResult.sonSoz;
            if (blockResult.kaynaklar && blockResult.kaynaklar.length > 0) {
              this.state.script._kaynaklar = blockResult.kaynaklar;
              addSystemLog(`${blockResult.kaynaklar.length} kaynak eklendi.`, "success");
            }
            if (blockResult.lastQuote) this.state.script.lastQuote = blockResult.lastQuote;
            if (!blockResult.gazeteBasliklari || blockResult.gazeteBasliklari.length === 0) {
              this.state.script.imageBlocks.push({
                imageIndex: i,
                imageType: imgItem.type,
                customImage: imgItem.type === "custom" ? imgItem.data : null,
                videoSlides: blockResult.videoSlides || []
              });
            } else {
              addSystemLog(`G\xF6rsel ${blockNum}: gazete ba\u015Fl\u0131klar\u0131 var, normal sahneler atland\u0131.`, "info");
            }
            if (blockResult.gazeteBasliklari && blockResult.gazeteBasliklari.length > 0) {
              if (!this.state.script._allBasliklar) this.state.script._allBasliklar = [];
              blockResult.gazeteBasliklari.forEach((b) => {
                this.state.script._allBasliklar.push({ ...b, _imgIdx: i });
              });
              addSystemLog(`G\xF6rsel ${blockNum}: ${blockResult.gazeteBasliklari.length} ba\u015Fl\u0131k \xE7\u0131kar\u0131ld\u0131.`, "success");
            }
            const slideTexts = (blockResult.videoSlides || []).map((s) => s.spokenText).join(" ");
            previousContext = `Blok ${blockNum}: ${slideTexts.substring(0, 200)}...`;
            this.state.processedImageCount = i + 1;
            await AssetManagerService.saveJobState(this.state);
            addSystemLog(`Blok ${blockNum}/${totalImages} tamamland\u0131 (${(blockResult.videoSlides || []).length} sahne).`, "success");
          }
          const allBasliklar = this.state.script._allBasliklar || [];
          const totalImages2 = queue.length;
          if (allBasliklar.length >= 1) {
            const allHeadlines = allBasliklar.map((b) => b.baslik).join(". ");
            try {
              const clickbaitUrl = `https://generativelanguage.googleapis.com/v1beta/models/${AI_CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;
              const clickbaitPayload = {
                contents: [{ parts: [{ text: `Bu haber ba\u015Fl\u0131klar\u0131ndan en etkileyici, clickbait bir tek ba\u015Fl\u0131k olu\u015Ftur (maksimum 10 kelime, b\xFCy\xFCk harfler, sansasyonel):

                            ${allHeadlines}

                            SADECE ba\u015Fl\u0131\u011F\u0131 yaz, ba\u015Fka bir \u015Fey yazma.` }] }],
                generationConfig: { temperature: 0.9, maxOutputTokens: 50 }
              };
              const cr = await NetworkUtils.fetchWithRetry(clickbaitUrl, { method: "POST", body: JSON.stringify(clickbaitPayload) });
              if (cr) {
                const cd = await cr.json();
                const clickbaitText = cd.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
                if (clickbaitText) {
                  this.state.script.thumbnailText = clickbaitText.toUpperCase();
                  addSystemLog(`Ortak clickbait ba\u015Fl\u0131k: "${clickbaitText}"`, "success");
                }
              }
            } catch (e) {
              addSystemLog(`Clickbait API hatas\u0131: ${e.message}`, "warn");
            }
            if (!this.state.script.thumbnailText || this.state.script.thumbnailText.length < 5) {
              const headlines = allBasliklar.map(function(b) {
                return b.baslik;
              });
              const longest = headlines.reduce(function(a, b) {
                return a.length > b.length ? a : b;
              }, "");
              this.state.script.thumbnailText = longest.toUpperCase();
              addSystemLog("Fallback clickbait: " + longest, "info");
            }
            const sourceLabel = (this.state.config?.sourceName || "Gazete").toUpperCase();
            const basliklarList = allBasliklar.slice(0, 10).map((b) => b.baslik).join(". ");
            const ozetSpoken = `${sourceLabel} ba\u015Fl\u0131klar\u0131nda bug\xFCn ${allBasliklar.length} \xF6nemli ba\u015Fl\u0131k var. ${basliklarList}.`;
            const isGazeteMode = Boolean(
              this.state.config?.tip === "gazete" || this.state.script?._isGazete || this.state.config?.isGazete || queue.length > 0 && (this.state.config?.sourceName || this.state.config?.gazeteSource)
            );
            allBasliklar.forEach((baslik, idx) => {
              const imgIdx = baslik._imgIdx != null ? baslik._imgIdx : 0;
              const srcItem = queue[imgIdx] || queue[0];
              const srcImg = (typeof srcItem?.data === "string" ? srcItem?.data : null) || (typeof srcItem?.customImage === "string" ? srcItem?.customImage : null);
              if (isGazeteMode) {
                this.state.script.imageBlocks.push({
                  imageIndex: imgIdx,
                  imageType: "custom",
                  customImage: srcImg,
                  videoSlides: [
                    {
                      topText: baslik.baslik.toUpperCase(),
                      spokenText: `${baslik.baslik}. ${baslik.aciklama || ""}`.trim(),
                      imagePrompts: []
                    }
                  ]
                });
              } else {
                const aiPrompt = baslik.aciklama ? baslik.aciklama.substring(0, 200) : baslik.baslik || "News event";
                this.state.script.imageBlocks.push({
                  imageIndex: imgIdx,
                  imageType: "custom",
                  customImage: srcImg,
                  videoSlides: [
                    {
                      topText: baslik.baslik.toUpperCase(),
                      spokenText: `${baslik.baslik}.`,
                      imagePrompts: []
                    },
                    {
                      topText: "",
                      spokenText: baslik.aciklama || baslik.baslik,
                      imagePrompts: [aiPrompt]
                    }
                  ]
                });
              }
            });
            addSystemLog(`BA\u015ELIKLAR sayfas\u0131 olu\u015Fturuldu: ${allBasliklar.length} ba\u015Fl\u0131k.`, "success");
          } else {
            addSystemLog("Tek ba\u015Fl\u0131k, BA\u015ELIKLAR sayfas\u0131 atland\u0131.", "info");
          }
          if (this.state.config.tip !== "haber" && this.state.script._kaynaklar && this.state.script._kaynaklar.length > 0) {
            const kaynaklarText = this.state.script._kaynaklar.map((k) => `${k.baslik}: ${k.url}`).join("\n");
            const kaynaklarSpoken = "Kaynaklar ve referanslar. " + this.state.script._kaynaklar.map((k) => k.baslik).join(". ") + ".";
            this.state.script.imageBlocks.push({
              imageIndex: 0,
              imageType: "ai",
              customImage: null,
              videoSlides: [{
                topText: "KAYNAKLAR",
                spokenText: kaynaklarSpoken,
                imagePrompts: ["A clean list of official sources and references on dark background"],
                _isKaynaklar: true,
                _kaynaklar: this.state.script._kaynaklar
              }]
            });
            addSystemLog("Kaynaklar sahnesi eklendi.", "success");
          }
          if (this.state.script && this.state.script.iddialar && this.state.script.iddialar.length > 0) {
            const allKaynaklar = [];
            this.state.script.iddialar.forEach(function(iddia) {
              if (iddia.kanitlar) {
                iddia.kanitlar.forEach(function(k) {
                  if (k.kaynak && allKaynaklar.indexOf(k.kaynak) === -1) {
                    allKaynaklar.push(k.kaynak);
                  }
                });
              }
            });
            if (allKaynaklar.length > 0) {
              const kaynaklarSpoken = "Kaynaklar ve referanslar. " + allKaynaklar.join(". ") + ".";
              this.state.script.imageBlocks.push({
                imageIndex: 0,
                imageType: "ai",
                customImage: null,
                videoSlides: [{ topText: "KAYNAKLAR", spokenText: kaynaklarSpoken, imagePrompts: ["A clean list of official sources and references on dark background, professional infographic style"] }]
              });
              addSystemLog("Kaynaklar sahnesi eklendi: " + allKaynaklar.length + " kaynak.", "success");
            }
          }
          this.state.script.videoSlides = [];
          for (const block of this.state.script.imageBlocks) {
            this.state.script.videoSlides.push(...block.videoSlides);
          }
          addSystemLog(`INIT tamamland\u0131: ${this.state.script.imageBlocks.length} blok, ${this.state.script.videoSlides.length} sahne.`, "success");
          addSystemLog(`Blok detaylar\u0131: ${this.state.script.imageBlocks.map((b, i) => `B${i + 1}=${b.videoSlides.length}s`).join(", ")}`, "info");
          this.state.status = "GENERATING_ASSETS";
          await AssetManagerService.saveJobState(this.state);
        }
      }
      if (this.state.status === "GENERATING_ASSETS") {
        await this.updateProgress(30, "Medya ve Sesler Sentezleniyor...", "ASSETS");
        const imgStyle = this.state.config.imageStyle || "cinematic";
        const imgRes = this.state.config.resolution || "4K";
        if (this.state.script._isGuzelSoz) {
          addSystemLog("G\xFCzel s\xF6z modu: g\xF6rseller ve ses \xFCretiliyor...", "info");
          const slideCount = this.state.script._sceneCount || 3;
          const quoteTextForImage = this.state.script.videoSlides[0]?.spokenText || "";
          const emotionForImage = this.state.script._emotion || analyzeQuoteEmotion(quoteTextForImage);
          const realUrls = this.state.script._realImageUrls || [];
          for (let i = 0; i < slideCount; i++) {
            const slide = this.state.script.videoSlides[i];
            if (!this.state.assets.images[i]) {
              try {
                if (realUrls[i]) {
                  addSystemLog(` G\xF6rsel ${i + 1}: Ger\xE7ek g\xF6rsel kullan\u0131l\u0131yor...`, "info");
                  this.state.assets.images[i] = realUrls[i];
                } else {
                  this.state.assets.images[i] = await MediaSynthesisService.generateImage(
                    slide.imagePrompts?.[0] || "Artistic background",
                    imgStyle,
                    imgRes,
                    true,
                    emotionForImage,
                    quoteTextForImage
                  );
                }
                addSystemLog(` G\xF6rsel ${i + 1}/${slideCount} tamamland\u0131.`, "success");
              } catch (e) {
                addSystemLog(` G\xF6rsel ${i + 1} hatas\u0131, fallback kullan\u0131l\u0131yor.`, "warn");
                this.state.assets.images[i] = this.state.assets.thumbnail;
              }
            }
          }
          if (!this.state.assets.audio[0]) {
            this.state.assets.audio[0] = await MediaSynthesisService.generateAudio(
              this.state.script.videoSlides[0].spokenText,
              this.state.preferences.narratorVoice
            );
          }
          if (!this.state.assets.thumbnail) this.state.assets.thumbnail = this.state.assets.images[0];
          const allMusic = await AssetManagerService.getAllMusicFromLib();
          if (allMusic.length > 0) {
            const userSelectedId = this.state.preferences?.ambientSound || SafeStorage.getItem("ns_selectedBgmId");
            let chosenTrack = userSelectedId && userSelectedId !== "none" ? allMusic.find((m) => m.id === userSelectedId) : null;
            if (!chosenTrack) {
              const matchedTrack = typeof matchMusicToEmotion === "function" ? matchMusicToEmotion(emotionForImage, allMusic) : null;
              chosenTrack = matchedTrack || allMusic[Math.floor(Math.random() * allMusic.length)];
            }
            addSystemLog(`M\xFCzik belirlendi: ${chosenTrack.name} (Se\xE7ili M\xFCzik Korundu)`, "success");
            this.state.script._bgmId = chosenTrack.id;
            this.state.script._bgmName = chosenTrack.name;
            this.state.preferences.ambientSound = chosenTrack.id;
            this.state.preferences.customBgMusicName = chosenTrack.name;
            this.state.preferences.customBgMusicId = chosenTrack.id;
          } else {
            addSystemLog("M\xFCzik k\xFCt\xFCphanesi bo\u015F, m\xFCzik eklenmedi.", "warn");
          }
          await this.updateProgress(70, "G\xFCzel s\xF6z haz\u0131r...", "ASSETS");
        } else {
          const customImages = this.state.config.customSceneImages || [];
          this.state.customImageCount = customImages.length;
          const isGazeteInput = Boolean(
            this.state.config?.tip === "gazete" || this.state.script?._isGazete || this.state.config?.isGazete || customImages.length > 0 && (this.state.config?.sourceName || this.state.config?.gazeteSource)
          );
          if (isGazeteInput && customImages.length > 0) {
            const mainGazeteImage = customImages[0];
            this.state.assets.thumbnail = mainGazeteImage;
            addSystemLog("\u{1F4F0} GAZETE \u0130LK SAYFASI MODU: T\xFCm sahnelerde gazete resmi kullan\u0131l\u0131yor. AI G\xF6rsel \xFCretimi ATLANDI.", "info");
            for (let i = 0; i < this.state.script.videoSlides.length; i++) {
              this.state.assets.images[i] = mainGazeteImage;
            }
          } else if (!this.state.assets.thumbnail) {
            addSystemLog("Kapak resmi \xE7izimi...", "info");
            this.state.assets.thumbnail = await MediaSynthesisService.generateImage(this.state.script.thumbnailImagePrompt || "Dramatic news event", imgStyle, imgRes);
            addSystemLog("Kapak resmi tamamland\u0131.", "success");
          }
          if (!isGazeteInput) {
            const blocks = this.state.script.imageBlocks || [];
            let globalIdx = 0;
            for (let b = 0; b < blocks.length; b++) {
              const block = blocks[b];
              const blockSlideCount = block.videoSlides.length;
              const blockCustomImg = block.customImage || customImages[b];
              if (block.imageType === "custom" && blockCustomImg) {
                this.state.assets.images[globalIdx] = blockCustomImg;
                addSystemLog(`Blok ${b + 1}: Sabit g\xF6rsel 1. sahneye atand\u0131. Kalan ${blockSlideCount - 1} sahne AI \xFCretilecek.`, "info");
              }
              globalIdx += blockSlideCount;
            }
          }
          const CHUNK_SIZE = 3;
          addSystemLog(`ASSETS fase: ${this.state.script.videoSlides.length} sahne, ${CHUNK_SIZE}'l\xFC chunk.`, "info");
          for (let i = 0; i < this.state.script.videoSlides.length; i += CHUNK_SIZE) {
            const chunk = this.state.script.videoSlides.slice(i, i + CHUNK_SIZE);
            addSystemLog(`Sahneler ${i + 1}-${Math.min(i + CHUNK_SIZE, this.state.script.videoSlides.length)} i\u015Fleniyor...`, "info");
            const chunkPromises = chunk.map(async (slide, idx) => {
              const actualIndex = i + idx;
              const computedPrompt = slide.imagePrompts?.[0] || slide.topText || slide.spokenText || "News event";
              const imgPromise = this.state.assets.images[actualIndex] ? Promise.resolve(this.state.assets.images[actualIndex]) : MediaSynthesisService.generateImage(computedPrompt, imgStyle, imgRes).then((res) => res || this.state.assets.thumbnail);
              const audPromise = this.state.assets.audio[actualIndex] ? Promise.resolve(this.state.assets.audio[actualIndex]) : MediaSynthesisService.generateAudio(slide.spokenText, this.state.preferences.narratorVoice);
              const [imgResData, audResData] = await Promise.all([imgPromise, audPromise]);
              this.state.assets.images[actualIndex] = imgResData;
              this.state.assets.audio[actualIndex] = audResData;
            });
            await Promise.all(chunkPromises);
            const currentProgress = Math.min(i + CHUNK_SIZE, this.state.script.videoSlides.length);
            await this.updateProgress(40 + currentProgress / this.state.script.videoSlides.length * 30, `Sahneler ${currentProgress}/${this.state.script.videoSlides.length}...`, "ASSETS");
          }
        }
        const extraAudioPromises = [];
        if (!this.state.assets.thumbnailAudio) {
          const now = /* @__PURE__ */ new Date();
          const dateLocale = { tr: "tr-TR", en: "en-US", fr: "fr-FR", de: "de-DE", es: "es-ES", ar: "ar-SA", ru: "ru-RU" }[this.state.config?.language || "tr"] || "tr-TR";
          const dateStr = now.toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" });
          const dayStr = now.toLocaleDateString(dateLocale, { weekday: "long" });
          const sourceName = this.state.config?.sourceName || "";
          const headline = this.state.script.thumbnailText || "";
          const clickbaitText = [dateStr + " " + dayStr, sourceName, headline].filter(Boolean).join(". ") + ".";
          extraAudioPromises.push(MediaSynthesisService.generateAudio(clickbaitText, this.state.preferences.narratorVoice).then((res) => {
            this.state.assets.thumbnailAudio = res;
            addSystemLog("Clickbait seslendirme haz\u0131r: " + clickbaitText.substring(0, 60) + "...", "success");
          }));
        }
        if (!this.state.script._isGuzelSoz) {
          if (this.state.script.sonSoz && !this.state.assets.sonSozAudio) extraAudioPromises.push(MediaSynthesisService.generateAudio(this.state.script.sonSoz, this.state.preferences.narratorVoice).then((res) => {
            this.state.assets.sonSozAudio = res;
          }));
          if (this.state.config.yorum && this.state.config.yorum.trim() && !this.state.assets.yorumAudio) extraAudioPromises.push(MediaSynthesisService.generateAudio(this.state.config.yorum, this.state.preferences.narratorVoice).then((res) => {
            this.state.assets.yorumAudio = res;
          }));
          if (!this.state.assets.outroAudio) {
            const quotePrefix = this.state.script.lastQuote ? `${this.state.script.lastQuote} ` : "";
            let defaultOutroText = "Abone olmay\u0131, be\u011Fenmeyi ve payla\u015Fmay\u0131 ihmal etmeyin.";
            if (this.state.config.language === "en") defaultOutroText = "Don't forget to subscribe, like, and share.";
            else if (this.state.config.language === "fr") defaultOutroText = "N'oubliez pas de vous abonner, d'aimer et de partager.";
            else if (this.state.config.language === "de") defaultOutroText = "Vergessen Sie nicht zu abonnieren, zu liken und zu teilen.";
            else if (this.state.config.language === "es") defaultOutroText = "No olvides suscribirte, dar me gusta y compartir.";
            else if (this.state.config.language === "ar") defaultOutroText = "\u0644\u0627 \u062A\u0646\u0633 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0648\u0627\u0644\u0625\u0639\u062C\u0627\u0628 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629.";
            else if (this.state.config.language === "ru") defaultOutroText = "\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F, \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043B\u0430\u0439\u043A.";
            extraAudioPromises.push(MediaSynthesisService.generateAudio(`${quotePrefix}${defaultOutroText}`, this.state.preferences.narratorVoice).then((res) => {
              this.state.assets.outroAudio = res;
            }));
          }
        }
        await Promise.all(extraAudioPromises);
        const imgCount = this.state.assets.images.filter(Boolean).length;
        const audCount = this.state.assets.audio.filter(Boolean).length;
        addSystemLog(`ASSETS tamamland\u0131: ${imgCount}/${this.state.script.videoSlides.length} g\xF6rsel, ${audCount}/${this.state.script.videoSlides.length} ses.`, imgCount === this.state.script.videoSlides.length ? "success" : "warn");
        this.state.status = "READY_TO_RENDER";
        await AssetManagerService.saveJobState(this.state);
      }
      if (this.state.status === "READY_TO_RENDER") {
        await this.updateProgress(80, "Video Paketleniyor...", "RENDER");
        const renderResult = await RenderWorkerService.executeRender(this.state, canvasRef.current, this.state.preferences);
        let finalVideoUrl = typeof renderResult === "string" ? renderResult : renderResult.url;
        let finalBlobType = typeof renderResult === "object" && renderResult.blobType ? renderResult.blobType : "video/webm";
        if (this.state.config.outputType !== "image") {
          try {
            await this.updateProgress(92, "Instagram Uyumlu 30 FPS MP4 D\xF6n\xFC\u015Ft\xFCr\xFCl\xFCyor...", "RENDER");
            addSystemLog("Video MP4 format\u0131na d\xF6n\xFC\u015Ft\xFCr\xFCl\xFCyor (0.5 sn)...", "info");
            const resp = await fetch(finalVideoUrl);
            const webmBlob = await resp.blob();
            const mp4Blob = await convertWebMtoMP4(webmBlob, (pct) => {
              this.updateProgress(92 + Math.round(pct * 0.07), `MP4 d\xF6n\xFC\u015Ft\xFCrme %${pct}...`, "RENDER");
            });
            if (mp4Blob && mp4Blob.size > 0) {
              finalVideoUrl = ObjectURLManager.create(mp4Blob);
              finalBlobType = "video/mp4";
              addSystemLog("\u2705 Video BA\u015EARIYLA 30 FPS MP4 FORMATINA D\xD6N\xDC\u015ET\xDCR\xDCLD\xDC!", "success");
            }
          } catch (mp4Err) {
            addSystemLog("MP4 d\xF6n\xFC\u015Ft\xFCrme uyar\u0131s\u0131: " + mp4Err.message, "warn");
          }
        }
        this.state.status = "COMPLETED";
        this.state.videoUrl = finalVideoUrl;
        this.state.videoBlobType = finalBlobType;
        await AssetManagerService.saveJobState(this.state);
        await AssetManagerService.clearJob(this.jobId);
        sysEventBus.emit("WORKFLOW_STATE", { status: "COMPLETED", job: this.state });
        return this.state.videoUrl;
      }
    } catch (e) {
      this.state.status = "FAILED";
      this.state.error = e.message;
      await AssetManagerService.saveJobState(this.state);
      sysEventBus.emit("WORKFLOW_STATE", { status: "FAILED", job: this.state });
      throw e;
    }
  }
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("[ErrorBoundary]", error, errorInfo);
    this.setState({ errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return React.createElement(
        "div",
        {
          style: { padding: "40px", textAlign: "center", background: "#0B0F19", color: "#e2e8f0", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }
        },
        React.createElement("h1", { style: { fontSize: "28px", fontWeight: "900", color: "#ef4444", marginBottom: "16px" } }, "Bir Hata Olu\u015Ftu"),
        React.createElement("p", { style: { color: "#94a3b8", marginBottom: "24px", fontSize: "14px" } }, this.state.error?.message || "Bilinmeyen hata"),
        React.createElement("button", {
          onClick: () => window.location.reload(),
          style: { background: "#6366f1", color: "white", border: "none", padding: "12px 24px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer" }
        }, "Sayfay\u0131 Yenile")
      );
    }
    return this.props.children;
  }
}
const VOICE_OPTIONS = [
  { id: "Aoede", label: "Aoede", gender: "Female", age: "Young", category: "Corporate & Narration" },
  { id: "Puck", label: "Puck", gender: "Male", age: "Child", category: "Anime & Animation" },
  { id: "Kore", label: "Kore", gender: "Female", age: "Middle-aged", category: "Documentary" },
  { id: "Charon", label: "Charon", gender: "Male", age: "Elderly", category: "Audiobooks & Novels" },
  { id: "Zephyr", label: "Zephyr", gender: "Male", age: "Young", category: "Commercials & Trailers" },
  { id: "Fenrir", label: "Fenrir", gender: "Male", age: "Middle-aged", category: "Games & RPG" },
  { id: "Leda", label: "Leda", gender: "Female", age: "Middle-aged", category: "Corporate & Narration" },
  { id: "Orus", label: "Orus (Erkek - Resmi)", gender: "Male", age: "Middle-aged", category: "Documentary" }
];
const CustomSelect = ({ value, onChange, options, icon: Icon, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const getSelectedLabel = () => {
    for (const opt of options) {
      if (opt.options) {
        const found = opt.options.find((o) => o.value === value);
        if (found) return found.label;
      } else if (opt.value === value) return opt.label;
    }
    return value;
  };
  const getSelectedColor = () => {
    for (const opt of options) {
      if (opt.options) {
        const found = opt.options.find((o) => o.value === value);
        if (found?.color) return found.color;
      } else if (opt.value === value && opt.color) return opt.color;
    }
    return "text-white";
  };
  return /* @__PURE__ */ React.createElement("div", { ref, className: `relative flex items-center w-full ${className || ""}`, onClick: () => setIsOpen(!isOpen) }, Icon && /* @__PURE__ */ React.createElement(Icon, { size: 18, className: "text-indigo-400 shrink-0 mr-3" }), /* @__PURE__ */ React.createElement("div", { className: `flex-1 flex items-center justify-between text-sm font-bold cursor-pointer truncate ${getSelectedColor()}` }, /* @__PURE__ */ React.createElement("span", { className: "truncate pr-2" }, getSelectedLabel()), /* @__PURE__ */ React.createElement(ChevronDown, { size: 16, className: `transition-transform shrink-0 ${isOpen ? "rotate-180" : ""} text-slate-400` })), isOpen && /* @__PURE__ */ React.createElement("div", { className: "absolute top-full left-0 w-full mt-2 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl z-[200] max-h-64 overflow-y-auto py-1" }, options.map((opt, idx) => {
    if (opt.options) {
      return /* @__PURE__ */ React.createElement("div", { key: idx }, opt.label && /* @__PURE__ */ React.createElement("div", { className: "px-3 py-1.5 text-[10px] text-slate-500 font-bold uppercase tracking-wider" }, opt.label), opt.options.map((subOpt) => /* @__PURE__ */ React.createElement("div", { key: subOpt.value, className: `px-3 py-2 text-sm cursor-pointer transition-colors ${value === subOpt.value ? "bg-blue-600 text-white" : `hover:bg-blue-600 hover:text-white ${subOpt.color || "text-slate-200"}`}`, onClick: (e) => {
        e.stopPropagation();
        onChange(subOpt.value);
        setIsOpen(false);
      } }, subOpt.label)));
    }
    return /* @__PURE__ */ React.createElement("div", { key: opt.value, className: `px-3 py-2 text-sm cursor-pointer transition-colors ${value === opt.value ? "bg-blue-600 text-white" : `hover:bg-blue-600 hover:text-white ${opt.color || "text-slate-200"}`}`, onClick: (e) => {
      e.stopPropagation();
      onChange(opt.value);
      setIsOpen(false);
    } }, opt.label);
  })));
};
const ImageBitmapCache = {
  cache: /* @__PURE__ */ new Map(),
  async get(src) {
    if (!src) return null;
    if (this.cache.has(src)) return this.cache.get(src);
    try {
      const resp = await fetch(src);
      const blob = await resp.blob();
      const bmp = await createImageBitmap(blob);
      this.cache.set(src, bmp);
      return bmp;
    } catch (e) {
      return null;
    }
  },
  clear() {
    for (const bmp of this.cache.values()) {
      if (bmp && typeof bmp.close === "function") bmp.close();
    }
    this.cache.clear();
  }
};
const GazeteCropModal = React.memo(({ src, name, onClose, onCrop }) => {
  const imgRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [selection, setSelection] = useState(null);
  const [dragStart, setDragStart] = useState(null);
  const getRelPos = (e) => {
    if (!imgRef.current) return { x: 0, y: 0 };
    const rect = imgRef.current.getBoundingClientRect();
    const clientX = e.touches ? (e.touches[0] || e.changedTouches[0]).clientX : e.clientX;
    const clientY = e.touches ? (e.touches[0] || e.changedTouches[0]).clientY : e.clientY;
    return {
      x: Math.max(0, Math.min(Math.round(clientX - rect.left), rect.width)),
      y: Math.max(0, Math.min(Math.round(clientY - rect.top), rect.height))
    };
  };
  const handleMouseDown = (e) => {
    e.preventDefault();
    const pos = getRelPos(e);
    setDragStart(pos);
    setSelection({ x1: pos.x, y1: pos.y, x2: pos.x, y2: pos.y });
  };
  useEffect(() => {
    if (!dragStart) return;
    const handleWindowMouseMove = (e) => {
      const pos = getRelPos(e);
      setSelection({
        x1: Math.min(dragStart.x, pos.x),
        y1: Math.min(dragStart.y, pos.y),
        x2: Math.max(dragStart.x, pos.x),
        y2: Math.max(dragStart.y, pos.y)
      });
    };
    const handleWindowMouseUp = () => {
      setDragStart(null);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("mouseup", handleWindowMouseUp);
    window.addEventListener("touchmove", handleWindowMouseMove, { passive: false });
    window.addEventListener("touchend", handleWindowMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
      window.removeEventListener("touchmove", handleWindowMouseMove);
      window.removeEventListener("touchend", handleWindowMouseUp);
    };
  }, [dragStart]);
  const doCrop = () => {
    if (!selection || !imgRef.current) return;
    const img = imgRef.current;
    const dispW = img.offsetWidth;
    const dispH = img.offsetHeight;
    const natW = img.naturalWidth;
    const natH = img.naturalHeight;
    const w = selection.x2 - selection.x1;
    const h = selection.y2 - selection.y1;
    if (w < 10 || h < 10) return;
    const scaleX = natW / dispW;
    const scaleY = natH / dispH;
    const cropX = Math.round(selection.x1 * scaleX);
    const cropY = Math.round(selection.y1 * scaleY);
    const cropW = Math.round(w * scaleX);
    const cropH = Math.round(h * scaleY);
    const canvas = document.createElement("canvas");
    canvas.width = cropW;
    canvas.height = cropH;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
    const dataUrl = canvas.toDataURL("image/png");
    onCrop(dataUrl, name);
  };
  const selW = selection ? selection.x2 - selection.x1 : 0;
  const selH = selection ? selection.y2 - selection.y1 : 0;
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/90 z-[9999] flex flex-col items-center justify-center p-4", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900 border border-indigo-500/30 rounded-2xl p-4 max-w-4xl w-full max-h-[90vh] flex flex-col", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Scissors, { size: 18, className: "text-indigo-400" }), /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold text-sm" }, name)), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, selection && selW > 10 && selH > 10 && /* @__PURE__ */ React.createElement("button", { onClick: doCrop, className: "bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-600/30" }, /* @__PURE__ */ React.createElement(Check, { size: 14 }), " Crop'u Kullan"), /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold" }, "\u2715 Kapat"))), /* @__PURE__ */ React.createElement("p", { className: "text-slate-400 text-[11px] mb-2" }, "\u{1F5B1}\uFE0F Fare ile gazete \xFCzerinde k\u0131rpmak istedi\u011Finiz haberi s\xFCr\xFCkleyip se\xE7in."), /* @__PURE__ */ React.createElement("div", { className: "relative flex-1 overflow-auto rounded-xl bg-black/50 select-none flex justify-center items-start" }, /* @__PURE__ */ React.createElement("div", { className: "relative inline-block", onMouseDown: handleMouseDown, style: { cursor: "crosshair", touchAction: "none" } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      ref: imgRef,
      src,
      crossOrigin: "anonymous",
      onLoad: () => setImgLoaded(true),
      className: "max-w-full h-auto block select-none",
      alt: name,
      draggable: false
    }
  ), selection && imgLoaded && selW > 0 && selH > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "absolute bg-black/60 pointer-events-none", style: { top: 0, left: 0, right: 0, height: selection.y1 + "px" } }), /* @__PURE__ */ React.createElement("div", { className: "absolute bg-black/60 pointer-events-none", style: { top: selection.y2 + "px", left: 0, right: 0, bottom: 0 } }), /* @__PURE__ */ React.createElement("div", { className: "absolute bg-black/60 pointer-events-none", style: { top: selection.y1 + "px", left: 0, width: selection.x1 + "px", height: selH + "px" } }), /* @__PURE__ */ React.createElement("div", { className: "absolute bg-black/60 pointer-events-none", style: { top: selection.y1 + "px", left: selection.x2 + "px", right: 0, height: selH + "px" } }), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute border-2 border-emerald-400 bg-emerald-400/20 pointer-events-none shadow-[0_0_15px_rgba(52,211,153,0.6)]",
      style: { left: selection.x1 + "px", top: selection.y1 + "px", width: selW + "px", height: selH + "px" }
    },
    /* @__PURE__ */ React.createElement("div", { className: "absolute -top-6 left-0 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow whitespace-nowrap" }, Math.round(selW), " \xD7 ", Math.round(selH), " px")
  ))))));
});
function App() {
  const [user, setUser] = useState(null);
  const [authExpired, setAuthExpired] = useState(false);
  const isLoadedRef = useRef(false);
  const isVoiceFiltersInitRef = useRef(false);
  const logEndRef = useRef(null);
  const musicFileInputRef = useRef(null);
  const loadSavedJSON = (key, fallback) => {
    try {
      const saved = SafeStorage.getItem(key);
      if (!saved) return fallback;
      const parsed = JSON.parse(saved);
      return parsed && typeof parsed === "object" ? { ...fallback, ...parsed } : fallback;
    } catch (e) {
      return fallback;
    }
  };
  const [activeTab, setActiveTab] = useState(() => {
    const saved = SafeStorage.getItem("ns_activeTab");
    return saved === "image" ? "media" : saved || "media";
  });
  const [textInput, setTextInput] = useState(() => SafeStorage.getItem("ns_textInput") || "");
  const [gazeteItems, setGazeteItems] = useState([]);
  const [gazeteLoading, setGazeteLoading] = useState(false);
  const [gazeteError, setGazeteError] = useState("");
  const [gazeteCropModal, setGazeteCropModal] = useState(null);
  const [gazeteSource, setGazeteSource] = useState(() => SafeStorage.getItem("ns_gazeteSource") || "gazeteoku");
  const [gazeteDate, setGazeteDate] = useState(() => {
    const today = /* @__PURE__ */ new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, "0");
    const d = String(today.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  });
  const [userApiKey, setUserApiKeyState] = useState(() => SafeStorage.getItem("GEMINI_API_KEY") || apiKey || "");
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const handleSaveApiKey = (newKey) => {
    const trimmed = (newKey || "").trim();
    setGeminiApiKey(trimmed);
    setUserApiKeyState(trimmed);
    setShowApiKeyModal(false);
    if (trimmed) addSystemLog("Gemini API Key kaydedildi.", "success");
    else addSystemLog("Gemini API Key temizlendi.", "warn");
  };
  const [config, setConfig] = useState(() => loadSavedJSON("ns_config", {
    duration: "30",
    aspectRatio: "9:16",
    videoStyle: "cinematic",
    fontStyle: "modern",
    imageStyle: "oil_painting",
    language: "tr",
    subtitles: "on",
    resolution: "4K",
    transition: "none",
    outputType: "video",
    analysisMode: "yorumsuz",
    videoFormat: "mp4",
    tip: "haber",
    sourceName: "",
    yorum: ""
  }));
  const [prefs, setPrefs] = useState(() => loadSavedJSON("ns_prefs", {
    narratorVoice: "Aoede",
    narratorVolume: 0.8,
    backgroundMusicVolume: 0.3,
    ambientSound: "none",
    customBgMusicName: "",
    customBgMusicId: ""
  }));
  const [voiceFilters, setVoiceFilters] = useState(() => loadSavedJSON("ns_voiceFilters", { gender: "Any", age: "Any", category: "Any" }));
  const [showFilters, setShowFilters] = useState(false);
  const [sysLogs, setSysLogs] = useState([]);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [pendingJob, setPendingJob] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const filteredVoices = VOICE_OPTIONS.filter((v) => {
    if (voiceFilters.gender !== "Any" && v.gender !== voiceFilters.gender) return false;
    if (voiceFilters.age !== "Any" && v.age !== voiceFilters.age) return false;
    if (voiceFilters.category !== "Any" && v.category !== voiceFilters.category) return false;
    return true;
  });
  useEffect(() => {
    if (!isVoiceFiltersInitRef.current) {
      isVoiceFiltersInitRef.current = true;
      return;
    }
    if (filteredVoices.length > 0 && !filteredVoices.find((v) => v.id === prefs.narratorVoice)) {
      setPrefs((p) => ({ ...p, narratorVoice: filteredVoices[0].id }));
    }
  }, [voiceFilters]);
  const [uiState, setUiState] = useState({ isProcessing: false, statusText: "", percent: 0, error: "", videoUrl: null, showDevMenu: false, selectedMediaFiles: [] });
  useEffect(() => {
    const prevent = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    window.addEventListener("dragover", prevent);
    window.addEventListener("drop", prevent);
    return () => {
      window.removeEventListener("dragover", prevent);
      window.removeEventListener("drop", prevent);
      ObjectURLManager.revokeAll();
    };
  }, []);
  const [studioMedia, setStudioMedia] = useState({ outroUrl: null, musicLoaded: false, musicName: "", musicId: "", musicList: [], customSceneImages: [], isLoading: true, statusMsg: "Bulut Kontrol Ediliyor...", syncedFolderName: "" });
  const [musicSearchQuery, setMusicSearchQuery] = useState("");
  const canvasRef = useRef(null);
  const workflowRef = useRef(new WorkflowCoordinator());
  const _previewAudioRef = useRef(null);
  const _previewTimeoutRef = useRef(null);
  const getTargetSeconds = (dur) => {
    if (dur === "unlimited") return 0;
    if (dur === "15") return 30;
    if (dur === "30") return 60;
    if (dur === "60") return 90;
    if (dur === "90") return 120;
    return 60;
  };
  const targetSecUI = getTargetSeconds(config.duration);
  const maxWordsUI = config.duration === "unlimited" ? "S\u0131n\u0131rs\u0131z" : Math.floor((targetSecUI - 1.5) * getWPS(config.language));
  const ambientOptions = [
    { value: "none", label: "\u{1F507} Arka Ses Yok", color: "text-slate-300" },
    { label: "Atmosfer", options: [
      { value: "rain", label: "\u{1F327}\uFE0F Ya\u011Fmur", color: "text-blue-300" },
      { value: "wind", label: "\u{1F32C}\uFE0F R\xFCzgar", color: "text-slate-300" },
      { value: "waves", label: "\u{1F30A} Dalgalar", color: "text-cyan-300" },
      { value: "fire", label: "\u{1F525} \u015E\xF6mine", color: "text-orange-300" }
    ] }
  ];
  const filteredMusicList = studioMedia.musicList.filter((m) => !musicSearchQuery || m.name.toLowerCase().includes(musicSearchQuery.toLowerCase()));
  if (filteredMusicList.length > 0) ambientOptions.push({ label: "M\xFCziklerim", options: filteredMusicList.map((m) => ({ value: m.id, label: `\u{1F3B5} ${m.name.replace(/\.[^.]+$/, "")}`, color: "text-violet-400" })) });
  const voiceOptions = [
    { value: "none", label: "\u{1F507} Ses Yok", color: "text-rose-400 font-bold" },
    ...filteredVoices.map((v) => ({ value: v.id, label: v.label }))
  ];
  if (filteredVoices.length === 0) voiceOptions.push({ value: "", label: "Kriter Uyumsuz", color: "text-slate-500" });
  const SOCIAL_PLATFORMS = [
    { id: "x", name: "X (Twitter)", color: "#1DA1F2", loginUrl: "https://x.com/login", shareUrl: "https://x.com/intent/post" },
    { id: "linkedin", name: "LinkedIn", color: "#0A66B2", loginUrl: "https://www.linkedin.com/login", shareUrl: "https://www.linkedin.com/feed/compose/" },
    { id: "facebook", name: "Facebook", color: "#1877F2", loginUrl: "https://www.facebook.com/login", shareUrl: "https://www.facebook.com/sharer/sharer.php" },
    { id: "instagram", name: "Instagram", color: "#E4405F", loginUrl: "https://www.instagram.com/accounts/login/", shareUrl: "https://www.instagram.com/" },
    { id: "tiktok", name: "TikTok", color: "#000000", loginUrl: "https://www.tiktok.com/login", shareUrl: "https://www.tiktok.com/" },
    { id: "pinterest", name: "Pinterest", color: "#BD081C", loginUrl: "https://pinterest.com/login/", shareUrl: "https://pinterest.com/pin/create/button/" },
    { id: "bluesky", name: "Bluesky", color: "#0085FF", loginUrl: "https://bsky.app/", shareUrl: "https://bsky.app/" }
  ];
  const [connectedPlatforms, setConnectedPlatforms] = useState(() => {
    const saved = JSON.parse(SafeStorage.getItem("ns_connectedPlatforms")) || {};
    return saved;
  });
  const [shareTargets, setShareTargets] = useState(() => {
    const saved = JSON.parse(SafeStorage.getItem("ns_shareTargets")) || {};
    return saved;
  });
  const [showSharePanel, setShowSharePanel] = useState(false);
  const togglePlatform = (platformId) => {
    setConnectedPlatforms((prev) => {
      const next = { ...prev, [platformId]: !prev[platformId] };
      SafeStorage.setItem("ns_connectedPlatforms", JSON.stringify(next));
      if (!next[platformId]) setShareTargets((prev2) => {
        const n = { ...prev2 };
        delete n[platformId];
        SafeStorage.setItem("ns_shareTargets", JSON.stringify(n));
        return n;
      });
      return next;
    });
  };
  const toggleShareTarget = (platformId) => {
    setShareTargets((prev) => {
      const next = { ...prev, [platformId]: !prev[platformId] };
      SafeStorage.setItem("ns_shareTargets", JSON.stringify(next));
      return next;
    });
  };
  const openPlatformConnect = (platform) => {
    const popup = window.open(platform.loginUrl, platform.name, "width=600,height=700,scrollbars=yes");
    addSystemLog(`${platform.name} giri\u015F sayfas\u0131 a\xE7\u0131ld\u0131. Oturum a\xE7\u0131n, otomatik olarak ba\u011Flanacaks\u0131n\u0131z.`, "info");
    const checker = setInterval(() => {
      try {
        if (popup.closed) {
          clearInterval(checker);
          togglePlatform(platform.id);
          addSystemLog(`${platform.name} ba\u011Flant\u0131s\u0131 tamamland\u0131!`, "success");
        }
      } catch (e) {
        clearInterval(checker);
      }
    }, 800);
  };
  const autoSaveVideo = async (videoUrl, title, videoFormat) => {
    if (!videoUrl || !videoUrl.startsWith("blob:")) {
      addSystemLog("Ge\xE7ersiz video URL, kaydetme atland\u0131.", "warn");
      return;
    }
    addSystemLog("Video kaydediliyor...", "info");
    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const actualBlobType = workflowRef.current?.state?.videoBlobType || "";
      const isWebM = blob.type.includes("webm") || actualBlobType.includes("webm");
      const wantsMP4 = videoFormat === "mp4";
      let finalBlob = blob;
      let ext = ".webm";
      if (wantsMP4) {
        addSystemLog("Instagram uyumlu 30 FPS MP4 \xFCretiliyor...", "info");
        try {
          finalBlob = await convertWebMtoMP4(blob, (pct) => {
            if (pct % 25 === 0) addSystemLog(`MP4 d\xF6n\xFC\u015Ft\xFCrme: %${pct}`, "info");
          });
          ext = ".mp4";
          addSystemLog("Instagram uyumlu 30 FPS MP4 tamamland\u0131.", "success");
        } catch (convErr) {
          addSystemLog(`MP4 d\xF6n\xFC\u015Ft\xFCrme ba\u015Far\u0131s\u0131z, WebM indiriliyor: ${convErr.message}`, "warn");
          ext = isWebM ? ".webm" : ".mp4";
        }
      } else {
        ext = isWebM ? ".webm" : ".mp4";
      }
      const safeName = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s]/g, "").trim().replace(/\s+/g, "_").toLowerCase();
      const fileName = `${safeName}${ext}`;
      const a = document.createElement("a");
      a.href = ObjectURLManager.create(finalBlob);
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      ObjectURLManager.revoke(a.href);
      addSystemLog(`Video indirildi: ${fileName}`, "success");
    } catch (e) {
      addSystemLog("Video indirme hatas\u0131: " + e.message, "error");
    }
  };
  const copyShareLink = async () => {
    const title = workflowRef.current?.state?.script?.thumbnailText || "Video";
    try {
      await navigator.clipboard.writeText(title);
      addSystemLog("Ba\u015Fl\u0131k panoya kopyaland\u0131!", "success");
    } catch (e) {
      const textarea = document.createElement("textarea");
      textarea.value = title;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      addSystemLog("Ba\u015Fl\u0131k panoya kopyaland\u0131!", "success");
    }
  };
  const nativeShare = async () => {
    const title = textInput || workflowRef.current?.state?.script?.thumbnailText || "OTONOM Haber";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title, text: title });
        addSystemLog("Cihazda payla\u015F\u0131m yap\u0131ld\u0131!", "success");
      }
    } catch (e) {
      if (e.name !== "AbortError") addSystemLog("Payla\u015F\u0131m hatas\u0131: " + e.message, "error");
    }
  };
  const uploadMediaToCloud = async (blobOrUrl, fileName = "video.mp4") => {
    try {
      let blob = blobOrUrl;
      if (typeof blobOrUrl === "string" && blobOrUrl.startsWith("blob:")) {
        const res = await fetch(blobOrUrl);
        blob = await res.blob();
      } else if (typeof blobOrUrl === "string" && blobOrUrl.startsWith("data:")) {
        const parts = blobOrUrl.split(",");
        const mime = parts[0].match(/:(.*?);/)?.[1] || "video/mp4";
        const bstr = atob(parts[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) u8arr[n] = bstr.charCodeAt(n);
        blob = new Blob([u8arr], { type: mime });
      }
      if (!(blob instanceof Blob)) {
        if (typeof blobOrUrl === "string" && blobOrUrl.startsWith("http")) return blobOrUrl;
        return null;
      }
      if (blob.type.includes("video") || fileName.endsWith(".mp4") || fileName.endsWith(".webm")) {
        addSystemLog("Instagram/Buffer i\xE7in 30 FPS MP4 kontrol\xFC ve d\xF6n\xFC\u015F\xFCm\xFC yap\u0131l\u0131yor...", "info");
        try {
          blob = await convertWebMtoMP4(blob);
          fileName = fileName.replace(/\.[^.]+$/, "") + ".mp4";
          addSystemLog("\u2713 Instagram uyumlu 30 FPS MP4 haz\u0131rland\u0131.", "success");
        } catch (err) {
          addSystemLog(`MP4 d\xF6n\xFC\u015F\xFCm uyar\u0131s\u0131: ${err.message}`, "warn");
        }
      }
      addSystemLog("Video/Medya buluta y\xFCkleniyor (Buffer yay\u0131n haz\u0131rl\u0131\u011F\u0131)...", "info");
      try {
        const fd1 = new FormData();
        fd1.append("file", blob, fileName);
        const r1 = await fetch("https://tmpfiles.org/api/v1/upload", { method: "POST", body: fd1 });
        if (r1.ok) {
          const j1 = await r1.json();
          if (j1.status === "success" && j1.data?.url) {
            const directUrl = j1.data.url.replace("https://tmpfiles.org/", "https://tmpfiles.org/dl/");
            addSystemLog(`\u2713 Video/Medya buluta ba\u015Far\u0131yla y\xFCklendi (tmpfiles): ${directUrl}`, "success");
            return directUrl;
          }
        }
      } catch (e1) {
        ErrorHandler.silent(e1);
      }
      if (isLocalhostAllowed()) {
        try {
          const fd0 = new FormData();
          fd0.append("file", blob, fileName);
          const r0 = await fetch("http://localhost:3000/upload_cloud_media", { method: "POST", body: fd0 });
          if (r0.ok) {
            const j0 = await r0.json();
            if (j0.success && j0.url) {
              addSystemLog(`\u2713 Video/Medya buluta ba\u015Far\u0131yla y\xFCklendi (${j0.provider || "Python Bridge"}): ${j0.url}`, "success");
              return j0.url;
            }
          }
        } catch (e0) {
          ErrorHandler.silent(e0);
        }
      }
      try {
        const fd2 = new FormData();
        fd2.append("reqtype", "fileupload");
        fd2.append("time", "1h");
        fd2.append("fileToUpload", blob, fileName);
        const r2 = await fetch("https://litterbox.catbox.moe/resources/internals/api.php", { method: "POST", body: fd2 });
        if (r2.ok) {
          const pubUrl = (await r2.text()).trim();
          if (pubUrl && pubUrl.startsWith("http")) {
            addSystemLog(`\u2713 Video/Medya buluta ba\u015Far\u0131yla y\xFCklendi (catbox): ${pubUrl}`, "success");
            return pubUrl;
          }
        }
      } catch (e2) {
        ErrorHandler.silent(e2);
      }
      try {
        const fd3 = new FormData();
        fd3.append("file", blob, fileName);
        const r3 = await fetch("https://file.io", { method: "POST", body: fd3 });
        if (r3.ok) {
          const j3 = await r3.json();
          if (j3.success && j3.link) {
            addSystemLog(`\u2713 Video/Medya buluta ba\u015Far\u0131yla y\xFCklendi (file.io): ${j3.link}`, "success");
            return j3.link;
          }
        }
      } catch (e3) {
        ErrorHandler.silent(e3);
      }
    } catch (e) {
      addSystemLog("Bulut y\xFCkleme uyar\u0131s\u0131: " + e.message, "warn");
    }
    return null;
  };
  const shareToBufferAPI = async (text, mediaUrl = null) => {
    const token = SafeStorage.getItem("BUFFER_API_KEY") || "";
    const endpoints = [
      ...isLocalhostAllowed() ? ["http://localhost:3000/buffer_proxy"] : [],
      "https://api.buffer.com/graphql"
    ];
    const scriptObj = workflowRef.current?.state?.script || {};
    const headline = textInput || scriptObj.thumbnailText || text || "OTONOM Haber";
    const desc = scriptObj.tiktokDescription ? `

${scriptObj.tiktokDescription}` : "";
    const tags = Array.isArray(scriptObj.tiktokHashtags) && scriptObj.tiktokHashtags.length > 0 ? `

${scriptObj.tiktokHashtags.join(" ")}` : "";
    const fullPostText = `${headline}${desc}${tags}`.replace(/blob:https?:[^\s]+/gi, "").trim() || "OTONOM Haber";
    let directCloudUrl = null;
    const targetMedia = mediaUrl || uiState.videoUrl || studioMedia.customSceneImages && studioMedia.customSceneImages[0];
    const isVideo = config.outputType === "video" || typeof targetMedia === "string" && (targetMedia.includes(".mp4") || targetMedia.includes(".webm") || targetMedia.startsWith("blob:"));
    const ext = isVideo ? "mp4" : "jpg";
    if (targetMedia) {
      directCloudUrl = await uploadMediaToCloud(targetMedia, `otonom_video_${Date.now()}.${ext}`);
    }
    if (!directCloudUrl) {
      if (gazeteItems && gazeteItems[gazeteCurrentIdx]?.rawSrc) {
        directCloudUrl = gazeteItems[gazeteCurrentIdx].rawSrc;
      } else if (gazeteItems && gazeteItems[gazeteCurrentIdx]?.src && !gazeteItems[gazeteCurrentIdx].src.startsWith("blob:")) {
        directCloudUrl = gazeteItems[gazeteCurrentIdx].src;
      } else {
        directCloudUrl = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1080";
      }
    }
    const isVideoAsset = isVideo && Boolean(directCloudUrl);
    addSystemLog(`\u2139\uFE0F [PAYLA\u015E ADIM 2] Yay\u0131n Tipi: ${isVideoAsset ? "MP4 Video" : "G\xF6rsel"}, Medya Linki: ${directCloudUrl || "Yok (Metin Postu)"}`, "info");
    const serverUrl = await getLinkedInServerUrl();
    if (serverUrl) {
      try {
        addSystemLog(`\u2139\uFE0F [PAYLA\u015E ADIM 3] Yerel sunucu bulundu (${serverUrl}), toplu payla\u015F\u0131m iste\u011Fi g\xF6nderiliyor...`, "info");
        const res = await fetch(`${serverUrl}/buffer/share-all`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Local-Proxy-Auth": "otonom_proxy_secret_key_883921"
          },
          body: JSON.stringify({
            text: fullPostText,
            media_url: directCloudUrl,
            token
          })
        });
        if (res.ok) {
          const json = await res.json();
          if (json.status === "success") {
            addSystemLog(`\u2713 [PAYLA\u015E BA\u015EARILI] Buffer yerel sunucu k\xF6pr\xFCs\xFC ile ${json.channels_count || 3} sosyal medya kanal\u0131na g\xF6nderildi!`, "success");
            return json.channels_count || 3;
          } else {
            addSystemLog(`\u26A0\uFE0F [PAYLA\u015E UYARI] Sunucu yan\u0131t\u0131: ${json.message || JSON.stringify(json)}`, "warn");
          }
        } else {
          addSystemLog(`\u274C [PAYLA\u015E SUNUCU HATASI] Status: HTTP ${res.status} (${res.statusText})`, "error");
        }
      } catch (e) {
        addSystemLog(`\u26A0\uFE0F [PAYLA\u015E SUNUCU UYARISI] Yerel sunucu k\xF6pr\xFCs\xFC hatas\u0131: ${e.message}`, "warn");
      }
    } else {
      addSystemLog("\u2139\uFE0F [PAYLA\u015E ADIM 3] Yerel sunucu pasif/eri\u015Filemez, do\u011Frudan Buffer API deneniyor...", "info");
    }
    const fetchBufferGraphQL = async (queryStr, variablesObj = {}) => {
      const targetUrl = "https://api.buffer.com/graphql";
      const payload = { query: queryStr, variables: variablesObj, token };
      const payloadStr = JSON.stringify(payload);
      const tryEndpoints = [
        ...serverUrl ? [{ url: `${serverUrl}/buffer_proxy`, isLocal: true }] : [],
        ...isLocalhostAllowed() ? [{ url: "http://localhost:3000/buffer_proxy", isLocal: true }] : [],
        { url: targetUrl, isDirect: true },
        { url: `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`, isProxy: true },
        { url: `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`, isProxy: true }
      ];
      let lastErr = null;
      for (const ep of tryEndpoints) {
        try {
          const headers = { "Content-Type": "application/json" };
          if (token) headers["Authorization"] = `Bearer ${token}`;
          if (ep.isLocal) headers["X-Local-Proxy-Auth"] = "otonom_proxy_secret_key_883921";
          const res = await fetch(ep.url, {
            method: "POST",
            headers,
            body: payloadStr
          });
          if (res.ok) {
            const json = await res.json();
            if (json.data || json.errors) return json;
          } else {
            lastErr = new Error(`HTTP ${res.status}`);
          }
        } catch (e) {
          lastErr = e;
        }
      }
      throw lastErr || new Error("Buffer API ba\u011Flant\u0131 hatas\u0131");
    };
    let activeChannels = [];
    try {
      const getChannelsQuery = `
                    query {
                      account {
                        organizations {
                          id
                        }
                      }
                    }
                  `;
      addSystemLog("\u2139\uFE0F [PAYLA\u015E ADIM 4] Buffer Organization sorgulan\u0131yor...", "info");
      const jsonOrg = await fetchBufferGraphQL(getChannelsQuery);
      const orgId = jsonOrg.data?.account?.organizations?.[0]?.id;
      if (orgId) {
        addSystemLog(`\u2713 [PAYLA\u015E ADIM 4] Buffer Organization ID bulundu: ${orgId}`, "success");
        const chanQuery = `
                      query GetChannels($input: ChannelsInput!) {
                        channels(input: $input) {
                          id
                          name
                          service
                        }
                      }
                    `;
        const jsonChan = await fetchBufferGraphQL(chanQuery, { input: { organizationId: orgId } });
        if (Array.isArray(jsonChan.data?.channels) && jsonChan.data.channels.length > 0) {
          activeChannels = jsonChan.data.channels;
          addSystemLog(`\u2713 [PAYLA\u015E ADIM 4] Dinamik kanal listesi al\u0131nd\u0131 (${activeChannels.length} kanal)`, "success");
        }
      }
    } catch (e) {
      addSystemLog(`\u26A0\uFE0F [PAYLA\u015E ADIM 4] Dinamik kanal sorgu uyar\u0131s\u0131: ${e.message}`, "warn");
    }
    if (activeChannels.length === 0) {
      activeChannels = [
        { id: "6a50b10040483446288e397b", name: "Twitter (serefkeser)", service: "twitter" },
        { id: "69f5d9145c4c051afa01c2f7", name: "Instagram (keser4881)", service: "instagram" },
        { id: "6a69a6cf0dc384370e2ef6ea", name: "TikTok", service: "tiktok" }
      ];
      addSystemLog(`\u2139\uFE0F [PAYLA\u015E ADIM 4] Varsay\u0131lan kanal profili kullan\u0131l\u0131yor (${activeChannels.length} kanal)`, "info");
    }
    addSystemLog(`\u{1F4CC} [PAYLA\u015E ADIM 5] Toplam ${activeChannels.length} kanal i\xE7in yay\u0131n g\xF6nderimi ba\u015Flat\u0131l\u0131yor: ${activeChannels.map((c) => `${c.name} (${c.service})`).join(", ")}`, "info");
    let successCount = 0;
    for (const ch of activeChannels) {
      const mutation = `
                    mutation CreatePost($input: CreatePostInput!) {
                      createPost(input: $input) {
                        ... on PostActionSuccess { post { id status } }
                        ... on InvalidInputError { message }
                        ... on UnexpectedError { message }
                        ... on LimitReachedError { message }
                      }
                    }
                  `;
      const assetObj = isVideoAsset ? { video: { url: directCloudUrl } } : { image: { url: directCloudUrl } };
      const variables = {
        input: {
          channelId: ch.id,
          text: fullPostText,
          mode: "shareNow",
          schedulingType: "automatic",
          needsApproval: false,
          assets: [assetObj]
        }
      };
      if (ch.service === "instagram") {
        variables.input.metadata = {
          instagram: {
            type: isVideoAsset ? "reel" : "post",
            shouldShareToFeed: true
          }
        };
      } else if (ch.service === "tiktok") {
        variables.input.metadata = {
          tiktok: {
            privacy_level: "PUBLIC_TO_EVERYONE",
            title: fullPostText.substring(0, 150)
          }
        };
      }
      addSystemLog(`\u23F3 [KANAL G\xD6NDER\u0130M\u0130] ${ch.name} (${ch.service.toUpperCase()}) kanal\u0131na g\xF6nderiliyor...`, "info");
      try {
        const json = await fetchBufferGraphQL(mutation, variables);
        const postData = json.data?.createPost;
        if (postData?.post?.id) {
          successCount++;
          addSystemLog(`\u2713 [BA\u015EARILI] ${ch.name} (${ch.service.toUpperCase()}): Post ID=${postData.post.id}, Status=${postData.post.status}`, "success");
        } else if (postData?.message) {
          addSystemLog(`\u26A0\uFE0F [KANAL UYARISI] ${ch.name} (${ch.service.toUpperCase()}): ${postData.message}`, "warn");
        } else if (json.errors && json.errors.length > 0) {
          addSystemLog(`\u274C [GRAPHQL HATASI] ${ch.name}: ${json.errors.map((e) => e.message).join(", ")}`, "error");
        } else {
          addSystemLog(`\u26A0\uFE0F [B\u0130L\u0130NMEYEN YANIT] ${ch.name}: ${JSON.stringify(json)}`, "warn");
        }
      } catch (e) {
        addSystemLog(`\u274C [BA\u011ELANTI HATASI] ${ch.name}: ${e.message}`, "error");
      }
    }
    return successCount;
  };
  const shareToSelectedPlatforms = async () => {
    const title = textInput || workflowRef.current?.state?.script?.thumbnailText || "OTONOM Haber";
    addSystemLog("Sosyal medya hesaplar\u0131n\u0131za (Buffer & LinkedIn API) g\xF6nderiliyor...", "info");
    try {
      const count = await shareToBufferAPI(title, uiState.videoUrl);
      if (count > 0) {
        addSystemLog(`\u2713 Buffer ile ${count} sosyal medya kanal\u0131nda (Twitter, Instagram, TikTok) payla\u015F\u0131ld\u0131! \u{1F680}`, "success");
      } else {
        addSystemLog("Buffer payla\u015F\u0131m\u0131 tamamland\u0131. \u2705", "success");
      }
    } catch (e) {
      addSystemLog("Buffer payla\u015F\u0131m uyar\u0131s\u0131: " + e.message, "warn");
    }
    try {
      const linkedInServerUrl = await getLinkedInServerUrl();
      if (linkedInServerUrl) {
        addSystemLog("Do\u011Frudan LinkedIn API ile payla\u015F\u0131m ba\u015Flat\u0131l\u0131yor...", "info");
        const res = await shareToLinkedInAPI(title, null, null, null, uiState.videoUrl);
        if (res && (res.id || res.status === "success")) {
          addSystemLog(`\u2713 Do\u011Frudan LinkedIn API ile ba\u015Far\u0131yla payla\u015F\u0131ld\u0131! \u{1F680}`, "success");
        }
      } else {
        addSystemLog("LinkedIn sunucusu bulunamad\u0131 (linkedin_server.py). Sadece Buffer kullan\u0131ld\u0131.", "info");
      }
    } catch (e) {
      addSystemLog("Do\u011Frudan LinkedIn payla\u015F\u0131m uyar\u0131s\u0131: " + e.message, "warn");
    }
  };
  const shareToPlatform = async (platform, title, videoUrl) => {
    try {
      addSystemLog("Buffer API ile t\xFCm kanallara (Twitter, Instagram, LinkedIn) otomatik g\xF6nderiliyor...", "info");
      const count = await shareToBufferAPI(title || textInput || "OTONOM Haber", videoUrl);
      addSystemLog(`\u2713 Buffer ile ${count}/3 sosyal medya kanal\u0131nda an\u0131nda payla\u015F\u0131ld\u0131! \u{1F680}`, "success");
    } catch (e) {
      addSystemLog("Buffer payla\u015F\u0131m hatas\u0131: " + e.message, "error");
    }
  };
  useEffect(() => {
    SafeStorage.setItem("ns_activeTab", activeTab);
  }, [activeTab]);
  useEffect(() => {
    SafeStorage.setItem("ns_textInput", textInput);
  }, [textInput]);
  useEffect(() => {
    SafeStorage.setItem("ns_config", JSON.stringify(config));
  }, [config]);
  useEffect(() => {
    SafeStorage.setItem("ns_prefs", JSON.stringify(prefs));
  }, [prefs]);
  useEffect(() => {
    SafeStorage.setItem("ns_voiceFilters", JSON.stringify(voiceFilters));
  }, [voiceFilters]);
  useEffect(() => {
    SafeStorage.setItem("ns_gazeteSource", gazeteSource);
  }, [gazeteSource]);
  useEffect(() => {
    let interval;
    if (uiState.isProcessing) {
      setElapsedSeconds(0);
      const start = performance.now();
      interval = setInterval(() => {
        setElapsedSeconds(((performance.now() - start) / 1e3).toFixed(1));
      }, 100);
    } else clearInterval(interval);
    return () => clearInterval(interval);
  }, [uiState.isProcessing]);
  useEffect(() => {
    sysEventBus.on("SYS_LOG_ADD", (log) => setSysLogs((prev) => [...prev, log]));
    sysEventBus.on("SYS_LOG_CLEAR", () => sysEventBus.emit("SYS_LOG_CLEAR_DONE"));
    sysEventBus.on("SYS_LOG_CLEAR_DONE", () => setSysLogs([]));
    sysEventBus.on("PROGRESS", (data) => {
      const p = Math.min(100, Math.max(0, Math.round(data.percent || 0)));
      setUiState((prev) => ({ ...prev, percent: p, statusText: data.text || prev.statusText }));
    });
    sysEventBus.on("WORKFLOW_STATE", (data) => {
      if (data.status === "FAILED") setUiState((prev) => ({ ...prev, isProcessing: false, error: data.job.error }));
      if (data.status === "COMPLETED") {
        setUiState((prev) => ({ ...prev, isProcessing: false, percent: 100, statusText: "Tamamland\u0131!", videoUrl: data.job.videoUrl }));
        autoSaveVideo(data.job.videoUrl, data.job.script?.thumbnailText || "video", data.job.config?.videoFormat);
        try {
          exportWorkflowLog(data.job);
        } catch (e) {
          console.warn("Log export hatas\u0131:", e);
        }
      }
    });
    sysEventBus.on("AUTH_EXPIRED", () => setAuthExpired(true));
  }, []);
  useEffect(() => {
    if (logEndRef.current) logEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [sysLogs]);
  useEffect(() => {
    const loadLocalMusic = async () => {
      try {
        const allMusic = await AssetManagerService.getAllMusicFromLib();
        const savedFolderName = SafeStorage.getItem("ns_syncedFolderName") || (allMusic.length > 0 ? "Muzik" : "");
        setStudioMedia((s) => ({ ...s, musicList: [...allMusic], isLoading: false, statusMsg: "Yerel Mod", syncedFolderName: savedFolderName }));
        if (allMusic.length > 0) {
          addSystemLog(`\u{1F3B5} M\xFCzik k\xFCt\xFCphanesi haz\u0131r: ${allMusic.length} m\xFCzik (Kal\u0131c\u0131 Sakland\u0131).`, "success");
          let targetBgmId = SafeStorage.getItem("ns_selectedBgmId");
          if (!targetBgmId || targetBgmId === "none") {
            const savedPrefs = JSON.parse(SafeStorage.getItem("ns_prefs")) || {};
            if (savedPrefs.ambientSound && !["none", "rain", "wind", "waves", "fire"].includes(savedPrefs.ambientSound)) {
              targetBgmId = savedPrefs.ambientSound;
            }
          }
          let activeTrack = allMusic.find((m) => m.id === targetBgmId);
          if (!activeTrack) {
            activeTrack = allMusic[0];
            targetBgmId = activeTrack.id;
          }
          if (activeTrack && activeTrack.data) {
            const blob = _base64ToBlob(activeTrack.data);
            const url = ObjectURLManager.create(blob);
            await AssetManagerService.saveMedia("CUSTOM_MUSIC", url);
            SafeStorage.setItem("ns_selectedBgmId", targetBgmId);
            SafeStorage.setItem("ns_selectedBgmName", activeTrack.name);
            setPrefs((p) => {
              const np = { ...p, ambientSound: targetBgmId, customBgMusicName: activeTrack.name, customBgMusicId: targetBgmId };
              SafeStorage.setItem("ns_prefs", JSON.stringify(np));
              return np;
            });
            addSystemLog(`\u2713 Se\xE7ili m\xFCzik y\xFCklendi: ${activeTrack.name}`, "info");
          }
        } else {
          addSystemLog("M\xFCzik k\xFCt\xFCphanesi bo\u015F. 'M\xDCZ\u0130K KLAS\xD6R\xDC SE\xC7' butonundan bir kez ekleyin.", "info");
        }
      } catch (e) {
        setStudioMedia((s) => ({ ...s, isLoading: false, statusMsg: "Yerel Mod" }));
      }
    };
    loadLocalMusic();
  }, []);
  const saveToFirestore = useCallback(async (updates) => {
    if (!user || !isFirebaseActive) return;
    try {
      await setDoc(doc(db, "artifacts", appId, "users", user.uid, "user_assets", "main"), updates, { merge: true });
    } catch (error) {
      if (!error.message?.includes("offline")) console.warn("Firestore kay\u0131t hatas\u0131");
    }
  }, [user]);
  const uploadChunks = async (prefix, b64Data) => {
    if (!user || !isFirebaseActive) return 0;
    const chunkSize = 8e5;
    const chunksCount = Math.ceil(b64Data.length / chunkSize);
    try {
      for (let i = 0; i < chunksCount; i++) {
        await setDoc(doc(db, "artifacts", appId, "users", user.uid, "asset_chunks", `${prefix}_${i}`), { data: b64Data.substring(i * chunkSize, (i + 1) * chunkSize), index: i });
      }
      return chunksCount;
    } catch (e) {
      return 0;
    }
  };
  const downloadChunks = async (prefix, chunksCount) => {
    if (!user || !isFirebaseActive) return null;
    let b64Data = "";
    try {
      for (let i = 0; i < chunksCount; i++) {
        let chunkSnap = await getDoc(doc(db, "artifacts", appId, "users", user.uid, "asset_chunks", `${prefix}_${i}`));
        if (!chunkSnap.exists()) chunkSnap = await getDoc(doc(db, "artifacts", appId, "users", user.uid, "music_chunks", `${prefix}_${i}`));
        if (chunkSnap.exists()) b64Data += chunkSnap.data().data;
        else return null;
      }
      return b64Data;
    } catch (e) {
      return null;
    }
  };
  useEffect(() => {
    if (!isFirebaseActive) {
      return;
    }
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== "undefined" && __initial_auth_token) await signInWithCustomToken(auth, __initial_auth_token);
        else await signInAnonymously(auth);
      } catch (e) {
        ErrorHandler.silent(e);
      }
    };
    initAuth();
    const unsubAuth = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u && !isLoadedRef.current) {
        try {
          const snap = await getDoc(doc(db, "artifacts", appId, "users", u.uid, "user_assets", "settings"));
          if (snap.exists()) {
            const d = snap.data();
            if (d.config) setConfig((c) => ({ ...c, ...d.config }));
            if (d.prefs) {
              if (!d.prefs.ambientSound) d.prefs.ambientSound = d.selectedBgmId || "none";
              setPrefs((p) => ({ ...p, ...d.prefs }));
            }
            if (d.voiceFilters) setVoiceFilters((f) => ({ ...f, ...d.voiceFilters }));
            if (d.activeTab) setActiveTab(d.activeTab);
            if (d.textInput) setTextInput(d.textInput);
          }
        } catch (e) {
          ErrorHandler.silent(e);
        }
        isLoadedRef.current = true;
      }
    });
    return () => unsubAuth();
  }, []);
  useEffect(() => {
    if (!user || !isFirebaseActive || !isLoadedRef.current) return;
    const timer = setTimeout(() => {
      try {
        setDoc(doc(db, "artifacts", appId, "users", user.uid, "user_assets", "settings"), { config, prefs, voiceFilters, activeTab, textInput, lastUpdated: Date.now() }, { merge: true }).catch((e) => {
          ErrorHandler.silent(e);
        });
      } catch (e) {
        ErrorHandler.silent(e);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [config, prefs, voiceFilters, activeTab, textInput, user]);
  useEffect(() => {
    if (!user || !isFirebaseActive) {
      setStudioMedia((s) => ({ ...s, isLoading: false, statusMsg: "Yerel Mod" }));
      return;
    }
    const preloadLocal = async () => {
      const localOutro = await AssetManagerService.loadMedia("CUSTOM_OUTRO");
      const csi = [];
      for (let i = 0; i < RENDER_CONFIG.MAX_CUSTOM_SCENE_IMAGES; i++) {
        const img = await AssetManagerService.loadMedia("CUSTOM_SCENE_IMG_" + i);
        if (img) csi.push(img);
      }
      const allMusics = await AssetManagerService.getAllMusicFromLib();
      const savedFolderName = SafeStorage.getItem("ns_syncedFolderName") || (allMusics.length > 0 ? "Muzik" : "");
      setStudioMedia((s) => ({ ...s, outroUrl: s.outroUrl || localOutro, musicList: s.musicList.length > 0 ? s.musicList : allMusics, customSceneImages: csi, isLoading: false, statusMsg: localOutro ? "Yerel Bellek Aktif" : s.statusMsg, syncedFolderName: savedFolderName }));
    };
    preloadLocal();
    const docRef = doc(db, "artifacts", appId, "users", user.uid, "user_assets", "main");
    const unsubscribe = onSnapshot(docRef, async (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        let updates = {};
        const localMusicCount = (await AssetManagerService.getAllMusicFromLib()).length;
        if (localMusicCount === 0 && data.bgmList && data.bgmList.length > 0) {
          updates.musicList = data.bgmList;
          addSystemLog(`Firebase'den ${data.bgmList.length} m\xFCzik senkronize edildi.`, "info");
        }
        let localOutro = await AssetManagerService.loadMedia("CUSTOM_OUTRO");
        if (data.outroChunksCount) {
          if (!localOutro) {
            localOutro = await downloadChunks("outro", data.outroChunksCount);
            if (localOutro) await AssetManagerService.saveMedia("CUSTOM_OUTRO", localOutro);
          }
          updates.outroUrl = localOutro;
        } else if (data.backCover) {
          updates.outroUrl = data.backCover;
          if (!localOutro) await AssetManagerService.saveMedia("CUSTOM_OUTRO", data.backCover);
        } else if (data.outroChunksCount === null || data.backCover === null) {
          updates.outroUrl = null;
          await AssetManagerService.deleteMedia("CUSTOM_OUTRO");
        } else updates.outroUrl = localOutro;
        if (data.selectedBgmId) {
          const trackList = updates.musicList || await AssetManagerService.getAllMusicFromLib();
          const track = trackList.find((m) => m.id === data.selectedBgmId);
          if (track) {
            let localMusic = await AssetManagerService.getMusicFromLib(data.selectedBgmId);
            if (!localMusic && track.chunksCount) {
              const cloudData = await downloadChunks(track.id, track.chunksCount);
              if (cloudData) {
                localMusic = { id: track.id, name: track.name, data: cloudData };
                await AssetManagerService.saveMusicToLib(localMusic);
              }
            }
            if (localMusic) {
              await AssetManagerService.saveMedia("CUSTOM_MUSIC", localMusic.data);
              updates.musicLoaded = true;
              updates.musicName = track.name;
              updates.musicId = track.id;
            }
          }
        } else if (data.selectedBgmId === null) {
          updates.musicLoaded = false;
          updates.musicName = "";
          updates.musicId = "";
          await AssetManagerService.deleteMedia("CUSTOM_MUSIC");
        }
        updates.isLoading = false;
        if (!updates.statusMsg || updates.statusMsg.includes("\u0130ndiriliyor")) updates.statusMsg = "Bulutla Senkronize (Aktif)";
        setStudioMedia((s) => ({ ...s, ...updates }));
      } else {
        const syncLocalToCloud = async () => {
          let updates = {};
          const localOutro = await AssetManagerService.loadMedia("CUSTOM_OUTRO");
          if (localOutro) updates.outroChunksCount = await uploadChunks("outro", localOutro);
          const db2 = await AssetManagerService.getDB();
          const tx = db2.transaction(LIB_STORE, "readonly");
          const req = tx.objectStore(LIB_STORE).getAll();
          req.onsuccess = async () => {
            const allMusics = req.result || [];
            if (allMusics.length > 0) updates.bgmList = allMusics.map((m) => ({ id: m.id, name: m.name, chunksCount: Math.ceil(m.data.length / 8e5) }));
            const savedPrefs = JSON.parse(SafeStorage.getItem("ns_prefs")) || {};
            if (savedPrefs.ambientSound && savedPrefs.ambientSound !== "none") updates.selectedBgmId = savedPrefs.ambientSound;
            if (Object.keys(updates).length > 0) await setDoc(docRef, updates, { merge: true });
          };
        };
        syncLocalToCloud();
        setStudioMedia((s) => ({ ...s, isLoading: false, statusMsg: "Yerel Bellek Senkronize" }));
      }
    }, () => setStudioMedia((s) => ({ ...s, isLoading: false, statusMsg: "Yerel Mod" })));
    return () => unsubscribe();
  }, [user]);
  const handleOutroUpload = useCallback(async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStudioMedia((s) => ({ ...s, isLoading: true, statusMsg: "Kapak Y\xFCkleniyor..." }));
    const b64 = await NetworkUtils.compressImage(file);
    await AssetManagerService.saveMedia("CUSTOM_OUTRO", b64);
    const chunksCount = await uploadChunks("outro", b64);
    await saveToFirestore({ outroChunksCount: chunksCount, backCover: null });
    setStudioMedia((s) => ({ ...s, outroUrl: b64, isLoading: false, statusMsg: "Bulutla Senkronize" }));
  }, [saveToFirestore]);
  const handleOutroDelete = useCallback(async () => {
    await AssetManagerService.deleteMedia("CUSTOM_OUTRO");
    setStudioMedia((s) => ({ ...s, outroUrl: null }));
    await saveToFirestore({ outroChunksCount: null, backCover: null });
  }, [saveToFirestore]);
  const handleCustomSceneImagesUpload = useCallback(async (e) => {
    const files = Array.from(e.target ? e.target.files : e);
    if (!files.length) return;
    const availableSlots = RENDER_CONFIG.MAX_CUSTOM_SCENE_IMAGES - (studioMedia.customSceneImages?.length || 0);
    const filesToProcess = files.slice(0, availableSlots);
    const newB64s = [];
    for (let file of filesToProcess) {
      if (file.type.startsWith("image/")) {
        const b64 = await NetworkUtils.compressImage(file);
        newB64s.push(b64);
      }
    }
    const updatedImages = [...studioMedia.customSceneImages || [], ...newB64s].slice(0, RENDER_CONFIG.MAX_CUSTOM_SCENE_IMAGES);
    for (let i = 0; i < updatedImages.length; i++) await AssetManagerService.saveMedia("CUSTOM_SCENE_IMG_" + i, updatedImages[i]);
    setStudioMedia((s) => ({ ...s, customSceneImages: updatedImages }));
    const newMediaFiles = newB64s.map((b64, i) => ({ name: `SabitGorsel_${Date.now()}_${i}.jpg`, type: "image/jpeg", data: b64 }));
    if (newMediaFiles.length > 0) setUiState((prev) => ({ ...prev, selectedMediaFiles: [...prev.selectedMediaFiles, ...newMediaFiles] }));
    if (e.target) e.target.value = null;
  }, [studioMedia]);
  const handleCustomSceneImageDelete = useCallback(async (idx) => {
    const updated = studioMedia.customSceneImages.filter((_, i) => i !== idx);
    for (let i = 0; i < RENDER_CONFIG.MAX_CUSTOM_SCENE_IMAGES; i++) await AssetManagerService.deleteMedia("CUSTOM_SCENE_IMG_" + i);
    for (let i = 0; i < updated.length; i++) await AssetManagerService.saveMedia("CUSTOM_SCENE_IMG_" + i, updated[i]);
    setStudioMedia((s) => ({ ...s, customSceneImages: updated }));
  }, [studioMedia]);
  const deleteMusic = async () => {
    try {
      const as = prefs.ambientSound;
      if (as && !["none", "rain", "wind", "waves", "fire"].includes(as)) {
        const oldUrl = await AssetManagerService.loadMedia("CUSTOM_MUSIC");
        if (oldUrl && oldUrl.startsWith("blob:")) ObjectURLManager.revoke(oldUrl);
        await AssetManagerService.deleteMedia("CUSTOM_MUSIC");
        await AssetManagerService.removeMusicFromLib(as);
        const updatedList = studioMedia.musicList.filter((m) => m.id !== as);
        await saveToFirestore({ bgmList: updatedList, selectedBgmId: null });
        setPrefs((p) => ({ ...p, ambientSound: "none" }));
      }
    } catch (e) {
      ErrorHandler.silent(e);
    }
  };
  const handleFolderSelect = async () => {
    if (musicFileInputRef.current) musicFileInputRef.current.click();
  };
  const handleFolderSelectLegacy = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    const audioExts = [".mp3", ".wav", ".ogg", ".flac", ".m4a", ".aac", ".wma"];
    const audioFiles = files.filter((f) => audioExts.some((ext) => f.name.toLowerCase().endsWith(ext)));
    if (!audioFiles.length) {
      addSystemLog("Se\xE7ilen dosyalarda ses dosyas\u0131 bulunamad\u0131.", "warn");
      return;
    }
    let folderName = "Muzik";
    if (audioFiles[0]?.webkitRelativePath) {
      const parts = audioFiles[0].webkitRelativePath.split("/");
      if (parts.length > 1) folderName = parts[0];
    }
    SafeStorage.setItem("ns_syncedFolderName", folderName);
    addSystemLog(`${audioFiles.length} m\xFCzik dosyas\u0131 bulundu (${folderName}), IndexedDB'ye kal\u0131c\u0131 kaydediliyor...`, "info");
    let savedCount = 0;
    for (const file of audioFiles) {
      const id = "fm_" + file.name.replace(/[^a-zA-Z0-9]/g, "_") + "_" + file.size;
      const existing = await AssetManagerService.getMusicFromLib(id);
      if (existing) continue;
      const b64 = await NetworkUtils.fileToBase64(file);
      await AssetManagerService.saveMusicToLib({ id, name: file.name, data: b64 });
      savedCount++;
    }
    const allMusic = await AssetManagerService.getAllMusicFromLib();
    setStudioMedia((s) => ({ ...s, musicList: [...allMusic], syncedFolderName: folderName }));
    addSystemLog(`\u2705 ${folderName} klas\xF6r\xFCndeki ${allMusic.length} m\xFCzik k\xFCt\xFCphanede KALICI sakland\u0131! Her giri\u015Fte otomatik haz\u0131r.`, "success");
    e.target.value = null;
  };
  const clearSyncedFolder = async () => {
    await AssetManagerService.removeDirHandle();
    setStudioMedia((s) => ({ ...s, syncedFolderName: "" }));
    addSystemLog("Otomatik senkronizasyon kald\u0131r\u0131ld\u0131.", "info");
  };
  const playMusicPreview = (url) => {
    try {
      if (_previewAudioRef.current) {
        _previewAudioRef.current.pause();
        _previewAudioRef.current = null;
      }
      const audio = new Audio(url);
      audio.volume = prefs.backgroundMusicVolume ?? 0.3;
      _previewAudioRef.current = audio;
      audio.play().catch((e) => {
        ErrorHandler.silent(e);
      });
      if (_previewTimeoutRef.current) clearTimeout(_previewTimeoutRef.current);
      _previewTimeoutRef.current = setTimeout(() => {
        if (_previewAudioRef.current === audio) {
          audio.pause();
          _previewAudioRef.current = null;
        }
      }, 1e4);
    } catch (e) {
      ErrorHandler.silent(e);
    }
  };
  const handleMusicVolumeChange = useCallback((val) => {
    const v = parseFloat(val);
    setPrefs((p) => {
      const np = { ...p, backgroundMusicVolume: v };
      SafeStorage.setItem("ns_prefs", JSON.stringify(np));
      return np;
    });
    if (_previewAudioRef.current) {
      _previewAudioRef.current.volume = v;
    }
  }, []);
  const replayMusicPreview = async () => {
    const url = await AssetManagerService.loadMedia("CUSTOM_MUSIC");
    if (url) {
      playMusicPreview(url);
      addSystemLog("M\xFCzik 10 sn \xF6nizleme ba\u015Flat\u0131ld\u0131", "info");
    } else {
      addSystemLog("\xD6nce m\xFCzik se\xE7in", "warn");
    }
  };
  const handleFolderMusicSelect = useCallback(async (musicId) => {
    if (prefs.ambientSound === musicId) {
      SafeStorage.removeItem("ns_selectedBgmId");
      SafeStorage.removeItem("ns_selectedBgmName");
      setPrefs((p) => {
        const np = { ...p, ambientSound: "none", customBgMusicName: "", customBgMusicId: "" };
        SafeStorage.setItem("ns_prefs", JSON.stringify(np));
        return np;
      });
      return;
    }
    const track = await AssetManagerService.getMusicFromLib(musicId);
    if (!track || !track.data) {
      addSystemLog("M\xFCzik bulunamad\u0131", "error");
      return;
    }
    addSystemLog(`M\xFCzik haz\u0131rlan\u0131yor: ${track.name}`, "info");
    const oldUrl = await AssetManagerService.loadMedia("CUSTOM_MUSIC");
    if (oldUrl && oldUrl.startsWith("blob:")) ObjectURLManager.revoke(oldUrl);
    const blob = _base64ToBlob(track.data);
    const url = ObjectURLManager.create(blob);
    await AssetManagerService.saveMedia("CUSTOM_MUSIC", url);
    SafeStorage.setItem("ns_selectedBgmId", musicId);
    SafeStorage.setItem("ns_selectedBgmName", track.name);
    setPrefs((p) => {
      const np = { ...p, ambientSound: musicId, customBgMusicName: track.name, customBgMusicId: musicId };
      SafeStorage.setItem("ns_prefs", JSON.stringify(np));
      return np;
    });
    playMusicPreview(url);
    addSystemLog(`\u2713 M\xFCzik se\xE7ildi ve kal\u0131c\u0131 sakland\u0131: ${track.name}`, "success");
  }, [prefs]);
  const processSelectedFiles = useCallback(async (files) => {
    if (!files || files.length === 0) return;
    if (files.length > 100) {
      setUiState((prev) => ({ ...prev, error: "Maksimum 100 dosya se\xE7ebilirsiniz." }));
      return;
    }
    const validFiles = files.filter((f) => f.size <= 50 * 1024 * 1024);
    try {
      setUiState((prev) => ({ ...prev, isProcessing: true, statusText: "Dosyalar i\u015Fleniyor..." }));
      const processedFiles = await Promise.all(validFiles.map(async (file) => {
        const base64 = await NetworkUtils.fileToBase64(file);
        return { name: file.name, type: file.type, data: base64 };
      }));
      if (processedFiles[0]?.name) {
        const detected = matchOrFormatGazeteName(processedFiles[0].name);
        if (detected) {
          setConfig((prev) => ({ ...prev, sourceName: detected }));
          addSystemLog(`\u2713 Otomatik gazete kayna\u011F\u0131 alg\u0131land\u0131: ${detected}`, "info");
        }
      }
      setUiState((prev) => ({ ...prev, selectedMediaFiles: processedFiles, error: "", isProcessing: false, statusText: "" }));
    } catch (error) {
      setUiState((prev) => ({ ...prev, error: "Dosya okuma hatas\u0131.", isProcessing: false, statusText: "" }));
    }
  }, []);
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    processSelectedFiles(Array.from(e.dataTransfer.files));
  }, [processSelectedFiles]);
  const handleExecuteStart = async (files = null, forceOutputType = null) => {
    sysEventBus.emit("SYS_LOG_CLEAR");
    const aCtx = _getAudioCtx();
    if (aCtx.state === "suspended") aCtx.resume().catch((e) => {
      ErrorHandler.silent(e);
    });
    const outType = forceOutputType || config.outputType;
    if (forceOutputType) setConfig((prev) => ({ ...prev, outputType: forceOutputType }));
    setUiState((prev) => ({ ...prev, isProcessing: true, percent: 0, statusText: "Workflow Ba\u015Flat\u0131l\u0131yor...", error: "", videoUrl: null }));
    addSystemLog("\u0130\u015F ak\u0131\u015F\u0131 ba\u015Flat\u0131ld\u0131.", "info");
    try {
      let inputData = textInput;
      let inputType = activeTab;
      const runConfig = { ...config, outputType: outType, customSceneImages: studioMedia.customSceneImages };
      if (config.tip === "guzel_soz") {
        const targetFiles = files || uiState.selectedMediaFiles;
        if (textInput.trim()) {
          inputData = textInput;
          inputType = "text";
        } else if (targetFiles && targetFiles.length > 0) {
          inputData = targetFiles;
          inputType = "media";
        } else {
          throw new Error("G\xFCzel s\xF6z i\xE7in metin veya resim girin.");
        }
      } else if (activeTab === "media" || activeTab === "gazete") {
        const targetFiles = files || uiState.selectedMediaFiles;
        if (targetFiles && targetFiles.length > 0) {
          inputData = targetFiles;
          inputType = "media";
        } else throw new Error("En az bir dosya se\xE7in.");
      }
      await workflowRef.current.startWorkflow(inputData, inputType, runConfig, prefs, canvasRef);
    } catch (e) {
      addSystemLog(`Hata: ${e.message}`, "error");
      setUiState((prev) => ({ ...prev, isProcessing: false, error: e.message }));
    }
  };
  const handleExecuteResume = async () => {
    const aCtx = _getAudioCtx();
    if (aCtx.state === "suspended") aCtx.resume().catch((e) => {
      ErrorHandler.silent(e);
    });
    setUiState({ isProcessing: true, percent: workflowRef.current.state.progress || 0, statusText: "S\xFCrd\xFCr\xFCl\xFCyor...", error: "", videoUrl: null, showDevMenu: uiState.showDevMenu });
    addSystemLog("Workflow s\xFCrd\xFCr\xFCl\xFCyor...", "warn");
    try {
      await workflowRef.current.resumeWorkflow(canvasRef);
    } catch (e) {
      addSystemLog(`Kurtarma hatas\u0131: ${e.message}`, "error");
      setUiState((prev) => ({ ...prev, isProcessing: false, error: e.message }));
    }
  };
  const handleQuickReRender = async () => {
    const activeJob = workflowRef.current.state;
    if (!activeJob || !activeJob.script || activeJob.status !== "COMPLETED") {
      setUiState((prev) => ({ ...prev, error: "\xD6nce video olu\u015Fturun." }));
      return;
    }
    setUiState((prev) => ({ ...prev, isProcessing: true, percent: 10, statusText: "Yeniden Paketleniyor..." }));
    addSystemLog("H\u0131zl\u0131 yeniden paketleme...", "info");
    try {
      const renderResult = await RenderWorkerService.executeRender(activeJob, canvasRef.current, prefs);
      const outputUrl = typeof renderResult === "string" ? renderResult : renderResult.url;
      if (typeof renderResult === "object" && renderResult.blobType) activeJob.videoBlobType = renderResult.blobType;
      setUiState((prev) => ({ ...prev, isProcessing: false, percent: 100, videoUrl: outputUrl }));
      addSystemLog("Tamamland\u0131!", "success");
    } catch (err) {
      addSystemLog(`Hata: ${err.message}`, "error");
      setUiState((prev) => ({ ...prev, isProcessing: false, error: "Ba\u015Far\u0131s\u0131z: " + err.message }));
    }
  };
  const handleDownloadVideo = async () => {
    const rawTitle = workflowRef.current?.state?.script?.thumbnailText || "video";
    const safeName = rawTitle.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s]/g, "").trim().replace(/\s+/g, "_").toLowerCase();
    if (config.outputType === "image") {
      const a = document.createElement("a");
      a.href = uiState.videoUrl;
      a.download = safeName + ".png";
      a.click();
      return;
    }
    const actualBlobType = workflowRef.current?.state?.videoBlobType || "";
    const isWebM = actualBlobType.includes("webm");
    const wantsMP4 = config.videoFormat === "mp4";
    if (wantsMP4) {
      addSystemLog("Instagram uyumlu 30 FPS MP4 d\xF6n\xFC\u015Ft\xFCr\xFCl\xFCyor...", "info");
      setUiState((prev) => ({ ...prev, statusText: "30 FPS MP4 d\xF6n\xFC\u015Ft\xFCr\xFCl\xFCyor..." }));
      try {
        const resp = await fetch(uiState.videoUrl);
        const videoBlob = await resp.blob();
        const mp4Blob = await convertWebMtoMP4(videoBlob, (pct) => {
          if (pct % 25 === 0) addSystemLog("MP4 d\xF6n\xFC\u015Ft\xFCrme: %" + pct, "info");
        });
        const a = document.createElement("a");
        a.href = ObjectURLManager.create(mp4Blob);
        a.download = safeName + ".mp4";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        ObjectURLManager.revoke(a.href);
        addSystemLog("Instagram uyumlu 30 FPS MP4 indirildi: " + safeName + ".mp4", "success");
      } catch (convErr) {
        addSystemLog("MP4 d\xF6n\xFC\u015Ft\xFCrme ba\u015Far\u0131s\u0131z, orijinal indiriliyor: " + convErr.message, "warn");
        const ext = actualBlobType.includes("mp4") ? ".mp4" : ".webm";
        const a = document.createElement("a");
        a.href = uiState.videoUrl;
        a.download = safeName + ext;
        a.click();
      }
    } else {
      const ext = actualBlobType.includes("mp4") ? ".mp4" : ".webm";
      const a = document.createElement("a");
      a.href = uiState.videoUrl;
      a.download = safeName + ext;
      a.click();
    }
  };
  const handleSilentRecovery = async () => {
    setUiState((prev) => ({ ...prev, isProcessing: true, statusText: "Oturum yenileniyor..." }));
    const success = await attemptSilentReauth();
    if (success) {
      setAuthExpired(false);
      setUiState((prev) => ({ ...prev, isProcessing: false, statusText: "" }));
      addSystemLog("Oturum tazelendi.", "success");
    } else setUiState((prev) => ({ ...prev, isProcessing: false, error: "Yenileme ba\u015Far\u0131s\u0131z. F5 ile yenileyin." }));
  };
  const GAZETE_SOURCES = {
    gazeteoku: {
      label: "Gazeteoku (25+ Gazete)",
      supportsDate: true,
      // Tarih destekli URL: /gazeteler/YYYY-MM-DD
      getUrl: (date) => date ? `https://www.gazeteoku.com/gazeteler/${date}` : "https://www.gazeteoku.com/gazeteler",
      baseUrl: "https://i.gazeteoku.com",
      // Görsel filtresi: gazete manşeti olan img'leri ayırt et
      imgFilter: (img) => {
        const src = (img.getAttribute("src") || "").trim();
        const alt = (img.getAttribute("alt") || "").trim();
        return alt.length > 2 && src.length > 10 && !src.includes("logo") && !src.includes("icon") && !src.includes("banner");
      },
      // src'i tam URL'ye çevir
      resolveSrc: (src, baseUrl) => src.startsWith("http") ? src : baseUrl + (src.startsWith("/") ? "" : "/") + src
    },
    aydinlik: {
      label: "Ayd\u0131nl\u0131k",
      supportsDate: false,
      getUrl: (date) => "https://www.aydinlik.com.tr/gazete-mansetleri",
      baseUrl: "https://www.aydinlik.com.tr",
      imgFilter: (img) => {
        const src = (img.getAttribute("src") || "").trim();
        const alt = (img.getAttribute("alt") || "").trim();
        return alt.length > 2 && src.length > 10 && !src.includes("logo") && !src.includes("icon") && !src.includes("banner") && !src.includes("avatar");
      },
      resolveSrc: (src, baseUrl) => src.startsWith("http") ? src : baseUrl + (src.startsWith("/") ? "" : "/") + src
    },
    yenimesaj: {
      label: "Yeni Mesaj",
      supportsDate: false,
      getUrl: (date) => "https://www.yenimesaj.com.tr/gazete-mansetleri",
      baseUrl: "https://www.yenimesaj.com.tr",
      imgFilter: (img) => {
        const src = (img.getAttribute("src") || "").trim();
        const alt = (img.getAttribute("alt") || "").trim();
        return alt.length > 2 && src.length > 10 && !src.includes("logo") && !src.includes("icon") && !src.includes("banner") && !src.includes("avatar");
      },
      resolveSrc: (src, baseUrl) => src.startsWith("http") ? src : baseUrl + (src.startsWith("/") ? "" : "/") + src
    },
    gzt: {
      label: "GZT Manset",
      supportsDate: false,
      getUrl: (date) => "https://gazetemanset.gzt.com/",
      baseUrl: "https://img.piri.net",
      imgFilter: (img) => {
        const src = (img.getAttribute("src") || "").trim();
        const alt = (img.getAttribute("alt") || "").trim();
        return alt.length > 2 && src.length > 10 && src.includes("piri.net") && alt.includes("Gazetesi");
      },
      resolveSrc: (src, baseUrl) => src.startsWith("http") ? src : baseUrl + (src.startsWith("/") ? "" : "/") + src
    }
  };
  const NEWSPAPER_DIRECT_CONFIG = [
    { name: "Ak\u015Fam", type: "aydinlik", slug: "aksam" },
    { name: "Analiz", type: "aydinlik", slug: "analiz" },
    { name: "Ayd\u0131nl\u0131k", type: "aydinlik", slug: "aydinlik-gazetesi" },
    { name: "BirG\xFCn", type: "aydinlik", slug: "birgun" },
    { name: "Cumhuriyet", type: "aydinlik", slug: "cumhuriyet" },
    { name: "Dirili\u015F Postas\u0131", type: "aydinlik", slug: "dirilis-postasi" },
    { name: "D\xFCnya", type: "aydinlik", slug: "dunya" },
    { name: "Evrensel", type: "aydinlik", slug: "evrensel" },
    { name: "Fanatik", type: "aydinlik", slug: "fanatik" },
    { name: "Fotoma\xE7", type: "aydinlik", slug: "fotomac" },
    { name: "Gazete Pencere", type: "pencere" },
    { name: "H\xFCrriyet", type: "static_gzt", url: "https://img.piri.net/piri/upload/3/2026/7/28/2c109f9f-1b53de80492b43b7ad063d2c7304befe.jpg" },
    { name: "Karar", type: "aydinlik", slug: "karar" },
    { name: "Korkusuz", type: "aydinlik", slug: "korkusuz" },
    { name: "Milat", type: "aydinlik", slug: "milat" },
    { name: "Milli Gazete", type: "aydinlik", slug: "milli-gazete" },
    { name: "Milliyet", type: "static_gzt", url: "https://img.piri.net/piri/upload/3/2026/7/28/ee77e40a-3e12cac45e024c2f83f624368c1bae16.jpg" },
    { name: "Nas\u0131l Bir Ekonomi", type: "static_gzt", url: "https://img.piri.net/piri/upload/3/2026/7/28/f30ea804-4c215505775e45cf98fddc84ed7b2321.jpg" },
    { name: "Nefes", type: "aydinlik", slug: "nefes" },
    { name: "Posta", type: "aydinlik", slug: "posta" },
    { name: "Sabah", type: "aydinlik", slug: "sabah" },
    { name: "S\xF6zc\xFC", type: "aydinlik", slug: "sozcu" },
    { name: "Takvim", type: "aydinlik", slug: "takvim" },
    { name: "Tav\u0131r Gazetesi", type: "aydinlik", slug: "tavir" },
    { name: "T\xFCrkiye", type: "aydinlik", slug: "turkiye-gazetesi" },
    { name: "Yeni\xE7a\u011F", type: "aydinlik", slug: "yenicag" },
    { name: "Yeni Asya", type: "aydinlik", slug: "yeni-asya" },
    { name: "Yeni Birlik", type: "static_gzt", url: "https://img.piri.net/piri/upload/3/2026/7/28/634a2d14-3f6231a16f684e269ebe46999b2ad04f.jpg" },
    { name: "Yeni Mesaj", type: "static_gzt", url: "https://img.piri.net/piri/upload/3/2026/7/28/79d7dfc1-bccba621a6e34f11bd36f73582fb25c9.jpg" },
    { name: "Yeni \u015Eafak", type: "aydinlik", slug: "yeni-safak" }
  ];
  const fetchGazeteMan\u015Fetleri = async () => {
    setGazeteLoading(true);
    setGazeteError("");
    setGazeteItems([]);
    addSystemLog("30 Ulusal gazete man\u015Feti haz\u0131rlan\u0131yor...", "info");
    try {
      const selectedDate = gazeteDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const items = NEWSPAPER_DIRECT_CONFIG.map((item) => {
        let rawUrl = "";
        if (item.type === "pencere") {
          const parts = selectedDate.split("-");
          rawUrl = `http://cdn.gazetepencere.com/other/${parts[0]}/${parts[1]}/${parts[2]}/dddd.jpg`;
        } else if (item.type === "static_gzt") {
          rawUrl = item.url;
        } else {
          rawUrl = `https://img.aydinlik.com.tr/rcman/Cw800h1340q95gc/storage/newspapers/${selectedDate}/${item.slug}.jpg`;
        }
        const weservUrl = `https://images.weserv.nl/?url=${encodeURIComponent(rawUrl)}`;
        return {
          name: item.name,
          src: weservUrl,
          rawSrc: rawUrl
        };
      });
      setGazeteItems(items);
      addSystemLog(`\u2713 30 ulusal gazete man\u015Fetinin tamam\u0131 (Gazete Pencere dahil) 0 CORS hatas\u0131 ile haz\u0131rland\u0131!`, "success");
    } catch (e) {
      setGazeteError("Gazete man\u015Fetleri y\xFCklenemedi.");
      addSystemLog("Gazete y\xFCkleme hatas\u0131: " + e.message, "error");
    } finally {
      setGazeteLoading(false);
    }
  };
  const parseGazeteHtml = (html, sourceConfig) => {
    const parser = new DOMParser();
    const doc2 = parser.parseFromString(html, "text/html");
    const allImgs = doc2.querySelectorAll("img");
    const items = [];
    const seen = /* @__PURE__ */ new Set();
    allImgs.forEach((img) => {
      const dataSrc = (img.getAttribute("data-src") || img.getAttribute("data-original") || img.getAttribute("data-lazy-src") || "").trim();
      const src = (img.getAttribute("src") || "").trim();
      const finalSrc = dataSrc && dataSrc.length > 10 && !dataSrc.includes("blank.png") && !dataSrc.includes("placeholder") ? dataSrc : src;
      const name = (img.getAttribute("alt") || img.getAttribute("title") || "").trim();
      if (name.length >= 2 && finalSrc.length > 10 && !finalSrc.includes("blank.png") && !finalSrc.includes("placeholder") && sourceConfig.imgFilter(img)) {
        const cleanName = name.replace(/\bgazetesi\b/gi, "").replace(/\bgazete\b/gi, "").trim();
        if (!seen.has(cleanName.toLowerCase())) {
          seen.add(cleanName.toLowerCase());
          items.push({ name: cleanName, src: sourceConfig.resolveSrc(finalSrc, sourceConfig.baseUrl) });
        }
      }
    });
    return items;
  };
  const addGazeteToCustomSceneImages = async (dataUrl, gazeteName) => {
    try {
      const updatedImages = [...studioMedia.customSceneImages || [], dataUrl].slice(0, RENDER_CONFIG.MAX_CUSTOM_SCENE_IMAGES);
      for (let i = 0; i < updatedImages.length; i++) {
        await AssetManagerService.saveMedia("CUSTOM_SCENE_IMG_" + i, updatedImages[i]);
      }
      setStudioMedia((s) => ({ ...s, customSceneImages: updatedImages }));
      addSystemLog(`\u2713 Sabit G\xF6rsel'e y\xFCklendi: ${gazeteName}`, "success");
    } catch (e) {
      addSystemLog("Sabit G\xF6rsel ekleme uyar\u0131s\u0131: " + e.message, "warn");
    }
  };
  const matchOrFormatGazeteName = (rawName) => {
    if (!rawName) return "";
    const GAZETE_LIST = [
      "Ak\u015Fam",
      "Analiz",
      "Ayd\u0131nl\u0131k",
      "BirG\xFCn",
      "Cumhuriyet",
      "Dirili\u015F Postas\u0131",
      "D\xFCnya",
      "Evrensel",
      "Fanatik",
      "Fotoma\xE7",
      "Gazete Pencere",
      "H\xFCrriyet",
      "Karar",
      "Korkusuz",
      "Milat",
      "Milli Gazete",
      "Milliyet",
      "Nas\u0131l Bir Ekonomi",
      "Nefes",
      "Posta",
      "Sabah",
      "S\xF6zc\xFC",
      "Takvim",
      "Tav\u0131r Gazetesi",
      "T\xFCrkiye",
      "Yeni\xE7a\u011F",
      "Yeni Asya",
      "Yeni Birlik",
      "Yeni Mesaj",
      "Yeni \u015Eafak"
    ];
    const lower = rawName.toLowerCase();
    for (const g of GAZETE_LIST) {
      if (lower.includes(g.toLowerCase()) || g.toLowerCase().includes(lower)) {
        return g;
      }
    }
    const cleaned = rawName.replace(/(_crop|\.png|\.jpg|\.jpeg|gazetesi|manşet|[0-9_-])/gi, " ").trim();
    if (!cleaned) return rawName;
    return cleaned.split(/\s+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
  };
  const openCropModal = useCallback((src, name) => {
    const finalName = matchOrFormatGazeteName(name) || name;
    setConfig((prev) => ({ ...prev, sourceName: finalName }));
    setGazeteCropModal({ src, name: finalName });
  }, []);
  const applyCrop = useCallback(async (cropDataUrl, gazeteName) => {
    const finalName = matchOrFormatGazeteName(gazeteName) || gazeteName;
    const newFile = {
      name: finalName + "_crop.png",
      type: "image/png",
      data: cropDataUrl
    };
    setUiState((prev) => ({
      ...prev,
      selectedMediaFiles: [...prev.selectedMediaFiles || [], newFile]
    }));
    setConfig((prev) => ({ ...prev, sourceName: finalName }));
    await addGazeteToCustomSceneImages(cropDataUrl, finalName);
    setGazeteCropModal(null);
    setActiveTab("media");
    addSystemLog(`\u2713 Gazete crop eklendi, Kaynak otomatik se\xE7ildi: ${finalName}`, "success");
  }, [studioMedia]);
  const addFullImageToMedia = async (src, name) => {
    try {
      setGazeteLoading(true);
      const finalName = matchOrFormatGazeteName(name) || name;
      let dataUrl = null;
      try {
        const img = new Image();
        img.crossOrigin = "anonymous";
        dataUrl = await new Promise((resolve, reject) => {
          img.onload = () => {
            try {
              const c = document.createElement("canvas");
              c.width = img.naturalWidth;
              c.height = img.naturalHeight;
              c.getContext("2d").drawImage(img, 0, 0);
              resolve(c.toDataURL("image/jpeg", 0.92));
            } catch (e) {
              reject(e);
            }
          };
          img.onerror = () => reject(new Error("G\xF6rsel y\xFCklenemedi"));
          img.src = src;
        });
      } catch (e) {
        ErrorHandler.silent(e);
      }
      if (!dataUrl) {
        for (const proxy of CORS_PROXIES) {
          try {
            const proxyUrl = proxy.url(src);
            const r = await fetch(proxyUrl);
            if (!r.ok) continue;
            let blob;
            if (proxy.json) {
              const j = await r.json();
              const innerUrl = j.contents || j.data;
              if (!innerUrl) continue;
              blob = await (await fetch(innerUrl)).blob();
            } else {
              blob = await r.blob();
            }
            dataUrl = await new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
            if (dataUrl) break;
          } catch (e) {
            ErrorHandler.silent(e);
          }
        }
      }
      if (!dataUrl) throw new Error("G\xF6rsel y\xFCklenemedi: " + finalName);
      const newFile = { name: finalName + ".jpg", type: "image/jpeg", data: dataUrl };
      setUiState((prev) => ({
        ...prev,
        selectedMediaFiles: [...prev.selectedMediaFiles || [], newFile]
      }));
      setConfig((prev) => ({ ...prev, sourceName: finalName }));
      await addGazeteToCustomSceneImages(dataUrl, finalName);
      setActiveTab("media");
      addSystemLog(`\u2713 Tam gazete g\xF6rseli eklendi, Kaynak otomatik se\xE7ildi: ${finalName}`, "success");
    } catch (e) {
      addSystemLog("Aktarma hatas\u0131: " + e.message, "error");
    } finally {
      setGazeteLoading(false);
    }
  };
  const [gazeteGalleryView, setGazeteGalleryView] = useState("grid");
  const [gazeteCurrentIdx, setGazeteCurrentIdx] = useState(0);
  return /* @__PURE__ */ React.createElement(ErrorBoundary, null, /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-[#0B0F19] text-slate-200 font-sans p-3 md:p-4 relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-3xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-4 flex items-center justify-center gap-3 flex-wrap" }, /* @__PURE__ */ React.createElement("h1", { className: "text-xl md:text-3xl font-black tracking-tight text-white whitespace-nowrap" }, "OTONOM"), /* @__PURE__ */ React.createElement("div", { className: "bg-indigo-900/40 border-2 border-indigo-500/50 px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.3)]" }, /* @__PURE__ */ React.createElement("p", { className: "text-indigo-300 text-[10px] md:text-xs font-black tracking-widest uppercase" }, APP_VERSION.toBadge())), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShowApiKeyModal(!showApiKeyModal),
      className: `px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${userApiKey ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 hover:bg-emerald-500/30" : "bg-slate-800/60 text-slate-400 border-slate-700 hover:bg-slate-700"}`
    },
    userApiKey ? `\u{1F511} Key: \u2022\u2022\u2022\u2022${userApiKey.slice(-4)}` : "\u{1F511} API Key (Opsiyonel)"
  )), showApiKeyModal && /* @__PURE__ */ React.createElement("div", { className: "mb-4 bg-slate-900/90 border border-indigo-500/30 p-4 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-3 backdrop-blur-md" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 w-full" }, /* @__PURE__ */ React.createElement("label", { className: "text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-1" }, "Google Gemini API Key"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "password",
      value: userApiKey,
      onChange: (e) => setUserApiKeyState(e.target.value),
      placeholder: "AI Studio Gemini API Key yap\u0131\u015Ft\u0131r\u0131n (AIzaSy...)",
      className: "w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-indigo-500 font-mono"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 w-full md:w-auto" }, /* @__PURE__ */ React.createElement("button", { onClick: () => handleSaveApiKey(userApiKey), className: "flex-1 md:flex-none bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition" }, "Kaydet"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowApiKeyModal(false), className: "flex-1 md:flex-none bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-xl text-xs font-bold transition" }, "Kapat"))), pendingJob && /* @__PURE__ */ React.createElement("div", { className: "mb-6 bg-amber-500/10 border-2 border-amber-500/30 p-4 rounded-2xl flex items-center justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 text-amber-400" }, /* @__PURE__ */ React.createElement(AlertCircle, { size: 20, className: "shrink-0 animate-pulse" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-bold uppercase tracking-wider" }, "Yar\u0131m Kalan \u0130\u015Flem"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-300" }, "Son render kurtar\u0131labilir."))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: async () => {
    await AssetManagerService.clearJob(pendingJob.jobId);
    setPendingJob(null);
  }, className: "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition" }, "Yoksay"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
    workflowRef.current.state = pendingJob;
    setPendingJob(null);
    handleExecuteResume();
  }, className: "px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-black transition" }, "Devam Et"))), /* @__PURE__ */ React.createElement("div", { className: "bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-3 mb-4 shadow-lg" }, /* @__PURE__ */ React.createElement("div", { className: "bg-black/40 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between relative" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 w-full" }, /* @__PURE__ */ React.createElement("div", { className: `w-10 h-10 rounded border ${prefs.ambientSound && prefs.ambientSound !== "none" ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" : "bg-slate-800 border-slate-700 text-slate-500"} flex items-center justify-center shrink-0` }, /* @__PURE__ */ React.createElement(CloudRain, { size: 18 })), /* @__PURE__ */ React.createElement("div", { className: "w-full flex-1 pr-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1" }, "Arka Plan Sesi"), /* @__PURE__ */ React.createElement(CustomSelect, { value: prefs.ambientSound || "none", onChange: (val) => {
    if (["rain", "wind", "waves", "fire", "none"].includes(val)) {
      setPrefs({ ...prefs, ambientSound: val });
      if (val === "none") {
        AssetManagerService.loadMedia("CUSTOM_MUSIC").then((u) => {
          if (u && u.startsWith("blob:")) ObjectURLManager.revoke(u);
        });
        AssetManagerService.deleteMedia("CUSTOM_MUSIC");
      }
    } else {
      handleFolderMusicSelect(val);
    }
  }, options: ambientOptions }))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 shrink-0 relative z-10" }, prefs.ambientSound && !["none", "rain", "wind", "waves", "fire"].includes(prefs.ambientSound) && /* @__PURE__ */ React.createElement("button", { onClick: deleteMusic, className: "bg-rose-500/20 hover:bg-rose-500/40 text-rose-500 p-2 rounded-lg transition" }, /* @__PURE__ */ React.createElement(Trash2, { size: 16 })), /* @__PURE__ */ React.createElement("button", { onClick: handleFolderSelect, className: "bg-violet-600 hover:bg-violet-500 text-white px-3 md:px-4 py-2 rounded-lg text-xs font-bold cursor-pointer transition whitespace-nowrap" }, "M\xDCZ\u0130K KLAS\xD6R\xDC SE\xC7"), /* @__PURE__ */ React.createElement("input", { ref: musicFileInputRef, type: "file", webkitdirectory: "true", directory: "true", multiple: true, accept: "audio/*,.mp3,.wav,.ogg,.flac,.m4a,.aac,.wma", className: "hidden", onChange: handleFolderSelectLegacy }))), studioMedia.musicList.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-2" }, /* @__PURE__ */ React.createElement("input", { type: "text", placeholder: "M\xFCzik ara...", value: musicSearchQuery, onChange: (e) => setMusicSearchQuery(e.target.value), className: "w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 outline-none focus:border-violet-500 transition" })), studioMedia.syncedFolderName && /* @__PURE__ */ React.createElement("div", { className: "mt-2 flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(RefreshCw, { size: 12, className: "text-emerald-400 animate-spin", style: { animationDuration: "3s" } }), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-emerald-400 font-bold" }, "Otomatik: ", studioMedia.syncedFolderName)), /* @__PURE__ */ React.createElement("button", { onClick: clearSyncedFolder, className: "text-[10px] text-slate-400 hover:text-rose-400 transition" }, "Kald\u0131r")), studioMedia.musicList.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[9px] text-slate-500 mt-1.5 text-center" }, "M\xFCzik klas\xF6r\xFC se\xE7in \u2014 t\xFCm m\xFCzikler otomatik y\xFCklenir"), prefs.ambientSound && !["none", "rain", "wind", "waves", "fire"].includes(prefs.ambientSound) && /* @__PURE__ */ React.createElement("div", { className: "mt-2 flex items-center gap-2 bg-slate-900/60 border border-violet-500/30 rounded-lg px-3 py-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-400 font-bold shrink-0" }, "\u{1F50A} Ses"), /* @__PURE__ */ React.createElement("input", { type: "range", min: "0", max: "1", step: "0.01", value: prefs.backgroundMusicVolume ?? 0.3, onChange: (e) => handleMusicVolumeChange(e.target.value), className: "flex-1 accent-violet-500 cursor-pointer" }), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-violet-400 font-bold shrink-0 w-8 text-right" }, Math.round((prefs.backgroundMusicVolume ?? 0.3) * 100), "%"), /* @__PURE__ */ React.createElement("button", { onClick: replayMusicPreview, className: "bg-violet-600 hover:bg-violet-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold transition shrink-0" }, "10sn Dinle"))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-3xl p-3 md:p-4 shadow-2xl relative z-10 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row gap-2 bg-black/30 p-1.5 rounded-xl mb-4 flex-wrap" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setActiveTab("text"), className: `flex-1 min-w-[120px] py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${activeTab === "text" ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-slate-300"}` }, "Metin / Haber"), /* @__PURE__ */ React.createElement("button", { onClick: () => setActiveTab("url"), className: `flex-1 min-w-[120px] py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${activeTab === "url" ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-slate-300"}` }, "Haber Linki"), /* @__PURE__ */ React.createElement("button", { onClick: () => setActiveTab("media"), className: `flex-1 min-w-[120px] py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${activeTab === "media" ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-slate-300"}` }, "Medya Analizi"), /* @__PURE__ */ React.createElement("button", { onClick: () => setActiveTab("prompt"), className: `flex-1 min-w-[120px] py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${activeTab === "prompt" ? "bg-fuchsia-600 text-white" : "text-slate-500 hover:text-slate-300"}` }, "Serbest Prompt"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setActiveTab("gazete");
    if (gazeteItems.length === 0) fetchGazeteMan\u015Fetleri();
  }, className: `flex-1 min-w-[120px] py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${activeTab === "gazete" ? "bg-emerald-600 text-white" : "text-slate-500 hover:text-slate-300"}` }, /* @__PURE__ */ React.createElement(Newspaper, { size: 14 }), " Gazete Takip")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3 mb-3 font-bold" }, /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: Clock, value: config.duration, onChange: (val) => setConfig({ ...config, duration: val }), options: [{ value: "unlimited", label: "\u221E S\u0131n\u0131rs\u0131z", color: "text-emerald-400 font-bold" }, { value: "15", label: "15-30s" }, { value: "30", label: "30-60s" }, { value: "60", label: "60-90s" }, { value: "90", label: "90-120s" }] })), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: Smartphone, value: config.aspectRatio || "9:16", onChange: (val) => setConfig({ ...config, aspectRatio: val }), options: [{ value: "9:16", label: "Dikey (9:16)" }, { value: "16:9", label: "Yatay (16:9)" }, { value: "1:1", label: "Kare (1:1)" }] })), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: Clapperboard, value: config.videoStyle || "explainer", onChange: (val) => setConfig({ ...config, videoStyle: val }), options: [{ value: "news_flash", label: "Haber B\xFClteni" }, { value: "cinematic", label: "Sinematik" }, { value: "explainer", label: "A\xE7\u0131klay\u0131c\u0131" }, { value: "weekly_roundup", label: "Haftal\u0131k \xD6zet" }, { value: "prompt_output", label: "Custom Prompt", color: "text-fuchsia-400 font-bold" }] }))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: Palette, value: config.imageStyle || "cinematic", onChange: (val) => setConfig({ ...config, imageStyle: val }), options: [{ value: "watercolor", label: "Sulu Boya" }, { value: "sketch", label: "Karakalem" }, { value: "oil_painting", label: "Ya\u011Fl\u0131 Boya" }, { value: "cinematic", label: "Ger\xE7ek\xE7i" }, { value: "minimalist", label: "Minimalist" }, { value: "cyberpunk", label: "Cyberpunk" }, { value: "retro", label: "Retro" }, { value: "3d_render", label: "3D Render" }, { value: "anime", label: "Anime" }] })), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center gap-3" }, /* @__PURE__ */ React.createElement(Monitor, { size: 16, className: "text-indigo-400 shrink-0" }), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 w-full" }, ["1K", "2K", "4K"].map((res) => /* @__PURE__ */ React.createElement("button", { key: res, onClick: () => setConfig({ ...config, resolution: res }), className: `flex-1 py-1 rounded-lg text-xs font-bold transition-all ${config.resolution === res ? "bg-slate-200 text-slate-900" : "bg-slate-800/50 text-slate-400 hover:bg-slate-700"}` }, res)))), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: Activity, value: config.transition || "none", onChange: (val) => setConfig({ ...config, transition: val }), options: [{ value: "none", label: "Yok" }, { value: "crossfade", label: "Kar\u0131\u015F\u0131r" }, { value: "fadeIn", label: "Yava\u015F\xE7a Belirme" }, { value: "fadeOut", label: "Yava\u015F\xE7a Kaybolma" }, { value: "slideIn", label: "Kayarak Giri\u015F" }, { value: "slideOut", label: "Kayarak \xC7\u0131k\u0131\u015F" }] }))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-3" }, /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: Clapperboard, value: config.tip || "haber", onChange: (val) => setConfig({ ...config, tip: val }), options: [{ value: "haber", label: "Haber", color: "text-emerald-400 font-bold" }, { value: "guzel_soz", label: "G\xFCzel S\xF6z", color: "text-amber-400 font-bold" }, { value: "iddia_analizi", label: "\u0130ddia Analizi", color: "text-cyan-400 font-bold" }] })), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: Globe, value: config.language || "tr", onChange: (val) => setConfig({ ...config, language: val }), options: [{ value: "tr", label: "T\xFCrk\xE7e" }, { value: "en", label: "English" }, { value: "fr", label: "Fran\xE7ais" }, { value: "de", label: "Deutsch" }, { value: "es", label: "Espa\xF1ol" }, { value: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, { value: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" }] })), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: MessageSquare, value: config.subtitles || "on", onChange: (val) => setConfig({ ...config, subtitles: val }), options: [{ value: "on", label: "Altyaz\u0131: A\xE7\u0131k" }, { value: "off", label: "Altyaz\u0131: Kapal\u0131" }] })), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: Type, value: config.analysisMode || "yorumsuz", onChange: (val) => setConfig({ ...config, analysisMode: val }), options: [{ value: "yorumsuz", label: "Yorumsuz" }, { value: "visibility", label: "G\xF6r\xFCn\xFCrl\xFCk" }, { value: "deep_analysis", label: "Derin Analiz", color: "text-fuchsia-400 font-bold" }] }))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: Film, value: config.videoFormat || "webm", onChange: (val) => setConfig({ ...config, videoFormat: val }), options: [{ value: "webm", label: "WebM" }, { value: "mp4", label: "MP4" }] })), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2.5 rounded-xl border border-slate-800 flex items-center relative" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 w-full" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: Volume2, value: prefs.narratorVoice, onChange: (val) => setPrefs({ ...prefs, narratorVoice: val }), options: voiceOptions }), /* @__PURE__ */ React.createElement("button", { onClick: (e) => {
    e.stopPropagation();
    setShowFilters(!showFilters);
  }, className: "text-slate-400 hover:text-indigo-400 flex items-center gap-1 text-[9px] uppercase font-bold tracking-wider transition-colors shrink-0" }, /* @__PURE__ */ React.createElement(Filter, { size: 12 }), " Filtreler")), showFilters && /* @__PURE__ */ React.createElement("div", { className: "absolute top-full left-0 w-full mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-[200] p-3 space-y-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[9px] text-slate-500 mb-1.5 uppercase font-bold tracking-wider" }, "Gender"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-1.5" }, ["Any", "Male", "Female"].map((g) => /* @__PURE__ */ React.createElement("button", { key: g, onClick: () => setVoiceFilters({ ...voiceFilters, gender: g }), className: `px-3 py-1 rounded-full text-[10px] font-bold transition-all border ${voiceFilters.gender === g ? "bg-slate-200 text-slate-900 border-slate-200" : "bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-700"}` }, g)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[9px] text-slate-500 mb-1.5 uppercase font-bold tracking-wider" }, "Age"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5" }, ["Any", "Child", "Young", "Middle-aged", "Elderly"].map((a) => /* @__PURE__ */ React.createElement("button", { key: a, onClick: () => setVoiceFilters({ ...voiceFilters, age: a }), className: `px-3 py-1 rounded-full text-[10px] font-bold transition-all border ${voiceFilters.age === a ? "bg-slate-200 text-slate-900 border-slate-200" : "bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-700"}` }, a)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[9px] text-slate-500 mb-1.5 uppercase font-bold tracking-wider" }, "Category"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5" }, ["Any", "Games & RPG", "Audiobooks & Novels", "Anime & Animation", "Documentary", "Commercials & Trailers", "Corporate & Narration"].map((c) => /* @__PURE__ */ React.createElement("button", { key: c, onClick: () => setVoiceFilters({ ...voiceFilters, category: c }), className: `px-2.5 py-1 rounded-full text-[9px] font-bold transition-all border ${voiceFilters.category === c ? "bg-slate-200 text-slate-900 border-slate-200" : "bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-700"}` }, c))))))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-3 mb-3" }, /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2 rounded-xl border border-slate-800 flex items-center justify-center" }, studioMedia.customSceneImages && studioMedia.customSceneImages[0] ? /* @__PURE__ */ React.createElement("img", { src: studioMedia.customSceneImages[0], className: "w-full h-10 object-cover rounded-lg", alt: "Sabit" }) : /* @__PURE__ */ React.createElement("div", { className: "text-[8px] text-slate-600 font-bold uppercase" }, "G\xF6rsel Yok")), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-1.5 rounded-xl border border-slate-800" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(CustomSelect, { icon: null, value: config.sourceName || "", onChange: (val) => setConfig({ ...config, sourceName: val }), options: [
    { value: "", label: "Kaynak Yok", color: "text-slate-500" },
    { label: "Sosyal Medya", options: [
      { value: "X", label: "X (Twitter)" },
      { value: "TikTok", label: "TikTok" },
      { value: "Instagram", label: "Instagram" },
      { value: "Facebook", label: "Facebook" }
    ] },
    { label: "Gazeteler", options: [
      { value: "Ak\u015Fam", label: "Ak\u015Fam" },
      { value: "Analiz", label: "Analiz" },
      { value: "Ayd\u0131nl\u0131k", label: "Ayd\u0131nl\u0131k" },
      { value: "BirG\xFCn", label: "BirG\xFCn" },
      { value: "Cumhuriyet", label: "Cumhuriyet" },
      { value: "Dirili\u015F Postas\u0131", label: "Dirili\u015F Postas\u0131" },
      { value: "D\xFCnya", label: "D\xFCnya" },
      { value: "Evrensel", label: "Evrensel" },
      { value: "Fanatik", label: "Fanatik" },
      { value: "Fotoma\xE7", label: "Fotoma\xE7" },
      { value: "Gazete Pencere", label: "Gazete Pencere" },
      { value: "H\xFCrriyet", label: "H\xFCrriyet" },
      { value: "Karar", label: "Karar" },
      { value: "Korkusuz", label: "Korkusuz" },
      { value: "Milat", label: "Milat" },
      { value: "Milli Gazete", label: "Milli Gazete" },
      { value: "Milliyet", label: "Milliyet" },
      { value: "Nas\u0131l Bir Ekonomi", label: "Nas\u0131l Bir Ekonomi" },
      { value: "Nefes", label: "Nefes" },
      { value: "Posta", label: "Posta" },
      { value: "Sabah", label: "Sabah" },
      { value: "S\xF6zc\xFC", label: "S\xF6zc\xFC" },
      { value: "Takvim", label: "Takvim" },
      { value: "Tav\u0131r Gazetesi", label: "Tav\u0131r Gazetesi" },
      { value: "T\xFCrkiye", label: "T\xFCrkiye" },
      { value: "Yeni\xE7a\u011F", label: "Yeni\xE7a\u011F" },
      { value: "Yeni Asya", label: "Yeni Asya" },
      { value: "Yeni Birlik", label: "Yeni Birlik" },
      { value: "Yeni Mesaj", label: "Yeni Mesaj" },
      { value: "Yeni \u015Eafak", label: "Yeni \u015Eafak" }
    ] }
  ], className: "flex-1" })), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: config.sourceName || "",
      onChange: (e) => setConfig({ ...config, sourceName: e.target.value }),
      placeholder: "Manuel kaynak ad\u0131 yaz...",
      className: "w-full bg-transparent text-xs text-slate-200 outline-none placeholder:text-slate-600 font-bold mt-1.5 px-1 py-1 border-t border-slate-700/50"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 p-2 rounded-xl border border-slate-800" }, /* @__PURE__ */ React.createElement("textarea", { value: config.yorum || "", onChange: (e) => setConfig({ ...config, yorum: e.target.value }), placeholder: "Yorum (2-3 sat\u0131r)", className: "w-full bg-transparent text-[10px] text-slate-200 outline-none placeholder:text-slate-600 font-bold resize-none h-8 leading-tight", rows: 2 }))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-3" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "bg-cyan-950/20 border border-cyan-500/20 rounded-xl p-2.5 shadow-lg transition-colors",
      onDragOver: (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.add("border-cyan-400", "bg-cyan-500/20");
      },
      onDragEnter: (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.add("border-cyan-400", "bg-cyan-500/20");
      },
      onDragLeave: (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!e.currentTarget.contains(e.relatedTarget)) e.currentTarget.classList.remove("border-cyan-400", "bg-cyan-500/20");
      },
      onDrop: (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.remove("border-cyan-400", "bg-cyan-500/20");
        const files = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith("image"));
        if (files.length > 0) handleCustomSceneImagesUpload(files);
      }
    },
    /* @__PURE__ */ React.createElement("h2", { className: "text-[10px] font-black text-cyan-400 mb-1 flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(Layers, { size: 12 }), " SAB\u0130T G\xD6RSELLER (MAKS ", RENDER_CONFIG.MAX_CUSTOM_SCENE_IMAGES, ")"),
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, studioMedia.customSceneImages && studioMedia.customSceneImages.map((img, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "relative w-14 h-14 rounded-lg overflow-hidden border border-slate-700 shadow-md group" }, /* @__PURE__ */ React.createElement("img", { src: img, className: "w-full h-full object-cover", alt: `Sabit ${idx}` }), /* @__PURE__ */ React.createElement("button", { onClick: () => handleCustomSceneImageDelete(idx), className: "absolute top-0.5 right-0.5 bg-rose-500/80 group-hover:opacity-100 hover:bg-rose-500 text-white p-0.5 rounded transition opacity-0 shadow-lg" }, /* @__PURE__ */ React.createElement(Trash2, { size: 10 })), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-0 left-0 bg-black/70 w-full text-center text-[7px] font-bold py-0.5 text-cyan-400 backdrop-blur-sm tracking-wider" }, "S", idx + 1))), (!studioMedia.customSceneImages || studioMedia.customSceneImages.length < RENDER_CONFIG.MAX_CUSTOM_SCENE_IMAGES) && /* @__PURE__ */ React.createElement(
      "label",
      {
        className: "w-14 h-14 rounded-lg border-2 border-dashed border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 flex flex-col items-center justify-center cursor-pointer transition text-cyan-400",
        onDragOver: (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        onDrop: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const files = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith("image"));
          if (files.length > 0) handleCustomSceneImagesUpload(files);
        }
      },
      /* @__PURE__ */ React.createElement(UploadCloud, { size: 16, className: "mb-0.5 opacity-80" }),
      /* @__PURE__ */ React.createElement("span", { className: "text-[7px] font-bold uppercase tracking-wider opacity-80" }, "Ekle"),
      /* @__PURE__ */ React.createElement("input", { type: "file", multiple: true, accept: "image/*", className: "hidden", onChange: handleCustomSceneImagesUpload })
    ), (!studioMedia.customSceneImages || studioMedia.customSceneImages.length === 0) && /* @__PURE__ */ React.createElement("span", { className: "text-[8px] text-cyan-500/70 font-bold uppercase tracking-wider self-center ml-1 hidden md:inline" }, "\u2190 Buraya s\xFCr\xFCkleyin"))
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "bg-black/30 border border-slate-800 rounded-xl p-2.5 shadow-lg transition-colors",
      onDragOver: (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.add("border-indigo-400", "bg-indigo-500/20");
      },
      onDragEnter: (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.add("border-indigo-400", "bg-indigo-500/20");
      },
      onDragLeave: (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!e.currentTarget.contains(e.relatedTarget)) e.currentTarget.classList.remove("border-indigo-400", "bg-indigo-500/20");
      },
      onDrop: (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.remove("border-indigo-400", "bg-indigo-500/20");
        processSelectedFiles(Array.from(e.dataTransfer.files));
      }
    },
    /* @__PURE__ */ React.createElement("h2", { className: "text-[10px] font-black text-indigo-400 mb-1 flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(FileText, { size: 12 }), " MEDYA Y\xDCKLE"),
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, uiState.selectedMediaFiles && uiState.selectedMediaFiles.slice(0, 5).map((file, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "relative w-14 h-14 rounded-lg overflow-hidden border border-slate-700 shadow-md group" }, file.type.startsWith("image") ? /* @__PURE__ */ React.createElement("img", { src: file.data, className: "w-full h-full object-cover", alt: `Medya ${idx}` }) : /* @__PURE__ */ React.createElement("div", { className: "w-full h-full flex items-center justify-center text-[7px] font-bold text-indigo-400 bg-slate-900" }, file.name.split(".").pop().toUpperCase()), /* @__PURE__ */ React.createElement("button", { onClick: () => setUiState((prev) => ({ ...prev, selectedMediaFiles: prev.selectedMediaFiles.filter((_, i) => i !== idx) })), className: "absolute top-0.5 right-0.5 bg-rose-500/80 group-hover:opacity-100 hover:bg-rose-500 text-white p-0.5 rounded transition opacity-0 shadow-lg" }, /* @__PURE__ */ React.createElement(Trash2, { size: 10 })), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-0 left-0 bg-black/70 w-full text-center text-[7px] font-bold py-0.5 text-indigo-400 backdrop-blur-sm tracking-wider" }, "M", idx + 1))), /* @__PURE__ */ React.createElement(
      "label",
      {
        className: "w-14 h-14 rounded-lg border-2 border-dashed border-indigo-500/50 hover:border-indigo-400 hover:bg-indigo-500/10 flex flex-col items-center justify-center cursor-pointer transition text-indigo-400",
        onDragOver: (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        onDrop: (e) => {
          e.preventDefault();
          e.stopPropagation();
          processSelectedFiles(Array.from(e.dataTransfer.files));
        }
      },
      /* @__PURE__ */ React.createElement(UploadCloud, { size: 16, className: "mb-0.5 opacity-80" }),
      /* @__PURE__ */ React.createElement("span", { className: "text-[7px] font-bold uppercase tracking-wider opacity-80" }, "Ekle"),
      /* @__PURE__ */ React.createElement("input", { type: "file", multiple: true, accept: "*/*", className: "hidden", onChange: (e) => {
        processSelectedFiles(Array.from(e.target.files));
        e.target.value = null;
      } })
    ), uiState.selectedMediaFiles.length > 5 && /* @__PURE__ */ React.createElement("div", { className: "w-14 h-14 rounded-lg bg-slate-800/50 flex items-center justify-center text-[9px] text-slate-400 font-bold border border-slate-700" }, "+", uiState.selectedMediaFiles.length - 5), (!uiState.selectedMediaFiles || uiState.selectedMediaFiles.length === 0) && /* @__PURE__ */ React.createElement("span", { className: "text-[8px] text-indigo-500/70 font-bold uppercase tracking-wider self-center ml-1 hidden md:inline" }, "\u2190 Buraya s\xFCr\xFCkleyin"))
  )), activeTab === "gazete" && /* @__PURE__ */ React.createElement("div", { className: "mb-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-2 mb-3 flex-wrap bg-slate-950/40 p-2.5 rounded-xl border border-slate-800" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Newspaper, { size: 18, className: "text-emerald-400" }), /* @__PURE__ */ React.createElement("span", { className: "text-xs md:text-sm font-black text-white tracking-wide" }, "Ulusal Gazete Man\u015Fetleri (30 Gazete)")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 rounded-lg px-2 py-1" }, /* @__PURE__ */ React.createElement(Clock, { size: 12, className: "text-slate-400" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "date",
      value: gazeteDate,
      max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      onChange: (e) => {
        setGazeteDate(e.target.value);
      },
      className: "bg-transparent text-slate-200 text-[10px] font-bold border-none outline-none cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: fetchGazeteMan\u015Fetleri,
      disabled: gazeteLoading,
      className: "bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 border border-emerald-500 transition-all shadow-md"
    },
    gazeteLoading ? /* @__PURE__ */ React.createElement(Loader2, { size: 12, className: "animate-spin" }) : /* @__PURE__ */ React.createElement(RefreshCw, { size: 12 }),
    " Man\u015Fetleri Yenile"
  ))), gazeteError && /* @__PURE__ */ React.createElement("div", { className: "bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl text-rose-400 text-xs font-bold mb-3 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(AlertCircle, { size: 14 }), " ", gazeteError), gazeteLoading && /* @__PURE__ */ React.createElement("div", { className: "text-center py-12" }, /* @__PURE__ */ React.createElement(Loader2, { size: 32, className: "text-emerald-400 animate-spin mx-auto mb-3" }), /* @__PURE__ */ React.createElement("p", { className: "text-slate-400 text-sm font-bold" }, "Gazete man\u015Fetleri y\xFCkleniyor...")), !gazeteLoading && gazeteItems.length > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-emerald-400 text-[10px] font-bold uppercase tracking-wider" }, gazeteItems.length, " gazete bulundu"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-1" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setGazeteGalleryView("grid"), className: `p-1.5 rounded-lg text-[10px] ${gazeteGalleryView === "grid" ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-500"}` }, "\u25A6"), /* @__PURE__ */ React.createElement("button", { onClick: () => setGazeteGalleryView("single"), className: `p-1.5 rounded-lg text-[10px] ${gazeteGalleryView === "single" ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-500"}` }, "\u2610"))), gazeteGalleryView === "grid" ? (
    /* GRID GÖRÜNÜMÜ — küçük kartlar */
    /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 max-h-[50vh] overflow-y-auto p-1" }, gazeteItems.map((item, idx) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: idx,
        className: "group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all cursor-pointer",
        onClick: () => {
          setGazeteCurrentIdx(idx);
          setGazeteGalleryView("single");
        }
      },
      /* @__PURE__ */ React.createElement("img", { src: item.src, crossOrigin: "anonymous", className: "w-full h-auto block", alt: item.name, loading: "lazy", onError: (e) => {
        if (item.rawSrc && e.target.src !== item.rawSrc) e.target.src = item.rawSrc;
      } }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-white text-[8px] font-bold text-center leading-tight" }, item.name)),
      /* @__PURE__ */ React.createElement("div", { className: "absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            openCropModal(item.src || item.rawSrc, item.name);
          },
          className: "bg-indigo-600 hover:bg-indigo-500 text-white p-1 rounded-md shadow-lg",
          title: "Crop yap"
        },
        /* @__PURE__ */ React.createElement(Scissors, { size: 10 })
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            addFullImageToMedia(item.src || item.rawSrc, item.name);
          },
          className: "bg-emerald-600 hover:bg-emerald-500 text-white p-1 rounded-md shadow-lg",
          title: "Tam sayfa ekle"
        },
        /* @__PURE__ */ React.createElement(Check, { size: 10 })
      ))
    )))
  ) : (
    /* TEKLİ GÖRÜNÜM — büyük önizleme */
    /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-2 mb-3 bg-slate-900/90 border border-slate-700/80 p-2.5 rounded-2xl flex-wrap shadow-lg" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setGazeteCurrentIdx(Math.max(0, gazeteCurrentIdx - 1)),
        disabled: gazeteCurrentIdx === 0,
        className: "bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
      },
      "\u2190 \xD6nceki"
    ), /* @__PURE__ */ React.createElement("span", { className: "text-white text-sm font-bold bg-slate-950/60 px-3 py-1 rounded-xl border border-slate-800" }, gazeteItems[gazeteCurrentIdx]?.name, " ", /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 font-normal" }, "(", gazeteCurrentIdx + 1, "/", gazeteItems.length, ")")), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setGazeteCurrentIdx(Math.min(gazeteItems.length - 1, gazeteCurrentIdx + 1)),
        disabled: gazeteCurrentIdx >= gazeteItems.length - 1,
        className: "bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
      },
      "Sonraki \u2192"
    )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => openCropModal(gazeteItems[gazeteCurrentIdx]?.src || gazeteItems[gazeteCurrentIdx]?.rawSrc, gazeteItems[gazeteCurrentIdx]?.name),
        className: "bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
      },
      /* @__PURE__ */ React.createElement(Scissors, { size: 14 }),
      " Crop Yap"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => addFullImageToMedia(gazeteItems[gazeteCurrentIdx]?.src || gazeteItems[gazeteCurrentIdx]?.rawSrc, gazeteItems[gazeteCurrentIdx]?.name),
        className: "bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
      },
      /* @__PURE__ */ React.createElement(Check, { size: 14 }),
      " Tam Sayfa Ekle"
    ))), /* @__PURE__ */ React.createElement("div", { className: "relative bg-black/50 rounded-xl overflow-hidden border border-slate-700/50" }, /* @__PURE__ */ React.createElement("img", { src: gazeteItems[gazeteCurrentIdx]?.src, crossOrigin: "anonymous", className: "w-full h-auto block", alt: gazeteItems[gazeteCurrentIdx]?.name, onError: (e) => {
      if (gazeteItems[gazeteCurrentIdx]?.rawSrc && e.target.src !== gazeteItems[gazeteCurrentIdx]?.rawSrc) e.target.src = gazeteItems[gazeteCurrentIdx]?.rawSrc;
    } })))
  )), !gazeteLoading && gazeteItems.length === 0 && !gazeteError && /* @__PURE__ */ React.createElement("div", { className: "text-center py-12" }, /* @__PURE__ */ React.createElement(Newspaper, { size: 48, className: "text-slate-700 mx-auto mb-3" }), /* @__PURE__ */ React.createElement("p", { className: "text-slate-500 text-sm font-bold" }, "Gazete man\u015Fetleri y\xFCklenmedi"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 text-xs mt-1" }, 'Yukar\u0131daki "Yenile" butonuna t\u0131klay\u0131n'))), gazeteCropModal && /* @__PURE__ */ React.createElement(
    GazeteCropModal,
    {
      src: gazeteCropModal.src,
      name: gazeteCropModal.name,
      onClose: () => setGazeteCropModal(null),
      onCrop: applyCrop
    }
  ), activeTab !== "media" && activeTab !== "gazete" && /* @__PURE__ */ React.createElement("textarea", { value: textInput, onChange: (e) => setTextInput(e.target.value), placeholder: config.tip === "guzel_soz" || config.tip === "iddia_analizi" ? activeTab === "url" ? "S\xF6z linkini yap\u0131\u015Ft\u0131r\u0131n..." : "G\xFCzel s\xF6z\xFC veya al\u0131nt\u0131y\u0131 yaz\u0131n..." : activeTab === "url" ? "Haber linkini yap\u0131\u015Ft\u0131r\u0131n..." : "Haberi yaz\u0131n veya ara\u015Ft\u0131r\u0131lacak g\xFCndemi verin...", className: `w-full h-20 bg-black/30 border rounded-xl p-3 text-sm outline-none mb-3 text-slate-200 resize-none transition-all relative z-0 ${activeTab === "prompt" ? "border-fuchsia-500/50 focus:border-fuchsia-500" : "border-slate-800 focus:border-indigo-500"}` }), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-3 px-2" }, config.tip === "iddia_analizi" ? /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20" }, "\u0130ddia Analizi \u2014 Fact Check + Video \xDCretimi") : config.tip === "guzel_soz" ? /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20" }, "G\xFCzel S\xF6z \u2014 Metin veya Resim + Arka Plan M\xFCzi\u011Fi") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-slate-500 flex items-center gap-1" }, /* @__PURE__ */ React.createElement(Type, { size: 12 }), " Dil: ", getWPS(config.language), " kelime/sn"), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20" }, "Hedef: ~", maxWordsUI, " kelime"))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row gap-2 relative z-0" }, /* @__PURE__ */ React.createElement("button", { onClick: () => handleExecuteStart(uiState.selectedMediaFiles, "image"), disabled: uiState.isProcessing || (config.tip === "guzel_soz" || config.tip === "iddia_analizi" ? !textInput.trim() && uiState.selectedMediaFiles.length === 0 : activeTab === "media" || activeTab === "gazete" ? uiState.selectedMediaFiles.length === 0 : !textInput.trim()), className: "flex-1 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-900 disabled:text-slate-600 text-slate-200 py-2.5 md:py-3 rounded-full font-medium text-xs transition-all border border-slate-700 flex items-center justify-center gap-2" }, uiState.isProcessing && config.outputType === "image" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Loader2, { size: 16, className: "animate-spin" }), " \u0130\u015ELEN\u0130YOR...") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ImagePlus, { size: 16 }), " ", config.tip === "iddia_analizi" ? "\u0130ddia Analizi Yap" : config.tip === "guzel_soz" || config.tip === "iddia_analizi" ? "Kart Olu\u015Ftur" : "G\xF6rsel olu\u015Ftur")), /* @__PURE__ */ React.createElement("button", { onClick: () => handleExecuteStart(uiState.selectedMediaFiles, "video"), disabled: uiState.isProcessing || (config.tip === "guzel_soz" || config.tip === "iddia_analizi" ? !textInput.trim() && uiState.selectedMediaFiles.length === 0 : activeTab === "media" || activeTab === "gazete" ? uiState.selectedMediaFiles.length === 0 : !textInput.trim()), className: "flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900/50 disabled:text-indigo-400 text-white py-2.5 md:py-3 rounded-full font-bold text-xs transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2" }, uiState.isProcessing && config.outputType === "video" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Loader2, { size: 16, className: "animate-spin" }), " \u0130\u015ELEN\u0130YOR...") : /* @__PURE__ */ React.createElement(React.Fragment, null, config.tip === "iddia_analizi" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Eye, { size: 16 }), " \u0130ddia Analizi") : config.tip === "guzel_soz" || config.tip === "iddia_analizi" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wand2, { size: 16 }), " G\xFCzel S\xF6z Olu\u015Ftur") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Clapperboard, { size: 16 }), " Video olu\u015Ftur"))))), uiState.error && /* @__PURE__ */ React.createElement("div", { className: "mt-6 bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl flex gap-3 text-rose-400 text-sm font-medium items-start" }, /* @__PURE__ */ React.createElement(AlertCircle, { size: 18, className: "shrink-0 mt-0.5" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", { className: "block mb-1" }, "Hata"), String(uiState.error))), uiState.videoUrl && /* @__PURE__ */ React.createElement("div", { className: "mt-8 bg-slate-900 border border-emerald-900/50 p-6 rounded-3xl shadow-2xl text-center" }, /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-4" }, /* @__PURE__ */ React.createElement(ShieldCheck, { size: 14 }), " ", config.tip === "guzel_soz" || config.tip === "iddia_analizi" ? "G\xDCZEL S\xD6Z OLU\u015ETURULDU" : config.outputType === "image" ? "G\xD6RSEL OLU\u015ETURULDU" : "VIDEO OLU\u015ETURULDU"), config.outputType === "image" ? /* @__PURE__ */ React.createElement("img", { src: uiState.videoUrl, className: "w-full max-w-md mx-auto rounded-2xl shadow-lg ring-1 ring-white/10 object-cover", alt: "Output" }) : /* @__PURE__ */ React.createElement("video", { src: uiState.videoUrl, controls: true, autoPlay: true, className: "w-full max-w-md mx-auto rounded-2xl shadow-lg ring-1 ring-white/10" }), /* @__PURE__ */ React.createElement("div", { className: "mt-4 flex justify-center gap-3 flex-wrap" }, /* @__PURE__ */ React.createElement("button", { onClick: handleDownloadVideo, className: "bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all active:scale-95" }, /* @__PURE__ */ React.createElement(Download, { size: 14 }), " \u0130ND\u0130R"), /* @__PURE__ */ React.createElement("button", { onClick: shareToSelectedPlatforms, className: "bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all active:scale-95" }, /* @__PURE__ */ React.createElement(Share2, { size: 14 }), " PAYLA\u015E"), /* @__PURE__ */ React.createElement("button", { onClick: async () => {
    setUiState((prev) => ({ ...prev, videoUrl: null, selectedMediaFiles: [], percent: 0, statusText: "", error: "" }));
    setConfig((prev) => ({ ...prev, yorum: "", sourceName: "" }));
    for (let i = 0; i < RENDER_CONFIG.MAX_CUSTOM_SCENE_IMAGES; i++) await AssetManagerService.deleteMedia("CUSTOM_SCENE_IMG_" + i);
    setStudioMedia((s) => ({ ...s, customSceneImages: [] }));
  }, className: "bg-slate-700 hover:bg-slate-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all active:scale-95" }, /* @__PURE__ */ React.createElement(RotateCcw, { size: 14 }), " ", config.tip === "guzel_soz" || config.tip === "iddia_analizi" ? "YEN\u0130 S\xD6Z" : "YEN\u0130 HABER")), sysLogs && sysLogs.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-6 text-left" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2 px-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider" }, "Canl\u0131 \u0130\u015Flem & Payla\u015F\u0131m Loglar\u0131"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-500 font-mono" }, sysLogs.length, " kayit")), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950 border border-slate-800 rounded-2xl p-3.5 font-mono text-[11px] leading-relaxed max-h-56 overflow-y-auto space-y-1.5 shadow-inner" }, sysLogs.slice(-15).map((log, idx) => {
    let c = "text-slate-400";
    if (log.type === "success") c = "text-emerald-400 font-bold";
    if (log.type === "warn") c = "text-amber-400 font-bold";
    if (log.type === "error") c = "text-rose-400 font-bold animate-pulse";
    return /* @__PURE__ */ React.createElement("div", { key: idx, className: `flex items-start gap-2 ${c}` }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-600 shrink-0 select-none" }, "[", log.timestamp, "]"), /* @__PURE__ */ React.createElement("span", { className: "break-all" }, log.text));
  }))))), uiState.isProcessing && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900 border border-indigo-500/30 w-full max-w-lg p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden text-center" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 left-0 h-1 bg-indigo-600 transition-all duration-300 animate-pulse", style: { width: `${uiState.percent}%` } }), /* @__PURE__ */ React.createElement("div", { className: "w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4" }, /* @__PURE__ */ React.createElement(Loader2, { size: 28, className: "text-indigo-400 animate-spin" })), /* @__PURE__ */ React.createElement("h2", { className: "text-5xl font-black text-white mb-2" }, Math.round(uiState.percent), "%"), /* @__PURE__ */ React.createElement("p", { className: "text-indigo-400 font-bold text-sm mb-3 uppercase tracking-widest" }, uiState.statusText), /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono mb-4 border border-slate-700/50" }, /* @__PURE__ */ React.createElement(Clock, { size: 12 }), " Ge\xE7en: ", elapsedSeconds, "sn"), sysLogs && sysLogs.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-4 bg-slate-950/90 border border-slate-800 rounded-2xl p-4 text-left font-mono text-[11px] leading-relaxed max-h-48 overflow-y-auto space-y-1.5" }, sysLogs.map((log, idx) => {
    let c = "text-slate-400";
    if (log.type === "success") c = "text-emerald-400 font-bold";
    if (log.type === "warn") c = "text-amber-400 font-bold";
    if (log.type === "error") c = "text-rose-400 font-bold animate-pulse";
    return /* @__PURE__ */ React.createElement("div", { key: idx, className: `flex items-start gap-2 ${c}` }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-600 shrink-0 select-none" }, "[", log.timestamp, "]"), /* @__PURE__ */ React.createElement("span", { className: "break-all" }, log.text));
  }), /* @__PURE__ */ React.createElement("div", { ref: logEndRef })))), authExpired && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-[9999] flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900 border-2 border-red-500/40 w-full max-w-md p-8 rounded-3xl shadow-2xl text-center" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-black text-white mb-3" }, "OTURUM S\xDCRES\u0130 DOLDU"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-400 text-sm mb-6" }, "L\xFCtfen sayfay\u0131 yenileyin."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React.createElement("button", { onClick: handleSilentRecovery, className: "w-full bg-gradient-to-r from-emerald-600 to-indigo-600 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2" }, /* @__PURE__ */ React.createElement(ShieldCheck, { size: 16 }), " OTURUMU YEN\u0130LE"), /* @__PURE__ */ React.createElement("button", { onClick: () => setAuthExpired(false), className: "w-full bg-slate-800 text-slate-300 font-bold py-3 rounded-xl text-xs" }, "G\xD6ZARDI ET"), /* @__PURE__ */ React.createElement("button", { onClick: () => window.location.reload(), className: "w-full bg-red-600/20 text-red-400 font-bold py-3 rounded-xl text-xs border border-red-500/30" }, "SAYFAYI YEN\u0130LE (F5)")))), /* @__PURE__ */ React.createElement("canvas", { ref: canvasRef, style: { position: "fixed", top: "-10000px", left: "-10000px", zIndex: -50 } })));
}
if (typeof window !== "undefined") {
  window.App = App;
  window.ErrorBoundary = ErrorBoundary;
}
if (typeof document !== "undefined") {
  const rootEl = document.getElementById("root");
  if (rootEl) {
    try {
      if (typeof ReactDOM !== "undefined" && typeof ReactDOM.createRoot === "function") {
        if (!window._reactRoot) {
          if (!rootEl._reactRootContainer && !rootEl.__reactContainer$) {
            try {
              window._reactRoot = ReactDOM.createRoot(rootEl);
            } catch (rootErr) {
              console.warn("createRoot atland\u0131 (zaten ba\u011Fl\u0131):", rootErr);
            }
          }
        }
        if (window._reactRoot) {
          window._reactRoot.render(/* @__PURE__ */ React.createElement(App, null));
        }
      } else if (typeof ReactDOM !== "undefined" && typeof ReactDOM.render === "function") {
        ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), rootEl);
      }
    } catch (e) {
      console.warn("React mount uyar\u0131s\u0131:", e);
    }
  }
}
export default App;
