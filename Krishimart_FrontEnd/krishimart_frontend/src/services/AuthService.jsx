import axios from "axios";
import { sendLog } from "./LoggerService";

const API_URL = "http://localhost:8080/users";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, {
      email,
      password
    });

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      
    }

    return response.data;
  } catch (error) {
   
    throw error;
  }
};

export const signup = async (user) => {
  const response = await axios.post(`${API_URL}/signup`, user);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  sendLog("User Logout SuccessFully!!")
};

export const getCurrentUser = () => {
  return localStorage.getItem("token");
};
