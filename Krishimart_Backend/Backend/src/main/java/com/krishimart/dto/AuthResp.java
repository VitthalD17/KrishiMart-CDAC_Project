package com.krishimart.dto;


import com.krishimart.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class AuthResp {
	private String jwt;
	private String message;
	private String role;
	private String userId;
	
}
