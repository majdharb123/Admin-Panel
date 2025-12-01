import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen}) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const DataSide = [
    { name: "Dashboard", icon: "📊", id: "dashboard" },
    { name: "Users", icon: "👥", id: "users" },
    { name: "Orders", icon: "🛒", id: "orders" },
    { name: "Settings", icon: "⚙️", id: "settings" },
  ];
  return (
    <div
      className={`bg-dark text-white overflow-hidden transition-all`}
      style={{
        width: sidebarOpen ? "250px" : "0",
        height: "100vh",
        transition: "0.3s",
      }}
    >
      <div className="p-2">
        <h1 className="test fs-3 fw-bold mb-4">Admin Panel</h1>

        <nav className="d-flex flex-column  gap-2">
          {DataSide.map((item) => (
            <Link
              to={`/${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`btn text-start w-100 py-2 px-3 rounded ${
                activeTab === item.id
                  ? "btn-primary shadow"
                  : "btn-dark bg-opacity-50"
              }`}
            >
              <span className="me-2 text-center">{item.icon}</span>
              <span className="test">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
