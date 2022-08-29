const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const workoutRoute = require('./routes/workout.route');
// Port
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/v1/workouts', workoutRoute);

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listening port
    app.listen(PORT, () => {
      console.log(`Connected to database and Listening on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
