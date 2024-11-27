// server.js
const app = require('./app'); // Import the app from app.js
const port = process.env.PORT || 5000; // Use the environment variable or default to 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});