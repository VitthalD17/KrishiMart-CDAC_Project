package com.krishimart.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PayResp {
	
	private String message;
	private String status;
	private Long orderId;
	public PayResp(String message, String status, Long orderId) {
		super();
		this.message = message;
		this.status = status;
		this.orderId = orderId;
	}
	
}
