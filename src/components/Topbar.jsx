function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/95 border-b border-slate-200 backdrop-blur-xl">
      <div className="mx-auto flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
            Dealer CRM
          </p>
          <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100"
            aria-label="Notifications"
          >
            <span className="text-lg">🔔</span>
          </button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm transition hover:bg-slate-800"
            aria-label="User profile"
          >
            <span className="text-sm font-semibold">A</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
