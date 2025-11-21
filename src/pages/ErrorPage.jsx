
export default function ErrorPage({ statusCode = 404, message = "Pagina non trovata", homeHref = "/" }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative">
      {/* Sfondo rosso glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[500px] h-[500px] bg-red-800/30 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center space-y-4 max-w-xl">
        <h1 className="text-7xl font-extrabold tracking-tight drop-shadow-xl text-red-600">{statusCode}</h1>
        <p className="text-xl text-white/80 font-light">{message}</p>
      </div>

      {/* Card centrale */}
      <div className="mt-10 bg-white/5 border border-white/10 p-8 rounded-xl max-w-md w-full shadow-xl backdrop-blur-md text-center space-y-6">
        <h2 className="text-lg font-semibold">Problema di caricamento</h2>
        <p className="text-sm text-white/70">
          Non riusciamo a mostrare questa pagina al momento. Potrebbe essere un errore temporaneo.
        </p>

        {/* Pulsanti */}
        <div className="flex items-center justify-center gap-3 pt-3">
          <button
            className="px-4 py-2 rounded-md bg-red-700 hover:bg-red-600 transition font-medium"
          >
            Riprova
          </button>

          <a
            href={homeHref}
            className="px-4 py-2 rounded-md border border-white/20 hover:bg-white/10 transition font-medium"
          >
            Home
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} StreamCorp — Tutti i diritti riservati
      </footer>
    </div>
  );
}
