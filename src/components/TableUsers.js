import "bootstrap/dist/css/bootstrap.min.css";
import { Trash2, Edit, Eye } from "lucide-react";
const TableUsers = ({ users, darkMode }) => {
  return (
    <tr
      className={`table-hover ${darkMode ? "table-dark" : "table-row"}`}
      style={{ transition: "background-color 0.2s" }}
    >
      <td className="px-3">
        <div className="d-flex align-items-center">
          <span
            className={`fw-medium ${darkMode ? "text-light" : "text-dark"}`}
          >
            {users.name}
          </span>
        </div>
      </td>
      <td className="px-3 text-secondary">{users.email}</td>
      <td className="px-3">
        <span
          className={` px-3 py-1 rounded-pill small fw-semibold
            ${
              users.role === "Admin"
                ? "bg-success text-white"
                : users.role === "Manager"
                ? "bg-primary text-white"
                : "bg-secondary text-white"
            }`}
        >
          {users.role}
        </span>
      </td>
      <td className="px-3">
        <span
          className={`  px-3 py-1 rounded-pill small fw-semibold
            ${
              users.status === "Active"
                ? "bg-success bg-opacity-10 text-success"
                : "bg-danger bg-opacity-10 text-danger"
            }`}
        >
          {users.status}
        </span>
      </td>
      <td
        className={`small px-3 py-2 ${
          darkMode ? "text-secondary" : "text-muted"
        }`}
      >
        {users.joined}
      </td>

      <td className="px-3 py-3">
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn p-2 rounded"
            style={{ color: "#2563eb", backgroundColor: "transparent" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#eff6ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <Eye size={18} />
          </button>
          <button
            className="btn p-2 rounded"
            style={{ color: "#059669", backgroundColor: "transparent" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ecfdf5")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <Edit size={18} />
          </button>
          <button
            className="btn p-2 rounded"
            style={{ color: "#dc2626", backgroundColor: "transparent" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#fef2f2")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default TableUsers;
