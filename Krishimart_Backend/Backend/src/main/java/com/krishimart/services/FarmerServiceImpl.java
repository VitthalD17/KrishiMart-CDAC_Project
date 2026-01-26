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
import com.krishimart.entities.Products;
import com.krishimart.entities.Role;
import com.krishimart.entities.Users;
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
	
//	@Override
//	public ApiResp FarmerSignUp(UserDTO dto) {
////		Users userEntity= userRepository.findByEmail(dto.getEmail())
////				.orElseThrow(()->new UserRelatedException("The User Already Exists"));
//		if(userRepository.existsByEmail(dto.getEmail())) {
//			throw new UserRelatedException("The User Already Exists");
//		}
//	 Users userEntity=mapper.map(dto,Users.class);
//		userEntity.setRole(Role.FARMER);
//		userRepository.save(userEntity);
//		return new ApiResp("The Farmer SignUp SuccessFully","Success");
//	}
	
//	private PasswordEncoder passwordEncoder; // SecurityConfig mein Bean honi chahiye
//
//	@Override
//	public ApiResp FarmerSignUp(UserDTO dto) {
//	    // 1. Check if user exists
//	    if (userRepository.existsByEmail(dto.getEmail())) {
//	        throw new UserRelatedException("User already exists!");
//	    }
//
//	    // 2. Map DTO to Entity
//	    Users userEntity = mapper.map(dto, Users.class);
//	    userEntity.setRole(Role.FARMER);
//	    // 3. ENCODE THE PASSWORD (SABSE ZAROORI)
//	    // Ye plain text password ko "$2a$10..." jaise hash mein badal dega
//	    userEntity.setPassword(passwordEncoder.encode(dto.getPassword()));
//
//	    // 4. Save to DB
//	    userRepository.save(userEntity);
//	    return new ApiResp("SignUp Success", "Success");
//	}
	
	
	
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

}
