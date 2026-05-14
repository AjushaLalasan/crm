import { useState } from "react";
import AddCustomerForm from "../components/AddCustomerForm";
import CustomerTable from "../components/CustomerTable";
import ViewCustomerModal from "../components/ViewCustomerModal";

const initialCustomers = [
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
  },
  {
    customerId: "1",
    name: "Dr. Akarsh S",
    phone: "9497174163",
    profession: "Business",
    email: "",
    age: "",
    maritalStatus: "",
    familyMembers: "2",
    otherDetails:
      "I have done my graduation from Pariyaram Medical college. Was working at medical trust. Joined our family business 2 years back. We have businesses(Pharmaceutical distribution, C&F) at Kottayam and Ekm. Our firm here is Parimal Associates and our kottayam firm is Preethy Drug Lines. Our home is at Kottayam.  We are majorly involved in government supply.",
    customerType: "Tenant",
    purpose: "Rent",
    preferredPropertyType: "Flat",
    preferredBedrooms: "2 BHK",
    budget: "25000 Rent",
    preferredLocation: "Maradu/Nettor/Kundannoor/Petta/nearby",
    amenitiesRequired: "Car Parking",
    specialRequirements:
      "we need two apartments, one for me and my wife and the other for my brother and our parents at two locations.",
    moveInDate: "",
    loanRequired: "No",
    assignedSubDealer: "",
    status: "Property Visited - 1",
  },
  {
    customerId: "2",
    name: "Adith",
    phone: "8281368369",
    profession: "",
    email: "",
    age: "",
    maritalStatus: "",
    familyMembers: "",
    otherDetails: "",
    customerType: "",
    purpose: "",
    preferredPropertyType: "",
    preferredBedrooms: "",
    budget: "",
    preferredLocation: "",
    amenitiesRequired: "",
    specialRequirements: "",
    moveInDate: "",
    loanRequired: "",
    assignedSubDealer: "",
    status: "",
  },
  {
    customerId: "3",
    name: "Prithvi",
    phone: "6238562998",
    profession: "",
    email: "",
    age: "",
    maritalStatus: "Single",
    familyMembers: "2",
    otherDetails: "2 BACHELOR",
    customerType: "Tenant",
    purpose: "Rent",
    preferredPropertyType: "Flat",
    preferredBedrooms: "",
    budget: "17000",
    preferredLocation: "Palarivattom",
    amenitiesRequired: "",
    specialRequirements: "",
    moveInDate: "",
    loanRequired: "",
    assignedSubDealer: "",
    status: "",
  },
  {
    customerId: "4",
    name: "Maya",
    phone: "9074042739",
    profession: "Asianet Accounts",
    email: "",
    age: "",
    maritalStatus: "2",
    familyMembers: "",
    otherDetails: "",
    customerType: "Tenant",
    purpose: "Rent",
    preferredPropertyType: "Flat",
    preferredBedrooms: "2 BHK",
    budget: "15000",
    preferredLocation: "Chottanikara",
    amenitiesRequired: "",
    specialRequirements: "",
    moveInDate: "",
    loanRequired: "",
    assignedSubDealer: "",
    status: "Property Listed",
  },
  {
    customerId: "5",
    name: "Vidya Narayanam/ Padmaraj",
    phone: "9633379953",
    profession: "Koratty Infopark",
    email: "",
    age: "",
    maritalStatus: "",
    familyMembers: "",
    otherDetails: "",
    customerType: "Tenant",
    purpose: "Rent",
    preferredPropertyType: "Flat",
    preferredBedrooms: "2 BHK",
    budget: "26000",
    preferredLocation: "",
    amenitiesRequired: "",
    specialRequirements: "",
    moveInDate: "",
    loanRequired: "",
    assignedSubDealer: "",
    status: "",
  },
  {
    customerId: "6",
    name: "Clemant",
    phone: "9446913148",
    profession: "BPCL",
    email: "",
    age: "",
    maritalStatus: "",
    familyMembers: "",
    otherDetails: "",
    customerType: "Tenant",
    purpose: "Rent",
    preferredPropertyType: "Flat",
    preferredBedrooms: "3 BHK",
    budget: "20000",
    preferredLocation: "Thripunitura/Thiruvankulam",
    amenitiesRequired: "Furnished",
    specialRequirements: "",
    moveInDate: "",
    loanRequired: "",
    assignedSubDealer: "",
    status: "",
  },
  {
    customerId: "7",
    name: "Dr. Vishnu Hari",
    phone: "7907391897",
    profession: "Aster",
    email: "",
    age: "",
    maritalStatus: "",
    familyMembers: "",
    otherDetails: "",
    customerType: "Tenant",
    purpose: "Rent",
    preferredPropertyType: "Flat",
    preferredBedrooms: "2 BHK",
    budget: "30000",
    preferredLocation: "Lulu Mall/Aster",
    amenitiesRequired: "Furnished",
    specialRequirements: "",
    moveInDate: "",
    loanRequired: "",
    assignedSubDealer: "",
    status: "",
  },
];

