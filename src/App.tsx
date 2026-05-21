import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Tracker from "./pages/Tracker";
// import Profile from "./pages/Profile";

function App() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    // { name: "Profile", path: "/profile" },
    { name: "Transactions", path: "/tracker" },
  ];

  return (
    <div className="flex">
      <Sidebar items={menuItems} />

      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tracker" element={<Tracker />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
