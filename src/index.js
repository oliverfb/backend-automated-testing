const express = require('express');
const { setupRoutes } = require('./routes/index');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 3000;
const loggerFormat = process.env.NODE_ENV === 'development' ? 'dev' : 'combined';

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Logger
app.use(morgan(loggerFormat));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express API' });
});


setupRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 
