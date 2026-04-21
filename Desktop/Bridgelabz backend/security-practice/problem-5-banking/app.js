const express = require('express');
const session = require('express-session');

const auth = require('./middleware/auth');
const limiter = require('./middleware/rateLimit');

const app = express();
app.use(express.json());

app.use(session({
  secret: 'bank',
  cookie: { httpOnly: true }
}));
app.post('/transfer', auth, limiter, (req, res) => {
  const { amount } = req.body;

  if (amount <= 0 || amount > 100000) {
    return res.send("Invalid amount");
  }
  if (amount > 1000 && !req.session.is2FA) {
    return res.send("2FA required");
  }

  res.send("Transaction success");
});

app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong");
});

app.listen(3000);