const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ex1');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  gpa: Number
});

const User = mongoose.model('User', userSchema);

app.post('/create', async (req, res) => {
  const record = await User.create(req.body);
  res.json(record);
});

app.get('/list', async (req, res) => {
  const records = await User.find();
  res.json(records);
});

app.get('/get/:email', async (req, res) => {
  const record = await User.findOne({ email: req.params.email });
  res.json(record);
});

app.put('/modify/:email', async (req, res) => {
  const updated = await User.findOneAndUpdate(
    { email: req.params.email },
    { gpa: req.body.gpa },
    { new: true }
  );
  res.json(updated);
});

app.delete('/remove/:email', async (req, res) => {
  await User.findOneAndDelete({ email: req.params.email });
  res.json({ status: "Removed" });
});

app.listen(3000);