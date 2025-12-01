import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/Login.css";
import { Mail, Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 p-3"
      style={{
        background: "linear-gradient(135deg, #14B8A6, #06B6D4, #3B82F6)" 
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <div className="bg-circle pulse position-absolute"></div>
        <div className="bg-circle pulse delay position-absolute"></div>
      </div>
      <div
        className="card shadow-lg rounded-4 position-relative overflow-hidden"
        style={{ maxWidth: "28rem", width: "100%" }}
      >
        <div
          className="text-center p-5"
          style={{ background: "linear-gradient(135deg, #14B8A6, #06B6D4, #3B82F6)"  }}
        >
          <div
            className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow"
            style={{ width: "5rem", height: "5rem" }}
          >
            <span style={{ fontSize: "2rem" }}>🔐</span>
          </div>
          <h1 className="h3 fw-bold text-white mb-2">Welcome Back!</h1>
          <p className="text-light">Login to your account</p>
        </div>
        <div className="p-4">
          <div className="d-grid gap-3">
            <div className="mb-3 position-relative">
              <label className="form-label fw-medium">Email Address</label>
              <Mail
                size={20}
                className="position-absolute"
                style={{
                  left: "0.75rem",
                  top: "75%",
                  transform: "translateY(-50%)",
                  color: "#9CA3AF",
                }}
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="form-control ps-5"
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <label className="form-label fw-medium">Password</label>
              <Lock
                size={20}
                className="position-absolute"
                style={{
                  left: "0.75rem",
                  top: "72%",
                  transform: "translateY(-50%)",
                  color: "#9CA3AF",
                }}
              />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="form-control ps-5 pe-5"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn position-absolute  end-0 translate-middle-y"
                style={{
                  top: "70%",
                  border: "none",
                  background: "transparent",
                  color: "#6B7280",
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <Link to="" className="small text-primary fw-medium">
                Forgot Password?
              </Link>
            </div>
            <Link
              to="/dashboard"
              type="button"
              className="btn w-100 text-white fw-semibold shadow"
              style={{
                background: "linear-gradient(135deg, #14B8A6, #06B6D4, #3B82F6)" ,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Sign In
            </Link>
          </div>
          <div className="position-relative my-3">
            <div
              className="position-absolute top-50 start-0 w-100"
              style={{
                borderTop: "1px solid #D1D5DB",
                transform: "translateY(-50%)",
              }}
            ></div>
            <div className="position-relative text-center small">
              <span className="px-3 bg-white text-muted">Or continue with</span>
            </div>
          </div>
          <div
            className="d-grid gap-2"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", display: "grid" }}
          >
            <button className="btn border rounded d-flex justify-content-center align-items-center p-2">
              <svg className="me-1" width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>
            <button className="btn border rounded d-flex justify-content-center align-items-center p-2">
              <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button className="btn border rounded d-flex justify-content-center align-items-center p-2">
              <svg width="20" height="20" fill="#000000" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
          </div>
          <p className="text-center small text-muted mt-3">
            Don't have an account?{" "}
            <Link to="" className="text-primary fw-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
