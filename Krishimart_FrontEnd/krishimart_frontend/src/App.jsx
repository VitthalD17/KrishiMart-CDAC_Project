import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import CustomerDashboard from './pages/CustomerDashboard';
import FarmerDashboard from "./pages/FarmerDashboard";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";
import MyOrder from "./pages/MyOrder";
import OrderDetails from "./pages/OrderDetails";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import FarmerPayments from "./pages/FarmerPayments";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
        <Route path="/orders" element={<MyOrder/>}/>
        <Route path="/orders/:orderId" element={< OrderDetails/>}/>
        <Route path="/payments/:orderId" element={<Payment/>} />
        <Route path="/success" element={<PaymentSuccess/>}/>
        <Route path="/payments" element={< FarmerPayments/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
