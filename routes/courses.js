// backend/routes/courses.js
const express = require('express');
const router = express.Router();
const {getAllCourses,createCourse,getCourseById} = require('../controllers/CourseController');

router.get('/getAllCourse', getAllCourses);
router.get('/:id', getCourseById);
router.post('/addCourse', createCourse);

module.exports = router;
