const STORAGE_KEY = "crm-properties";

export const initialProperties = [
  {
    propertyId: "P001",
    ownerId: "C002",
    propertyTitle: "Luxury Flat Near City",
    propertyType: "Flat",
    purpose: "Sale",
    price: "65 Lakhs",
    location: "Kochi",
    area: "1450",
    bedrooms: "3",
    bathrooms: "2",
    carParking: "1 Car",
    balcony: "2",
    floor: "5",
    furnishing: "Semi Furnished",
    amenities: "Lift, Gym, Security",
    nearbyLandmarks: "Lulu Mall",
    propertyAge: "5 Years",
    facing: "East",
    address: "4 B",
    status: "Available",
    media: "",
    others: "",
  },
  {
    propertyId: "P002",
    ownerId: "C002",
    propertyTitle: "Premium Villa",
    propertyType: "Villa",
    purpose: "Sale",
    price: "1.2 Cr",
    location: "Thrissur",
    area: "3200",
    bedrooms: "4",
    bathrooms: "4",
    carParking: "2 Cars",
    balcony: "3",
    floor: "2",
    furnishing: "Fully Furnished",
    amenities: "Swimming Pool, Garden, CCTV",
    nearbyLandmarks: "Highway",
    propertyAge: "1 Year",
    facing: "West",
    address: "",
    status: "Booked",
    media: "",
    others: "",
  },
  {
    propertyId: "P003",
    ownerId: "C002",
    propertyTitle: "Residential Plot",
    propertyType: "Plot",
    purpose: "Sale",
    price: "35 Lakhs",
    location: "Palakkad",
    area: "5000",
    bedrooms: "-",
    bathrooms: "-",
    carParking: "-",
    balcony: "-",
    floor: "-",
    furnishing: "-",
    amenities: "Road Access, Water Connection",
    nearbyLandmarks: "School Nearby",
    propertyAge: "-",
    facing: "South",
    address: "",
    status: "Available",
    media: "",
    others: "",
  },
];

function getInitialState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && stored.length > 0 ? JSON.parse(stored) : initialProperties;
  } catch {
    return initialProperties;
  }
}

export function getStoredProperties() {
  return getInitialState();
}

export function setStoredProperties(properties) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
}

export function addProperty(property) {
  const existing = getStoredProperties();
  const nextProperties = [property, ...existing];
  setStoredProperties(nextProperties);
  return nextProperties;
}

export function updateProperty(propertyId, updatedProperty) {
  const existing = getStoredProperties();
  const nextProperties = existing.map((item) =>
    item.propertyId === propertyId ? { ...updatedProperty } : item,
  );
  setStoredProperties(nextProperties);
  return nextProperties;
}

export function deleteProperty(propertyId) {
  const existing = getStoredProperties();
  const nextProperties = existing.filter(
    (item) => item.propertyId !== propertyId,
  );
  setStoredProperties(nextProperties);
  return nextProperties;
}
