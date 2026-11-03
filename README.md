# PS Cartoon Studio

Ein kostenloses 2D-Zeichentrickstudio im Browser von **PS AI MUSIC**, entwickelt von Peter zusammen mit ChatGPT und Claude.

**Direkt öffnen:** https://gmd-pforte.github.io/Chat-claude-gpt-/

Läuft am PC, Tablet und Handy. Keine Anmeldung, keine Cloud, keine kostenpflichtigen Dienste. Projekte bleiben lokal im Browser gespeichert oder werden als JSON-Datei exportiert.

## Funktionen

- Figuren mit Gelenken: per Code gezeichnete Figuren (Mensch, Bär) mit Editor sowie **gezeichnete Cut-out-Figuren** aus eigenen Teilebögen: **PS Peter**, **PS Bär**, **Sunny**, **Tom**, **KI-Mitbewohner** **Freuerbeatz** (Adler) und **PS Peter 3D**. PS Peter und PS Bär drehen sich beim Gehen und Reden automatisch ins Halbprofil (eigener Teilebogen `teilebogen-schraeg.png`)
- 15 Animationen, darunter Gehen, Laufen, Tanzen, Disco, Hüpfen, Jubeln, Klatschen, Winken, Zeigen, Sprechen, Lachen, Weinen, Erschrecken, Sitzen und eigene Posen
- Zeitleiste mit Spuren pro Figur, verschiebbaren Blöcken, Audiospuren und mehreren Szenen
- Audio-Import (MP3/WAV, z. B. aus ElevenLabs oder Suno) mit automatischer Mundbewegung
- Bühnen: Wohnzimmer, Park, Stadt, Bühne und Party, dazu eigene Hintergrundbilder, Gegenstände, Kamera und Film-Effekte
- Export als **MP4-Video** (Bild für Bild berechnet, mit korrekter Länge), als PNG und als JSON

## Aufbau

| Pfad | Inhalt |
|---|---|
| `index.html` | Das komplette Studio (eine Datei, funktioniert auch offline) |
| `figuren/<name>/teilebogen.png` | Original-Teilebögen der gezeichneten Figuren |
| `projekte/` | Beispielprojekte zum Öffnen über **Datei ▾ → JSON-Projekt öffnen** |
| `sw.js` | Entfernt den Offline-Speicher der früheren App aus diesem Repo |

## Eigene gezeichnete Figur hinzufügen

1. Einen Teilebogen auf reinem Grün (#00FF00) erstellen: Kopf ohne Augen und Mund, Augen, Brauen, 6 Münder, Oberkörper, Ober- und Unterarme, Hände (offen, Faust, zeigend), Hose, Ober- und Unterschenkel, Schuhe.
2. Den Bogen unter `figuren/<name>/teilebogen.png` ablegen.
3. Claude schneidet die Teile aus, setzt die Gelenkpunkte und trägt die Figur im Studio ein.

Die Wiedergabe erfolgt über GitHub Pages (`.github/workflows/static.yml`), sobald Änderungen auf `main` landen.
