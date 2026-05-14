function ViewCustomerModal({ open, customer, onClose }) {
  if (!open || !customer) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 px-4 py-6 sm:px-6 sm:py-8">
      <div
        className="mx-auto w-full max-w-lg rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-slate-200 sm:p-8 sm:max-w-xl md:max-w-2xl overflow-hidden overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 3rem)" }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Customer Details
            </h2>
            <p className="mt-1 text-sm text-slate-500 md:text-base">
              Read-only customer profile information.
            </p>
          </div>
          <button
            type="button"
            className="ml-auto rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="space-y-8 text-sm text-slate-700 sm:text-base">
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              👤 Personal Information
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                ["Customer ID", customer.customerId],
                ["Name", customer.name],
                ["Phone", customer.phone],
                ["Profession", customer.profession || "-"],
                ["Email", customer.email || "-"],
                ["Age", customer.age || "-"],
                ["Marital Status", customer.maritalStatus || "-"],
                ["Family Members", customer.familyMembers || "-"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 whitespace-pre-wrap">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              🏠 Property Requirements
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                ["Customer Type", customer.customerType || "-"],
                ["Purpose", customer.purpose || "-"],
                [
                  "Preferred Property Type",
                  customer.preferredPropertyType || "-",
                ],
                ["Preferred Bedrooms", customer.preferredBedrooms || "-"],
                ["Budget", customer.budget || "-"],
                ["Preferred Location", customer.preferredLocation || "-"],
                ["Amenities Required", customer.amenitiesRequired || "-"],
                ["Special Requirements", customer.specialRequirements || "-"],
                ["Move-in Date", customer.moveInDate || "-"],
                ["Loan Required", customer.loanRequired || "-"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 whitespace-pre-wrap">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              🔄 CRM Information
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                ["Assigned Sub Dealer", customer.assignedSubDealer || "-"],
                ["Status", customer.status || "-"],
                ["Other Details", customer.otherDetails || "-"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 whitespace-pre-wrap">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ViewCustomerModal;
