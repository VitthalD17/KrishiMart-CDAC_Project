import { Link, useNavigate } from "react-router-dom";
import "../css/farmerNav.css";

const FarmerNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="custom-header-nav">
      
      {/* Left Side: Logo */}
      <span className="brand-text">Krishimart🌾</span>

      {/* Right Side: Links + Logout */}
      <div className="nav-right-group">
        <ul className="custom-links-list">
          <li>
            <Link className="custom-link-item" to="/farmer/dashboard">
              Home
            </Link>
          </li>

          <li>
            <Link className="custom-link-item" to="/form">
              Add Product
            </Link>
          </li>

          <li>
            <Link className="custom-link-item" to="/payments">
              MyPayments
            </Link>
          </li>
        </ul>

        <button className="logout-btn-fixed" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default FarmerNavbar;
