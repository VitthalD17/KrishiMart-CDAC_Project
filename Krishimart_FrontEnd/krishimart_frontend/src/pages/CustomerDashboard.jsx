import React, { useEffect, useState } from "react";
import customerService from "../services/CustomerService";
import CustomerNavbar from "../components/CustomerNavbar";
import { useNavigate } from "react-router-dom";

export default function CustomerDashboard() {
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    const name = localStorage.getItem("username") || "Customer";
    setUsername(name);
  }, []);

  const fetchProducts = async () => {
    try {
      const result = await customerService.getAllProducts();
      setProducts(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const placeOrder = (productId) => {
    const customerId = localStorage.getItem("customerId");
    const orderData = {
      customerId,
      items: [{ productId, qty: 1 }]
    };

    customerService
      .placeOrder(orderData)
      .then((res) => {
        console.log("Order placed response:", res.data);
        const orderId = res.data.orderId;
        if (!orderId) {
          alert("Order ID not received");
          return;
        }
        navigate(`/payments/${orderId}`);
      })
      .catch((err) => {
        console.error(err);
        alert("Order failed");
      });
  };

  return (
    <>
      <CustomerNavbar />

     
      <div className="container-fluid px-5 mt-4">
        <h2 className="mb-4">Welcome to KrishiMart🌾</h2>

        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.productId}>
              <div className="card h-100 shadow-sm">
                <img
                  src={
                    product.imageurl?.startsWith("http")
                      ? product.imageurl
                      : `/images/${product.imageurl}`
                  }
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                  alt={product.pname}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.pname}</h5>
                  <p className="card-text">{product.pdescription}</p>
                  <p className="fw-bold">₹ {product.price}</p>
                  <p>Available: {product.qty}</p>

                  <button
                    className="btn btn-success mt-auto"
                    onClick={() => placeOrder(product.productId)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}