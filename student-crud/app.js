const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/university')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// 1️⃣ Add new student
app.post('/add', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.send(student);
    } catch (err) {
        res.send(err.message);
    }
});


// 2️⃣ View all students
app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.send(students);
});


// 3️⃣ Find student by email
app.get('/student/:email', async (req, res) => {
    const student = await Student.findOne({ email: req.params.email });
    res.send(student);
});


// 4️⃣ Update GPA
app.put('/update/:email', async (req, res) => {
    const student = await Student.findOneAndUpdate(
        { email: req.params.email },
        { gpa: req.body.gpa },
        { new: true }
    );
    res.send(student);
});
app.delete('/delete/:email', async (req, res) => {
    const student = await Student.findOneAndDelete({ email: req.params.email });
    res.send("Deleted successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});