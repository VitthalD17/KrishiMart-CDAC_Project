import React, { useEffect, useState } from "react";
import farmerService from "../services/FarmerService"
import FarmerNavbar from "../components/FarmerNavbar";

export default function FarmerPayments() {

  const [payments, setPayments] = useState([]);

  const farmerId = localStorage.getItem("farmerId");

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = () => {
    farmerService.getPaymentsByFarmer(farmerId)
      .then((res) => {
        console.log(res.data);
        setPayments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <FarmerNavbar />

      <div className="container mt-4">
        <h3 className="mb-3 text-success">My Payments</h3>

        <table className="table table-striped table-bordered">
          <thead className="table-success">
            <tr>
              <th>Payment ID</th>
              <th>Order ID</th>
              <th>Amount (₹)</th>
              <th>Status</th>
              <th>Payment Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.length > 0 ? (
              payments.map((pay) => (
                <tr key={pay.paymentId}>
                  <td>{pay.paymentId}</td>
                  <td>{pay.order?.orderId}</td>
                  <td>{pay.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        pay.pay_status === "PAID"
                          ? "bg-success"
                          : "bg-warning"
                      }`}
                    >
                      {pay.pay_status}
                    </span>
                  </td>
                  <td>
                    {new Date(pay.payment_date).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No payments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
