/**
 * Name: workout.controller.js
 * Description:
 */
const Workout = require('../models/Workout');
const mongoose = require('mongoose');
// Get all workout
const getAllData = async (req, res) => {
  try {
    const data = await Workout.find({});
    res.status(201).json({
      message: 'Hello from all data',
      data: data,
    });
  } catch (error) {
    res.status(401).json({
      error,
      message: 'Opps! Somethign happend worng! - Pleases try again later.',
    });
  }
};

// Create new workout
const createNewWorkout = async (req, res) => {
  try {
    const workoutData = req.body;
    const data = await Workout.create(workoutData);
    res.status(201).json({
      message: 'create new workout sucessfull!',
      data: data,
    });
  } catch (error) {
    res.status(401).json({
      error,
      message: 'Opps! Somethign happend worng! - Pleases try again later.',
    });
  }
};

// Get single workout
const getWorkoutById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: 'No such workout!',
      });
    }
    const data = await Workout.findById(id);
    res.status(201).json({
      message: 'Hello from single data',
      data: data,
    });
  } catch (error) {
    res.status(401).json({
      error,
      message: 'Opps! Somethign happend worng! - Pleases try again later.',
    });
  }
};

// Delete single workout
const deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: 'No such workout!',
      });
    }
    await Workout.deleteOne({ _id: id });
    res.status(201).json({
      message: 'Deleted Sucesssfully!',
    });
  } catch (error) {
    res.status(401).json({
      error,
      message: 'Opps! Something happend worng! - Pleases try again later.',
    });
  }
};

// Update a single workout
const updateWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: 'No such workout!',
      });
    }
    const data = await Workout.findByIdAndUpdate({ _id: id }, req.body);
    res.status(201).json({
      message: 'Hello from update data',
      data: data,
    });
  } catch (error) {
    res.status(401).json({
      error,
      message: 'Opps! Somethign happend worng! - Pleases try again later.',
    });
  }
};

// Exports
module.exports = {
  getAllData,
  createNewWorkout,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};
