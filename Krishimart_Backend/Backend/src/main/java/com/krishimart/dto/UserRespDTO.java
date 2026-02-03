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
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor

public class UserRespDTO {

	private Long userId;
	private String uname;
	private String email;
	private Role role;
	private String mobno;
	private String address;
	private Boolean accStatus;
}
