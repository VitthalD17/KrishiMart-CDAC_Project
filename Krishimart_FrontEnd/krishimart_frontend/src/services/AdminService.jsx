import axios from "axios";

const base_url = "http://localhost:8080/admin";

class AdminService{
    getAllUsers(){
         const token = localStorage.getItem("token");
         return axios.get(`${base_url}/users`, {

      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    }

    getAllPayments(){
         const token = localStorage.getItem("token");
         return axios.get(`${base_url}/users/payments`, {

      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    }

    deleteUser(userId){
        const token = localStorage.getItem("token");
        return axios.patch(`${base_url}/users/${userId}`,{},{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

    }
    updateStatusUser(userId){
        const token = localStorage.getItem("token");
        return axios.patch(`${base_url}/status/${userId}`,{},{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

    }
}

export default new AdminService();