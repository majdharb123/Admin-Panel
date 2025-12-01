import "bootstrap/dist/css/bootstrap.min.css";
import { X, Menu, Bell, Moon, Sun, Search } from "lucide-react";
import "../assets/style/Navbar.css";
const Navbar = ({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) => {
  return (
    <div className="d-flex flex-column overflow-hidden flex-grow-1 ">
      <nav
        className={`d-flex align-items-center justify-content-between shadow-sm px-4 py-3 border-bottom ${
          darkMode ? "bg-dark border-secondary" : "bg-white border-light"
        }`}
      >
        <div className="d-flex  align-items-center  gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`btn p-2 rounded ${
              darkMode ? "bg-dark text-light" : "bg-light"
            }`}
            style={{ transition: "0.2s" }}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="position-relative navResponsive">
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
              style={{ width: "250px" }}
            />
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`btn p-2 rounded-circle border-0 ${
              darkMode ? "bg-dark text-warning" : "bg-light text-secondary"
            }`}
            style={{ transition: "0.2s" }}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className={`btn position-relative p-2 rounded-circle border-0 ${
              darkMode ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            style={{ transition: "0.2s" }}
          >
            <Bell size={24} />

            <span
              className="position-absolute top-0 start-100 translate-middle bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "20px", height: "20px", fontSize: "11px" }}
            >
              3
            </span>
          </button>
          <img
            src="https://ui-avatars.com/api/?name=Admin&background=4F46E5&color=fff"
            alt="Profile"
            className="rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
              transition: "0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 0 3px #3b82f6")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
