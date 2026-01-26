package com.krishimart.controller;



import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.krishimart.dto.AuthDTO;
import com.krishimart.dto.AuthResp;
import com.krishimart.dto.UserDTO;
import com.krishimart.entities.Role;
import com.krishimart.security.JwtUtils;
import com.krishimart.security.UserPrinciple;
import com.krishimart.services.UserService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/users")
@Validated
@Slf4j
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;
	private final AuthenticationManager authenticationMgr;
	private final JwtUtils jwtUtils;

	@PostMapping("/signin")
	@Operation(description = "User authentication")
	public ResponseEntity<?> userSignIn(@RequestBody @Valid AuthDTO dto){
		
		Authentication holder=new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword());
		log.info("---Before authenticated---",holder.isAuthenticated());
		Authentication fullyAuth=authenticationMgr.authenticate(holder);
		UserPrinciple userPrinciple=(UserPrinciple)fullyAuth.getPrincipal();
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(new AuthResp(jwtUtils.generateToken(userPrinciple),"SuccessFully Login",userPrinciple.getUserRole(),userPrinciple.getUserId()));
		
	}
	

	@PostMapping("/signup")
	public ResponseEntity<?> FarmerSignUp( @Valid @RequestBody UserDTO dto){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.userSignUp(dto));
	}
}
