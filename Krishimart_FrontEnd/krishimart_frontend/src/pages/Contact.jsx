import React from "react";
import "../css/contact.css";
import "../css/nav.css";
import "../css/footer.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
    <Navbar/>
      {/* ===== CONTACT SECTION ===== */}
      <section className="py-3 py-md-5 py-xl-8 mt-5 p-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Need Help</h2>
              <p className="text-secondary text-center lead fs-6">
                Our team is available to provide prompt and helpful responses to all inquiries.
              </p>
              <hr className="w-50 mx-auto mb-5 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container main">
          <div className="row">
            <div className="col-12">
              <div className="card border border-dark rounded shadow-sm overflow-hidden">
                <div className="card-body p-0">
                  <div className="row gy-3 gy-md-4 gy-lg-0">

                    {/* LEFT SIDE */}
                    <div
                      className="col-12 col-lg-6 bsb-overlay background-position-center background-size-cover bgimg"
                    >
                      <div className="row align-items-lg-center justify-content-center h-100">
                        <div className="col-11 col-xl-10">
                          <div className="contact-info-wrapper py-4 py-xl-5">
                            <h2 className="h1 mb-3 text-dark">Get in touch</h2>
                            <p className="lead fs-4 text-dark opacity-75 mb-4">
                              Our professional staff is ready to assist
                            </p>

                            <div className="mb-4">
                              <h4 className="text-dark">Address</h4>
                              <p>Mumbai, Maharashtra</p>
                            </div>

                            <div className="mb-4">
                              <h4 className="text-dark">Phone</h4>
                              <p>+91 9422049422</p>
                            </div>

                            <div className="mb-4">
                              <h4 className="text-dark">Email</h4>
                              <p>jdpiyush9422@gmail.com</p>
                            </div>

                            <div>
                              <h4 className="text-dark">Opening Hours</h4>
                              <p>Mon - Fri : 9am - 8pm</p>
                              <p>Sat - Sun : 9am - 2pm</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="col-12 col-lg-6">
                      <div className="row align-items-lg-center h-100">
                        <div className="col-12">
                          <form>
                            <div className="row gy-4 p-4 p-xl-5 color">

                              <div className="col-12">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" />
                              </div>

                              <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" />
                              </div>

                              <div className="col-md-6">
                                <label className="form-label">Phone</label>
                                <input type="tel" className="form-control" />
                              </div>

                              <div className="col-12">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-control" />
                              </div>

                              <div className="col-12">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="3"></textarea>
                              </div>

                              <div className="col-12">
                                <div className="d-grid">
                                 <Link to="/" className="text-decoration-none">
                                    <button className="btn btn-primary btn-lg w-100" type="button">
                                         Send Message
                                         </button>
                                </Link>
                                </div>
                              </div>

                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <div className="container-fluid bg-dark text-white footer">
        <div className="row">
          <div className="col-md-4 text-center">
            <p className="fs-4">Krishi Mart Pvt Ltd</p>
            <p>© 2026 All Rights Reserved</p>
          </div>

          <div className="col-md-4 text-center">
            <p className="fs-4">Our Pages</p>
            <p>Home | About | Products | Login | Contact</p>
          </div>

          <div className="col-md-4 text-center">
            <p className="fs-4">Social Media</p>
            <i className="fa-brands fa-whatsapp m-2 fs-4"></i>
            <i className="fa-brands fa-instagram m-2 fs-4"></i>
            <i className="fa-brands fa-twitter m-2 fs-4"></i>
            <i className="fa-brands fa-facebook m-2 fs-4"></i>
          </div>
        </div>
      </div>
    </>
  );
}
