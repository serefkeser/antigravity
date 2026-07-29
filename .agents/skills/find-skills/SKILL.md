---
name: find-skills
description: Automatically scans the agent skill library, installed plugins, and available tools to select and execute the optimal specialized capability for any user request.
---

# Find Skills

Use this skill whenever a user request requires identifying the right tool, skill, or library in the system.

## Capabilities & Workflow
1. **Library Scanning**: Evaluates all available workspace skills (`.agents/skills/*`), global skills (`~/.gemini/config/plugins/*`), and MCP tools.
2. **Relevance Matching**: Maps user intent (e.g., cheminformatics, social media API, literature search, structural biology, build management) to the exact matching skill.
3. **Execution Protocol**: Before executing a skill, opens `SKILL.md` via `view_file` to read and strictly obey its instructions.
