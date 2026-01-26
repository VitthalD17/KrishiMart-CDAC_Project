import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import CustomerDashboard from './pages/CustomerDashboard';
import FarmerDashboard from "./pages/FarmerDashboard";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard/>}/>
        <Route path="/edit/:productId" element={<EditProduct/>}/>
        <Route path="/form" element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
