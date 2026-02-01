import React, { useEffect, useState } from "react";
import orderService from "../services/CustomerService";
import CustomerNavbar from "../components/CustomerNavbar";
import {Link} from 'react-router-dom'
import {sendLog} from "../services/LoggerService"
import "../css/MyOrder.css"
export default function MyOrder() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        orderService.getOrdersByCustomerId()
            .then((res) => {
                console.log("Orders response:", res.data);
                setOrders(res.data);   
            })
            .catch((err) => {
                console.log(err);
                alert("No Orders Found");
            });
    }, []);

   
    const cancelOrder = (orderId) => {

        if (!window.confirm("Are you sure you want to cancel this order?")) {
            return;
        }

        orderService.cancelMyOrder(orderId)
            .then((res) => {
                alert(res.data.message || "Order cancelled successfully");
                sendLog(`Order Cancelled SuccessFully !! ${orderId}`)
                
                setOrders(prevOrders =>
                    prevOrders.map(order =>
                        order.orderId === orderId
                            ? { ...order, status: "CANCELLED" }
                            : order
                    )
                );
            })
            .catch((err) => {
                console.error(err);
                alert(
                    err.response?.data?.message ||
                    "Order cannot be cancelled"
                );
                sendLog(`Order Not Cancelled ${err}`)
            });
    };

    return (
        <>
            <CustomerNavbar />

            <div className="myorder-page">
                <h2 className="mb-3 text-black">My Orders</h2>

                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Order ID</th>
                            <th>Order Date</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.length > 0 ? (
                            orders.map(order => (
                                <tr key={order.orderId}>
                                    <td>{order.orderId}</td>
                                    <td>{order.order_date}</td>
                                    <td>₹ {order.total_amount}</td>
                                    <td>
                                        <span className="badge bg-info">
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        {order.status === "DELIVERED" ||
                                         order.status === "CANCELLED" ? (
                                            <button
                                                className="btn btn-secondary btn-sm"
                                                disabled
                                            >
                                                Cancel
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-danger btn-sm-2 order-btn me-2"
                                                onClick={() => cancelOrder(order.orderId)}
                                            >
                                                Cancel
                                            </button>
                                        )}
                                        <Link to={`/orders/${order.orderId}`}>
                                        <button type='button' name='view' id='view' className="btn btn-success btn-sm-2 order-btn">View</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No Orders Available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
