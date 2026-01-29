import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomerNavbar from "../components/CustomerNavbar";
import "../css/paymentSuccess.css";

export default function PaymentSuccess() {

  const navigate = useNavigate();
  const { state } = useLocation();

  // fallback (refresh ke case me)
  const orderId = state?.orderId || "N/A";
  const amount = state?.amount || 0;
  const paymentMode = state?.paymentMode || "Online";

  return (
    <>
      <CustomerNavbar />

      <div className="success-page">
        <div className="success-container">
          <div className="check-icon">✅</div>

          <h1>Payment Successful</h1>
          <p>Thank you for shopping with <b>Krishi Mart</b></p>
          <p>Your order has been placed successfully.</p>

          <div className="order-box">
            <p><b>Order ID:</b> {orderId}</p>
            <p><b>Payment Mode:</b> {paymentMode}</p>
            <p><b>Amount Paid:</b> ₹{amount}</p>
          </div>

          <div className="btn-group">
            <button className="btn btn-success" onClick={() => navigate("/dashboard")}>
              Go to Home
            </button>&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={() => navigate("/orders")}>
              My Orders
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
