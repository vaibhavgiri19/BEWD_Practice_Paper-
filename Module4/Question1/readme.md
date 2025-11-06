# E-Commerce Admin Panel Authentication

## Scenario
You're developing an admin authentication system for an e-commerce platform. When administrators log in, the system needs to securely hash their passwords and store their admin username in cookies for session management.

## Task Requirements

### Project Initialization:
- Create a new project directory named **ecommerce-admin-auth**
- Initialize with `npm init` and provide meaningful project details
- Install required dependencies: `express`, `bcryptjs`, and `cookie-parser`

### Server Configuration:
- Create main server file (`server.js`)
- Set up Express application with required middleware
- Configure JSON body parsing and cookie parsing
- Start server on port **3000** with appropriate console message

### Implement POST /admin-login route:
- Create route handler that accepts admin login requests
- Extract `adminUsername` and `password` from request body
- Implement input validation to ensure both fields exist and are non-empty
- Hash the password using **bcryptjs** with salt rounds of **12**
- Store the hashed password in a variable and console log it for verification  
  *(Note: In production, this hash would be saved to a database)*
- Set a cookie named **admin_user** with these specifications:
  - **Value:** the admin's username
  - **httpOnly:** true (for XSS protection)
  - **secure:** true (for HTTPS-only transmission)
  - **maxAge:** 1800000 (30 minutes)
  - **sameSite:** 'strict' (for CSRF protection)
- Return JSON response with success message and admin username

## Response Format Requirements

### Successful login response:
```json
{
  "success": true,
  "message": "Admin logged in successfully",
  "adminUsername": "admin123"
}
