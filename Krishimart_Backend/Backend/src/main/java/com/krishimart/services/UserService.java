package com.krishimart.services;

import com.krishimart.dto.ApiResp;
import com.krishimart.dto.UserDTO;

import jakarta.validation.Valid;

public interface UserService {

	ApiResp userSignUp(@Valid UserDTO dto);

}
