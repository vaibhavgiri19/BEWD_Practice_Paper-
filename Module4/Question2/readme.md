Hospital Staff Login System

Scenario
You're building a login system for hospital staff members. The application must securely hash staff passwords and remember their staff ID using cookies for easy identification during their shift.

Task Requirements
1. Project Initialization:
- Create a new project directory named hospital-staff-login
- Initialize with npm init and provide meaningful project details
- Install required dependencies: express, bcryptjs, and cookie-parser

2. Server Configuration:
- Create main server file (app.js)
- Set up Express application with required middleware
- Configure JSON body parsing and cookie parsing
- Start server on port 3000 with appropriate console message

3. Implement POST /staff-signin route:
- Create route handler that accepts staff login requests
- Extract staffId and password from request body
- Implement input validation to ensure both fields exist and are non-empty
- Hash the password using bcryptjs with salt rounds of 12
- Store the hashed password in a variable and console log it for verification (Note: In production, this hash would be saved to a database)
- Set a cookie named staff_session with these specifications:
  - Value: the staff ID
  - httpOnly: true for XSS protection
  - secure: true for HTTPS-only transmission
  - maxAge: 2700000 (45 minutes)
  - sameSite: 'strict' for CSRF protection
- Return JSON response with success message and staff ID

Response Format Requirements:
Successful login response:
{
  "success": true,
  "message": "Staff signed in successfully",
  "staffId": "STAFF001"
}

Error responses:
// Missing staffId:
{
  "success": false,
  "error": "Staff ID is required"
}

// Missing password:
{
  "success": false,
  "error": "Password is required"
}

4. Error Handling:
- Handle missing staffId with appropriate error message (HTTP status 400)
- Handle missing password with specific error response (HTTP status 400)
- Log all errors to console for debugging
- Ensure all error responses follow the format specified above

Submission Requirements
Files to submit:
- app.js (main application file)
- package.json (with all dependencies)

Required screenshots:
- Console output showing the hashed password
- Network tab/Developer tools showing the cookie being set in response headers
- Successful login response in browser/Postman showing the JSON response

Submission format: Submit as hospital-login-<yourname>.zip

Evaluation Criteria
- Correct implementation of password hashing with bcryptjs
- Proper cookie configuration with all required security attributes
- Appropriate error handling and HTTP status codes
- Code organization and documentation quality
- Security best practices implementation
