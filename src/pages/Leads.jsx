function Leads() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          Leads
        </h2>
        <p className="mt-2 text-sm text-slate-500 md:text-base">
          Monitor active leads and follow up on high-priority opportunities.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Active leads
          </p>
          <p className="mt-4 text-4xl font-semibold">86</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Hot contacts</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900">23</p>
        </div>
      </div>
    </div>
  );
}

export default Leads;
