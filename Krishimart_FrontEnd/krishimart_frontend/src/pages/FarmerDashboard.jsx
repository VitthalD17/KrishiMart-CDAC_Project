import React, { useEffect, useState } from "react";
import FarmerService from "../services/FarmerService";
import { Link } from "react-router-dom";
import FarmerNavbar from "../components/FarmerNavbar";

export default function FarmerDashboard() {

    const [products, setProducts] = useState([]);
    const farmerId = localStorage.getItem("farmerId");

    useEffect(() => {
        loadMyProducts();
    }, []);

    const loadMyProducts = () => {
        FarmerService.getMyProducts(farmerId)
            .then(res => {
                console.log("Products:", res.data);
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    };

    const deleteProduct = (productId) => {
        FarmerService.deleteProduct(productId)
            .then(() => {
                loadMyProducts(); e
            })
            .catch(err => console.log(err));
    };

    return (
        <>
        <FarmerNavbar/>
        <div className="container mt-4">
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((p, index) => (
                        <tr key={index}>
                            <td>
                                <img
                                    src={`/images/${p.imageurl}`}
                                    alt={p.pname}
                                    width="80"
                                    height="60"
                                />
                            </td>
                            <td>{p.pname}</td>
                            <td>₹ {p.price}</td>
                            <td>{p.qty}</td>
                            <td>{p.pdescription}</td>
                            <td>
                             <Link to={`/edit/${p.productId}`} state={{proddata:p}}>
                             <button type='button' name='edit' id='edit' className='btn btn-info btn-sm px-3'>✏️ Edit</button>
                             </Link>
                                <button
                                    className="btn btn-danger btn-sm px-3"
                                    onClick={() => deleteProduct(p.productId)}
                                >
                                   🗑️ Delete
                                </button>&nbsp;&nbsp;&nbsp;
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        </>
    );
}
