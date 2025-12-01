import "bootstrap/dist/css/bootstrap.min.css";
import { User, Mail, Save, Lock, Globe, Bell } from "lucide-react";
import "../assets/style/Navbar.css";
const Setting = ({ darkMode }) => {
  return (
    <div className="row g-4">
      <div
        className={`col-lg-8 ${
          darkMode ? "bg-dark text-light" : "bg-white text-dark"
        } rounded-4 shadow p-3 w-100`}
      >
        <h3
          className={`fs-5 fw-bold ${
            darkMode ? "text-white" : "text-dark"
          } mb-4`}
        >
          Profile Settings
        </h3>

        <div className="d-flex align-items-center gap-3 mb-4">
          <img
            src="https://ui-avatars.com/api/?name=Admin&background=4F46E5&color=fff&size=80"
            alt="Profile"
            className="rounded-circle"
            style={{ width: "80px", height: "80px" }}
          />
          <div>
            <button className="btn btn-primary btn-sm px-3 py-2">
              Change Avatar
            </button>
            <p className={` py-2 ${darkMode ? "text-light" : "text-dark"}`}>
              JPG, PNG. Max size 2MB
            </p>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <label
              className={`form-label small fw-medium ${
                darkMode ? "text-secondary" : "text-body"
              } mb-2`}
            >
              First Name
            </label>

            <div className="position-relative">
              <User
                className="position-absolute"
                size={18}
                style={{
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6c757d",
                }}
              />
              <input
                type="text"
                placeholder="John"
                className={`form-control ps-5 ${
                  darkMode ? "input-dark" : "input-light"
                }`}
              />
            </div>
          </div>

          <div className="col-md-6">
            <label
              className={`form-label small fw-medium ${
                darkMode ? "text-secondary" : "text-body"
              } mb-2`}
            >
              Last Name
            </label>
            <div className="position-relative">
              <User
                className="position-absolute"
                size={18}
                style={{
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6c757d",
                }}
              />
              <input
                type="text"
                className={`form-control ps-5 ${
                  darkMode ? "input-dark" : "input-light"
                }`}
                placeholder="Doe"
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <label
            className={`form-label small fw-medium ${
              darkMode ? "text-secondary" : "text-body"
            } mb-2`}
          >
            Email Address
          </label>
          <div className="position-relative">
            <Mail
              className="position-absolute"
              size={18}
              style={{
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6c757d",
              }}
            />
            <input
              type="email"
              className={`form-control ps-5 ${
                darkMode ? "input-dark" : "input-light"
              }`}
              placeholder="admin@example.com"
            />
          </div>
        </div>

        <div className="mt-3">
          <label
            className={`form-label small fw-medium ${
              darkMode ? "text-secondary" : "text-body"
            } mb-2`}
          >
            Phone Number
          </label>
          <input
            type="tel"
            className={`form-control ${
              darkMode ? "input-dark" : "input-light"
            }`}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="mt-3">
          <label
            className={`form-label small fw-medium ${
              darkMode ? "text-secondary" : "text-body"
            } mb-2`}
          >
            Bio
          </label>
          <textarea
            className={`form-control ${
              darkMode ? "input-dark" : "input-light"
            }`}
            rows="4"
            placeholder="Write a short bio..."
          ></textarea>
        </div>

        <button className="btn btn-primary mt-4 px-4 py-2 d-flex align-items-center justify-content-center gap-2 w-100 ">
          <Save size={18} />
          Save Changes
        </button>
      </div>
      <div className="d-flex flex-column gap-4">
        <div
          className={`col-lg-8 ${
            darkMode ? "bg-dark text-light" : "bg-white text-dark"
          } rounded-4 shadow p-3 w-100`}
        >
          <h3
            className={`fs-5 fw-bold ${
              darkMode ? "text-white" : "text-dark"
            } mb-4`}
          >
            Security
          </h3>
          <div className="d-flex flex-column gap-3">
            <div>
              <label
                className={`form-label small fw-medium ${
                  darkMode ? "text-secondary" : "text-body"
                } mb-2`}
              >
                Current Password
              </label>
              <div className="position-relative">
                <Lock
                  size={18}
                  className="position-absolute"
                  style={{
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6c757d",
                  }}
                />
                <input
                  type="password"
                  className={`form-control ps-5 ${
                    darkMode ? "input-dark" : "input-light"
                  }`}
                  placeholder="••••••••"
                />
              </div>
            </div>
            <div>
              <label
                className={`form-label small fw-medium ${
                  darkMode ? "text-secondary" : "text-body"
                } mb-2`}
              >
                New Password
              </label>
              <div className="position-relative">
                <Lock
                  size={18}
                  className="position-absolute"
                  style={{
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6c757d",
                  }}
                />
                <input
                  type="password"
                  className={`form-control ps-5 ${
                    darkMode ? "input-dark" : "input-light"
                  }`}
                  placeholder="••••••••"
                />
              </div>
            </div>
            <button className="btn btn-secondary w-100 py-2">
              Update Password
            </button>
          </div>
        </div>
      </div>
      <div
        className={`col-lg-8 ${
          darkMode ? "bg-dark text-light" : "bg-white text-dark"
        } rounded-4 shadow p-3 w-100`}
      >
        <h3
          className={`fs-5 fw-bold ${
            darkMode ? "text-white" : "text-dark"
          } mb-4`}
        >
          Preferences
        </h3>

        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <Bell size={18} className="text-secondary" />
              <span
                className={`small ${darkMode ? "text-secondary" : "text-body"}`}
              >
                Email Notifications
              </span>
            </div>
            <div className="form-check form-switch m-0 p-0">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked
                style={{ cursor: "pointer", width: "2.5rem", height: "1.3rem" }}
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <Globe size={18} className="text-secondary" />
              <span
                className={`small ${darkMode ? "text-secondary" : "text-body"}`}
              >
                Public Profile
              </span>
            </div>

            <div className="form-check form-switch m-0 p-0">
              <input
                className="form-check-input"
                type="checkbox"
                style={{ cursor: "pointer", width: "2.5rem", height: "1.3rem" }}
              />
            </div>
          </div>
          <div>
            <label
              className={`form-label small fw-medium ${
                darkMode ? "text-secondary" : "text-body"
              } mb-2`}
            >
              Language
            </label>
            <select className={`form-select ${
                    darkMode ? "input-dark" : "input-light"
                  }`}>
              <option>English</option>
              <option>العربية</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
