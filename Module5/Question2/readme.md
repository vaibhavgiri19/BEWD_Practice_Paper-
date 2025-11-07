
---

## 🎓 **2️⃣ University Course Portal – README.md**

```markdown
# 🎓 University Course Portal – Faculty Authentication System

## 📘 Scenario
You are developing a **University Course Portal** where faculty can manage courses and student grades.  
The system must use **JWT authentication** stored in **HTTP-only cookies** for secure session handling.

---

## 🧩 Task Requirements

### 1. Faculty Authentication
- Create the following routes:
  - `POST /api/faculty/register` → Register new faculty  
    - Fields: `name`, `email`, `password`
    - Hash password using `bcryptjs`
  - `POST /api/faculty/login` → Faculty login  
    - Validate credentials
    - Generate JWT token with 2-hour expiry
    - Store token in a cookie with:
      - `httpOnly: true`
      - `secure: true`
      - `sameSite: 'strict'`
      - `maxAge: 7200000`
  - `POST /api/faculty/logout` → Logout and clear cookie

---

### 2. Course Management (Protected Routes)
- Routes accessible only after login:
  - `GET /api/courses` → List all courses
  - `POST /api/courses` → Add new course
  - `PUT /api/courses/:id` → Update course details
  - `DELETE /api/courses/:id` → Remove a course

---

### 3. Error Handling
- Invalid credentials → `401 Unauthorized`
- Missing token → `403 Forbidden`
- Expired token → `403 Forbidden`

---

## ✅ Response Format

### Successful Login
```json
{
  "success": true,
  "message": "Faculty login successful",
  "faculty": "Prof. John"
}
