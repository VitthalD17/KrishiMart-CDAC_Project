import { Link, useNavigate } from "react-router-dom";

const CustomerNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
      <span className="navbar-brand">KrishiMart</span>

      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/orders">My Orders</Link>
        </li>
      </ul>

      <button className="btn btn-light" onClick={logout}>Logout</button>
    </nav>
  );
};

export default CustomerNavbar;
