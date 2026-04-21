const express = require('express');
const rateLimit = require('express-rate-limit');

const role = require('./middleware/role');

const app = express();
app.use(express.json());

app.use('/login', rateLimit({ max: 5, windowMs: 60000 }));

app.post('/course', role('instructor'), (req, res) => {
  res.send("Course created");
});
app.post('/upload', (req, res) => {
  const fileType = req.body.type;
  if (fileType !== 'pdf') return res.send("Invalid file");
  res.send("Uploaded safely");
});

app.listen(3000);