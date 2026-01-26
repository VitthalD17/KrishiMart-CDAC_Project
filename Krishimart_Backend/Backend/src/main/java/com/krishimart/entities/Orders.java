package com.krishimart.entities;

import java.time.LocalDate;
import java.util.ArrayList;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Table(name="orders")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Orders {
	
	@Column(name = "order_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long orderId;
	
	@ManyToOne
	@JoinColumn(name = "customers_id",nullable = false)
	private Users customer;
	
	@NotNull(message = "The Order Date is Required")
	@Column(name = "order_date",nullable = false)
	private LocalDate order_date;
	
	@NotNull(message = "Total Amout is Required")
	@Column(name = "total_amount",nullable = false)
	private Double total_amount;
	
	@NotNull(message = "The Staus is Required")
	@Enumerated(EnumType.STRING)
	@Column(name = "status",nullable = false)
	private Status status;
	
}
