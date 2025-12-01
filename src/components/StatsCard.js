import "bootstrap/dist/css/bootstrap.min.css";

const StatsCard = ({ stats, darkMode}) => {
  return (
    <div className="col-12 col-sm-6">
      <div
        className={`rounded-4 shadow p-4 ${darkMode ? "bg-dark" : "bg-white"}`}
        style={{ transition: "0.2s" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
      >
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className={stats.color}>{stats.icon}</div>
          <span className="text-success small fw-semibold">{stats.change}</span>
        </div>

        <h3
          className={`mb-1 ${darkMode ? "text-secondary" : "text-muted"}`}
          style={{ fontSize: "0.875rem" }}
        >
          {stats.title}
        </h3>

        <p
          className={`fw-bold ${darkMode ? "text-white" : "text-dark"}`}
          style={{ fontSize: "1.875rem" }}
        >
          {stats.value}
        </p>
      </div>
    </div>
  );
};
export default StatsCard;
