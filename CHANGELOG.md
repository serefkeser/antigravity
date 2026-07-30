# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
