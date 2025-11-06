**Library Management Admin Authentication**

**Scenario**
You're developing an admin authentication system for a library management platform. When administrators log in, the system needs to securely hash their passwords and store their admin username in cookies for session management.

**Task Requirements**
Project Initialization:
Create a new project directory named library-admin-auth
Initialize with npm init and provide meaningful project details
Install required dependencies: express, bcryptjs, and cookie-parser

**Server Configuration:**
Create main server file (server.js)
Set up Express application with required middleware
Configure JSON body parsing and cookie parsing
Start server on port 4000 with appropriate console message

**Implement POST /admin-login route:**
Create route handler that accepts admin login requests
Extract adminName and password from request body
Implement input validation to ensure both fields exist and are non-empty
Hash the password using bcryptjs with salt rounds of 12
Store the hashed password in a variable and console log it for verification (Note: In production, this hash would be saved to a database)
Set a cookie named library_admin with these specifications:
Value: the admin's name
httpOnly: true for XSS protection
secure: true for HTTPS-only transmission
maxAge: 1800000 (30 minutes)
sameSite: 'strict' for CSRF protection
Return JSON response with success message and admin name

**Response Format Requirements:**
Successful login response:
{
  "success": true,
  "message": "Admin logged in successfully",
  "adminName": "librarian01"
}

Error responses:
// Missing admin name:
{
  "success": false,
  "error": "Admin name is required"
}

// Missing password:
{
  "success": false,
  "error": "Password is required"
}

Error Handling:
Handle missing admin name with appropriate error message (HTTP status 400)
Handle missing password with specific error response (HTTP status 400)
Log all errors to console for debugging
Ensure all error responses follow the format specified above
