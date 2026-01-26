package com.krishimart.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "farmer_payments")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Payments {

@Column(name = "payment_id")
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long paymentId;

@ManyToOne
@JoinColumn(name = "orders_id",nullable = false)
private Orders order;

@ManyToOne
@JoinColumn(name = "farmers_id",nullable = false)
private Users farmer;

@NotNull(message = "Amount Required")
@Column(name = "amount",nullable = false)
private Double amount;

@NotNull(message = "Payment status Needed")
@Enumerated(EnumType.STRING)
@Column(name = "payment_status",nullable = false)
private PaymentStatus pay_status;

@Column(name="Payment_date",nullable=false)
private LocalDateTime payment_date;
}
