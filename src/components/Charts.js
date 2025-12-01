import "bootstrap/dist/css/bootstrap.min.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import chartData from "../Data/ChartData";
const Charts = ({ darkMode}) => {
  return (
    <div className="row g-4 mb-4">
      <div className="col-12 col-lg-6 w-100">
        <div
          className={`rounded-4 shadow p-4 ${
            darkMode ? "bg-dark text-white" : "bg-white text-dark"
          }`}
          style={{ transition: "0.2s" }}
        >
          <h3 className={`fs-5 fw-bold mb-4 ${darkMode ? "text-white" : "text-dark"}`}>Monthly Orders</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#3B82F6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div
        className={`rounded-4 shadow p-4 ${
          darkMode ? "bg-dark text-white" : "bg-white text-dark"
        }`}
        style={{ transition: "0.2s" }}
      >
        <h3 className={`fs-5 fw-bold mb-4 ${darkMode ? "text-white" : "text-dark"}`}>Monthly Income</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Charts;
