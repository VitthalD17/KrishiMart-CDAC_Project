# 🌾 Krishi Mart – Farmer-to-Customer E-Commerce Platform

Krishi Mart is a full-stack e-commerce web application designed to connect farmers directly with customers.  
The platform eliminates middlemen, ensuring fair pricing for consumers and better profit margins for farmers through a transparent digital marketplace.

---

## 🎯 Project Purpose
The goal of Krishi Mart is to digitize the agricultural supply chain by enabling direct farmer-to-customer transactions.  
It reduces dependency on intermediaries, improves farmers’ income, and provides customers with fresh produce at reasonable prices using a secure and scalable system.

---

## 🏗️ Project Architecture
The application follows a decoupled and layered architecture for scalability and maintainability.

- Frontend: React.js (Vite)
- Backend: Spring Boot REST APIs (Controller → Service → Repository)
- Database: MySQL (Relational Database)

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- React Router DOM
- Bootstrap

### Backend
- Spring Boot 3.x
- Spring Data JPA (Hibernate)
- MySQL
- Spring Security with JWT
- Swagger / OpenAPI
- ModelMapper

---

## 👥 User Roles & Features

### 👨‍🌾 Farmer
- Secure registration and role-based login
- Add, update, and delete farm products
- View listed products and track sales

### 🛒 Customer
- Browse and search agricultural products
- Place orders and manage cart
- View order history and payment status

### 👨‍💼 Admin
- Activate or deactivate user accounts
- Monitor all transactions and payments
- Oversee system activity and manage product listings

---

## 🚀 Installation & Setup

### Backend (Spring Boot)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/krishi-mart.git
2.Update MySQL credentials in
  src/main/resources/application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/krishimart
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
3.Run the application:mvn spring-boot:run

---
Frontend (React + Vite)
1.Navigate to frontend folder:
  -> cd frontend
  -> npm install
  -> npm run dev
  -> http://localhost:5173
---
