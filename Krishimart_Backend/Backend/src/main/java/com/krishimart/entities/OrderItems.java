package com.krishimart.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "order_items")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class OrderItems {
	
	@Column(name = "order_items_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long orderItemId;
	
	@ManyToOne
	@JoinColumn(name = "order_id",nullable = false)
	private Orders order;
	
	@ManyToOne
	@JoinColumn(name = "product_id",nullable = false)
	private Products product;
	
	
	@Column(name = "quantity",nullable = false)
	private int quantity;
	
	@NotNull(message = "The Price is Required")
	@Column(name = "price",nullable = false)
	private Double price;
	
}
