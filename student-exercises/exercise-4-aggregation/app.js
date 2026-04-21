const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ex4');

const enrolleeSchema = new mongoose.Schema({
  name: String,
  gpa: Number,
  department: String,
  courses: [String]
});

const Enrollee = mongoose.model('Enrollee', enrolleeSchema);

async function analyze() {
  const deptMetrics = await Enrollee.aggregate([
    { $group: { _id: "$department", avgGpa: { $avg: "$gpa" } } }
  ]);
  console.log(deptMetrics);

  const coursePopularity = await Enrollee.aggregate([
    { $unwind: "$courses" },
    { $group: { _id: "$courses", enrolled: { $sum: 1 } } },
    { $sort: { enrolled: -1 } }
  ]);
  console.log(coursePopularity);

  const report = await Enrollee.aggregate([
    {
      $project: {
        name: 1,
        rating: {
          $cond: [
            { $gte: ["$gpa", 3.5] },
            "High",
            "Standard"
          ]
        }
      }
    }
  ]);
  console.log(report);
}

analyze();
