import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import farmerService from "../services/FarmerService";
import FarmerNavbar from "../components/FarmerNavbar";
import "../css/addProducts.css";

export default function AddProduct() {

  const navigate = useNavigate();

  const [formdetails, setformdetails] = useState({
    pname: "",
    price: "",
    qty: "",
    pdescription: "",
    imageurl: ""
  });

  const addNewProduct = (event) => {
    event.preventDefault();

    if (
      formdetails.pname === "" ||
      formdetails.price === "" ||
      formdetails.qty === "" ||
      formdetails.pdescription === "" ||
      formdetails.imageurl === ""
    ) {
      alert("Plz fill all the fields");
    } else {
      farmerService.addNewProduct(formdetails)
        .then(() => {
          navigate("/farmer/dashboard");
        })
        .catch(() => {});
    }
  };

  const handlechange = (event) => {
    var { name, value } = event.target;
    setformdetails({ ...formdetails, [name]: value });
  };

  return (
    <>
      <FarmerNavbar />

      <div className="addproduct-container">
        <div className="addproduct-card">

          <h3 className="text-center mb-4">Add New Product</h3>

          <form name="myfrm" onSubmit={addNewProduct}>

            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="pname"
                value={formdetails.pname}
                onChange={handlechange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={formdetails.price}
                onChange={handlechange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                name="qty"
                value={formdetails.qty}
                onChange={handlechange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                name="pdescription"
                value={formdetails.pdescription}
                onChange={handlechange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageurl"
                value={formdetails.imageurl}
                onChange={handlechange}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Add Product
            </button>

          </form>

        </div>
      </div>
    </>
  );
}
