package com.krishimart.services;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.krishimart.customExcp.OrderRelatedException;
import com.krishimart.customExcp.ProductException;
import com.krishimart.customExcp.UserRelatedException;
import com.krishimart.dto.ApiResp;
import com.krishimart.dto.OrderItemReqDTO;
import com.krishimart.dto.OrderItemRespDTO;
import com.krishimart.dto.OrderReqDTO;
import com.krishimart.dto.OrderRespDTO;
import com.krishimart.dto.PayResp;
import com.krishimart.dto.UserDTO;
import com.krishimart.entities.OrderItems;
import com.krishimart.entities.Orders;
import com.krishimart.entities.Products;
import com.krishimart.entities.Role;
import com.krishimart.entities.Status;
import com.krishimart.entities.Users;
import com.krishimart.repository.OrderItemRepository;
import com.krishimart.repository.OrderRepository;
import com.krishimart.repository.ProductRepository;
import com.krishimart.repository.UserRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {

	final private OrderRepository orderRepository;
	final private OrderItemRepository orderItemRepository;
	final private ProductRepository productRepository;
	final private UserRepository userRepository;
	final private ModelMapper mapper;
	final private PasswordEncoder passwordEncoder;

	
	@Override
	public PayResp placeMyOrders(@Valid OrderReqDTO dto) {
		Users customer=userRepository.findById(dto.getCustomerId())
				.orElseThrow(()->new UserRelatedException("The Customer not Found!!"));
		Orders order=new Orders();
		order.setCustomer(customer);
		order.setStatus(Status.PLACED);
		order.setOrder_date(LocalDate.now());
		order.setTotal_amount(0.0);
		order=orderRepository.save(order);
		orderRepository.flush();
		
		double total=0.0;
		
		for(OrderItemReqDTO items:dto.getItems()) {
			
			Products product=productRepository.findById(items.getProductId())
					.orElseThrow(()->new ProductException("The Product Not Found"));
			
			double price=product.getPrice();
			int qty=items.getQty();
			double subTotal=price*qty;
			if (qty > product.getQty()) {
	            throw new ProductException(
	                "Insufficient stock for product: " + product.getPname()
	            );
	        }
			OrderItems ordersItem=new OrderItems();
			ordersItem.setOrder(order);
			ordersItem.setProduct(product);
			ordersItem.setPrice(price);
			ordersItem.setQuantity(qty);
			
			product.setQty(product.getQty() - qty);
	        productRepository.save(product);
			
			total=total+subTotal;
			orderItemRepository.save(ordersItem);
		}
		
		order.setTotal_amount(total);
		orderRepository.save(order);
		
		return new PayResp("The order Placed successFully!!", "Placed",order.getOrderId());
	}
	@Override
	public List<OrderRespDTO> getCustomersOrder(Long customerId) {
		orderRepository.findById(customerId)
		.orElseThrow(()->new OrderRelatedException("The User Dont Placed Any Order!!"));
		
		List<OrderRespDTO> order =orderRepository.findByCustomerUserId(customerId);
		//mapper.map(order,OrderRespDTO.class);
		return order;
	}
	
	@Override
	public OrderRespDTO getOrdersById(Long orderId) {
		Orders order=orderRepository.findById(orderId)
				.orElseThrow(()->new OrderRelatedException("Order Not Found"));
		//
		 List<OrderItems> orderItems =
		            orderItemRepository.findByOrderOrderId(orderId);
		
		List<OrderItemRespDTO> itemsDto=orderItems.stream()
								.map(items->new OrderItemRespDTO(
										items.getProduct().getPname(),
										items.getQuantity(),
										items.getPrice(),
										items.getQuantity()* items.getPrice()
										)).toList();
		
		OrderRespDTO orderResp=new OrderRespDTO(
				
				order.getOrderId(),
				order.getOrder_date(),
				order.getTotal_amount(),
				order.getStatus(),
				itemsDto
			);
		return orderResp;
	}
	
	@Override
	public ApiResp cancelMyOrder(Long orderId, Long customerId) {
		Orders order=orderRepository.findById(orderId)
				.orElseThrow(()->new OrderRelatedException("Order Not Found"));
		
		if(!order.getCustomer().getUserId().equals(customerId)) {
			throw new OrderRelatedException("You are not Allowed to cancel Order");
		}
		
		if(order.getStatus()==Status.DELIVERED) {
			throw new OrderRelatedException("Delivered Order not cancel");
		}
		
		order.setStatus(Status.CANCELLED);
		orderRepository.save(order);
		return new ApiResp("The Order cancelled successFully!!", "Cancelled");
	}

	@Override
	public List<Products> getAllProducts() {
		
		List<Products> prod=productRepository.findByFarmerAccStatusTrue();
		if(prod.isEmpty()) {
			throw new ProductException("There is no products");
		}
				
		return prod;
	}

}
