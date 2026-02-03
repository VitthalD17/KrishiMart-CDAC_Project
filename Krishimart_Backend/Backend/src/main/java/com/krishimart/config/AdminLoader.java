package com.krishimart.config;


import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.krishimart.entities.Role;
import com.krishimart.entities.Users;
import com.krishimart.repository.UserRepository;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class AdminLoader implements CommandLineRunner {


    private final UserRepository userRepository;

  
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {

        if (!userRepository.existsByEmail("admin@gmail.com")) {

            Users admin = new Users();
            admin.setUname("Admin");
            admin.setEmail("admin@gmail.com");
            admin.setPassword(passwordEncoder.encode("admin@123"));
            admin.setAddress("Maharashtra");
            admin.setMobno("9021373220");
            admin.setRole(Role.ADMIN);

            userRepository.save(admin);
            System.out.println("Default Admin Created");
        }
    }
}
