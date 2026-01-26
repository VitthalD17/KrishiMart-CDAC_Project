import axios from "axios";

const base_url = "http://localhost:8080";

class CustomerService {
  getAllProducts() {
    const token = localStorage.getItem("token"); // fetch latest token
    return axios.get(`${base_url}/customers/products`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}

export default new CustomerService();
