//package com.krishimart.security;
//
//import java.util.Collection;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import lombok.Getter;
//import lombok.RequiredArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
//
//@Getter
//@Setter
//@ToString
//@RequiredArgsConstructor
//public class UserPrinciple implements UserDetails {
//
//	private final String userId;
//	private final String email;
//	private final String password;
//	private final Collection<? extends GrantedAuthority> authorities;
//	private final String userRole;
//	
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities(){
//		return this.authorities;
//	}
//	
//	@Override
//	public String getUsername() {
//		return this.email;
//	}
//}


package com.krishimart.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Getter;

@Getter
public class UserPrinciple implements UserDetails {

    private final String userId;
    private final String email;
    private final String password;
    private final Collection<? extends GrantedAuthority> authorities;
    private final String userRole;
    private final Boolean accStatus;

    public UserPrinciple(String userId, String email, String password,
                         Collection<? extends GrantedAuthority> authorities,
                         String userRole,Boolean accStatus) {
        this.userId = userId;
        this.email = email;
        this.password = password != null ? password : "";
        this.authorities = authorities;
        this.userRole = userRole;
        this.accStatus=accStatus;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }



    @Override
    public boolean isAccountNonExpired() { return true; }

    @Override
    public boolean isAccountNonLocked() { return true; }

    @Override
    public boolean isCredentialsNonExpired() { return true; }

    @Override
    public boolean isEnabled() { return Boolean.TRUE.equals(accStatus); }
}
