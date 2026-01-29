// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { login } from "../services/authService";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // login() should return { token, role }
//       const data = await login(email, password);

//       // save token in localStorage
//       localStorage.setItem("token", data.jwt);
//       localStorage.setItem("role", data.role);

//       // redirect based on role
//       if (data.role === "CUSTOMER") {
//         localStorage.setItem("customerId", data.userId);
//         navigate("/dashboard"); // your customer dashboard route
//       } else if (data.role === "FARMER") {
//         localStorage.setItem("farmerId", data.userId);
//         navigate("/farmer/dashboard"); // if admin
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Invalid credentials or user not registered!");
//     }
//   };

//   return (
//     <div className="container mt-5 pt-5" style={{ maxWidth: "400px" }}>
//       <h2 className="text-center mb-4">Login</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           className="form-control mb-2"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="form-control mb-2"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn btn-success w-100">
//           Login
//         </button>
//       </form>
//       <p className="mt-3 text-center">
//         Not registered? <Link to="/signup">Signup here</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(email, password);

      localStorage.setItem("token", data.jwt);
      localStorage.setItem("role", data.role);

      if (data.role === "CUSTOMER") {
        localStorage.setItem("customerId", data.userId);
        navigate("/dashboard");
      } else if (data.role === "FARMER") {
        localStorage.setItem("farmerId", data.userId);
        navigate("/farmer/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid credentials or user not registered!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-card">
          <h3 className="text-center text-dark mb-4">Login to Krishimart🌾</h3>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label text-dark">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-dark">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Login
            </button>

            <p className="text-center mt-3">
              New user? <Link to="/signup">Register here</Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
