// app.js
const path = require("path");
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
pp.use(express.static(path.resolve(__dirname, "./frontend/ny-app/build")));
app.use(express.json({ extended: false }));

app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./frontend/ny-app/", "index.html"));
  });

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));