//package com.krishimart.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//
//@Configuration
//@EnableWebSecurity
//@EnableMethodSecurity
//@RequiredArgsConstructor
//@Slf4j
//public class SecurityConfiguration {
//
//	private final CustomJwtVerificationFilter jwtFilter;
//	
//	@Bean
//	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
//		
//		http.csrf(csrf->csrf.disable());
//		http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//		
//		http.authorizeHttpRequests(request ->
//		request.requestMatchers("/v3/api-docs/**", "/swagger-ui/**","/farmers/signup","/customers/signup",
//				"/users/signin","/users/pwd-encryption").permitAll()
//		.requestMatchers("/farmers/**").hasRole("FARMER")
//		.requestMatchers("/customers/**").hasRole("CUSTOMER")
//		.anyRequest().authenticated())
//		.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//		return http.build();
//	}
//	
//	@Bean
//	AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
//		return config.getAuthenticationManager();
//	}
//	
//
//	@Bean
//	PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//}
package com.krishimart.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final CustomJwtVerificationFilter jwtFilter;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    	http.cors();
        http.csrf(csrf -> csrf.disable());
        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.authorizeHttpRequests(request ->
                request.requestMatchers("/v3/api-docs/**", 
                		"/swagger-ui/**",
                          "/users/signup",
                        "/users/signin", "/users/pwd-encryption","/error").permitAll()
                		.requestMatchers("/admin/**").hasRole("ADMIN")
                        .requestMatchers("/farmers/**").hasAnyRole("FARMER","ADMIN")
                        .requestMatchers("/customers/**").hasAnyRole("CUSTOMER","ADMIN")
                        .anyRequest().authenticated()
        ).addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
