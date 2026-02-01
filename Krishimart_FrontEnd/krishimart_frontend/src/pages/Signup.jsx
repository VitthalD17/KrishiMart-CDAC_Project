
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authService";
import "../css/register.css";
import Navbar from "../components/Navbar";
import { sendLog } from "../services/LoggerService";
 

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    uname: "",
    email: "",
    password: "",
    role: "FARMER",   
    mobno: "",
    address: ""
  });

  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signup(user); 
      alert("Signup Successful! Please login.");
      sendLog("User Signup SuccessFully!!!")
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Failed to signup. Try again!");
       sendLog(`User Signup Failed!!! ${err}`)
    }
  };

  return (
    <>
    <Navbar />
      <div className="register-container">
        <div className="register-card">
          <h3 className="text-center mb-4 text-dark">
            Create Your Account
          </h3>

          {/* ROLE SELECTION */}
          <div className="role-select">
            <button
              type="button"
              className={`role-btn ${
                user.role === "FARMER" ? "active" : ""
              }`}
              onClick={() =>
                setUser({ ...user, role: "FARMER" })
              }
            >
              👨‍🌾 Farmer
            </button>

            <button
              type="button"
              className={`role-btn ${
                user.role === "CUSTOMER" ? "active" : ""
              }`}
              onClick={() =>
                setUser({ ...user, role: "CUSTOMER" })
              }
            >
              🛒 Customer
            </button>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label className="form-label text-dark">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                value={user.uname}
                onChange={(e) =>
                  setUser({ ...user, uname: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-dark">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={user.email}
                onChange={(e) =>
                  setUser({ ...user, email: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-dark">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter mobile number"
                value={user.mobno}
                onChange={(e) =>
                  setUser({ ...user, mobno: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-dark">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter address"
                value={user.address}
                onChange={(e) =>
                  setUser({ ...user, address: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-dark">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Create password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value })
                }
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Register
            </button>

            <p className="text-center mt-3">
              Already have an account?{" "}
              <span
                style={{ color: "#388e3c", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Login here
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
