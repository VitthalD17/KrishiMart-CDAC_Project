package com.krishimart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krishimart.entities.OrderItems;
import com.krishimart.entities.Orders;

public interface OrderItemRepository extends JpaRepository<OrderItems, Long> {

	List<OrderItems> findByOrderOrderId(Long orderId);
	List<OrderItems> findByOrder(Orders order);

}
