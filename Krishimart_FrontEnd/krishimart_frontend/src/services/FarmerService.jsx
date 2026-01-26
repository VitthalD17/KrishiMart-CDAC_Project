import axios from "axios";

const BASE_URL = "http://localhost:8080/farmers";

class FarmerService {

  addNewProduct(product){
     const token = localStorage.getItem("token");
     const farmerId = localStorage.getItem("farmerId");
     return axios.post(`${BASE_URL}/products?farmerId=${farmerId}`, product, {
       headers: {
           Authorization: `Bearer ${token}`
       }
  });

  }
    getMyProducts(farmerId) {
        const token = localStorage.getItem("token");
        return axios.get(`${BASE_URL}/products/${farmerId}`,{
             headers: {
        Authorization: `Bearer ${token}`
      }
        });
    }

    deleteProduct(productId) {
        const token = localStorage.getItem("token");
        return axios.delete(`${BASE_URL}/products/${productId}`,{
             headers: {
        Authorization: `Bearer ${token}`
      }
        });
    }

    updateProduct(product) {
        const token = localStorage.getItem("token");
        return axios.put(`${BASE_URL}/products/${product.productId}`,product,{
             headers: {
        Authorization: `Bearer ${token}`
      }
        });
    }
}

export default new FarmerService();
