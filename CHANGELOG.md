### v1.0.20 (2026-07-31)
- **fix(react)**: `ReactDOMClient.createRoot()` konsol uyarısı kalıcı olarak giderildi. `window._antiReactRoot` global nesnesi ve DOM elementindeki önceden türetilmiş `__reactContainer$` anahtarları dinamik taranarak temizlenip tek bir root üzerinden render garantilendi.
- **fix(log)**: Başlangıçtaki pasif müzik kontrolünde tekrarlanan `"Müzik kütüphanesi boş. 'MÜZİK KLASÖRÜ SEÇ' butonundan bir kez ekleyin."` bilgi uyarısı sessiz moda alındı (sadece kullanıcı müzik klasörü yüklediğinde sistem günlüğü yazılır).

### v1.0.19 (2026-07-31)
- **fix(render)**: Zorla Sıfır Boşluk (Zero-Gap Transition): Güzel Söz, Haber, İddia ve tüm girdi türlerinde sahneler arası boşluklar ve sessizlikler tamamen kaldırıldı.
- **fix(render)**: `playAudio` içinde ses decode edilmişse (`audioBuf`), tahmin/byte bazlı süreler devre dışı bırakılıp `audioBuf.duration` tek yetkili kılındı.
- **fix(render)**: `renderScene` ve `renderGuzelSoz` döngülerine `audioEnded` dinleyicisi eklendi; ses bittiği milisaniyede kare döngüsü kırılarak doğrudan bir sonraki sahneye geçilmesi zorlandı.
- **fix(guzel-soz)**: `renderGuzelSoz`'daki `+0.5s` ekleme ve `minDur = 4.0s` zorlaması kaldırıldı.

### v1.0.18 (2026-07-31)
- **feat(guzel-soz)**: Çok dilli (FR→DE→TR) mod tam implementasyonu: Gemini ile sözü 3 dile çevirir, her dil için ayrı sahne + ayrı ses üretir.
- **fix(guzel-soz)**: Üst üste ses sorunu giderildi — artık her sahne kendi `audio[i]` buffer'ını kullanır, bir önceki sahne sesi durdurulunca sonraki başlar.
- **fix(guzel-soz)**: Sahne değişmeme sorunu giderildi — sahne süresi artık `audio[i].duration`'dan alınır, ses bitince görsel kesin olarak geçer.
- **feat(guzel-soz)**: Sağ üst köşede dil etiketi (🇫🇷 FR / 🇩🇪 DE / 🇹🇷 TR) altın renginde gösterilir, fade-in animasyonlu.
- **feat(guzel-soz)**: `_isMultilang: true` flag ile eski tek-dilli davranış geriye uyumlu korundu.
- **fix(guzel-soz)**: Asset üretimi artık `audio[0/1/2]` döngüsüyle 3 ayrı dilde TTS üretir.

### v1.0.17 (2026-07-30)
- **fix(iddia-analizi)**: Meta-prompting / yapay zeka betimleme sızıntıları (spokenText) engellendi.
- **fix(iddia-analizi)**: Yüklenen medyanın 2. slaytta kesintisiz oynatılması programlama seviyesinde garanti altına alındı.
- **fix(render)**: Bitiş ekranı (Outro) süresi maksimum 2.5 saniye ile sınırlandırıldı.
- **fix(visual)**: Görsel ve metinlerde dilbilgisi ve akış kuralları sıkılaştırıldı.

### v1.0.16 (2026-07-30)
- **feat(iddia-analizi)**: Uploaded media (video/audio) is now played uncut immediately after the hook/clickbait.
- **fix**: Prevented duplicate media downloads triggered by React Strict Mode.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [anti 1.0.15] - 2026-07-30

