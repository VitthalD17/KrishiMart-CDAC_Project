package com.krishimart.dto;

import com.krishimart.entities.Users;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
//@AllArgsConstructor
@NoArgsConstructor
public class ProdDTO {


//@ManyToOne
//@JoinColumn(name = "farmer_id" ,nullable = false)
//private Users farmer;
private Long productId;
	
@NotBlank(message = "Product Name is Required")
private String pname;

@NotNull(message = "Price is Required")

private Double price;

@NotNull(message = "Quantity is Required")

private int qty;

@NotBlank(message = "Product Description is Required")

private String pdescription;

@NotBlank(message = "Image Url is Required")

private String imageurl;

public ProdDTO( Long productId,String pname, Double price,int qty,String pdescription,String imageurl) {
	super();
	this.productId=productId;
	this.pname = pname;
	this.price = price;
	this.qty = qty;
	this.pdescription = pdescription;
	this.imageurl = imageurl;
}

 public ProdDTO(String pname, Double price,int qty,String pdescription,String imageurl) {
	super();
	this.pname = pname;
	this.price = price;
	this.qty = qty;
	this.pdescription = pdescription;
	this.imageurl = imageurl;
}




}
