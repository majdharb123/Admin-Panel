import "bootstrap/dist/css/bootstrap.min.css";
import TableUsers from "../components/TableUsers";
import userData from "../Data/UserData";
import { Users } from "lucide-react";
const User = ({ darkMode }) => {
  return (
    <div
      className={`rounded-4 shadow overflow-hidden ${
        darkMode ? "bg-dark text-white" : "bg-white text-dark"
      }`}
      style={{ transition: "0.2s" }}
    >
      <div
        className={`d-flex justify-content-between align-items-center border-bottom px-3 py-2 ${
          darkMode ? "border-secondary" : "border-light"
        }`}
      >
        <div>
          <h3
            className={`fw-bold fs-5 ${darkMode ? "text-white" : "text-dark"}`}
          >
            Users Management
          </h3>
          <p
            className={`small mt-1 ${
              darkMode ? "text-secondary" : "text-muted"
            }`}
          >
            Manage all users and their permissions
          </p>
        </div>
        <button className="btn btn-primary d-flex align-items-center gap-2">
          <Users size={18} />
          Add New User
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle w-100">
          <thead className={darkMode ? "table-dark" : "table-light"}>
            <tr>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Name
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Email
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Role
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Status
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Joined
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={`${darkMode ? "table-dark" : "border-top"}`}>
            {userData.map((p) => (
              <TableUsers key={p.id} users={p} darkMode={darkMode}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default User;
