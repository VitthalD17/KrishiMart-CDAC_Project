
const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white footer mt-5">
      <div className="row text-center">
        <div className="col-md-4">
          <p>Krishi Mart Pvt Ltd © 2026</p>
        </div>
        <div className="col-md-4 pages">
          <a href="/">Home</a> | <a href="/login">Login</a>
        </div>
        <div className="col-md-4 icons">
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
