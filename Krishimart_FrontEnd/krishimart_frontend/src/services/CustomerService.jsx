import axios from "axios";

const base_url = "http://localhost:8080/customers";

class CustomerService {
  getAllProducts() {
    const token = localStorage.getItem("token"); 
    return axios.get(`${base_url}/products`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  getOrdersByCustomerId() {
  const token = localStorage.getItem("token");
  const customerId = localStorage.getItem("customerId");

  return axios.get(`${base_url}/orders/${customerId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

getOrderById(orderId){
  const token = localStorage.getItem("token");
  return axios.get(`${base_url}/${orderId}`,{
   headers:{
    Authorization: `Bearer ${token}`
   }
  });

}

cancelMyOrder(orderId){
  const token =localStorage.getItem("token");
  const customerId=localStorage.getItem("customerId");

  return axios.patch(`${base_url}/${orderId}/cancel`,{},
    {
       params:{customerId},
     headers:{
      Authorization: `Bearer ${token}`
     }
  });
}

  placeOrder(orderData) {
    const token = localStorage.getItem("token");
    return axios.post(`${base_url}/orders`, orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  }
}

export default new CustomerService();
