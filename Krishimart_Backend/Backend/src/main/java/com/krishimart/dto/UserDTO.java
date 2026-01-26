package com.krishimart.dto;

import com.krishimart.entities.Role;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class UserDTO {

	@NotBlank(message = "Name is required")
	private String uname;

	@NotBlank(message = "Email is required")
	@Email(message = "Invalid email format")
	private String email;

	@NotBlank(message = "Password is required")
	// @Pattern(regexp = "((?=.*\\\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message =
	// "Blank or invalid password")
	private String password;

	@NotNull(message = "Role cannot be null")
	private Role role;

	@NotBlank(message = "Mobile number is required")
	private String mobno;

	@NotBlank(message = "Address is required")
	private String address;
}
