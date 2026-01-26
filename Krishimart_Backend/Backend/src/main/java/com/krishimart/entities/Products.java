package com.krishimart.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "products")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Products {
@Column(name = "product_id")
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long productId;

@ManyToOne
@JoinColumn(name = "farmer_id" ,nullable = false)
private Users farmer;

@NotBlank(message = "Product Name is Required")
@Column(name = "prod_name",length = 100 ,nullable = false)
private String pname;

@NotNull(message = "Price is Required")
@Column(name = "price",nullable = false)
private Double price;

@NotNull(message = "Quantity is Required")
@Column(name = "quantity",nullable = false)
private int qty;

@NotBlank(message = "Product Description is Required")
@Column(name = "prod_desc",length = 200 ,nullable = false)
private String pdescription;

@NotBlank(message = "Image Url is Required")
@Column(name = "image_url",length = 255,nullable = false)
private String imageurl;

public Products(Long productId, String pname, Double price, int qty, String pdescription,
 String imageurl) {
	super();
	this.productId = productId;
	this.pname = pname;
	this.price = price;
	this.qty = qty;
	this.pdescription = pdescription;
	this.imageurl = imageurl;
}



}
