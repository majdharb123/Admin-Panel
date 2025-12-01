import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { useState, useEffect } from "react";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Search } from "lucide-react";
import "./assets/style/Responsive.css";
function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {location.pathname !== "/" && (
        <div
          className="d-flex bg-light"
          style={{ height: "100vh", overflow: "hidden" }}
        >
          <Sidebar sidebarOpen={sidebarOpen} />
          <div
            className="d-flex flex-column flex-grow-1"
            style={{ overflow: "hidden" }}
          >
            <div className="flex-shrink-0">
              <Navbar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            </div>
            <div
              className={`flex-grow-1 overflow-auto p-4 `}
              style={{
                backgroundColor: darkMode ? "#212529" : "#f8f9fa",
                color: darkMode ? "#ffffff" : "#212529",
                transition: "all 0.3s",
              }}
            >
              <div className="responsive mb-3 ">
                <div className="position-relative">
                  <Search
                    size={18}
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    className={`form-control ps-5 ${
                      darkMode ? "input-dark" : "input-light"
                    }`}
                    style={{ width: "350px" }}
                  />
                </div>
              </div>
              <Routes>
                <Route
                  path="/dashboard"
                  element={<Dashboard darkMode={darkMode} />}
                />
                <Route path="/users" element={<Users darkMode={darkMode} />} />
                <Route
                  path="/orders"
                  element={<Orders darkMode={darkMode} />}
                />
                <Route
                  path="/settings"
                  element={<Setting darkMode={darkMode} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}
export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
