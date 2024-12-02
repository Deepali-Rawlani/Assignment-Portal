

/*const mongoose = require('mongoose');

// Replace this with your actual MongoDB URI if using a different setup
const mongoURI = 'mongodb://localhost:27017/assignment-portal1';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))

  .catch((err) => console.log('MongoDB connection error:', err));

  
  require('dotenv').config();*/

  /*const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB URI from environment variables or use a default one if not available
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/assignment-portal1';

// Initialize Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB Connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
    
    // Start the server after successful MongoDB connection
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });*/

  /*const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB URI from environment variables or use a default one if not available
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/assignment-portal1';

// Initialize Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Test Route to check if the server is running
app.get('/test', (req, res) => {
  res.status(200).json({ message: "Server is working" });
});

// MongoDB Connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
    
    // Start the server after successful MongoDB connection
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });*/

  // app.js
  import dotenv from 'dotenv';
  dotenv.config();
  console.log(process.env.JWT_SECRET); 
  //console.log(process.env);
import express from 'express';
import mongoose from 'mongoose';

import authRoutes from './routes/authRoutes.js';  // Import your authentication routes
import adminRoutes from './routes/adminRoutes.js';  // Import your admin routes

  // Load environment variables from .env

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Test Route to check if the server is running
app.get('/test', (req, res) => {
  res.status(200).json({ message: "Server is working" });
});

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/assignment-portal1';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
    
    // Start the server after MongoDB connection
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

// Routes
app.use('/api/auth', authRoutes);  // Define the authentication routes
app.use('/api/admin', adminRoutes);  // Define the admin routes



 