// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signup } from "../services/authService";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     uname: "",
//   email: "",
//   password: "",
//   role: "",
//   mobno: "",
//   address: ""
//   });
//   const [error, setError] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await signup(user);
//       alert("Signup Successful! Please login.");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       setError("Failed to signup. Try again!");
//     }
//   };

//   return (
//     <div className="container mt-5 pt-5" style={{ maxWidth: "400px" }}>
//       <h2 className="text-center mb-4">Signup</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Name"
//           className="form-control mb-2"
//           value={user.uname}
//           onChange={(e) => setUser({ ...user, uname: e.target.value })}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="form-control mb-2"
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="form-control mb-2"
//           value={user.password}
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//           required
//         />

//         {/* Role Dropdown */}
//         <select
//           className="form-select mb-2"
//           value={user.role}
//           onChange={(e) => setUser({ ...user, role: e.target.value })}
//           required
//         >
//           <option value="" disabled>Select Role</option>
//           <option value="FARMER">FARMER</option>
//           <option value="CUSTOMER">CUSTOMER</option>
//         </select>

//         <input
//           type="text"
//           placeholder="MobNo"
//           className="form-control mb-2"
//           value={user.mobno}
//           onChange={(e) => setUser({ ...user, mobno: e.target.value })}
//           required
//         />

//         <input
//           type="text"
//           placeholder="Address"
//           className="form-control mb-2"
//           value={user.address}
//           onChange={(e) => setUser({ ...user, address: e.target.value })}
//           required
//         />

//         <button type="submit" className="btn btn-primary w-100">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authService";
import "../css/register.css";
import Navbar from "../components/Navbar"; ;

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    uname: "",
    email: "",
    password: "",
    role: "FARMER",   // ✅ default role
    mobno: "",
    address: ""
  });

  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signup(user); // 👈 role bhi backend ja raha hai
      alert("Signup Successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Failed to signup. Try again!");
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
