import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import AddProperty from "./pages/AddProperty";
import PropertyList from "./pages/PropertyList";
import Summary from "./pages/Summary";
import Leads from "./pages/Leads";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/customers" element={<Customers />} />
          <Route
            path="/properties"
            element={<Navigate to="/properties/list" replace />}
          />
          <Route path="/properties/list" element={<PropertyList />} />
          <Route path="/properties/add" element={<AddProperty />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
