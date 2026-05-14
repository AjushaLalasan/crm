import { useEffect, useState } from "react";
import { getStoredCustomers } from "../data/customerStorage";

function Summary() {
  const [customers, setCustomers] = useState([]);
  const [activeTab, setActiveTab] = useState("pending");
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  useEffect(() => {
    setCustomers(getStoredCustomers());
  }, []);

  // Helper functions
  const isToday = (date) => date === today;

  // Counts for cards
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

  // Filtered data for tables
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
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          CRM Summary Dashboard
        </h2>
        <p className="mt-2 text-sm text-slate-500 md:text-base">
          Overview of leads, customers, and today's activities.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Lead Pipeline
          </p>
          <p className="mt-4 text-4xl font-semibold">{leadPipelineCount}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-red-500 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-red-200">
            HOT Customers
          </p>
          <p className="mt-4 text-4xl font-semibold">{hotCustomersCount}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-yellow-500 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-200">
            Pending Decisions
          </p>
          <p className="mt-4 text-4xl font-semibold">{pendingDecisionsCount}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-green-500 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-green-200">
            Today’s Agreements
          </p>
          <p className="mt-4 text-4xl font-semibold">{todaysAgreementsCount}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-blue-500 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
            Today’s Site Visits
          </p>
          <p className="mt-4 text-4xl font-semibold">{todaysSiteVisitsCount}</p>
        </div>
      </div>

      {/* Tables */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("pending")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                activeTab === "pending"
                  ? "bg-yellow-500 text-white shadow-inner"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              }`}
            >
              Pending Decisions ({pendingDecisions.length})
            </button>
            <button
              onClick={() => setActiveTab("hot")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                activeTab === "hot"
                  ? "bg-red-500 text-white shadow-inner"
                  : "bg-red-100 text-red-700 hover:bg-red-200"
              }`}
            >
              HOT Customers ({hotCustomers.length})
            </button>
            <button
              onClick={() => setActiveTab("agreements")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                activeTab === "agreements"
                  ? "bg-green-500 text-white shadow-inner"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              Today’s Agreements ({todaysAgreements.length})
            </button>
            <button
              onClick={() => setActiveTab("visits")}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                activeTab === "visits"
                  ? "bg-blue-500 text-white shadow-inner"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              Today’s Site Visits ({todaysSiteVisits.length})
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === "pending" && (
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Pending Decisions
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-4 py-3">Customer ID</th>
                      <th className="px-4 py-3">Customer Name</th>
                      <th className="px-4 py-3">Property Name</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Phone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {pendingDecisions.map((customer) => (
                      <tr key={customer.customerId}>
                        <td className="px-4 py-4 font-medium text-slate-800">
                          {customer.customerId}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.name}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.propertyName}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.status}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.phone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "hot" && (
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                HOT Customers
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-4 py-3">Customer ID</th>
                      <th className="px-4 py-3">Customer Name</th>
                      <th className="px-4 py-3">Property Name</th>
                      <th className="px-4 py-3">Phone</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {hotCustomers.map((customer) => (
                      <tr key={customer.customerId}>
                        <td className="px-4 py-4 font-medium text-slate-800">
                          {customer.customerId}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.name}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.propertyName}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.phone}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "agreements" && (
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Today’s Agreements
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-4 py-3">Customer ID</th>
                      <th className="px-4 py-3">Customer Name</th>
                      <th className="px-4 py-3">Property Name</th>
                      <th className="px-4 py-3">Agreement Date</th>
                      <th className="px-4 py-3">Phone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {todaysAgreements.map((customer) => (
                      <tr key={customer.customerId}>
                        <td className="px-4 py-4 font-medium text-slate-800">
                          {customer.customerId}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.name}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.propertyName}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.agreementDate}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.phone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "visits" && (
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Today’s Site Visits
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-4 py-3">Customer ID</th>
                      <th className="px-4 py-3">Customer Name</th>
                      <th className="px-4 py-3">Property Name</th>
                      <th className="px-4 py-3">Visit Date</th>
                      <th className="px-4 py-3">Phone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {todaysSiteVisits.map((customer) => (
                      <tr key={customer.customerId}>
                        <td className="px-4 py-4 font-medium text-slate-800">
                          {customer.customerId}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.name}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.propertyName}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.visitDate}
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {customer.phone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Summary;
