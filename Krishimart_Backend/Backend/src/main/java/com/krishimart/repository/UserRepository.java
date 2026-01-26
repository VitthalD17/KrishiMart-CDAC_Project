package com.krishimart.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krishimart.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long> {

	boolean existsByEmail(String email);
	Optional<Users> findByEmail(String email);
}
