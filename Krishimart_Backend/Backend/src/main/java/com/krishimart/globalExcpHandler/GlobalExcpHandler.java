package com.krishimart.globalExcpHandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.krishimart.customExcp.OrderRelatedException;
import com.krishimart.customExcp.PaymentRelatedException;
import com.krishimart.customExcp.ProductException;
import com.krishimart.customExcp.UserRelatedException;
import com.krishimart.dto.ApiResp;

@RestControllerAdvice
public class GlobalExcpHandler {

	@ExceptionHandler(ProductException.class)
	public ResponseEntity<?> handleProductException(ProductException e){
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(new ApiResp(e.getMessage(),"Failed"));
	}
	
	@ExceptionHandler(UserRelatedException.class)
	public ResponseEntity<?> handleUserRelatedException(UserRelatedException e){
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(new ApiResp(e.getMessage(), "Failed"));
	}
	
	@ExceptionHandler(OrderRelatedException.class)
	public ResponseEntity<?> handleOrderRelatedException(OrderRelatedException e){
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(new ApiResp(e.getMessage(),"Failed"));
	}
	
	@ExceptionHandler(PaymentRelatedException.class)
	public ResponseEntity<?> handlePaymentRelatedException(PaymentRelatedException e){
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ApiResp("The Payment is Paid", "Paid"));
	}
}
