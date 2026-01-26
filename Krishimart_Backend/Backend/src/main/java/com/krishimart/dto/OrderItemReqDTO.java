package com.krishimart.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemReqDTO {

	@NotNull(message = "The Product id is Required")
	private Long productId;
	
	@Min(value=1, message = "The Qty must be greater than 0")
	private int qty;
}
