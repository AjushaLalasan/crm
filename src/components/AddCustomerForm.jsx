import { useState, useEffect } from "react";

function AddCustomerForm({
  open,
  mode = "add",
  initialCustomer = null,
  onSave,
  onClose,
}) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!open) return;

    if (mode === "edit" && initialCustomer) {
      setFormData(initialCustomer);
    } else {
      setFormData({});
    }
  }, [open, mode, initialCustomer]);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();

    const customer = {
      customerId:
        mode === "edit" && initialCustomer
          ? initialCustomer.customerId
          : typeof crypto !== "undefined" && crypto.randomUUID
            ? `CID-${crypto.randomUUID()}`
            : `CID-${Date.now()}`,
      name: (formData.name || "").trim(),
      phone: (formData.phone || "").trim(),
      profession: (formData.profession || "").trim(),
      email: (formData.email || "").trim(),
      age: (formData.age || "").trim(),
      maritalStatus: (formData.maritalStatus || "").trim(),
      familyMembers: (formData.familyMembers || "").trim(),
      otherDetails: (formData.otherDetails || "").trim(),
      customerType: (formData.customerType || "").trim(),
      purpose: (formData.purpose || "").trim(),
      preferredPropertyType: (formData.preferredPropertyType || "").trim(),
      preferredBedrooms: (formData.preferredBedrooms || "").trim(),
      budget: (formData.budget || "").trim(),
      preferredLocation: (formData.preferredLocation || "").trim(),
      amenitiesRequired: (formData.amenitiesRequired || "").trim(),
      specialRequirements: (formData.specialRequirements || "").trim(),
      moveInDate: (formData.moveInDate || "").trim(),
      loanRequired: (formData.loanRequired || "").trim(),
      assignedSubDealer: (formData.assignedSubDealer || "").trim(),
      status: (formData.status || "").trim(),
    };

    onSave(customer);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 px-4 py-6 sm:px-6 sm:py-8">
      <div
        className="mx-auto w-full max-w-lg rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-slate-200 sm:p-8 sm:max-w-xl md:max-w-2xl overflow-hidden overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 3rem)" }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              {mode === "edit" ? "Edit Customer" : "Add Customer"}
            </h2>
            <p className="mt-1 text-sm text-slate-500 md:text-base">
              {mode === "edit"
                ? "Update customer details and save changes."
                : "Add a new entry to the customer list."}
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

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              👤 Personal Information
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {mode === "edit" && initialCustomer ? (
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-slate-700">
                    Customer ID
                  </label>
                  <input
                    type="text"
                    value={initialCustomer.customerId}
                    readOnly
                    className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700 outline-none"
                  />
                </div>
              ) : null}
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name || ""}
                  onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  type="text"
                  value={formData.phone || ""}
                  onChange={(event) =>
                    setFormData({ ...formData, phone: event.target.value })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Profession
                </label>
                <input
                  type="text"
                  value={formData.profession || ""}
                  onChange={(event) =>
                    setFormData({ ...formData, profession: event.target.value })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email || ""}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Age
                </label>
                <input
                  type="text"
                  value={formData.age || ""}
                  onChange={(event) =>
                    setFormData({ ...formData, age: event.target.value })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Marital Status
                </label>
                <input
                  type="text"
                  value={formData.maritalStatus || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      maritalStatus: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Family Members
                </label>
                <input
                  type="text"
                  value={formData.familyMembers || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      familyMembers: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-slate-700">
                  Other Details
                </label>
                <textarea
                  value={formData.otherDetails || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      otherDetails: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              🏠 Property Requirements
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Customer Type
                </label>
                <input
                  type="text"
                  value={formData.customerType || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      customerType: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Purpose
                </label>
                <input
                  type="text"
                  value={formData.purpose || ""}
                  onChange={(event) =>
                    setFormData({ ...formData, purpose: event.target.value })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Preferred Property Type
                </label>
                <input
                  type="text"
                  value={formData.preferredPropertyType || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      preferredPropertyType: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Preferred Bedrooms
                </label>
                <input
                  type="text"
                  value={formData.preferredBedrooms || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      preferredBedrooms: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-slate-700">
                  Budget
                </label>
                <input
                  type="text"
                  value={formData.budget || ""}
                  onChange={(event) =>
                    setFormData({ ...formData, budget: event.target.value })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-slate-700">
                  Preferred Location
                </label>
                <input
                  type="text"
                  value={formData.preferredLocation || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      preferredLocation: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">
                  Amenities Required
                </label>
                <input
                  type="text"
                  value={formData.amenitiesRequired || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      amenitiesRequired: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">
                  Special Requirements
                </label>
                <input
                  type="text"
                  value={formData.specialRequirements || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      specialRequirements: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Move-in Date
                </label>
                <input
                  type="text"
                  value={formData.moveInDate || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      moveInDate: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Loan Required
                </label>
                <input
                  type="text"
                  value={formData.loanRequired || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      loanRequired: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              🔄 CRM Information
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Assigned Sub Dealer
                </label>
                <input
                  type="text"
                  value={formData.assignedSubDealer || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      assignedSubDealer: event.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Status
                </label>
                <input
                  type="text"
                  value={formData.status || ""}
                  onChange={(event) =>
                    setFormData({ ...formData, status: event.target.value })
                  }
                  className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:text-base"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="w-full rounded-2xl bg-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-300 sm:w-auto"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 sm:w-auto"
            >
              Save Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCustomerForm;
