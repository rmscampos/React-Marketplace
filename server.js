const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

// import routes
const userRoutes = require('./routes/user')

// connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

// routes middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

