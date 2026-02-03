package com.krishimart.services;

import java.util.List;

import com.krishimart.dto.ApiResp;
import com.krishimart.dto.UserRespDTO;
import com.krishimart.entities.Payments;




public interface AdminService {

	List<UserRespDTO> getAllUsers();

	ApiResp deleteUser(Long userId);

	ApiResp updateUserStatus(Long userId);

	List<Payments> getAllPayments();

}
