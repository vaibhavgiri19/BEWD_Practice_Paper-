# Practice Questions – Secure REST API using JWT Authentication and HTTP-Only Cookies

These exercises will help you practice implementing **JWT-based authentication** with **HTTP-only cookies** in Express applications.  
Each problem includes a **real-world scenario**, **detailed task requirements**, **response formats**, and **submission guidelines**.

---

## 🩺 **Question 1: Hospital Management System (Staff Authentication)**

### **Scenario**
You are building a secure Hospital Management API where hospital staff can log in and manage patient-related information.  
The application must ensure **secure password hashing**, **JWT-based login**, and **HTTP-only cookie storage** for authentication.

### **Task Requirements**

1. **User Authentication**
   - Implement `POST /api/staff/register` for new staff registration with:
     - `name`, `email`, and `password` fields.
     - Hash passwords using bcrypt before saving.
   - Implement `POST /api/staff/login` for staff login:
     - Validate credentials.
     - Generate JWT token with 1-hour expiry.
     - Store token in an HTTP-only cookie with:
       - `httpOnly: true`
       - `sameSite: 'strict'`
       - `secure: true`
       - `maxAge: 3600000`
   - Implement `POST /api/staff/logout` to clear the cookie and end session.

2. **Protected Resource Management**
   - Implement CRUD routes for **patients**:
     - `POST /api/patients` → Add patient record.
     - `GET /api/patients` → View all patients for logged-in staff.
     - `PUT /api/patients/:id` → Update patient details.
     - `DELETE /api/patients/:id` → Remove a patient record.
   - Ensure only **authenticated staff** can access or modify patient data.

3. **Error Handling**
   - Handle invalid credentials, missing fields, and expired tokens with proper HTTP status codes.

### **Response Format**

#### Successful Login
```json
{
  "success": true,
  "message": "Staff login successful",
  "staff": "Dr. Smith"
}
