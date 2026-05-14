const STORAGE_KEY = "crm-customers";

export const initialCustomers = [
  {
    customerId: "C001",
    name: "Arun Kumar",
    phone: "9876543210",
    profession: "Software Engineer",
    email: "arun@gmail.com",
    age: "32",
    maritalStatus: "Married",
    familyMembers: "4",
    otherDetails: "",
    customerType: "Buyer",
    purpose: "Purchase",
    preferredPropertyType: "Villa",
    preferredBedrooms: "3 BHK",
    budget: "80 Lakhs",
    preferredLocation: "Thrissur",
    amenitiesRequired: "2 car Parking",
    specialRequirements: "Near IT park",
    moveInDate: "13/5/2026",
    loanRequired: "Yes",
    assignedSubDealer: "Ajith",
    status: "Active",
    propertyName: "Villa in Thrissur",
    agreementDate: "",
    visitDate: "",
  },
  {
    customerId: "C002",
    name: "Rahul Menon",
    phone: "9876543221",
    profession: "Businessman",
    email: "rahul@gmail.com",
    age: "45",
    maritalStatus: "Married",
    familyMembers: "5",
    otherDetails: "",
    customerType: "Owner",
    purpose: "Sell",
    preferredPropertyType: "Flat",
    preferredBedrooms: "-",
    budget: "-",
    preferredLocation: "Kochi",
    amenitiesRequired: "Gym, Lift",
    specialRequirements: "gated community",
    moveInDate: "13/5/2026",
    loanRequired: "No",
    assignedSubDealer: "Sreejith",
    status: "Property Listed",
    propertyName: "Flat in Kochi",
    agreementDate: "",
    visitDate: "",
  },
  {
    customerId: "C003",
    name: "Meera Nair",
    phone: "9876543232",
    profession: "Doctor",
    email: "meera@gmail.com",
    age: "29",
    maritalStatus: "Single",
    familyMembers: "2",
    otherDetails: "",
    customerType: "Tenant",
    purpose: "Rent",
    preferredPropertyType: "Apartment",
    preferredBedrooms: "2 BHK",
    budget: "25000 Rent",
    preferredLocation: "Calicut",
    amenitiesRequired: "-",
    specialRequirements: "",
    moveInDate: "13/5/2026",
    loanRequired: "No",
    assignedSubDealer: "Anand",
    status: "Searching",
    propertyName: "Apartment in Calicut",
    agreementDate: "",
    visitDate: "",
  },
  {
    customerId: "C004",
    name: "John Doe",
    phone: "9876543243",
    profession: "Engineer",
    email: "john@gmail.com",
    age: "35",
    maritalStatus: "Married",
    familyMembers: "3",
    otherDetails: "",
    customerType: "Buyer",
    purpose: "Purchase",
    preferredPropertyType: "House",
    preferredBedrooms: "4 BHK",
    budget: "1 Cr",
    preferredLocation: "Kochi",
    amenitiesRequired: "Garden",
    specialRequirements: "",
    moveInDate: "",
    loanRequired: "Yes",
    assignedSubDealer: "Vijay",
    status: "Decision Pending - Positive",
    propertyName: "House in Kochi",
    agreementDate: "",
    visitDate: "",
  },
  {
    customerId: "C005",
    name: "Jane Smith",
    phone: "9876543254",
    profession: "Teacher",
    email: "jane@gmail.com",
    age: "28",
    maritalStatus: "Single",
    familyMembers: "1",
    otherDetails: "",
    customerType: "Buyer",
    purpose: "Purchase",
    preferredPropertyType: "Flat",
    preferredBedrooms: "2 BHK",
    budget: "50 Lakhs",
    preferredLocation: "Thrissur",
    amenitiesRequired: "Lift",
    specialRequirements: "",
    moveInDate: "",
    loanRequired: "No",
    assignedSubDealer: "Ravi",
    status: "Agreement",
    propertyName: "Flat in Thrissur",
    agreementDate: "2026-05-14", // Today's date
    visitDate: "",
  },
  {
    customerId: "C006",
    name: "Mike Johnson",
    phone: "9876543265",
    profession: "Manager",
    email: "mike@gmail.com",
    age: "40",
    maritalStatus: "Married",
    familyMembers: "4",
    otherDetails: "",
    customerType: "Buyer",
    purpose: "Purchase",
    preferredPropertyType: "Villa",
    preferredBedrooms: "3 BHK",
    budget: "90 Lakhs",
    preferredLocation: "Palakkad",
    amenitiesRequired: "Swimming Pool",
    specialRequirements: "",
    moveInDate: "",
    loanRequired: "Yes",
    assignedSubDealer: "Suresh",
    status: "Property Visited",
    propertyName: "Villa in Palakkad",
    agreementDate: "",
    visitDate: "2026-05-14", // Today's date
  },
];

function getInitialState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && stored.length > 0 ? JSON.parse(stored) : initialCustomers;
  } catch {
    return initialCustomers;
  }
}

export function getStoredCustomers() {
  return getInitialState();
}

export function setStoredCustomers(customers) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
}

export function addCustomer(customer) {
  const existing = getStoredCustomers();
  const nextCustomers = [customer, ...existing];
  setStoredCustomers(nextCustomers);
  return nextCustomers;
}

export function updateCustomer(customerId, updatedCustomer) {
  const existing = getStoredCustomers();
  const nextCustomers = existing.map((item) =>
    item.customerId === customerId ? { ...updatedCustomer } : item,
  );
  setStoredCustomers(nextCustomers);
  return nextCustomers;
}

export function deleteCustomer(customerId) {
  const existing = getStoredCustomers();
  const nextCustomers = existing.filter(
    (item) => item.customerId !== customerId,
  );
  setStoredCustomers(nextCustomers);
  return nextCustomers;
}