function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [activeCustomer, setActiveCustomer] = useState(null);
  const [viewCustomer, setViewCustomer] = useState(null);

  const filteredCustomers = customers.filter((customer) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;

    return [
      customer.customerId,
      customer.name,
      customer.phone,
      customer.profession,
      customer.email,
      customer.age,
      customer.maritalStatus,
      customer.familyMembers,
      customer.otherDetails,
      customer.customerType,
      customer.purpose,
      customer.preferredPropertyType,
      customer.preferredBedrooms,
      customer.budget,
      customer.preferredLocation,
      customer.amenitiesRequired,
      customer.specialRequirements,
      customer.moveInDate,
      customer.loanRequired,
      customer.assignedSubDealer,
      customer.status,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  const openAddModal = () => {
    setFormMode("add");
    setActiveCustomer(null);
    setIsFormOpen(true);
  };

  const openEditModal = (customer) => {
    setFormMode("edit");
    setActiveCustomer(customer);
    setIsFormOpen(true);
  };

  const openViewModal = (customer) => {
    setViewCustomer(customer);
  };

  const closeViewModal = () => {
    setViewCustomer(null);
  };

  const handleSaveCustomer = (customer) => {
    if (formMode === "edit") {
      setCustomers((current) =>
        current.map((item) =>
          item.customerId === customer.customerId ? customer : item,
        ),
      );
    } else {
      setCustomers((current) => [customer, ...current]);
    }

    setIsFormOpen(false);
    setActiveCustomer(null);
    setFormMode("add");
  };

  const handleDeleteCustomer = (customerId) => {
    const confirmed = window.confirm("Are you sure?");
    if (!confirmed) return;

    setCustomers((current) =>
      current.filter((customer) => customer.customerId !== customerId),
    );
  };

  const emptyMessage = customers.length
    ? "No matching customers found."
    : "No customers found.";

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Customers
          </h2>
          <p className="mt-2 text-sm text-slate-500 md:text-base">
            Manage customer relationships and review contact details.
          </p>
        </div>
        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 md:w-auto md:text-base"
        >
          + Add Customer
        </button>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <label htmlFor="customer-search" className="sr-only">
              Search customers
            </label>
            <input
              id="customer-search"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name, phone, email, profession, or location"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 md:text-base"
            />
          </div>
        </div>

        <CustomerTable
          customers={filteredCustomers}
          emptyMessage={emptyMessage}
          onView={openViewModal}
          onEdit={openEditModal}
          onDelete={handleDeleteCustomer}
        />
      </div>

      <AddCustomerForm
        open={isFormOpen}
        mode={formMode}
        initialCustomer={activeCustomer}
        onSave={handleSaveCustomer}
        onClose={() => setIsFormOpen(false)}
      />

      <ViewCustomerModal
        open={Boolean(viewCustomer)}
        customer={viewCustomer}
        onClose={closeViewModal}
      />
    </div>
  );
}

export default Customers;
