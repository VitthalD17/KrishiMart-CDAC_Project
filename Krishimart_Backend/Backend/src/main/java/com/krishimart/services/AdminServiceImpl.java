package com.krishimart.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.krishimart.customExcp.PaymentRelatedException;
import com.krishimart.customExcp.UserRelatedException;
import com.krishimart.dto.ApiResp;
import com.krishimart.dto.UserRespDTO;
import com.krishimart.entities.Payments;
import com.krishimart.entities.Role;
import com.krishimart.entities.Users;
import com.krishimart.repository.PaymentRepository;
import com.krishimart.repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {
	
	private final UserRepository userRepository;
	private final PaymentRepository paymentRepository;

	@Override
	public List<UserRespDTO> getAllUsers() {
		
		List<UserRespDTO> user=userRepository.findByRoleNot(Role.ADMIN);
		
		return user;
	}

	@Override
	public ApiResp deleteUser(Long userId) {
		Users user= userRepository.findById(userId)
				.orElseThrow(()->new UserRelatedException("User Not Found"));
		user.setAccStatus(false);
		userRepository.save(user);
		return new ApiResp("User Removed By Admin","Removed");
	}

	@Override
	public ApiResp updateUserStatus(Long userId) {
		Users user=userRepository.findById(userId)
				.orElseThrow(()->new UserRelatedException("User Not Found"));
		user.setAccStatus(true);
		userRepository.save(user);
		return new ApiResp("User account Activated", "Activated");
	}

	@Override
	public List<Payments> getAllPayments() {
		List<Payments> payment=paymentRepository.findAll();
		if(payment.isEmpty()) {
			throw new PaymentRelatedException("No Payment Received Yet");
		}
		return payment;
	}

}
