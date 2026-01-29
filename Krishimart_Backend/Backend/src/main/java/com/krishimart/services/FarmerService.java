package com.krishimart.services;

import java.util.List;

import com.krishimart.dto.ApiResp;
import com.krishimart.dto.ProdDTO;
import com.krishimart.entities.Payments;

public interface FarmerService {
	
	//ApiResp FarmerSignUp(UserDTO dto);
	
	ApiResp AddProduct(ProdDTO dto, Long farmerId);

	List<ProdDTO> getMyProducts(Long farmerId);

	ApiResp updateMyProducts(Long productId, ProdDTO dto);

	ApiResp deleteMyProducts(Long productId);

	List<Payments> getMyPayments(Long farmerId);

}
