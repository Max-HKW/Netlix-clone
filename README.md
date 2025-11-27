# 🎬  Netflix-Style App  
_React • React Router • Redux Toolkit • Clerk • TMDB API_

Piattaforma ispirata a **Netflix**, realizzata con un'architettura moderna, scalabile e professionale.  
Offre autenticazione completa tramite **Clerk**, gestione avanzata dello stato globale con **Redux Toolkit**, interfaccia responsiva in stile Netflix e integrazione con la **TMDB API** per film e serie TV.

---

# 🚀 Tecnologie principali

| Tecnologia | Descrizione |
|-----------|-------------|
| **React + Vite** | SPA moderna e super veloce |
| **React Router 7 (Object Routes)** | Routing avanzato, nested routes, layout multipli |
| **Redux Toolkit** | Stato globale modulare, efficiente e scalabile |
| **Clerk Auth** | Login/Sign-up professionale con redirect e pagine protette |
| **TMDB API** | Contenuti film/serie in tempo reale |
| **TailwindCSS** | UI veloce, responsive e moderna |
| **CSS Modules** | Personalizzazione stile Clerk |
| **Lucide Icons** | Icone moderne |

---

# ⭐ Funzionalità principali del progetto

## 🔐 Autenticazione Clerk (professionale e sicura)
- Login e registrazione tramite hosted UI di Clerk

- Protezione automatica delle rotte tramite

- Redirect automatico verso /home dopo il login

- Layout dedicato (AuthLayout) per le schermate non autenticate

## 🧭 Routing strutturato (React Router Object API)

- Dichiarazione delle route tramite oggetti (moderno e scalabile)

- Layout multipli:

  - AuthLayout → Landing + Login

  - RootLayout → con Header + Footer

- Rotte protette

- ErrorBoundary personalizzato

- Nested routes per film e serie

- Redirect automatico verso /home dopo il login

- Layout dedicato (AuthLayout) per le schermate non autenticate

## 🧭 Routing strutturato (React Router Object API)

Dichiarazione delle route tramite oggetti (moderno e scalabile)

Layout multipli:

 - AuthLayout → Landing + Login

 - RootLayout → con Header + Footer

Rotte protette

ErrorBoundary personalizzato

Nested routes per film e serie

```
/
├── LandingPage (pubblica)
├── login (pubblica)
└── home (protetta)
    ├── film
    │   ├── index
    │   └── :id
    ├── serie-tv
    │   ├── index
    │   └── :id
    └── preferiti
```

## 🏛️ Redux Toolkit (Store Globale)
### 📌 Features:

- moviesSlice

- tvSlice

- searchSlice

- favoritesSlice

- detailSlice

Thunk asincroni per chiamate TMDB

Stato di caricamento e errore gestito

Persistenza preferiti con localStorage

## 🎨 UI Stile Netflix

- Hero Banner dinamico

- Sfondo preso dal film del momento

- Titolo, overview e pulsanti in stile Netflix

- Slider orizzontali (film & serie)

- Animazioni smooth

- Hover effects

- Scorrimento fluido tipo Netflix

- Scrollbar personalizzata

- Stile minimal, scura, arrotondata

- Header interattivo

- Search bar con suggerimenti dinamici

- Completamente navigabile con tastiera (freccia su/giù + enter)

## 🔍 Ricerca Avanzata

- searchSlice + Redux Thunk

- Endpoint TMDB /search/multi

### Funzionalità

- Suggerimenti dinamici

- Debounce input

- Navigazione via tastiera

- Risultati misti (Film + Serie TV)

- Supporto a Enter, Escape e click esterni

## ❤️ Watchlist (Preferiti)

- Gestita tramite Redux Toolkit + LocalStorage

### Funzionalità:

- Aggiunta e rimozione contenuti

- Sincronizzazione automatica

- Pagina dedicata /preferiti

- Icone dinamiche nelle card

## 🎬 TMDB API Integrata
### Endpoint principali:

- movie/popular

- movie/top_rated

- movie/upcoming

- tv/popular

- search/multi

- movie/{id}

- tv/{id}

## 🔧 Setup del progetto
1️⃣ Clona il repository
```
 git clone git@github.com:Max-HKW/Netlix-clone.git

 cd Netlix-clone

```

2️⃣ Installa le dipendenze

```
npm install

```

3️⃣ Configura le variabili d'ambiente

Crea un file .env nella root con:

```
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_API_KEY=INSERISCI_LA_TUA_API_KEY
VITE_TMDB_BEARER_TOKEN=INSERISCI_IL_TUO_BEARER_TOKEN
VITE_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXX
CLERK_SIGN_IN_FORCE_REDIRECT_URL=/home

```

4️⃣ Avvia il server locale

```
npm run dev

```
