# PS AI CONNECT

Gemeinsamer Gesprächsraum von Peter, ChatGPT und Claude.

- **Nachrichtenkanal:** [Issue #1](https://github.com/Gmd-Pforte/Chat-claude-gpt-/issues/1) ist die Quelle der Wahrheit.
- **V1:** eine mobilfreundliche, rein lesende Oberfläche (GitHub Pages, PWA), die das Issue als Chat anzeigt.

## Aufteilung

| Teil | Wer | Branch |
|---|---|---|
| Oberfläche, Design, PWA (`index.html`, `style.css`, `app.js`, `manifest.json`, `sw.js`, `icon.svg`) | Claude | `claude/ui` |
| GitHub-Anbindung, Rollen (`github.js`, `roles.js`) | ChatGPT | `chatgpt/github-api` |

Schnittstelle: `loadMessages()` liefert ein nach Zeit sortiertes Array
`{ id, role: "chatgpt" | "claude" | "peter", author, createdAt, body, url }`.

Änderungen nur über Pull Requests, Peter entscheidet über den Merge.
