const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email'] 
  },
  course: {
    type: String,
    required: true
  },
  profileImage: {
    data: Buffer,
    contentType: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
