// import { Link, useNavigate } from "react-router-dom";
// import "../css/customerNav.css"

// const CustomerNavbar = () => {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <div>
//        <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
//       <span className="navbar-brand">Krishimart🌾</span>

//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link" to="/dashboard"></Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/orders">My Orders</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/dashboard">Home</Link>
//         </li>
//       </ul>

//       <button className="btn btn-light logout-btn-custom" onClick={logout} >Logout</button>
//     </nav>
//     </div>
   
//   );
// };

// export default CustomerNavbar;
import { Link, useNavigate } from "react-router-dom";
import "../css/customerNav.css";

const CustomerNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
  <nav className="custom-header-nav">
    {/* Left Side: Sirf Logo */}
    <span className="brand-text">Krishimart🌾</span>

    {/* Right Side Group: Home + Orders + Logout */}
    <div className="nav-right-group">
      <ul className="custom-links-list">
        <li>
          <Link className="custom-link-item" to="/dashboard">Home</Link>
        </li>
        <li>
          <Link className="custom-link-item" to="/orders">My Orders</Link>
        </li>
      </ul>
      
      <button className="logout-btn-fixed" onClick={logout}>
        Logout
      </button>
    </div>
  </nav>
);
}
export default CustomerNavbar;