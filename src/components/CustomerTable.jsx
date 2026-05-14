import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

function CustomerTable({
  customers,
  emptyMessage = "No customers found.",
  onView,
  onEdit,
  onDelete,
}) {
  if (!customers.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-12 text-center text-slate-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="hidden md:block overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm md:text-base">
          <thead className="bg-slate-950 text-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left font-semibold uppercase tracking-[0.18em]"
              >
                Customer ID
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left font-semibold uppercase tracking-[0.18em]"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left font-semibold uppercase tracking-[0.18em]"
              >
                Phone
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left font-semibold uppercase tracking-[0.18em]"
              >
                Bedrooms
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left font-semibold uppercase tracking-[0.18em]"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left font-semibold uppercase tracking-[0.18em]"
              >
                Budget
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left font-semibold uppercase tracking-[0.18em]"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {customers.map((customer) => (
              <tr key={customer.customerId} className="hover:bg-slate-50">
                <td className="whitespace-nowrap px-6 py-4 text-slate-900">
                  {customer.customerId}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-slate-900">
                  {customer.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                  {customer.phone}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                  {customer.preferredBedrooms || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                  {customer.preferredLocation || "-"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                  {customer.budget || "-"}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => onView?.(customer)}
                      className="rounded-lg bg-emerald-600 p-2 text-white transition hover:bg-emerald-700"
                      title="View"
                    >
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onEdit?.(customer)}
                      className="rounded-lg bg-amber-400 p-2 text-slate-900 transition hover:bg-amber-500"
                      title="Edit"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete?.(customer.customerId)}
                      className="rounded-lg bg-rose-500 p-2 text-white transition hover:bg-rose-600"
                      title="Delete"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {customers.map((customer) => (
          <div
            key={customer.customerId}
            className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-col gap-3 text-sm text-slate-700 sm:text-base">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {customer.name}
                  </p>
                  <p className="mt-1 text-slate-600">{customer.phone}</p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Bedrooms
                  </p>
                  <p className="mt-1 text-slate-700">
                    {customer.preferredBedrooms || "-"}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Location
                  </p>
                  <p className="mt-1 text-slate-700">
                    {customer.preferredLocation || "-"}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Budget
                  </p>
                  <p className="mt-1 text-slate-700">
                    {customer.budget || "-"}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => onView?.(customer)}
                className="flex-1 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
                title="View"
              >
                <EyeIcon className="mx-auto h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => onEdit?.(customer)}
                className="flex-1 rounded-2xl bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-500"
                title="Edit"
              >
                <PencilIcon className="mx-auto h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => onDelete?.(customer.customerId)}
                className="flex-1 rounded-2xl bg-rose-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-rose-600"
                title="Delete"
              >
                <TrashIcon className="mx-auto h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerTable;
