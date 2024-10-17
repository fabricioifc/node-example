const express = require("express");

// Create an Express app and listen for incoming requests on port 3000
const app = express();
const port = process.env.PORT || 3000;

// Handle GET requests to the root URL
router.get("/", (req, res) => {
  res.send("Welcome to the Webhook Server!");
});

// Start the server and listen for incoming connections
app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
});