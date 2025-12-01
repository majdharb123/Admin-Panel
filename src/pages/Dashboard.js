import "bootstrap/dist/css/bootstrap.min.css";
import StatsCard from "../components/StatsCard";
import Charts from "../components/Charts";
import TableRecentOrders from "../components/TableRecentOrders";
import ordersData from "../Data/OrderData";
import stats from "../Data/StatsData";

const Dashboard = ({ darkMode }) => {
  return (
    <div className="row g-4 mb-4 " >
      {stats.map((p) => (
        <StatsCard
          key={p.id}
          stats={p}
          darkMode={darkMode}
        />
      ))}
      <div>
        <Charts darkMode={darkMode} />
      </div>
      <div
        className={`rounded-4 shadow overflow-hidden ${
          darkMode ? "bg-dark text-white" : "bg-white text-dark"
        }`}
        style={{ transition: "0.2s" }}
      >
        <div
          className={`px-3 py-3 border-bottom ${
            darkMode ? "border-secondary" : "border-light"
          }`}
        >
          <h3
            className={`fw-bold mb-2 ${darkMode ? "text-white" : "text-dark"}`}
            style={{ fontSize: "1.25rem" }}
          >
            Recent Orders
          </h3>
        </div>
        <div className="table-responsive">
          <table class="table table-hover align-middle w-100">
            <thead className={darkMode ? "table-dark" : "table-light"}>
              <tr>
                <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                  Order ID
                </th>
                <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                  Customer
                </th>
                <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                  Amount
                </th>
                <th className="px-3 py-2 text-start text-uppercase small fw-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody
              className={`${darkMode ? "table-dark" : "border-top"}`}
            >
              {ordersData.map((p) => (
                <TableRecentOrders
                  key={p.id}
                  orders={p}
                  darkMode={darkMode}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
