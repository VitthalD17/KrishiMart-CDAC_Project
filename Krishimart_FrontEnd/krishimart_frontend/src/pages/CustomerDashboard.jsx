import React, { useEffect, useState } from "react";
import customerService from "../services/CustomerService";
import CustomerNavbar from "../components/CustomerNavbar";

export default function CustomerDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const result = await customerService.getAllProducts();
      setProducts(result.data); // backend returns array
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div className="container mt-4">
      <CustomerNavbar />
      <h2>Welcome to Your Dashboard</h2>
      <div className="row mt-3">
        {products.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={`/images/${product.imageurl}`} // store images in public/images/
                className="card-img-top"
                alt={product.pname}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.pname}</h5>
                <p className="card-text">{product.pdescription}</p>
                <p className="fw-bold">₹ {product.price}</p>
                <p>Quantity: {product.qty}</p>
                <button className="btn btn-success w-100" >Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
