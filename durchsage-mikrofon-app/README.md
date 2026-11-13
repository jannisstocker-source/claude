# Durchsage-Mikrofon

Web-App fürs Handy: Man spricht ins Handy, und es klingt wie eine Lautsprecher-Durchsage.
Es gibt einen Gong vorab, fünf Klänge (Durchsage, Megafon, Stadion, Funkgerät, Nur lauter) und einen Lautstärke-Boost.

## Bedienung
- **Großen Knopf gedrückt halten, sprechen, loslassen.** Dann wird die Ansage mit Effekt abgespielt.
- Alternativ einmal **tippen** zum Starten und nochmal tippen zum Beenden.
- „Nochmal abspielen“ wiederholt die letzte Ansage.
- **Live-Modus** nur mit Bluetooth-Box oder Kopfhörern. Über den Handy-Lautsprecher pfeift es sonst.

## Warum nicht live über das Handy selbst?
Wenn Mikrofon und Lautsprecher im selben Handy stecken, nimmt das Mikro den eigenen Lautsprecher wieder auf.
Das gibt eine Rückkopplung und es pfeift. Deshalb heißt es: erst sprechen, dann abspielen.

## Auf dem Handy öffnen
Das Mikrofon funktioniert im Browser nur über **https://**. Als heruntergeladene Datei geht es nicht.
Am einfachsten über GitHub Pages:

1. Den Branch nach `main` mergen.
2. Im Repo **Settings → Pages**, unter „Source“ *Deploy from a branch*, Branch `main` und Ordner `/ (root)` wählen.
3. Nach ein bis zwei Minuten ist die App erreichbar unter
   `https://<github-name>.github.io/<repo-name>/durchsage-mikrofon-app/`
4. Den Link auf dem Handy öffnen, das Mikrofon erlauben und im Browser-Menü **„Zum Home-Bildschirm“** wählen.

Hinweis: GitHub Pages ist kostenlos nur für öffentliche Repos. Bei einem privaten Repo geht auch
[Netlify Drop](https://app.netlify.com/drop): den Ordner hineinziehen und den Link aufs Handy schicken.

## Tipps für den Auftritt
- Medien-Lautstärke ganz hoch drehen, beim iPhone den Lautlos-Schalter aus.
- Handy in ein Glas oder eine Tasse stellen. Das wirkt wie ein Trichter und macht es hörbar lauter.
- Vorher einmal mit dem gewählten Klang ausprobieren.
