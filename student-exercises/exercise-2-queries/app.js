const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ex2');

const studentSchema = new mongoose.Schema({
  name: String,
  gpa: Number,
  courses: [String],
  address: { city: String }
});

const Student = mongoose.model('Student', studentSchema);

async function run() {
  // 1. GPA between 3.0 and 3.5
  console.log(await Student.find({
    gpa: { $gte: 3.0, $lte: 3.5 }
  }));

  // 2. More than 5 courses
  console.log(await Student.find({
    $expr: { $gt: [{ $size: "$courses" }, 5] }
  }));

  // 3. Top 10 by GPA
  console.log(await Student.find().sort({ gpa: -1 }).limit(10));

  // 4. Count by city
  console.log(await Student.aggregate([
    { $group: { _id: "$address.city", count: { $sum: 1 } } }
  ]));
}

run();
