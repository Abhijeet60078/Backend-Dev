const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ex1');

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  gpa: Number
});

const Student = mongoose.model('Student', studentSchema);

// 1. Add
app.post('/add', async (req, res) => {
  const s = await Student.create(req.body);
  res.send(s);
});

// 2. View
app.get('/all', async (req, res) => {
  res.send(await Student.find());
});

// 3. Find by email
app.get('/find/:email', async (req, res) => {
  res.send(await Student.findOne({ email: req.params.email }));
});

// 4. Update GPA
app.put('/update/:email', async (req, res) => {
  res.send(await Student.findOneAndUpdate(
    { email: req.params.email },
    { gpa: req.body.gpa },
    { new: true }
  ));
});

// 5. Delete
app.delete('/delete/:email', async (req, res) => {
  await Student.findOneAndDelete({ email: req.params.email });
  res.send("Deleted");
});

app.listen(3000);