package com.krishimart.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.krishimart.dto.PaymentReqDTO;
import com.krishimart.services.PaymentService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/payments")
public class PaymentController {

	final private PaymentService paymentService;
	
	@PostMapping
	public ResponseEntity<?> createMyPayment(@Valid @RequestBody PaymentReqDTO dto){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(paymentService.createMyPayment(dto));
	}
	
	@PatchMapping("/paid")
	public ResponseEntity<?> markPaymentPaid( Long orderId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(paymentService.markPaymentPaid(orderId));
	}
}
