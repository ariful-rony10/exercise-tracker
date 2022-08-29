/**
 * Name: workout.controller.js
 * Description:
 */
const router = require('express').Router();
const workoutController = require('../controllers/workout.controller');
// Workout routes
router.get('/', workoutController.getAllData);
router.post('/', workoutController.createNewWorkout);
router.get('/:id', workoutController.getWorkoutById);
router.delete('/:id', workoutController.deleteWorkout);
router.patch('/:id', workoutController.updateWorkout);

module.exports = router;
