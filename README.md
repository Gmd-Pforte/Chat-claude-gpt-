# PS Cartoon Studio

Ein kostenloses 2D-Zeichentrickstudio im Browser von **PS AI MUSIC**, entwickelt von Peter zusammen mit ChatGPT und Claude.

**Direkt öffnen:** https://gmd-pforte.github.io/Chat-claude-gpt-/

Läuft am PC, Tablet und Handy. Keine Anmeldung, keine Cloud, keine kostenpflichtigen Dienste. Projekte bleiben lokal im Browser gespeichert oder werden als JSON-Datei exportiert.

## Funktionen

- Figuren mit Gelenken: per Code gezeichnete Figuren (Mensch, Bär) mit Editor sowie **gezeichnete Cut-out-Figuren** aus eigenen Teilebögen: **PS Peter** (neu, aus Teilebogen + Gesichtsbogen mit Kappe, Brille und Schnurrbart als eigene Ebenen, Augen schauen in Blickrichtung, 8 Münder), **PS Peter (klassisch)**, **PS Bär**, **Sunny**, **Tom**, **KI-Mitbewohner** **Freuerbeatz** (Adler) und **PS Peter 3D**. PS Peter und PS Bär drehen sich beim Gehen und Reden automatisch ins Halbprofil (eigener Teilebogen `teilebogen-schraeg.png`)
- **Flacher 2.5D-Bewegungsstil** (im Stil von Papier-Cut-out-Serien): Der neue PS Peter bewegt sich wie eine flache Figur – Körper wippt und kippt, kurze Beine heben die Füße, Arme bleiben fast gerade. Pro Figur umschaltbar unter **Bearbeiten → Bewegungsstil** (flach / Gelenke). Beispiel: `projekte/peter-2-5d-beispiel.json`
- 15 Animationen, darunter Gehen, Laufen, Tanzen, Disco, Hüpfen, Jubeln, Klatschen, Winken, Zeigen, Sprechen, Lachen, Weinen, Erschrecken, Sitzen und eigene Posen
- Zeitleiste mit Spuren pro Figur, verschiebbaren Blöcken, Audiospuren und mehreren Szenen
- Audio-Import (MP3/WAV, z. B. aus ElevenLabs oder Suno) mit automatischer Mundbewegung
- Bühnen: Wohnzimmer, Park, Stadt, Kleinstadt, Bühne und Party, dazu eigene Hintergrundbilder, Gegenstände, Kamera und Film-Effekte
- Export als **MP4-Video** (Bild für Bild berechnet, mit korrekter Länge), als PNG und als JSON

## Aufbau

| Pfad | Inhalt |
|---|---|
| `index.html` | Das komplette Studio (eine Datei, funktioniert auch offline) |
| `25d/index.html` | Das 2.5D-Studio |
| `figuren/<name>/teilebogen.png` | Original-Teilebögen der gezeichneten Figuren |
| `projekte/` | Beispielprojekte zum Öffnen über **Datei ▾ → JSON-Projekt öffnen** |
| `sw.js` | Entfernt den Offline-Speicher der früheren App aus diesem Repo |

## Eigene gezeichnete Figur hinzufügen

1. Einen Teilebogen auf reinem Grün (#00FF00) erstellen: Kopf ohne Augen und Mund, Augen, Brauen, 6 Münder, Oberkörper, Ober- und Unterarme, Hände (offen, Faust, zeigend), Hose, Ober- und Unterschenkel, Schuhe.
2. Den Bogen unter `figuren/<name>/teilebogen.png` ablegen.
3. Claude schneidet die Teile aus, setzt die Gelenkpunkte und trägt die Figur im Studio ein.

Die Wiedergabe erfolgt über GitHub Pages (`.github/workflows/static.yml`), sobald Änderungen auf `main` landen.

## 2.5D-Studio (neu)

Unter **/25d/** (oder über den Knopf **2.5D** im Studio) läuft die neue 2.5D-Ausgabe des Studios: dieselben Funktionen wie das 2D-Studio (Zeitleiste, Szenen, Audio, MP4-Export, Hochkant), aber nur mit den neuen flachen Figuren im South-Park-ähnlichen Bewegungsstil. Sie hat einen eigenen Projektspeicher und startet mit dem Beispiel „Peter 2.5D“ (Kleinstadt + Party).

## 3D-Studio (Beta)

Unter **/3d/** (oder über den Knopf **3D** im Studio) läuft das 3D-Studio mit Three.js:

- **PS Peter 3D**: aus den Modellblättern in `figuren/ps-peter-3d/` gebaut (Formen aus den Umrissen, Farben aus den Zeichnungen projiziert), mit Skelett, Skinning, Toon-Shading und beweglichem Gesicht
- Gehen und Laufen mit Fuß-IK, Drehen, Hinsetzen, Gesten, Gesichtsausdrücke, Stimme mit Mundbewegung, frei drehbare Kamera
- **Musikvideo** zu „EINS ZWEI DREI VIER“: Tänze im Takt (152 BPM), Party-Bühne, Kamera-Schnitte nach Songteilen. Der Song liegt nicht im Repo; er wird beim ersten Start ausgewählt und im Browser gemerkt.
- `3d/three.min.js` ist Three.js r128 (MIT-Lizenz), lokal mitgeliefert, damit das Studio auch offline läuft.

Neue 3D-Figuren brauchen ein Modellblatt (Vorder-, Seiten- und Rückansicht in T-Pose) und ein Kopf-Detailblatt auf grünem Hintergrund.
