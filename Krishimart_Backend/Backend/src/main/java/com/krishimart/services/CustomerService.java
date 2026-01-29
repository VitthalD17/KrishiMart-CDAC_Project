package com.krishimart.services;

import java.util.List;

import com.krishimart.dto.ApiResp;
import com.krishimart.dto.OrderItemRespDTO;
import com.krishimart.dto.OrderReqDTO;
import com.krishimart.dto.OrderRespDTO;
import com.krishimart.dto.PayResp;
import com.krishimart.dto.UserDTO;
import com.krishimart.entities.Products;

import jakarta.validation.Valid;

public interface CustomerService {

	PayResp placeMyOrders(@Valid OrderReqDTO dto);

	List<OrderRespDTO> getCustomersOrder(Long customerId);

	OrderRespDTO getOrdersById(Long orderId);

	ApiResp cancelMyOrder(Long orderId, Long customerId);

	//ApiResp CustomerSignUp(@Valid UserDTO dto);

	List<Products> getAllProducts();

}
