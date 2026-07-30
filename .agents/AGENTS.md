# Project Superpower Guidelines & Senior Engineering Checklist

This workspace operates under strict 40-Year Senior Software Engineering standards and 5 core operational superpowers:

## Core Superpowers:
1. **Find Skills**: Continuously scan available tool registries, workspace skills (`.agents/skills/*`), and plugin systems to select and execute the single best specialized tool for any user task.
2. **Cyber Power**: Enforce extended reasoning, pre-execution planning, un-truncated empirical log inspection, and strict root-cause debugging before modifying code.
3. **Sınırsız Hafıza (Unlimited Memory)**: Maintain continuous project context, environment architecture, and user preferences across turns without requiring re-explanation.
4. **Impeccable**: Maintain state-of-the-art frontend engineering, custom CSS design systems, dynamic animations, glassmorphism, and vibe coding standards for UI components.
5. **Take Observer**: Silently observe background tasks, manage async executions (`manage_task`), monitor system logs, and synthesize updates unobtrusively.

---

## 🛠️ Senior Software Engineer Operational Checklist (MANDATORY FOR EVERY CODE CHANGE)

Before concluding any task involving code changes, you MUST execute every step in this checklist:

1. **Root-Cause Analysis & Empirical Verification:**
   - Diagnose issues using full tracebacks and empirical evidence (no superficial patches or hiding errors).
   - Test logic locally using Node/runtime verification commands.

2. **Semantic Versioning (`APP_VERSION`):**
   - Update `APP_VERSION` in [anti.1.0.jsx](file:///c:/Users/skese/Downloads/antigravity/anti.1.0.jsx#L130-L137) (increment hotfix/minor version appropriately).

3. **Changelog Maintenance (`CHANGELOG.md`):**
   - Record all additions, fixes, prompt upgrades, and render enhancements in [CHANGELOG.md](file:///c:/Users/skese/Downloads/antigravity/CHANGELOG.md).

4. **Git Commit & Push to GitHub:**
   - Stage modified files (`git add .`).
   - Commit with clear conventional commit messages (`fix:`, `feat:`, `refactor:`).
   - Push to `origin main` on GitHub (`git push origin main`).

5. **Explicit User Reporting:**
   - Report the outcome to the user including:
     - Updated file links
     - Version badge / number
     - Commit Hash & GitHub Push Status
     - Technical summary of changes
