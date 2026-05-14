import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Summary", to: "/summary" },
  { label: "Customers", to: "/customers" },
  { label: "Property List", to: "/properties/list" },
  { label: "Add Property", to: "/properties/add" },
  { label: "Leads", to: "/leads" },
];

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 md:flex">
      <aside className="hidden md:flex md:w-72 md:min-h-screen md:flex-col md:fixed md:left-0 md:top-0 md:bottom-0 bg-white border-r border-slate-200 shadow-sm px-4 py-6">
        <div className="mb-8">
          <span className="text-lg font-semibold">🏡Property Kochi</span>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `w-full block rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow-inner"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 md:ml-72 min-h-screen overflow-y-auto bg-slate-50">
        <div className="sticky top-0 z-20 bg-slate-50 border-b border-slate-200 px-4 py-4 shadow-sm sm:px-6 sm:py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 md:text-sm">
                WBC Real Estate CRM
              </p>
              <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Dealer CRM Dashboard
              </h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 sm:px-5 sm:py-3">
                New Lead
              </button>
              <div className="rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm sm:px-5 sm:py-3">
                Aswin Karthik
              </div>
            </div>
          </div>

          <div className="mt-4 md:hidden">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <section className="p-4 sm:p-6">{children}</section>
      </main>
    </div>
  );
}

export default MainLayout;
