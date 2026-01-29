import React from "react";
import Navbar from "../components/Navbar"; // ya CommonNavbar
import "../css/about.css";
import "../css/footer.css";
import "../css/nav.css";
import "../css/index.css";

const About = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pd m-2 mt-5">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6 bg-dark text-white p-4">
              <h3 className="fw-bold">Krishi Mart</h3>
              <h4>2026</h4>

              <p className="fs-5 mt-3">
                We are building a digital marketplace that connects farmers
                directly with customers, eliminating middlemen and ensuring
                fair prices for everyone. Our platform empowers farmers to sell
                their grains and agricultural produce with transparency, while
                customers get access to fresh, high-quality products straight
                from the source.
                <br /><br />
                By using technology, we aim to support rural communities,
                promote sustainable agriculture, and create a trustworthy
                ecosystem where farmers earn what they deserve and consumers
                know exactly where their food comes from.
              </p>
            </div>

            <div className="col-md-6 bg-dark p-0">
              <img
                className="img-fluid h-100 w-100"
                src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/07/17080224/pic.jpg"
                alt="Krishi Mart"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="container-fluid bg-dark text-white footer mt-5">
        <div className="row p-3">
          <div className="info col-md-4 text-center">
            <p className="fs-4">Krishi Mart Pvt Ltd.</p>
            <p>
              Copyright © 2026 Krishi Mart Private Limited.
              <br />All Rights Reserved
            </p>
          </div>

          <div className="pages col-md-4 text-center">
            <p className="fs-4">Our Pages</p>
            <a href="/" className="m-1">Home</a>
            <a href="/about" className="m-1">About</a>
            <a href="/products" className="m-1">Products</a>
            <a href="/login" className="m-1">Login</a>
            <a href="/contact" className="m-1">Contact</a>
          </div>

          <div className="icons col-md-4 text-center">
            <p className="fs-4">Our Social Media Pages</p>
            <a href="#" className="m-1 fs-4"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#" className="m-1 fs-4"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="m-1 fs-4"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="m-1 fs-4"><i className="fa-brands fa-facebook"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
