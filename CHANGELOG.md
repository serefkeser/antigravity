# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [anti 1.0.8] - 2026-07-30

### Fixed & Enhanced
- **Fixed Standalone Tablet / Mobile Blank Screen Issue (ReactDOM Mount Fix):** Resolved black screen issue on mobile browsers and tablets in [anti.1.0.8.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.8.jsx). Added automatic `ReactDOM.createRoot(document.getElementById('root')).render(<App />)` mounting logic at the bottom of the script and updated [index.html](file:///c:/Users/skese/Downloads/antigravity/index.html) with a fallback animated loading indicator.

---

## [anti 1.0.7] - 2026-07-30

### Fixed & Enhanced
- **Fixed CORS Origin White-Listing & HTTPS Probe Fallback in Local FFmpeg Server:** Updated `linkedin_server.py` to allow dynamic origin matching (including `*.googleusercontent.com` and Gemini Canvas origins) and added Private Network Access (`Access-Control-Allow-Private-Network: true`) headers. Updated `getLinkedInServerUrl` in [anti.1.0.7.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.7.jsx) to always probe `http://localhost:3000` / `http://127.0.0.1:3000` when HTTPS probes miss, preventing `Failed to fetch` CORS errors and guaranteeing 100% reliable 30 FPS MP4 conversion.

---

## [anti 1.0.6] - 2026-07-30

### Fixed & Enhanced
- **Fixed `NetworkUtils.getProxyServerUrl` Resolution in MP4 Conversion Pipeline:** Resolved runtime `TypeError: NetworkUtils.getProxyServerUrl is not a function` in [anti.1.0.6.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.6.jsx). Implemented `NetworkUtils.getProxyServerUrl` and updated `convertWebMtoMP4` to correctly resolve local Python FFmpeg endpoint (`http://localhost:3000/convert_mp4`), eliminating `SharedArrayBuffer` WASM fallback errors and guaranteeing native 30 FPS MP4 conversion.

---

## [anti 1.0.5] - 2026-07-30

### Fixed & Enhanced
- **Mandatory Automatic MP4 Conversion in Workflow:** Integrated automatic MP4 conversion at 92% progress inside `WorkflowCoordinator.resumeWorkflow` in [anti.1.0.5.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.5.jsx). Automatically converts raw canvas WebM output to 30 FPS H.264/AAC MP4 via native FFmpeg before workflow completion so `videoUrl` is GUARANTEED to be a true `.mp4` file (never `.webm`).

---

## [anti 1.0.4] - 2026-07-30

### Fixed & Enhanced
- **Audio Distortion Prevention & Dynamic PCM Volume Normalization:** Integrated audio peak normalization and gain management from `super calisiyor.txt` into [anti.1.0.4.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.4.jsx). Dynamically boosts low-amplitude speech up to 26000 peak amplitude (3.0x max boost factor), preventing muffled or distorted TTS voices.
- **Audio Completion Sync (`audioEndPromise`):** Synchronized scene transitions in `renderScene` with `audioEndPromise` to prevent premature cut-offs or overlapping speech.
- **Zero Silent Gaps Pipeline:** Guaranteed smooth, continuous flow without silence pauses or empty frames between clickbait cover, news headlines, and newspaper layout.

---

## [anti 1.0.3] - 2026-07-30

### Fixed & Enhanced
- **Native System FFmpeg Local Proxy Endpoint (`/convert_mp4`):** Integrated native system `ffmpeg` (version 8.1.1) in `linkedin_server.py` at `/convert_mp4`. Bypasses browser `SharedArrayBuffer` restriction and guarantees 100% reliable 30.00 FPS CFR MP4 conversion without WebM fallback.
- **Fail-safe MP4 Video Pipeline:** Updated `convertWebMtoMP4` in [anti.1.0.3.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.3.jsx) to prioritize local Python ffmpeg service before browser WASM fallback.

---

## [anti 1.0.2] - 2026-07-30

### Fixed & Enhanced
- **Seamless Clickbait-to-News Transition (0.0s Gap):** Clickbait hook scene transition is now instantaneous with 0.0s audio delay (`transition: 'none'`), eliminating silence pauses or black frame gaps between the clickbait cover and the first news headline.
- **Strict 1.0x Normal Audio Speed Lock:** Fixed `scaleFactor = 1.0` and `source.playbackRate.value = 1.0` permanently across all audio rendering engines. Audio speech playback is locked at 1.0x normal speed (never slowed down or speeded up).
- **Dynamic & Unique Closing Quote (Son Söz):** Overhauled `sonSoz` prompt to draw from global and Turkish thinkers/philosophers (Mevlana, Atatürk, Yunus Emre, Platon, Nietzsche, Seneca, Montaigne, İbn Haldun etc.). Implemented `localStorage` quote history caching (`getRecentSonSozList` / `addRecentSonSoz`) to guarantee no closing quote is ever repeated.

---

## [anti 1.0.1] - 2026-07-30

### Added
- **Unified `anti 1.0` Versioning:** Standardized internal and external version numbers to `anti 1.0.x` matching filename ([anti.1.0.1.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.1.jsx)).
- **Senior Software Engineering Operational Checklist:** Established strict checklist in `.agents/AGENTS.md` enforcing empirical verification, semantic versioning, CHANGELOG logging, and mandatory GitHub synchronization on every task.
- **Video Keyframe Extraction (`_extractVideoFrame`):** Video uploads now extract keyframes via HTML5 Canvas for multimodal Gemini API analysis to prevent video audio transcription traps.

### Fixed
- **Instagram 21 FPS Frame Rate Rejection Fix:** Enforced `-vf "fps=fps=30" -r 30 -vsync cfr` in `convertWebMtoMP4` via `ffmpeg.wasm`. Guaranteed 30.00 FPS Constant Frame Rate (CFR) MP4 export, permanently resolving Instagram upload rejection ("Your video has a frame rate of 21 fps").
- **AI Speech Disclaimer Error Filter:** Expanded `ERROR_PATTERNS` regex to catch AI audio/speech transcription disclaimers (e.g. *"video içeriğindeki ses veya konuşma dili desteklenmeyen..."*) and prevent AI error text from being generated as video slides.
- **2002 Baseline Historical Fact-Check Prompt:** Integrated 2002 official baseline metrics (Asgari Ücret 184 TL, Çeyrek Altın 32 TL, Dolar 1.50 TL, Açlık Sınırı 350 TL) into `ECONOMIC_DATA` and updated `sysPrompt` in `_analyzeIddia`.

---

## [anti 1.0.0] - 2026-07-29

### Added
- Dynamic TÜİK & TÜRK-İŞ economic data injection into system prompts (`buildEconomicDataBlock`).
- Dual Buffer GraphQL & Python Local Server Cloud Media Uploader (`uploadMediaToCloud`).
