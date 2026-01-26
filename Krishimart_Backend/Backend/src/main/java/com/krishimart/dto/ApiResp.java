package com.krishimart.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ApiResp {

	private String message;
	private String status;
	private LocalDateTime Ts;
	
	public ApiResp(String message,String status) {
		this.message=message;
		this.status=status;
		Ts=LocalDateTime.now();
	}
}
