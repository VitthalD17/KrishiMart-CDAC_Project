package com.krishimart.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.krishimart.customExcp.ProductException;
import com.krishimart.customExcp.UserRelatedException;
import com.krishimart.dto.ApiResp;
import com.krishimart.dto.ProdDTO;
import com.krishimart.dto.UserDTO;
import com.krishimart.entities.Payments;
import com.krishimart.entities.Products;
import com.krishimart.entities.Role;
import com.krishimart.entities.Users;
import com.krishimart.repository.PaymentRepository;
import com.krishimart.repository.ProductRepository;
import com.krishimart.repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;


@Service
@Transactional
@AllArgsConstructor
public class FarmerServiceImpl implements FarmerService {

	final private ModelMapper mapper;
	final private ProductRepository productRepository;
	final private UserRepository userRepository;
	final private PaymentRepository paymentRepository;
	
	@Override
	public ApiResp AddProduct(ProdDTO dto,Long fid) {
		Users farmer= userRepository.findById(fid).orElseThrow(()->new ProductException("The User is Not Present"));
		Products prod=mapper.map(dto, Products.class);
		prod.setFarmer(farmer);
		productRepository.save(prod);
		return new ApiResp("The Product Added SuccessFully", "Added");
	}
	
	@Override
	public List<ProdDTO> getMyProducts(Long farmerId) {
	List<ProdDTO> prod=productRepository.findByFarmerUserId(farmerId);
		return prod;
	}

	@Override
	public ApiResp updateMyProducts(Long productId, ProdDTO dto) {
		Products product=productRepository.findById(productId)
				.orElseThrow(()->new ProductException("There is No Product to Update"));
		product.setPname(dto.getPname());
		product.setPrice(dto.getPrice());
		product.setQty(dto.getQty());
		product.setPdescription(dto.getPdescription());
		product.setImageurl(dto.getImageurl());
	//	mapper.map(product, Products.class);
		productRepository.save(product);
		
		return new ApiResp("The Product Updated SuccessFully!!", "Updated");
	}

	@Override
	public ApiResp deleteMyProducts(Long productId) {
		Products product=productRepository.findById(productId)
				.orElseThrow(()->new ProductException("The Product Not Exist!!"));
				
				productRepository.deleteById(productId);
		return new ApiResp("The Product Removed SuccessFully!!", "Removed");
	}

	@Override
	public List<Payments> getMyPayments(Long farmerId) {
		List<Payments> payment=paymentRepository.findByFarmerUserId(farmerId);
		return payment;
	}

}
