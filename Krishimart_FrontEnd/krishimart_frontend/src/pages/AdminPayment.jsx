import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminService from "../services/AdminService";

export default function AdminPayments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = () => {
    AdminService.getAllPayments()
      .then((res) => {
        console.log(res.data);
        setPayments(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AdminNavbar />

      <div className="container mt-4">
        <h3 className="mb-3 text-primary">All Payments</h3>

        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Payment ID</th>
              <th>Order ID</th>
              <th>Customer ID</th>
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

                  {/* Customer ID only */}
                  <td>{pay.order?.customer?.userId}</td>

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
                    {pay.payment_date
                      ? new Date(pay.payment_date).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
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
