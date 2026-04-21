const express = require('express');
const session = require('express-session');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: true
}));
app.get('/step1', (req, res) => {
  res.send(`<form method="POST">
    Name: <input name="name"/>
    <button>Next</button>
  </form>`);
});

app.post('/step1', (req, res) => {
  req.session.name = req.body.name;
  res.redirect('/step2');
});
app.get('/step2', (req, res) => {
  res.send(`<form method="POST">
    Email: <input name="email"/>
    <button>Finish</button>
  </form>`);
});

app.post('/step2', (req, res) => {
  req.session.email = req.body.email;
  res.send(`Saved: ${req.session.name}, ${req.session.email}`);
});

app.listen(3000);