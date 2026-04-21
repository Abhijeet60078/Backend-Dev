const mongoose = require('mongoose');

// 1. Course
const courseSchema = new mongoose.Schema({
  name: String,
  prerequisites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

// 2. Professor
const professorSchema = new mongoose.Schema({
  name: String,
  departments: [String]
});

// 3. Grade
const gradeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  marks: Number
});

const Course = mongoose.model('Course', courseSchema);
const Professor = mongoose.model('Professor', professorSchema);
const Grade = mongoose.model('Grade', gradeSchema);

console.log("Schemas created");

module.exports = { Course, Professor, Grade };
