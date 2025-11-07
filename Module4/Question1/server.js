// Import required modules
const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

// Initialize app and constants
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Admin Login Route
app.post('/admin-login', (req, res) => {
  const { adminUsername, password } = req.body;

  // Check if username or password is missing
  if (!adminUsername || !password) {
    return res.json({ message: "Invalid username or password" });
  }

  // Hash the password
  bcrypt.hash(password, 12)
    .then(hashedPassword => {
      console.log("Hashed Password:", hashedPassword);

     

      // Set cookies
      res.cookie('userName', adminUsername, {
        httpOnly: true,
        secure: true,
        maxAge: 18000,
        sameSite: "strict"
      });

      // Send success response
      res.json({
        success: true,
        message: "Admin logged in successfully",
        adminUsername: adminUsername
      });
    })
    .catch(err => {
      console.error("Error during login:", err);
      res.status(500).json({ success: false, message: "Invalid error" });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
