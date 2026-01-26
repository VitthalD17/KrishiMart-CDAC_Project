package com.krishimart.dto;

import java.util.List;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderReqDTO {

	@NotNull(message = "Customer id is Required")
	private Long customerId;
	
	@NotEmpty(message = "OrderItem must not be Empty")
	private List<OrderItemReqDTO>items;
}
