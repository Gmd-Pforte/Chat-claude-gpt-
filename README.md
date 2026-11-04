# PS Cartoon Studio

Ein kostenloses 2D-Zeichentrickstudio im Browser von **PS AI MUSIC**, entwickelt von Peter zusammen mit ChatGPT und Claude.

**Direkt öffnen:** https://gmd-pforte.github.io/Chat-claude-gpt-/

Läuft am PC, Tablet und Handy. Keine Anmeldung, keine Cloud, keine kostenpflichtigen Dienste. Projekte bleiben lokal im Browser gespeichert oder werden als JSON-Datei exportiert.

## Funktionen

- Figuren mit Gelenken: per Code gezeichnete Figuren (Mensch, Bär) mit Editor sowie **gezeichnete Cut-out-Figuren** aus eigenen Teilebögen: **PS Peter** (neu, aus Teilebogen + Gesichtsbogen mit Kappe, Brille und Schnurrbart als eigene Ebenen, Augen schauen in Blickrichtung, 8 Münder), **PS Peter (klassisch)**, **PS Bär**, **Sunny**, **Tom**, **KI-Mitbewohner** **Freuerbeatz** (Adler) und **PS Peter 3D**. PS Peter und PS Bär drehen sich beim Gehen und Reden automatisch ins Halbprofil (eigener Teilebogen `teilebogen-schraeg.png`)
- **Flacher 2.5D-Bewegungsstil** (im Stil von Papier-Cut-out-Serien): Der neue PS Peter bewegt sich wie eine flache Figur – Körper wippt und kippt, kurze Beine heben die Füße, Arme bleiben fast gerade. Pro Figur umschaltbar unter **Bearbeiten → Bewegungsstil** (flach / Gelenke). Beispiel: `projekte/peter-2-5d-beispiel.json`
- 20 Animationen, darunter Gehen, Laufen, Tanzen, Disco, Hüpfen, Springen (mit Ausholen), Jubeln, Klatschen, Winken, Zeigen, Peace, Daumen hoch, Zählen 1–5, Nachdenken, Sprechen, Lachen, Weinen, Erschrecken, Sitzen und eigene Posen. Der Skelett-Peter macht dabei echte Fingergesten, greift ans Kinn, zwinkert und schwingt beim Gehen die Arme nach vorn
- Zeitleiste mit Spuren pro Figur, verschiebbaren Blöcken, Audiospuren und mehreren Szenen
- Audio-Import (MP3/WAV, z. B. aus ElevenLabs oder Suno) mit automatischer Mundbewegung
- **Live-Avatar (🎙 Live):** Figuren auswählen, mit Knöpfen steuern (Winken, Lachen, Tanzen, Laufen …) und per Mikrofon sprechen lassen – der Mund folgt der Stimme. Aufnahme als Video oder direkt als bearbeitbare Szene mit Stimme ins Projekt (danach sauber als MP4 exportierbar). Tastatur: ←/→ laufen, 1–9 Aktionen
- **Figuren reagieren auf Musik:** Das Studio erkennt Tempo (BPM), Taktschläge, Lautstärke und Bass. Figuren wippen und nicken im Takt, Tänze rasten auf den Beats ein, laute Stellen werden wilder (abschaltbar pro Szene und pro Figur)
- **Musikvideo aus jedem Song:** Datei ▾ → „Musikvideo aus deinem Song“ – Song wählen, das Studio teilt ihn in ruhige, groovige und laute Teile und baut daraus Szenen mit Choreografie im Takt (quer oder hochkant)
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

Unter **/25d/** (oder über den Knopf **2.5D** im Studio) läuft die 2.5D-Ausgabe des Studios. Sie kann alles, was das 2D-Studio kann (Zeitleiste, Szenen, Audio mit Mundbewegung, MP4-Export, Hochkant, Handy-Ansicht), mit eigenem Projektspeicher.

- **Skelett-System**: PS Peter (Zeichentrick) läuft an einem Skelett mit biegsamer Wirbelsäule, weichen Hoodie-Ärmeln, Händen mit fünf Fingern (je 3 Glieder) und federnden Gelenken, die nachschwingen. Handformen ergeben sich aus der Bewegung (Winken = offen, Zeigen = Zeigefinger …). Eigenständige Demo mit Pose-Editor: `demos/peter-skelett.html`. Sunny und PS Bär haben ebenfalls weiche Hoodie-Ärmel und Hände mit fünf federnden Fingern (in Hautfarbe bzw. Bärenpfote), Freuerbeatz Federfinger an den Flügeln.
- **PS Peter (Zeichentrick)**: direkt aus einem einzigen fertigen Bild gebaut (`figuren/ps-peter-zeichentrick/referenz.png`) – das Bild wird in Ebenen zerlegt (Kopf, Hoodie, Arme, Jeans, Schuhe, Brauen), verdeckte Stellen werden aufgefüllt, Pupillen, Lider und Münder werden im Stil des Bildes live gezeichnet. Sieht aus wie das Original und kann alle Bewegungen.
- Figuren: die neuen 2.5D-Figuren **PS Peter (Teilebogen)**, **Freuerbeatz**, **Sunny** und **PS Bär** (Bögen in `figuren/*-neu/`), Standard-Stil ist **weich**: Arme biegen sich wie Gummischläuche, gemeinsame Außenlinie um die ganze Figur, Sunnys Ohren und Haare schwingen nach (umschaltbar unter Bewegungsstil: weich / flach / Gelenke). Weitere Figuren kommen nach und nach dazu.
- **Musikvideo per Knopf:** Datei ▾ → „Musikvideo EINS ZWEI DREI VIER“, Song auswählen – es entstehen 7 Szenen (Kleinstadt, Party mit der ganzen Crew inkl. Freuerbeatz, Bühne) im Takt von 152 BPM, quer oder hochkant. Der Song liegt nicht im Repo.
- Startet mit dem Beispiel „Peter 2.5D“ (Kleinstadt + Party).

## 3D-Studio (Beta)

Unter **/3d/** (oder über den Knopf **3D** im Studio) läuft das 3D-Studio mit Three.js:

- **PS Peter 3D**: aus den Modellblättern in `figuren/ps-peter-3d/` gebaut (Formen aus den Umrissen, Farben aus den Zeichnungen projiziert), mit Skelett, Skinning, Toon-Shading und beweglichem Gesicht
- Gehen und Laufen mit Fuß-IK, Drehen, Hinsetzen, Gesten, Gesichtsausdrücke, Stimme mit Mundbewegung, frei drehbare Kamera
- **Musikvideo** zu „EINS ZWEI DREI VIER“: Tänze im Takt (152 BPM), Party-Bühne, Kamera-Schnitte nach Songteilen. Der Song liegt nicht im Repo; er wird beim ersten Start ausgewählt und im Browser gemerkt.
- `3d/three.min.js` ist Three.js r128 (MIT-Lizenz), lokal mitgeliefert, damit das Studio auch offline läuft.

Neue 3D-Figuren brauchen ein Modellblatt (Vorder-, Seiten- und Rückansicht in T-Pose) und ein Kopf-Detailblatt auf grünem Hintergrund.
