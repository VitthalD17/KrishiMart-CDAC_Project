package com.krishimart.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = "password")
public class Users {
@Column(name = "user_id")
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long userId;

@Column(name = "user_name", length = 100, nullable = false)
private String uname;


@Column(name = "email", unique = true, nullable = false)
private String email;


@Column(name = "password", nullable = false)
private String password;


@Enumerated(EnumType.STRING)
@Column(name = "user_role", nullable = false)
private Role role;


@Column(name = "mobile_no", length = 15, nullable = false)
private String mobno;


@Column(name = "address", length = 250, nullable = false)
private String address;

@Column(nullable = false)
private Boolean accStatus=true;


}
