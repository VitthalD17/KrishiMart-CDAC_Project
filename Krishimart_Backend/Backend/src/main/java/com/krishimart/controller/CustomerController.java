package com.krishimart.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.krishimart.dto.OrderReqDTO;
import com.krishimart.dto.UserDTO;
import com.krishimart.services.CustomerService;


import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/customers")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

	final private CustomerService customerService;
	

	
	@PostMapping("/orders")
	public ResponseEntity<?> placeMyOrders(@Valid @RequestBody OrderReqDTO dto){
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(customerService.placeMyOrders(dto));
	}
	
	@GetMapping("orders/{customerId}")
	public ResponseEntity<?> getCustomersOrder(@PathVariable Long customerId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(customerService.getCustomersOrder(customerId));
	}
	
	@GetMapping("/{orderId}")
	public ResponseEntity<?> getOrdersById(@PathVariable Long orderId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(customerService.getOrdersById(orderId));
	}
	
	@PatchMapping("/{orderId}/cancel")
	public ResponseEntity<?> cancelMyOrder(@PathVariable Long orderId,@RequestParam Long customerId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(customerService.cancelMyOrder(orderId,customerId));
	}
	
	@GetMapping("/products")
	public ResponseEntity<?> getAllProducts(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(customerService.getAllProducts());
	}
}
