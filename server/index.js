const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();
//Express app
const app = express();
const PORT = process.env.PORT || 5000;

//mdlwre
app.use(cors());
// parse JSON requests
app.use(express.json());
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('TODO API is running!...');
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!...'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});