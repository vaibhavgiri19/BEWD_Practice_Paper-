
---

## 🛒 **5️⃣ E-Commerce Order Management System – README.md**

```markdown
# 🛒 E-Commerce Order Management System – Secure Customer Authentication

## 📘 Scenario
You are creating a **secure E-Commerce API** that allows customers to register, log in, and manage their orders.  
The application must use **JWT tokens stored in HTTP-only cookies** for session handling and security.

---

## 🧩 Task Requirements

### 1. Customer Authentication
- Create the following routes:
  - `POST /api/customers/register` → Register a new customer  
    - Fields: `name`, `email`, `password`
    - Hash password with **bcrypt**
  - `POST /api/customers/login` → Authenticate customer  
    - On success, generate JWT (expires in 1 hour)
    - Store JWT in an HTTP-only cookie:
      - `httpOnly: true`
      - `secure: true`
      - `sameSite: 'strict'`
      - `maxAge: 3600000`
  - `POST /api/customers/logout` → Log out and clear cookie

---

### 2. Order Management (Protected Routes)
Authenticated customers can:
  - `POST /api/orders` → Place a new order
  - `GET /api/orders` → View all their orders
  - `PUT /api/orders/:id` → Update an existing order
  - `DELETE /api/orders/:id` → Cancel an order

---

### 3. Error Handling
- Missing fields → `400 Bad Request`
- Invalid credentials → `401 Unauthorized`
- Invalid or expired JWT → `403 Forbidden`

---

## ✅ Response Format

### Successful Login
```json
{
  "success": true,
  "message": "Customer login successful",
  "customer": "Priya Patel"
}