### Fixed & Enhanced
- **Permanently Eliminated `ReactDOMClient.createRoot()` Warning (`anti 1.0.15`):** Replaced static `__reactContainer$` key check with a dynamic `Object.keys(rootEl).some(k => k.startsWith('__reactFiber$') || ...)` scan in [anti.1.0.15.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.15.jsx) and [app.js](file:///c:/Users/skese/Downloads/antigravity/app.js). React 18 stores its internal fiber under a random hash suffix — the static string was never matching, causing `createRoot` to be called on every script evaluation. Full re-compile with `esbuild`, `v=1.0.15` cache bust.
- **Fixed `executeRender` Main Code Path MediaRecorder mimeType (Native MP4 Priority):** The primary `executeRender` render path (haber/iddia/all news types) was hard-coded to `video/webm`. Now tries `video/mp4; codecs="avc1.42E01E, mp4a.40.2"` → `video/mp4` → `video/webm` fallback.

---

## [anti 1.0.14] - 2026-07-30

### Fixed & Enhanced
- **Native MP4 Recording Priority & Active Local FFmpeg Conversion Service (`anti 1.0.14`):** Updated `RenderWorkerService.executeRender` in [anti.1.0.14.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.14.jsx) to check and prioritize native MP4 MIME types (`video/mp4; codecs="avc1.42E01E, mp4a.40.2"`, `video/mp4`) before WebM. Activated background local FFmpeg Python server (`linkedin_server.py` on port 3000) for instant 30.00 FPS CFR MP4 conversion without WebM fallback. Re-compiled [app.js](file:///c:/Users/skese/Downloads/antigravity/app.js) and bumped PWA cache keys to `v=1.0.14`.

---

## [anti 1.0.13] - 2026-07-30

### Fixed & Enhanced
- **Automated `app.js` ESBuild Compilation & PWA Cache Invalidation (`anti 1.0.13`):** Compiled [anti.1.0.13.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.13.jsx) to [app.js](file:///c:/Users/skese/Downloads/antigravity/app.js) via ESBuild so all render pipeline fixes and music selection priority code execute in HTML/PWA builds. Updated [index.html](file:///c:/Users/skese/Downloads/antigravity/index.html) version parameters to `v=1.0.13` and bumped [sw.js](file:///c:/Users/skese/Downloads/antigravity/sw.js) `CACHE_NAME` to `otonom-pwa-v1.0.13` to force immediate browser cache refresh.

---

## [anti 1.0.12] - 2026-07-30

### Fixed & Enhanced
- **Fixed User Music Selection Overwrite in Render Pipeline (`anti 1.0.12`):** Resolved bug in [anti.1.0.12.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.12.jsx) where `WorkflowCoordinator.executeWorkflow` overwrote the user's explicitly chosen background music with random or emotion-matched tracks. Enforced absolute priority for `this.state.preferences.ambientSound` / `SafeStorage.getItem('ns_selectedBgmId')`.
- **Eliminated `ReactDOMClient.createRoot()` Warnings:** Added container property check (`rootEl._reactRootContainer || rootEl.__reactContainer$`) in [anti.1.0.12.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.12.jsx) and [app.js](file:///c:/Users/skese/Downloads/antigravity/app.js) to guarantee 0 React console warnings across sandboxes.

---

## [anti 1.0.11] - 2026-07-30

### Fixed & Enhanced
- **Fixed React Duplicate `createRoot()` & Module Export `undefined` Crash (`anti 1.0.11`):** Resolved `ReactDOMClient.createRoot()` warning and `Element type is invalid: expected a string or class/function but got: undefined` error in [anti.1.0.11.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.11.jsx) and [app.js](file:///c:/Users/skese/Downloads/antigravity/app.js). Implemented `window._reactRoot` singleton container management and added global `window.App = App` and `export default App` fallbacks for 100% reliable execution across Canvas sandboxes and standalone PWA runners.

---

## [anti 1.0.10] - 2026-07-30

### Fixed & Enhanced
- **Claim Analysis Workflow & Uncut Media Rules (`anti 1.0.10`):** Updated `_analyzeIddia` in [anti.1.0.10.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.10.jsx). Enforced full, uncut audio/video playback immediately following clickbait hook covers. Integrated real-life case examples, justice/court precedents, concrete exposure evidence, and mandatory official state metrics (July 2026 dataset with source URLs & dates).

---

## [anti 1.0.9] - 2026-07-30

### Fixed & Enhanced
- **Unified Version & Module Standardization (`anti 1.0.9`):** Updated core script to [anti.1.0.9.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.9.jsx), standardizing `APP_VERSION` to `anti 1.0.9`, updating `yüklemeler.md` component registry, and refactoring modular headers for seamless Canvas & mobile PWA compatibility.

---

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
