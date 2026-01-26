import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Home = () => {
  // Back to top button effect
  useEffect(() => {
    const btn = document.getElementById("back-to-top-btn");
    const handleScroll = () => {
      if (window.scrollY > 300) btn.style.display = "block";
      else btn.style.display = "none";
    };
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    btn.addEventListener("click", scrollTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      btn.removeEventListener("click", scrollTop);
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="main mt-5 pt-4">
        <button id="back-to-top-btn">
          <i className="fas fa-angle-double-up"></i>
        </button>

        {/* Carousel */}
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/chnged.jpg" className="d-block w-100" alt="slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Krishi-Mart</h5>
                <p>
                  Krishi Mart enables farmers to sell their yield directly to customers without middlemen.
                  Better prices for farmers, affordable produce for customers.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/login.jpg" className="d-block w-100" alt="slide" />
            </div>
            <div className="carousel-item">
              <img src="/images/second.jpg" className="d-block w-100" alt="slide" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Marquee */}
        <div className="marquee">
          <marquee behavior="solid" direction="left">
            <div className="strip">
              <p>Sell your yield</p>
              <p>Buy grains</p>
              <p>Quality is your upmost priority</p>
              <p>Explore our products</p>
              <p>Purity</p>
              <p>Directly From Farmers</p>
            </div>
          </marquee>
        </div>

        {/* Gallery / Cards */}
        <div className="gallery container-fluid text-center my-5">
          <h1>What We Do</h1>
          <p>We take yield directly from farmers and deliver it to customers, ensuring better prices and fresh produce.</p>
        </div>

        <div className="container">
          <div className="row img_row align-items-center">
            <div className="col-md-6 bg-dark text-white text-center py-4">
              <p className="fs-2 m-1">Government official website</p>
              <p className="m-1">Refer this to dive deep in Krishi</p>
              <button className="btn btn-secondary">
                <a href="https://agriwelfare.gov.in/" target="_blank" style={{ color: "white" }}>
                  Explore here
                </a>
              </button>
            </div>
            <div className="col-md-6">
              <img src="/images/changed2.jpg" alt="info" className="img-fluid" width="560px" />
            </div>
          </div>
        </div>

        {/* Crop Cards */}
        <div className="container my-5">
          <p className="text-center fs-4 text-white mb-4">CATCH THE GLIMPSE</p>
          <div className="row g-3">
            {[
              { img: "wheat3.jpg", text: "Wheat – Essential grain for flour and breads" },
              { img: "rice.jpg", text: "Rice – Staple grain for daily meals" },
              { img: "bajra.jpg", text: "Bajra – High-fiber traditional millet" },
              { img: "chana.jpg", text: "Chana – Protein-rich pulse" },
              { img: "corn.jpg", text: "Maize – Nutritious grain for food and feed" },
              { img: "green garm.jpg", text: "Green Gram (Moong) – Light, protein-rich pulse" },
              { img: "groundnut.jpg", text: "Groundnut – Protein-rich oilseed crop" },
              { img: "soyabeen.jpg", text: "Soybean – Protein-packed oilseed" },
              { img: "tur.jpg", text: "Tur (Arhar) – Popular daily lentil" },
            ].map((item, idx) => (
              <div key={idx} className="col-md-4 mb-2">
                <div className="card bg-dark text-white h-100 hover-card">
                  <img src={`/images/${item.img}`} className="card-img-top" alt={item.text} />
                  <div className="card-body">
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
