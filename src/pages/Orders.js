import "bootstrap/dist/css/bootstrap.min.css";
import TableOrders from "../components/TableOrders";
import ordersData from "../Data/OrderData";
const Orders = ({ darkMode }) => {
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
            Orders Management
          </h3>
          <p
            className={`small mt-1 ${
              darkMode ? "text-secondary" : "text-muted"
            }`}
          >
            Track and manage all orders
          </p>
        </div>
        <div class="d-flex gap-2">
          <select
            className={`form-select ${
              darkMode ? "bg-dark text-light border-secondary" : "border"
            } rounded`}
            style={{ transition: "box-shadow 0.2s",width:"180px" }}
          >
            <option>All Status</option>
            <option>Delivered</option>
            <option>Shipped</option>
            <option>Processing</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle w-100">
          <thead className={darkMode ? "table-dark" : "table-light"}>
            <tr>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Order Id
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Customer
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Product
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Amount
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Status
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Date
              </th>
              <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={`${darkMode ? "table-dark" : "border-top"}`}>
            {ordersData.map((p) => (
              <TableOrders key={p.id} orders={p} darkMode={darkMode}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Orders;
