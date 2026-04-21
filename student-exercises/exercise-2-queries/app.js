const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ex2');

const learnerSchema = new mongoose.Schema({
  name: String,
  gpa: Number,
  courses: [String],
  address: { city: String }
});

const Learner = mongoose.model('Learner', learnerSchema);

async function execute() {
  const midRangeGPA = await Learner.find({
    gpa: { $gte: 3.0, $lte: 3.5 }
  });
  console.log(midRangeGPA);

  const heavyLoadCourses = await Learner.find({
    $expr: { $gt: [{ $size: "$courses" }, 5] }
  });
  console.log(heavyLoadCourses);

  const top10Performers = await Learner.find().sort({ gpa: -1 }).limit(10);
  console.log(top10Performers);

  const cityStats = await Learner.aggregate([
    { $group: { _id: "$address.city", total: { $sum: 1 } } }
  ]);
  console.log(cityStats);
}

execute();
