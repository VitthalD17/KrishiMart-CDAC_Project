import axios from "axios";

const API_URL = "http://localhost:8080/users";

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/signin`, { email, password });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

export const signup = async (user) => {
  const response = await axios.post(`${API_URL}/signup`, user);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  return localStorage.getItem("token");
};
