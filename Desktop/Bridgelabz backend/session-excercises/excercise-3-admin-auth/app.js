const express = require('express');
const session = require('express-session');

const app = express();
app.use(express.json());

app.use(session({
  secret: 'adminsecret',
  resave: false,
  saveUninitialized: true
}));
app.post('/login', (req, res) => {
  const { username } = req.body;

  if (username === 'admin') {
    req.session.user = { role: 'admin' };
  } else {
    req.session.user = { role: 'user' };
  }

  res.send("Logged in");
});

function isAdmin(req, res, next) {
  if (req.session.user?.role === 'admin') {
    next();
  } else {
    res.send("Access Denied");
  }
}
app.get('/admin', isAdmin, (req, res) => {
  res.send("Welcome Admin");
});

app.listen(3000);