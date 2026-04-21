const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    age: Number,
    gpa: Number
});

module.exports = mongoose.model('Student', studentSchema);