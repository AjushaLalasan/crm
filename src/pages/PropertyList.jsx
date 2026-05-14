import { useEffect, useState } from "react";
import {
  deleteProperty,
  getStoredProperties,
  updateProperty,
} from "../data/propertyStorage";

const emptyEditState = {
  propertyId: "",
  ownerId: "",
  propertyTitle: "",
  propertyType: "Flat",
  purpose: "Sale",
  price: "",
  location: "",
  area: "",
  bedrooms: "",
  bathrooms: "",
  carParking: "",
  balcony: "",
  floor: "",
  furnishing: "Semi Furnished",
  amenities: "",
  nearbyLandmarks: "",
  propertyAge: "",
  facing: "",
  address: "",
  status: "Available",
  media: "",
  others: "",
};

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [editPropertyId, setEditPropertyId] = useState(null);
  const [editForm, setEditForm] = useState(emptyEditState);

  useEffect(() => {
    setProperties(getStoredProperties());
  }, []);

  const refresh = () => setProperties(getStoredProperties());

  const handleView = (property) => {
    setSelectedProperty(property);
    setEditPropertyId(null);
  };

  const handleDelete = (propertyId) => {
    if (!window.confirm("Delete this property? This cannot be undone.")) {
      return;
    }

    deleteProperty(propertyId);
    refresh();
    if (selectedProperty?.propertyId === propertyId) {
      setSelectedProperty(null);
    }
    if (editPropertyId === propertyId) {
      setEditPropertyId(null);
    }
  };

  const handleStartEdit = (property) => {
    setEditPropertyId(property.propertyId);
    setSelectedProperty(null);
    setEditForm({ ...property });
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = (event) => {
    event.preventDefault();
    updateProperty(editPropertyId, editForm);
    refresh();
    setEditPropertyId(null);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          Property Listings
        </h2>
        <p className="mt-2 text-sm text-slate-500 md:text-base">
          View, edit, or remove properties from the CRM.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
          <h3 className="text-xl font-semibold text-slate-900">
            Current Listings
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {properties.map((property) => (
                <tr key={property.propertyId}>
                  <td className="px-4 py-4 font-medium text-slate-800">
                    {property.propertyId}
                  </td>
                  <td className="px-4 py-4 text-slate-700">
                    {property.propertyTitle}
                  </td>
                  <td className="px-4 py-4 text-slate-700">
                    {property.propertyType}
                  </td>
                  <td className="px-4 py-4 text-slate-700">{property.price}</td>
                  <td className="px-4 py-4 text-slate-700">
                    {property.location}
                  </td>
                  <td className="px-4 py-4 text-slate-700">
                    {property.status}
                  </td>
                  <td className="px-4 py-4 space-x-2">
                    <button
                      type="button"
                      onClick={() => handleView(property)}
                      className="rounded-2xl border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => handleStartEdit(property)}
                      className="rounded-2xl border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 hover:bg-amber-100"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(property.propertyId)}
                      className="rounded-2xl border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700 hover:bg-rose-100"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editPropertyId && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">
            Edit Property {editPropertyId}
          </h3>
          <form onSubmit={handleSaveEdit} className="mt-6 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700">
                Property Title
                <input
                  name="propertyTitle"
                  value={editForm.propertyTitle}
                  onChange={handleEditChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                Price
                <input
                  name="price"
                  value={editForm.price}
                  onChange={handleEditChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                Location
                <input
                  name="location"
                  value={editForm.location}
                  onChange={handleEditChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                Status
                <select
                  name="status"
                  value={editForm.status}
                  onChange={handleEditChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
                >
                  <option>Available</option>
                  <option>Booked</option>
                  <option>Sold</option>
                </select>
              </label>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setEditPropertyId(null)}
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {selectedProperty.propertyTitle}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {selectedProperty.propertyType} • {selectedProperty.purpose}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProperty(null)}
                className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {Object.entries(selectedProperty).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                  <p className="mt-2 text-sm text-slate-900">{value || "—"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyList;
