import axios from "axios";

const BASE_URL = "http://localhost:8080/payments";

class PaymentService {

  createPayment(orderId, payMethod) {
    const token = localStorage.getItem("token");
    const customerId = localStorage.getItem("customerId");

    return axios.post(
      BASE_URL,
      {
        orderId,
        customerId,
        payMethod
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  markPaymentPaid(orderId) {
    const token = localStorage.getItem("token");

    return axios.patch(
      `${BASE_URL}/paid`,
      {},
      {
            params: { orderId },
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}

export default new PaymentService();
