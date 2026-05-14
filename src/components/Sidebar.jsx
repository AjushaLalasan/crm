function Sidebar() {
  const menuItems = [
    { label: "Dashboard", active: true },
    { label: "Customers", active: false },
    { label: "Properties", active: false },
    { label: "Leads", active: false },
  ];

  return (
    <aside className="hidden md:flex h-screen w-72 bg-slate-950 text-slate-100 shadow-xl fixed top-0 left-0 z-30">
      <div className="flex h-full flex-col px-6 py-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            Dealer CRM
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Control Center
          </h2>
        </div>

        <nav className="flex flex-1 flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                item.active
                  ? "bg-slate-800 text-white shadow-inner"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
