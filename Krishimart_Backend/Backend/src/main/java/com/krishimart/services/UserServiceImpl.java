package com.krishimart.services;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.krishimart.customExcp.UserRelatedException;
import com.krishimart.dto.ApiResp;
import com.krishimart.dto.UserDTO;
import com.krishimart.entities.Role;
import com.krishimart.entities.Users;
import com.krishimart.repository.UserRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {
	
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final ModelMapper mapper;
	@Override
	public ApiResp userSignUp(@Valid UserDTO dto) {
		
	    if (userRepository.existsByEmail(dto.getEmail())) {
	        throw new UserRelatedException("User already exists!");
	    }
	    
	    Users userEntity = mapper.map(dto, Users.class);
	   // userEntity.setRole(Role.FARMER);
	    userEntity.setPassword(passwordEncoder.encode(dto.getPassword()));
	    userEntity.setAccStatus(true);
	    // 4. Save to DB
	    userRepository.save(userEntity);
	    return new ApiResp("SignUp Success", "Success");
	}

	
	

}
