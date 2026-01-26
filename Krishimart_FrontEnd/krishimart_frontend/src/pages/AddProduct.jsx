import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import farmerService from "../services/FarmerService"
export default function AddProduct() {
const navigate=useNavigate()
const [formdetails,setformdetails]=useState({
            pname:"",
            price:"", 
            qty:"",
           pdescription:"", 
            imageurl:""})

const addNewProduct=(event) => {
    event.preventDefault()
    if(
            formdetails.pname === ""||
            formdetails.price === "" ||
            formdetails.qty === "" ||
            formdetails.pdescription === "" ||
            formdetails.imageurl === ""
    ){
        alert("Plz fill all the fields")
    }else{
        farmerService.addNewProduct(formdetails)
        .then((result)=>{
            navigate("/farmer/dashboard")
        }).catch((err)=>{

        })
    }
}         

const handlechange=(event)=>{
    var {name,value}=event.target 
    setformdetails({...formdetails,[name]:value})
}
  return (

    <div>
         <form name='myfrm' onSubmit={addNewProduct}>
  <div className="form-group">
    <label htmlFor="pname">Prod_Name</label>
    <input type="text" className="form-control" id="pname" name='pname'
    value={formdetails.pname}
    onChange={handlechange}
    /> 
  </div>
  <div className="form-group">
    <label htmlFor="price">Price</label>
    <input type="Number" className="form-control" id="price" name='price'
     value={formdetails.price}
    onChange={handlechange}
    />
  </div>
   <div className="form-group">
    <label htmlFor="qty">Qty</label>
    <input type="number" className="form-control" id="qty" name='qty'
     value={formdetails.qty}
    onChange={handlechange}
    />
  </div>
   <div className="form-group">
    <label htmlFor="pdescription">Description</label>
    <input type="text" className="form-control" id="pdescription" name='pdescription'
     value={formdetails.pdescription}
    onChange={handlechange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="imageurl">Image</label>
    <input type="text" className="form-control" id="imageurl" name='imageurl'
     value={formdetails.imageurl}
    onChange={handlechange}
    />
  </div>
  

  <button type="submit" className="btn btn-primary" name='add' id='add'>AddProduct</button>
</form>
    </div>
  )
}
