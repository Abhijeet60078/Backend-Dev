const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  title: String,
  requirements: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  }]
});

const instructorSchema = new mongoose.Schema({
  fullName: String,
  faculties: [String]
});

const scoreSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Learner' },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  value: Number
});

const Subject = mongoose.model('Subject', subjectSchema);
const Instructor = mongoose.model('Instructor', instructorSchema);
const Score = mongoose.model('Score', scoreSchema);

module.exports = { Subject, Instructor, Score };
