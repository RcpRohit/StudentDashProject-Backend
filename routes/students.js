const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/StudentController');
// used multer here for upload
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/addStudent', upload.single('profileImage'), createStudent);
router.get('/getStudent', getAllStudents);
router.get('/getStudentById/:id', getStudentById);
router.put('/updatedStudentById/:id', upload.single('profileImage'), updateStudent);
router.delete('/DeleteStudentById/:id', deleteStudent);

module.exports = router;
