package com.krishimart.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krishimart.entities.Orders;
import com.krishimart.entities.Payments;
import com.krishimart.entities.Users;

public interface PaymentRepository extends JpaRepository<Payments, Long> {

	 Optional<Payments> findByOrderAndFarmer(Orders order, Users farmer);

	    List<Payments> findByFarmerUserId(Long farmerId);

	    List<Payments> findByOrderOrderId(Long orderId);
	    
	    List<Payments> findByOrder(Orders order);
}
