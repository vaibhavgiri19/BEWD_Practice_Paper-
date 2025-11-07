
---

## 🏨 **3️⃣ Hotel Booking Management – README.md**

```markdown
# 🏨 Hotel Booking Management System – Admin Authentication

## 📘 Scenario
You are building a **Hotel Booking Management API** where admins can log in to manage customer bookings.  
Use **bcrypt** for password hashing and **JWT stored in HTTP-only cookies** for security.

---

## 🧩 Task Requirements

### 1. Admin Authentication
- Create routes:
  - `POST /api/admin/register` → Register a new admin  
    - Fields: `name`, `email`, `password`
    - Use bcrypt to hash password
  - `POST /api/admin/login` → Validate credentials  
    - Generate JWT token with 1-hour expiry
    - Save token in an HTTP-only cookie with:
      - `httpOnly: true`
      - `secure: true`
      - `sameSite: 'strict'`
      - `maxAge: 3600000`
  - `POST /api/admin/logout` → Clear cookie

---

### 2. Booking Management (Protected Routes)
- Authenticated admins can:
  - `POST /api/bookings` → Create new booking
  - `GET /api/bookings` → View all bookings
  - `PUT /api/bookings/:id` → Update booking
  - `DELETE /api/bookings/:id` → Delete booking

---

### 3. Error Handling
- Invalid credentials → `401 Unauthorized`
- Missing or invalid token → `403 Forbidden`
- Missing fields → `400 Bad Request`

---

## ✅ Response Format

### Successful Login
```json
{
  "success": true,
  "message": "Admin logged in successfully",
  "admin": "John Doe"
}
