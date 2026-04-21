const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ex4');

const studentSchema = new mongoose.Schema({
  name: String,
  gpa: Number,
  department: String,
  courses: [String]
});

const Student = mongoose.model('Student', studentSchema);

async function run() {
  // 1. Avg GPA by department
  console.log(await Student.aggregate([
    { $group: { _id: "$department", avgGPA: { $avg: "$gpa" } } }
  ]));

  // 2. Most popular courses
  console.log(await Student.aggregate([
    { $unwind: "$courses" },
    { $group: { _id: "$courses", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]));

  // 3. Performance report
  console.log(await Student.aggregate([
    {
      $project: {
        name: 1,
        performance: {
          $cond: [
            { $gte: ["$gpa", 3.5] },
            "Excellent",
            "Average"
          ]
        }
      }
    }
  ]));
}

run();
