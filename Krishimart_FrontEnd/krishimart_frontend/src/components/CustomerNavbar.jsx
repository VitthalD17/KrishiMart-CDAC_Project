
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
   
    <span className="brand-text">Krishimart🌾</span>

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