package com.krishimart.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemRespDTO {

	private String pname;
	private int qty;
	private double price;
	private double total_amount;
	
	public OrderItemRespDTO(String pname, int qty, double price, double total_amount) {
		super();
		this.pname = pname;
		this.qty = qty;
		this.price = price;
		this.total_amount = total_amount;
	}
	
	
}
