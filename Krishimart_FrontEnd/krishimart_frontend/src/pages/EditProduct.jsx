import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FarmerService from "../services/FarmerService";
import FarmerNavbar from "../components/FarmerNavbar";

export default function EditProduct() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formdetails, setformdetails] = useState({
    productId: "",
    pname: "",
    price: "",
    qty: "",
    pdescription: "",
    imageurl: "",
  });

  useEffect(() => {
    if (!location.state || !location.state.proddata) {
      navigate("/farmer/dashboard");
      return;
    }
    setformdetails(location.state.proddata);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformdetails({ ...formdetails, [name]: value });
  };

  const updateProduct = (event) => {
    event.preventDefault();

    if (
      formdetails.productId === "" ||
      formdetails.pname === "" ||
      formdetails.price === "" ||
      formdetails.qty === "" ||
      formdetails.pdescription === "" ||
      formdetails.imageurl === ""
    ) {
      alert("Please fill all the fields");
    } else {
      FarmerService.updateProduct(formdetails)
        .then(() => {
          navigate("/farmer/dashboard");
        })
        .catch(() => {});
    }
  };

  return (
    <>
    <FarmerNavbar />
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow-lg p-4">
            <h3 className="text-center mb-4">Edit Product</h3>

            <form onSubmit={updateProduct}>

          
              <div className="mb-3">
                <label className="form-label">Product ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="productId"
                  value={formdetails.productId}
                  readOnly
                />
              </div>

           
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="pname"
                  value={formdetails.pname}
                  onChange={handleChange}
                  placeholder="Enter product name"
                />
              </div>

          
              <div className="mb-3">
                <label className="form-label">Price (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={formdetails.price}
                  onChange={handleChange}
                />
              </div>

            
              <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  name="qty"
                  value={formdetails.qty}
                  onChange={handleChange}
                />
              </div>

            
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="pdescription"
                  rows="3"
                  value={formdetails.pdescription}
                  onChange={handleChange}
                ></textarea>
              </div>

          
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageurl"
                  value={formdetails.imageurl}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success px-4">
                  Update
                </button>

                <button
                  type="button"
                  className="btn btn-secondary px-4"
                  onClick={() => navigate("/farmer/dashboard")}
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
