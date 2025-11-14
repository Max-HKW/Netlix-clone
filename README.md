# Netflix Clone

Una semplice web-app clone di Netflix costruita con React e Redux, pensata come progetto didattico per mostrare l'integrazione con le API di TMDB (The Movie Database), routing, ricerca avanzata, pagine di dettaglio e persistenza dei preferiti.

## Descrizione

Questo progetto fornisce:
- Homepage con slider e sezioni di film/serie
- Pagine di categoria (`/movies`, `/tv`) che mostrano contenuti popolari
- Pagina dettagli (`/movie/:id` e `/tv/:id`) con informazioni complete e cast
- Ricerca (tramite barra nella navbar) che supporta ricerca via path (`/search/:query`) e query-string (`/search?q=...`) con suggerimenti in caso di errori
- Lista personale/Preferiti con persistenza in `localStorage` e possibilità di aggiungere/rimuovere elementi
- Layout condiviso con header/footer e pagina 404

## Tecnologie utilizzate

Le versioni sono quelle segnate in `package.json` al momento della creazione di questo README.

- Node.js / npm (usa la tua versione stabile; testato su Windows)
- Vite (dev server): ^7.1.7
- React: ^19.1.1
- React DOM: ^19.1.1
- react-router: ^7.9.5
- Redux Toolkit: ^2.10.1
- react-redux: ^9.2.0
- Tailwind CSS: ^4.1.17
- lucide-react (icone): ^0.553.0
- swiper (carousel): ^12.0.3
- clsx (utility classNames): ^2.1.1
- motion (animazioni leggere): ^12.23.24

DevDependencies principali:
- @vitejs/plugin-react: ^5.0.4
- eslint, prettier, tipi TypeScript per React (solo per sviluppo)

Nota: se preferisci altre versioni (es. React 18), aggiorna `package.json` e reinstalla.

## Variabili d'ambiente

Il progetto usa le API di TMDB con Bearer token tramite variabili d'ambiente (file `.env` nella root). Le variabili attese sono:

- VITE_TMDB_BASE_URL (es. https://api.themoviedb.org/3)
- VITE_TMDB_BEARER_TOKEN (token v4 di TMDB con prefisso Bearer)

Esempio :

```
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_BEARER_TOKEN=eyJhbGciOiJIUzI1NiJ9...
```

## Installazione e avvio (Windows / PowerShell)

1. Clona o copia il repository in una cartella locale.
2. Entra nella cartella del progetto e installa le dipendenze:

```powershell
cd .\Netlix-clone\
npm install
```

3. Crea un file `.env` con le variabili TMDB richieste (vedi sopra).

4. Avvia il server di sviluppo:

```powershell
npm run dev
```

Se la porta predefinita 5173 è occupata, Vite proporrà automaticamente una porta alternativa (es. 5174).

## API utilizzate

- The Movie Database (TMDB) — API v3/v4
- Documentazione ufficiale: https://developers.themoviedb.org/3

Il servizio TMDB è incapsulato in `src/services/tmdb.js` con metodi per: popular movies, top rated, trending, search, details e credits, e ora anche `getPopularTV()`.

## Scelte progettuali

- Routing: `react-router` (createBrowserRouter + RouterProvider)
  - Motivazione: fornisce routing dichiarativo, route dinamiche, nested routes e l'`<Outlet />` per layout condivisi. È usato per avere una struttura chiara (RootLayout, children routes, wildcard 404, ecc.).

- Stato globale: Redux Toolkit (`@reduxjs/toolkit`) invece della Context API
  - Perché Redux/RTK:
    - Stato dei preferiti è condiviso in più punti dell'app (header badge, pagina preferiti, details page) ed è utile avere azioni/selector ben definite.
    - RTK semplifica la scrittura dei reducer, fornisce immutabilità interna e middleware pronti.
    - Facilita la persistenza (salvataggio su `localStorage`) centralizzata nello slice.
  - Context API sarebbe adatto per stato meno complesso o per temi/localizzazione; ho scelto Redux per scalabilità e convenzione didattica.

- Persistenza: `localStorage` per la lista preferiti
  - Implementato in `src/features/favourites/favouritesSlice.js` (load + save automatico). Non richiede backend.

- Librerie esterne rilevanti:
  - Tailwind CSS: rapido sviluppo di UI responsive con utility classes.
  - lucide-react: set di icone moderne e leggere.
  - swiper: per slider/carousel nella homepage.
  - motion: micro-animazioni UI
  - clsx: gestione condizionale delle classi CSS

## Routing principale (mappa delle rotte)

- `/` – Homepage
- `/movies` o `/tv` – Pagine di categoria (gestite da route dinamica `:category`)
- `/movie/:id` e `/tv/:id` – Pagine di dettaglio (gestite da `:type/:id`)
- `/search/:query` o `/search?q=...` – Risultati di ricerca
- `/my-list` e `/favourites` – Lista preferiti (alias)
- `*` – Pagina 404 (NotFound)

## Funzionalità principali implementate

- Ricerca con suggerimenti (fuzzy fallback) se non ci sono risultati esatti
- Pagine di dettaglio con backdrop, poster, trama, cast/crew e metadata
- Aggiunta/rimozione preferiti da DetailsPage e dalla pagina `My List`
- Badge nel header con numero preferiti aggiornato in tempo reale
- Persistenza preferiti su `localStorage`

## Come testare le feature principali

1. Ricerca: clicca l'icona lente nella navbar, digita e conferma. Oppure visita `/search?q=term` o `/search/term`.
2. Aggiungi preferiti: vai su una dettagli page e clicca il cuore. Apri `/my-list` o clicca l'icona bookmark nella navbar per verificare.
3. Rimuovi preferiti: dalla pagina `My List` clicca la X in alto a destra di una card o clicca di nuovo il cuore nella DetailsPage.

## Problemi noti / Limitazioni

- Le versioni nel `package.json` (es. React ^19.x) rispecchiano lo stato del progetto: se incontri problemi di compatibilità, aggiorna le versioni a quelle stabili (es. React 18.x) e reinstalla.
- L'app non dispone di backend: tutte le informazioni persistono solo in `localStorage` del browser.
- La gestione delle ricerche "fuzzy" è elementare (fallback rimuovendo l'ultimo carattere). Per una correzione ortografica robusta servirebbe un algoritmo di fuzzy matching (fuzzysearch, Fuse.js) o una endpoint dedicato.
- Alcune traduzioni/etichette sono in italiano; parti del dataset TMDB potrebbero avere contenuti in altre lingue.

