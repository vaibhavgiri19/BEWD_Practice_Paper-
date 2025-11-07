# 📚 School Library Management System – Secure Student Authentication

## 📘 Scenario
You are developing a **Library Management API** for a school.  
Students must be able to register, log in securely, and manage the list of books they have borrowed.  
The system must implement **JWT authentication stored in HTTP-only cookies** for security and session control.

---

## 🧩 Task Requirements

### 1. Student Authentication
- Create authentication routes:
  - `POST /api/students/register` → Register a new student  
    - Required fields: `name`, `email`, `password`
    - Use **bcrypt** to hash passwords before storing
  - `POST /api/students/login` → Authenticate student  
    - Validate credentials and generate a JWT token (expires in 1 hour)
    - Store the token in an HTTP-only cookie with:
      - `httpOnly: true`
      - `secure: true`
      - `sameSite: 'strict'`
      - `maxAge: 3600000`
  - `POST /api/students/logout` → Clear the JWT cookie to end the session

---

### 2. Borrowed Books Management (Protected Routes)
- Authenticated students can:
  - `POST /api/books` → Add a new borrowed book record  
  - `GET /api/books` → View all borrowed books  
  - `PUT /api/books/:id` → Update return date or details  
  - `DELETE /api/books/:id` → Remove a record when book is returned

---

### 3. Error Handling
- Missing credentials → `400 Bad Request`
- Invalid credentials → `401 Unauthorized`
- Missing or expired token → `403 Forbidden`

---

## ✅ Response Format

### Successful Login
```json
{
  "success": true,
  "message": "Student logged in successfully",
  "student": "Aarav Sharma"
}
