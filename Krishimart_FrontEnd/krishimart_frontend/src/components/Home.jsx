import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const btn = document.getElementById("back-to-top-btn");

    const handleScroll = () => {
      if (btn) btn.style.display = window.scrollY > 300 ? "block" : "none";
    };

    const scrollTop = () =>
      window.scrollTo({ top: 0, behavior: "smooth" });

    if (btn) {
      btn.addEventListener("click", scrollTop);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("click", scrollTop);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const products = [
    { img: "wheat3.jpg", text: "Wheat – Essential grain for flour and breads" },
    { img: "rice.jpg", text: "Rice – Staple grain for daily meals" },
    { img: "bajra.jpg", text: "Bajra – High-fiber traditional millet" },
    { img: "chana.jpg", text: "Chana – Protein-rich pulse" },
    { img: "corn.jpg", text: "Maize – Nutritious grain for food and feed" },
    { img: "green garm.jpg", text: "Green Gram (Moong) – Light, protein-rich pulse" },
    { img: "groundnut.jpg", text: "Groundnut – Protein-rich oilseed crop" },
    { img: "soyabeen.jpg", text: "Soybean – Protein-packed oilseed" },
    { img: "tur.jpg", text: "Tur (Arhar) – Popular daily lentil" },
  ];

  return (
    <>
      <Navbar />

      <div className="main mt-5 pt-4">

       
        <button
          id="back-to-top-btn"
          className="btn btn-success position-fixed bottom-0 end-0 m-4"
          style={{ display: "none", zIndex: 1000 }}
        >
          ↑
        </button>

      
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="/images/home.jpeg" className="d-block w-100" alt="slide" />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>Krishi-Mart</h5>
                <p>Directly from farmers to customers. No middlemen.</p>
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
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        
        <div className="bg-success text-white py-2 mt-4">
          <marquee>
            Sell your Yield • Buy Fresh Grains • Quality First • Direct from Farmers
          </marquee>
        </div>

        <div className="container text-center my-5">
          <h1>What We Do</h1>
          <p>
            We connect farmers directly with customers, ensuring better prices
            and fresh produce.
          </p>
        </div>

      
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-6 bg-dark text-white text-center p-4">
              <h4>Government Agriculture Website</h4>
              <p>Explore schemes and agricultural policies</p>
              <a
                href="https://agriwelfare.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Explore Here
              </a>
            </div>

            <div className="col-md-6">
              <img src="/images/changed2.jpg" className="img-fluid" alt="info" />
            </div>
          </div>
        </div>

        
        <div className="container my-5">
          <h3 className="text-center text-white mb-4">
            CATCH THE GLIMPSE
          </h3>

          <div className="row g-4 align-items-stretch">
            {products.map((item, idx) => (
              <div key={idx} className="col-md-4 d-flex">
                <div className="card bg-dark text-white w-100 h-100">

                  
                  <div className="ratio ratio-4x3">
                    <img
                      src={`/images/${item.img}`}
                      className="card-img-top img-fluid"
                      alt={item.text}
                    />
                  </div>

                  <div className="card-body d-flex align-items-center justify-content-center text-center">
                    <p className="m-0">{item.text}</p>
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
