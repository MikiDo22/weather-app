# Weather App
Eine webanwendung zur Echtzeit-Weterabfrage über die OpenweatherMap-API.
Der nutzer gibt eine Stade ein und erhält Temperatur, luftfeuchtigkeit, Windgeschwindigkeit sowie einpassende Wetter-Icon.

##Technologien
- HTML
- CSS
- JavaScript (Fetch API, async/await)
- OpenWeatherMap Rest API

## Features
- weatherabfrage in Echtzeit nach Städtenamen
- Anzeige von Temperatur, Luftfeutchtigkeit und Windgeschwindigkeit
- Dynamisches Wetter-_con je nach Wetterlsge.
- Fehlerbehandlung bei leerer Eingabe und unbekannter Stadt (Status 404)

## Herasuforderung and Lösung
Die OpenWeatherMap-Api liefert ihre Daten asynchron. EinProblem war, dass die oberfläche aktualisiert werden sollte, bevore
die Antwort vollständig geladen war.Gelöst habe ich das mit async/await, await fetch und await response.json() wartet die Funktion aufdie Daten, bevoresie die Wetre
in die Oberfläche schreibt.
## Setup
1 Repository Klonen
2 Einen kostenlosen API-Key bei OpenWeatherMap erstellen.
3 Den key in index.js bei const apikey eintragen.
4 index.html in Browser öffnen.
## Live Demo
[https://mikido22.github.io/weather-app/](https://mikido22.github.io/weather-app/)
