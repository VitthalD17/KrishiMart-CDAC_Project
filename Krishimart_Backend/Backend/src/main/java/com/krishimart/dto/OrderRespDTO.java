package com.krishimart.dto;

import java.time.LocalDate;
import java.util.List;

import com.krishimart.entities.Status;
import com.krishimart.entities.Users;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderRespDTO {

	private Long orderId;
	//private Users customer;
	
	private LocalDate order_date;
	
	private Double total_amount;
	
	private Status status;
	
	private List<OrderItemRespDTO> item;

	public OrderRespDTO(Long orderId, LocalDate order_date, Double total_amount, Status status) {
		super();
		this.orderId = orderId;
		this.order_date = order_date;
		this.total_amount = total_amount;
		this.status = status;
	}

	public OrderRespDTO(Long orderId, LocalDate order_date, Double total_amount, Status status,
			List<OrderItemRespDTO> item) {
		super();
		this.orderId = orderId;
		this.order_date = order_date;
		this.total_amount = total_amount;
		this.status = status;
		this.item = item;
	}
	
	
}
