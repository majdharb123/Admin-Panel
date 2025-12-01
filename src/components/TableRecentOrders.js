import "bootstrap/dist/css/bootstrap.min.css";
import { CheckCircle, Package, Clock, XCircle } from "lucide-react";
const TableRecentOrders = ({ orders, darkMode}) => {
  const getOrderStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="text-success" size={20} />;
      case "Shipped":
        return <Package className="text-primary" size={20} />;
      case "Processing":
        return <Clock className="text-warning" size={20} />;
      case "Cancelled":
        return <XCircle className="text-danger" size={20} />;
      default:
        return <Clock className="text-secondary" size={20} />;
    }
  };
  return (
    <tr
      className={`${darkMode ? "table-dark" : "table-row"}`}
      style={{ transition: "0.2s", cursor: "pointer" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = darkMode
          ? "#343a40"
          : "#f8f9fa")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = darkMode
          ? "#212529"
          : "#ffffff")
      }
    >
      <td className="px-3 py-3 fw-semibold" style={{ color: "#2563eb" }}>
        {orders.id}
      </td>

      <td className={`px-3 py-2 ${darkMode ? "text-secondary" : "text-dark"}`}>
        {orders.customer}
      </td>

      <td
        className={`px-3 py-2 fw-semibold ${
          darkMode ? "text-white" : "text-dark"
        }`}
      >
        {orders.amount}
      </td>

      <td className="px-3 py-3">
        <div className="d-flex align-items-center gap-2">
          {getOrderStatusIcon(orders.status)}

          <span
            className="px-3 py-1 rounded-pill text-uppercase fw-semibold small"
            style={{
              backgroundColor:
                orders.status === "Delivered"
                  ? "#d1fae5"
                  : orders.status === "Shipped"
                  ? "#dbeafe"
                  : orders.status === "Processing"
                  ? "#fef3c7"
                  : orders.status === "Cancelled"
                  ? "#fee2e2"
                  : "#f3f4f6",
              color:
                orders.status === "Delivered"
                  ? "#065f46"
                  : orders.status === "Shipped"
                  ? "#1e3a8a"
                  : orders.status === "Processing"
                  ? "#92400e"
                  : orders.status === "Cancelled"
                  ? "#991b1b"
                  : "#374151",
            }}
          >
            {orders.status}
          </span>
        </div>
      </td>
    </tr>
  );
};
export default TableRecentOrders;
