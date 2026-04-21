const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'timeout',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 10000 } // 10 sec
}));

app.get('/', (req, res) => {
  if (!req.session.start) {
    req.session.start = Date.now();
  }

  const timeLeft = req.session.cookie.maxAge;

  res.send(`Session active. Time left: ${timeLeft} ms`);
});

app.listen(3000);