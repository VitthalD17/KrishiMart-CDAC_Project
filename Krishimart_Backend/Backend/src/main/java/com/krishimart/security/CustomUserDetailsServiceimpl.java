//package com.krishimart.security;
//
//
//
//import java.util.List;
//
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.krishimart.entities.Users;
//import com.krishimart.repository.UserRepository;
//
//import jakarta.transaction.Transactional;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//
//@Service
//@Transactional
//@RequiredArgsConstructor
//@Slf4j
//public class CustomUserDetailsServiceimpl implements UserDetailsService {
//
//	private final UserRepository userRepository;
//	
//	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//		Users user=userRepository.findByEmail(email)
//				.orElseThrow(()-> new UsernameNotFoundException("This User is not Exists!!!"));
//		return new UserPrinciple(String.valueOf(user.getUserId()),
//				user.getEmail(),user.getPassword(),
//				List.of(new SimpleGrantedAuthority(user.getRole().name())),user.getRole().name());
//	}
//}

package com.krishimart.security;

import java.util.List;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.krishimart.entities.Users;
import com.krishimart.repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class CustomUserDetailsServiceimpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new UserPrinciple(
                String.valueOf(user.getUserId()),
                user.getEmail(),
                user.getPassword(),
                List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().name())),
                user.getRole().name(),
                user.getAccStatus()
               
        );
    }
}
