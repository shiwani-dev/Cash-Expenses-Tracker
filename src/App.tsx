import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Tracker from "./pages/Tracker";
import Reports from "./pages/Reports";
// import Profile from "./pages/Profile";
import Budgets from "./pages/Budgets";
import Savings from "./pages/Savings";

function App() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    // { name: "Profile", path: "/profile" },
    { name: "Transactions", path: "/tracker" },
    { name: "Budgets", path: "/budgets" },
    { name: "Reports", path: "/reports" },
    { name: "Savings", path: "/savings" },
  ];

  return (
    <div className="flex">
      <Sidebar items={menuItems} />

      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/reports" element={<Reports />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/savings" element={<Savings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
