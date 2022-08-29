const express = require('express');
const app = express(); 
require('dotenv').config();
const workoutRoute = require('./routes/workout.route')
// Port
const PORT = process.env.PORT;

// Middleware
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.get('/', (req,res) => {
    res.status(200).json({message: "Hello"})
})
app.use(workoutRoute)
// Listening port
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))