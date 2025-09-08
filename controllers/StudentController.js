const Student = require('../models/Student');

// Create student with image upload
const createStudent = async (req, res) => {
  try {
    const { name, email, course } = req.body;

    const newStudent = new Student({
      name,
      email,
      course,
      profileImage: req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype
          }
        : undefined
    });

    const savedStudent = await newStudent.save();
    res.status(201).json({ message: "Student created", id: savedStudent._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update student (with optional image update)
const updateStudent = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      updateData.profileImage = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete student
const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = 
{
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
