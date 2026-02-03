import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import paymentService from "../services/PaymentService";
import customerService from "../services/CustomerService";
import CustomerNavbar from "../components/CustomerNavbar";
import "../css/payment.css";
import { sendLog } from "../services/LoggerService";

export default function Payment() {

  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [payMethod, setPayMethod] = useState("CARD");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    customerService.getOrderById(orderId)
      .then(res => {
        setOrder(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Order not found");
        navigate("/dashboard");
      });
  }, [orderId, navigate]);


  const handlePayment = async () => {
    try {
      await paymentService.createPayment(orderId, payMethod);
      const res = await paymentService.markPaymentPaid(orderId);
      alert(res.data.message || "Payment Successful");
      
      navigate("/success",{
         state: {
    orderId: order.orderId,
    amount: order.total_amount,
    paymentMode: payMethod
  }
  
      });
      sendLog(`Payment SuccessFull OrderId: ${orderId} Payment Method:${payMethod}`)
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message ||
        "Payment failed"
      );
      sendLog(`Payment Failed ${err}`)
    }
  };

  if (loading) {
    return <h3 className="text-center mt-5">Loading Payment...</h3>;
  }

  return (
    <>
      <CustomerNavbar />

      <div className="container payment-container payment-page">
        <div className="payment-box">

          <h2 className="text-center mb-3">💳 Payment</h2>

          <p><b>Order ID:</b> {order.orderId}</p>
          <p><b>Total Amount:</b> ₹ {order.total_amount}</p>

          <hr />

          <h5>Select Payment Method</h5>

          <div className="payment-methods">

            <label>
              <input
                type="radio"
                checked={payMethod === "CARD"}
                onChange={() => setPayMethod("CARD")}
              />
              💳 Card
            </label>

            <label>
              <input
                type="radio"
                checked={payMethod === "UPI"}
                onChange={() => setPayMethod("UPI")}
              />
              📱 UPI
            </label>

            <label>
              <input
                type="radio"
                checked={payMethod === "COD"}
                onChange={() => setPayMethod("COD")}
              />
              💵 Cash on Delivery
            </label>
          </div>

       
          {payMethod === "CARD" && (
            <div className="payment-content">
              <input placeholder="Card Number" />
              <input placeholder="MM/YY" />
              <input placeholder="CVV" />
            </div>
          )}

          {payMethod === "UPI" && (
            <div className="payment-content">
              <input placeholder="UPI ID" />
            </div>
          )}

          {payMethod === "COD" && (
            <p className="cod-text">
              Pay when order is delivered
            </p>
          )}

          <button className="pay-btn" onClick={handlePayment}>
            Pay ₹ {order.total_amount}
          </button>

        </div>
      </div>
    </>
  );
}
