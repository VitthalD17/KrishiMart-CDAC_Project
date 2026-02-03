package com.krishimart.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.krishimart.repository.UserRepository;
import com.krishimart.services.AdminService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

	private final AdminService adminService;
	
	@GetMapping("/users")
	public ResponseEntity<?> getAllUsers(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.getAllUsers());
	}
	
	@PatchMapping("/users/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.deleteUser(userId));
	}
	
	@PatchMapping("/status/{userId}")
	public ResponseEntity<?> updateUserStatus(@PathVariable Long userId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.updateUserStatus(userId));
	}
	
	@GetMapping("/users/payments")
	public ResponseEntity<?> getAllPayments(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.getAllPayments());
	}
}
