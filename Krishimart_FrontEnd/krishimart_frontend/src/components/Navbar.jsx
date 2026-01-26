import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white text-dark fixed-top">
      <div className="container-fluid">
        <img src="/images/krishi2.jpg" alt="Logo" width="120" />
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/products">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/sellers">Sellers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
