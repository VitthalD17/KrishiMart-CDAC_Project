import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import orderService from '../services/CustomerService';
import "../components/CustomerNavbar"
import CustomerNavbar from '../components/CustomerNavbar';

export default function OrderDetails() {
  const { orderId } = useParams(); 
  const [order, setOrder] = useState({});

  useEffect(() => {
    orderService.getOrderById(orderId)
      .then(res => {
        console.log(res.data);
        setOrder(res.data); 
      })
      .catch(err => {
        console.error(err);
        alert("Order not found!");
      });
  }, [orderId]);

  return (
    <div className="container mt-4 myorder-page">
        <CustomerNavbar/>
        <br></br>
        <br></br>
      <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
        <div className="card-body">
          <h5 className="card-title">Order ID: {order.orderId}</h5>
          <p className="card-text"><strong>Order Date:</strong> {order.order_date}</p>
          <p className="card-text"><strong>Total Amount:</strong> ₹ {order.total_amount}</p>
          <p className="card-text">
            <strong>Status:</strong> 
            <span className={`badge ${
                order.status==="PLACED" ? "bg-primary":
              order.status === "DELIVERED" ? "bg-success" :
              order.status === "CANCELLED" ? "bg-danger" : "bg-info"
            }`}>
              {order.status}
            </span>
          </p>

          <h6>Items:</h6>
          {order.item && order.item.length > 0 ? (
            <ul className="list-group mb-3">
              {order.item.map((it, index) => (
                <li className="list-group-item" key={index}>
                  ProductName:{it.pname} <br/> Qty: {it.qty} <br/> ₹ {it.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in this order</p>
          )}

          <Link to="/orders">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
