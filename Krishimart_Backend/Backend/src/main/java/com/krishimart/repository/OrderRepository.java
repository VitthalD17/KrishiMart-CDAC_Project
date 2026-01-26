package com.krishimart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.krishimart.dto.OrderRespDTO;
import com.krishimart.entities.Orders;

public interface OrderRepository extends JpaRepository<Orders, Long>{

	@Query("""
			select new com.krishimart.dto.OrderRespDTO(o.orderId,o.order_date,o.total_amount,o.status)
			 from Orders o where o.customer.userId=:customerId
			""")
	List<OrderRespDTO> findByCustomerUserId(@Param(value = "customerId") Long customerId);
}
