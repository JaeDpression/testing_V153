// server.js
const app = require('./app'); // Ensure this path is correct
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});