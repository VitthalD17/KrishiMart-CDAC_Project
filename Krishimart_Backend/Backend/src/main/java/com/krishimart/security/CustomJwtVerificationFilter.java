//package com.krishimart.security;
//
//import java.io.IOException;
//import java.util.List;
//
//
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.krishimart.dto.ApiResp;
//
//import io.jsonwebtoken.Claims;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//
//@Slf4j
//@Component
//@RequiredArgsConstructor
//public class CustomJwtVerificationFilter extends OncePerRequestFilter {
//
//	private final JwtUtils jwtUtils;
//	private final ObjectMapper objectMapper;
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//			throws ServletException, IOException {
//		//check authorization header in the incoming request
//		try {
//		String authHeader=request.getHeader("Authorization");
//		if(authHeader!=null && authHeader.startsWith("Bearer ")) {
//			log.info("Bearer Token Found");
//			String jwt=authHeader.substring(7);
//			Claims claims=jwtUtils.validateToken(jwt);
//			
//			String userId=claims.get("user_id",String.class);
//			String role=claims.get("user_role",String.class);
//			List<SimpleGrantedAuthority> grantedAuthorities=List.of(new SimpleGrantedAuthority("ROLE_"+role));
//			
//			UserPrinciple userPrinciple = new UserPrinciple(
//			        userId,
//			        claims.getSubject(),
//			        null,
//			        grantedAuthorities,
//			        role
//			);
//			Authentication authentication = new UsernamePasswordAuthenticationToken(userPrinciple, null,
//					grantedAuthorities);
//			SecurityContextHolder.getContext().setAuthentication(authentication);
//			
//		}
//		filterChain.doFilter(request, response);
//	}catch(Exception e) {
//		log.error("Invalid JWT",e);
//		SecurityContextHolder.clearContext();
//		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//		response.setContentType("application.json");
//		ApiResp resp=new ApiResp(e.getMessage(),"Failed");
//		response.getWriter().write(objectMapper.writeValueAsString(resp));
//		return;
//	}
//}
//
//}

package com.krishimart.security;

import java.io.IOException;
import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.krishimart.dto.ApiResp;

import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class CustomJwtVerificationFilter extends OncePerRequestFilter {

    private final JwtUtils jwtUtils;
    private final ObjectMapper objectMapper;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        try {
            String authHeader = request.getHeader("Authorization");
            System.out.println("Filter checking request for: " + request.getServletPath());
            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                log.info("Bearer token found");
                String jwt = authHeader.substring(7);

                Claims claims = jwtUtils.validateToken(jwt);
                String userId = claims.get("user_id", String.class);
                String role = claims.get("user_role", String.class);

                List<SimpleGrantedAuthority> grantedAuthorities =
                        List.of(new SimpleGrantedAuthority("ROLE_" + role));

                UserPrinciple userPrinciple = new UserPrinciple(
                        userId,
                        claims.getSubject(),
                        "",
                        grantedAuthorities,
                        role
                );

                Authentication authentication =
                        new UsernamePasswordAuthenticationToken(userPrinciple, null, grantedAuthorities);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
            filterChain.doFilter(request, response);

        } catch (Exception e) {
            log.error("Invalid JWT", e);
            SecurityContextHolder.clearContext();
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType("application/json");
            ApiResp resp = new ApiResp(e.getMessage(), "Failed");
            response.getWriter().write(objectMapper.writeValueAsString(resp));
        }
    }
}

