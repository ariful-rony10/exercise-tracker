const router = require('express').Router();

// Workout routes
router.get('/workouts')
router.post('/workouts')
router.get('/workouts/:id')
router.delete('/workouts/:id')
router.patch('/workouts/:id')

module.exports = router;
