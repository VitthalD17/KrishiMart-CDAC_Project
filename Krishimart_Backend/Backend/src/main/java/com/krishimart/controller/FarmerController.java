package com.krishimart.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.krishimart.dto.ProdDTO;
import com.krishimart.dto.UserDTO;
import com.krishimart.services.FarmerService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/farmers")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class FarmerController {

	private final FarmerService farmerService;
//	
//	@PostMapping("/signup")
//	public ResponseEntity<?> FarmerSignUp( @Valid @RequestBody UserDTO dto){
//		
//		return ResponseEntity.status(HttpStatus.CREATED).body(farmerService.FarmerSignUp(dto));
//	}
	
	
	@PostMapping("/products")
	public ResponseEntity<?> AddProduct( @Valid @RequestBody ProdDTO dto,@RequestParam Long farmerId){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(farmerService.AddProduct(dto,farmerId));
	}
	
	@GetMapping("/products/{farmerId}")
	public ResponseEntity<?> getMyProducts(@PathVariable Long farmerId){
		return ResponseEntity.status(HttpStatus.OK).body(farmerService.getMyProducts(farmerId));
	}
	
	@PutMapping("/products/{productId}")
	public ResponseEntity<?> updateMyProducts(@PathVariable Long productId,@Valid @RequestBody ProdDTO dto){
		return ResponseEntity.status(HttpStatus.OK).body(farmerService.updateMyProducts(productId,dto));
	}
	
	@DeleteMapping("/products/{productId}")
	public ResponseEntity<?> deleteMyProducts(@PathVariable Long productId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(farmerService.deleteMyProducts(productId));
	}
}
