import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProperty } from "../data/propertyStorage";

const initialFormState = {
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

function AddProperty() {
  const [form, setForm] = useState(initialFormState);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.propertyId || !form.propertyTitle || !form.location) {
      setError("Please fill in Property ID, Title and Location.");
      return;
    }

    addProperty(form);
    navigate("/properties/list");
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          Add Property
        </h2>
        <p className="mt-2 text-sm text-slate-500 md:text-base">
          Add a new property listing to the CRM and keep your portfolio updated.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              Property ID
              <input
                name="propertyId"
                value={form.propertyId}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Owner ID
              <input
                name="ownerId"
                value={form.ownerId}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700 sm:col-span-2">
              Property Title
              <input
                name="propertyTitle"
                value={form.propertyTitle}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Property Type
              <select
                name="propertyType"
                value={form.propertyType}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              >
                <option>Flat</option>
                <option>Villa</option>
                <option>Plot</option>
                <option>House</option>
                <option>Shop</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Purpose
              <select
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              >
                <option>Sale</option>
                <option>Rent</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Price
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Location
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Area (sqft)
              <input
                name="area"
                value={form.area}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              Bedrooms
              <input
                name="bedrooms"
                value={form.bedrooms}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Bathrooms
              <input
                name="bathrooms"
                value={form.bathrooms}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Car Parking
              <input
                name="carParking"
                value={form.carParking}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Balcony
              <input
                name="balcony"
                value={form.balcony}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Floor
              <input
                name="floor"
                value={form.floor}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Furnishing
              <select
                name="furnishing"
                value={form.furnishing}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              >
                <option>Semi Furnished</option>
                <option>Fully Furnished</option>
                <option>Unfurnished</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              Amenities
              <input
                name="amenities"
                value={form.amenities}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Nearby Landmarks
              <input
                name="nearbyLandmarks"
                value={form.nearbyLandmarks}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Property Age
              <input
                name="propertyAge"
                value={form.propertyAge}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Facing
              <input
                name="facing"
                value={form.facing}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              Address
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              Status
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
              >
                <option>Available</option>
                <option>Booked</option>
                <option>Sold</option>
              </select>
            </label>
          </div>

          <label className="space-y-2 text-sm text-slate-700">
            Photo/Video URL
            <input
              name="media"
              value={form.media}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
          </label>

          <label className="space-y-2 text-sm text-slate-700">
            Others
            <textarea
              name="others"
              value={form.others}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Save Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;
