package com.krishimart.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AuthDTO {

	@NotBlank(message = "Email is Required")
	@Email(message ="Invalid Email Format")
	private String email;
	
	@NotBlank(message="Pass is Required")
	//@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#@$*]).{5,20})",message = "Blank or invalid password")
	private String password;
}
