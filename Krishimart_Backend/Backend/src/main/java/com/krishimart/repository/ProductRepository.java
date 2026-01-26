package com.krishimart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.krishimart.dto.ProdDTO;
import com.krishimart.entities.Products;
import com.krishimart.entities.Users;

import java.util.List;


public interface ProductRepository extends JpaRepository<Products, Long> {
	
	@Query("Select new com.krishimart.dto.ProdDTO(p.productId,p.pname,p.price,p.qty,p.pdescription,"
			+ "p.imageurl) From Products p where p.farmer.userId=:farmerId")
	List<ProdDTO> findByFarmerUserId(@Param("farmerId") Long farmerId);
}
