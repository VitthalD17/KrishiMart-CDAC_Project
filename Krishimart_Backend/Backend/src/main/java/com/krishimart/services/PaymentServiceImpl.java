package com.krishimart.services;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.krishimart.customExcp.OrderRelatedException;
import com.krishimart.customExcp.PaymentRelatedException;
import com.krishimart.dto.ApiResp;
import com.krishimart.dto.PaymentReqDTO;
import com.krishimart.entities.OrderItems;
import com.krishimart.entities.Orders;
import com.krishimart.entities.PaymentStatus;
import com.krishimart.entities.Payments;
import com.krishimart.entities.Users;
import com.krishimart.repository.OrderItemRepository;
import com.krishimart.repository.OrderRepository;
import com.krishimart.repository.PaymentRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService {

	final private PaymentRepository paymentRepository;
	final private OrderRepository orderRepository;
	final private OrderItemRepository orderItemRepository;
	@Override
	public ApiResp createMyPayment(@Valid PaymentReqDTO dto) {

		Orders order = orderRepository.findById(dto.getOrderId())
	            .orElseThrow(() -> new OrderRelatedException("Order Not Found"));

	    List<OrderItems> orderItems = orderItemRepository.findByOrder(order);

	    if (orderItems.isEmpty()) {
	        throw new OrderRelatedException("No items found for this order");
	    }

	    Map<Users, Double> farmerAmountMap = new HashMap<>();

	    for (OrderItems item : orderItems) {
	        Users farmer = item.getProduct().getFarmer();
	        double amount = item.getQuantity() * item.getPrice();
	        farmerAmountMap.merge(farmer, amount, Double::sum);
	    }

	    for (Users farmer : farmerAmountMap.keySet()) {
	        Payments payment = new Payments();
	        payment.setOrder(order);
	        payment.setFarmer(farmer);
	        payment.setAmount(farmerAmountMap.get(farmer));
	        payment.setPay_status(PaymentStatus.PENDING);
	        payment.setPayment_date(LocalDateTime.now());

	        paymentRepository.save(payment);
	    }

		
		return new ApiResp("Payments created farmer-wise", "PENDING");
	}
	@Override
	public ApiResp markPaymentPaid(Long orderId) {
		
		Orders order=orderRepository.findById(orderId)
				.orElseThrow(()->new OrderRelatedException("Order Not Found!!"));
		
		List<Payments> payments=paymentRepository.findByOrder(order);
		if(payments.isEmpty()) {
			throw new PaymentRelatedException("There is no Payment");
		}
		
		for(Payments payment:payments) {
			payment.setPay_status(PaymentStatus.PAID);
			payment.setPayment_date(LocalDateTime.now());
		}
		
		paymentRepository.saveAll(payments);
		return new ApiResp("The Payment status updated successFully!!", "Paid");
	}

}
