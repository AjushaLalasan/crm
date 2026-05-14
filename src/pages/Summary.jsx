import { useState } from "react";
import { getStoredCustomers } from "../data/customerStorage";

function Summary() {
  // const [customers, setCustomers] = useState([]);
  const [activeTab, setActiveTab] = useState("pending");

  const today = new Date().toISOString().split("T")[0];
  const [customers] = useState(() => getStoredCustomers());
  // useEffect(() => {
  //   setCustomers(getStoredCustomers());
  // }, []);

  // Helper
  const isToday = (date) => date === today;

  // Counts
  const leadPipelineCount = customers.length;

  const hotCustomersCount = customers.filter(
    (c) => c.status === "Searching",
  ).length;

  const pendingDecisionsCount = customers.filter(
    (c) => c.status === "Decision Pending - Positive",
  ).length;

  const todaysAgreementsCount = customers.filter(
    (c) => c.status === "Agreement" && isToday(c.agreementDate),
  ).length;

  const todaysSiteVisitsCount = customers.filter(
    (c) => c.status === "Property Visited" && isToday(c.visitDate),
  ).length;

  // Filtered Data
  const pendingDecisions = customers.filter(
    (c) => c.status === "Decision Pending - Positive",
  );

  const hotCustomers = customers.filter((c) => c.status === "Searching");

  const todaysAgreements = customers.filter(
    (c) => c.status === "Agreement" && isToday(c.agreementDate),
  );

  const todaysSiteVisits = customers.filter(
    (c) => c.status === "Property Visited" && isToday(c.visitDate),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          CRM Summary Dashboard
        </h2>

        <p className="mt-2 text-sm md:text-base text-slate-500">
          Overview of leads, customers, and today's activities.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Lead Pipeline
          </p>

          <p className="mt-4 text-4xl font-semibold">{leadPipelineCount}</p>
        </div>

        <div className="rounded-3xl bg-red-500 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-red-200">
            HOT Customers
          </p>

          <p className="mt-4 text-4xl font-semibold">{hotCustomersCount}</p>
        </div>

        <div className="rounded-3xl bg-yellow-500 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-100">
            Pending Decisions
          </p>

          <p className="mt-4 text-4xl font-semibold">{pendingDecisionsCount}</p>
        </div>

        <div className="rounded-3xl bg-green-500 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-green-100">
            Today's Agreements
          </p>

          <p className="mt-4 text-4xl font-semibold">{todaysAgreementsCount}</p>
        </div>

        <div className="rounded-3xl bg-blue-500 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-100">
            Today's Site Visits
          </p>

          <p className="mt-4 text-4xl font-semibold">{todaysSiteVisitsCount}</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        {/* Tabs */}
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("pending")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                activeTab === "pending"
                  ? "bg-yellow-500 text-white"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              }`}
            >
              Pending Decisions ({pendingDecisions.length})
            </button>

            <button
              onClick={() => setActiveTab("hot")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                activeTab === "hot"
                  ? "bg-red-500 text-white"
                  : "bg-red-100 text-red-700 hover:bg-red-200"
              }`}
            >
              HOT Customers ({hotCustomers.length})
            </button>

            <button
              onClick={() => setActiveTab("agreements")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                activeTab === "agreements"
                  ? "bg-green-500 text-white"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              Today's Agreements ({todaysAgreements.length})
            </button>

            <button
              onClick={() => setActiveTab("visits")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                activeTab === "visits"
                  ? "bg-blue-500 text-white"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              Today's Site Visits ({todaysSiteVisits.length})
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Pending */}
          {activeTab === "pending" && (
            <ResponsiveTable
              title="Pending Decisions"
              data={pendingDecisions}
              dateField="status"
            />
          )}

          {/* HOT */}
          {activeTab === "hot" && (
            <ResponsiveTable
              title="HOT Customers"
              data={hotCustomers}
              dateField="status"
            />
          )}

          {/* Agreements */}
          {activeTab === "agreements" && (
            <ResponsiveTable
              title="Today's Agreements"
              data={todaysAgreements}
              dateField="agreementDate"
            />
          )}

          {/* Visits */}
          {activeTab === "visits" && (
            <ResponsiveTable
              title="Today's Site Visits"
              data={todaysSiteVisits}
              dateField="visitDate"
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* Reusable Responsive Table */
function ResponsiveTable({ title, data, dateField }) {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
        {title}
      </h3>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-950 text-white">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Property</th>
              <th className="px-4 py-3">
                {dateField === "visitDate"
                  ? "Visit Date"
                  : dateField === "agreementDate"
                    ? "Agreement Date"
                    : "Status"}
              </th>
              <th className="px-4 py-3">Phone</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 bg-white">
            {data.map((customer) => (
              <tr
                key={customer.customerId}
                className="hover:bg-slate-50 transition"
              >
                <td className="px-4 py-4 font-medium text-slate-800">
                  {customer.customerId}
                </td>

                <td className="px-4 py-4 text-slate-700">{customer.name}</td>

                <td className="px-4 py-4 text-slate-700">
                  {customer.propertyName}
                </td>

                <td className="px-4 py-4 text-slate-700">
                  {customer[dateField]}
                </td>

                <td className="px-4 py-4 text-slate-700">{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:hidden">
        {data.map((customer) => (
          <div
            key={customer.customerId}
            className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-base font-semibold text-slate-900">
                  {customer.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  ID: {customer.customerId}
                </p>
              </div>

              <div className="grid gap-3 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Property
                  </p>

                  <p className="mt-1 text-slate-700">
                    {customer.propertyName || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {dateField === "visitDate"
                      ? "Visit Date"
                      : dateField === "agreementDate"
                        ? "Agreement Date"
                        : "Status"}
                  </p>

                  <p className="mt-1 text-slate-700">{customer[dateField]}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 text-slate-700">{customer.phone}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summary;
