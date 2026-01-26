import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FarmerService from "../services/FarmerService";


export default function EditProduct(){
    const navigate= useNavigate()
    const location=useLocation()

    const [formdetails,setformdetails]=useState({
    productId:"",
	pname:"",
	price:"",
    qty:"",
	pdescription:"",
	imageurl:""
    })

    useEffect(()=>{
        if(!location.state || !location.state.proddata){
            navigate("/farmer/dashboard")
            return
        }
        setformdetails(location.state.proddata)
    },[])

    const handleChange=(event)=>{
        const {name , value} = event.target 
        setformdetails({...formdetails,[name]:value})
    }

    const updateProduct=(event)=> {
        event.preventDefault()

        if(
            formdetails.productId==="" ||
            formdetails.pname === ""||
            formdetails.price === "" ||
            formdetails.qty === "" ||
            formdetails.pdescription === "" ||
            formdetails.imageurl === ""
        ){
            alert("Please fill all the fields")
        }else{
            FarmerService.updateProduct(formdetails)
            .then((result) => {
                navigate("/farmer/dashboard")
            })
            .catch((err) => {

            })
        }
    }

    return (

        <div>
            <form name="myfrm" onSubmit={updateProduct}>
                <div className="form-group">
                    <label htmlFor="productId">ProdId</label>
                    <input type="text" className="form-control" id="productId" name="productId"
                    value={formdetails.productId}
                    onChange={handleChange}
                    readOnly/>
                </div>
                {/* Product Name */}
                        <div className="mb-3">
                            <label className="form-label">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="pname"
                                value={formdetails.pname}
                                onChange={handleChange}
                                placeholder="Enter product name"
                            />
                        </div>

                        {/* Price */}
                        <div className="mb-3">
                            <label className="form-label">Price (₹)</label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                value={formdetails.price}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Quantity */}
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                name="qty"
                                value={formdetails.qty}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                name="pdescription"
                                rows="3"
                                value={formdetails.pdescription}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {/* Image URL */}
                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageurl"
                                value={formdetails.imageurl}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success" >
                                Update Product
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate("/farmer/dashboard")}
                            >
                                Cancel
                            </button>
                        </div>
            </form>
        </div>
    )


}