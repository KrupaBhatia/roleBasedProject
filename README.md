# role based application 
# Full Stack CRUD Application with Auth, Authorization & Responsive UI

This is a full-stack web application to manage products with authentication, role-based authorization, and a fully responsive UI.

---

## Assignment Overview

- **Frontend:** Angular 19 with Angular Material
- **Backend:** Node.js (Express)
- **Database:** MongoDB or PostgreSQL (choose one)
- **Features:** JWT-based auth, Admin/User roles, CRUD on products, lazy loading, global error handling, and responsive design.

---

## Objective

Build a product management application with:
- Admin role (full CRUD access)
- User role (read-only access)
- JWT Authentication
- Lazy-loaded Angular modules
- Responsive layout for mobile, tablet, and desktop

---

## Tech Stack

### Frontend (Angular 19)
- Angular Routing + Lazy Loading
- Reactive Forms with Validation
- Angular Services + Guards + Interceptors
- Angular Material for UI
- Responsive SCSS styling
- JWT stored in `localStorage`
- Protected routes with `AuthGuard`, `AdminGuard`, `LoginGuard`

### Backend (Node.js + Express)
- Express.js REST APIs
- JWT-based Authentication
- Middleware for Role-based Access Control
- Folder structure: routes, controllers, services, models
- MongoDB with Mongoose *(or PostgreSQL with Sequelize)*

---


## To run the application : 

backend : npx nodemon server.mjs 
frontend : ng serve 


##  Folder Structure

### Frontend

src/
├── app/
│ ├── auth/ # Login/Signup Modules
│ ├── core/guards/ # AuthGuard, AdminGuard, LoginGuard
│ ├── products/ # Lazy-loaded product CRUD
│ ├── users/ # Lazy-loaded user module
│ ├── shared/navbar/ # Navbar component
│ └── app-routing.module.ts
│ └── app.module.ts



### Backend
backend/
   |- src/
    ├── controllers/
    ├── routes/
    ├── services/
    ├── models/
    ├── middleware/
└── app.js / index.js


---

## Authentication & Authorization

- JWT token issued on login
- Stored in `localStorage`
- Token attached via Angular `HttpInterceptor`
- `AuthGuard`: Ensures route access for logged-in users
- `AdminGuard`: Restricts access based on user role

---

## Modules Implemented

### User Module
- Signin and Login with validation
- Role assignment (Admin/User)
- Role stored in localStorage

### Product Module
- Add Product *(Admin only)*
- View Products *(All users)*
- Edit/Delete Product *(Admin only)*

Product Fields:
- `name` (string)
- `description` (string)
- `price` (number)
- `createdAt` (auto-generated)

---

## UI Components

- Responsive Navigation Bar
- Product Table (`mat-table`) with actions
- Login & Signup Forms with validation
- Add/Edit Product Forms (route-based, modal optional)
- Snackbars for success/error messages

---

##  Advanced Features
### Lazy Loading
- `AuthModule`, `ProductModule`, `UserModule` are lazy-loaded for better performance

### Global Error Handling
- Angular HTTP Interceptor catches API errors
- Backend returns meaningful HTTP status + messages



## Getting Started

### Frontend

```bash
cd role-product-app
npm install
ng serve
///////////////////Backend

cd backend
npm install
npx nodemon server.mjs
Ensure MongoDB is running locally.

====>>>>>>>>.API Endpoints
Auth
POST /api/auth/login

POST /api/users/create-user

Products
GET /api/products

POST /api/products

PUT /api/products/:id

PUT /api/products/:id

All secured with JWT. Admin-only for modify/delete.

//////// Role-Based Access
Role	Permissions
Admin	Full CRUD on Products, Create Users
User	View Products only

Roles are assigned at signup .




