package com.krishimart.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentReqDTO {

	@NotNull(message = "The orderID must be required")
	private Long orderId;
	
	@NotNull(message = "The customerID must be required")
	private Long customerId;
	
	@NotNull(message = "The payment method must be required")
	private PaymentMethod payMethod;
}
