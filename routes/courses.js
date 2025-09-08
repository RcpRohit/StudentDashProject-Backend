// backend/routes/courses.js
const express = require('express');
const router = express.Router();
const {getAllCourses,createCourse} = require('../controllers/CourseController');

router.get('/getAllCourse', getAllCourses);
router.post('/addCourse', createCourse);
module.exports = router;
