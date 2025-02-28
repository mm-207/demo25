# Familie API

Dette er et CRUD-basert API for å håndtere et familietre.

## Endpoints:
- **GET /family** - Henter alle medlemmer
- **POST /family** - Legger til et nytt familiemedlem
- **PUT /family/:id** - Oppdaterer et medlem
- **DELETE /family/:id** - Sletter et medlem

##  Deployment:
Applikasjonen kjører live på [Render](http://localhost:3000/family) 🎉

##  Testing med Postman:
1. Importer `postman/postman_collection.json` i Postman.
2. Send requests for å teste API-et.

-------------------------------------------------------------------------

# Min Progressive Web App (PWA)

Dette prosjektet er en Express-basert API som nå støtter PWA.

## 📌 URL til appen (hostet på Render)
🔗 [https://mittprosjekt.onrender.com](https://mittprosjekt.onrender.com)

## 🔹 Hvordan fungerer PWA?
- **Service Worker** håndterer caching og offline-støtte.
- **Manifest.json** gir metadata for installasjon på enheter.
- **Express-server** leverer statiske filer.

## 🛠 Hvordan teste?
1. Åpne `https://mittprosjekt.onrender.com`
2. Åpne **DevTools (F12)** → **Application** → **Service Workers**
3. Aktiver "Offline", oppdater siden og se at innholdet lastes fra cachen.
