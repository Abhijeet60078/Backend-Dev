const express = require('express');
const session = require('express-session');

const validate = require('./middleware/validate');

const app = express();
app.use(express.json());

app.use(session({
  secret: 'health',
  cookie: { maxAge: 600000 }
}));
app.get('/record/:id', (req, res) => {
  if (req.session.userId !== req.params.id) {
    return res.send("Unauthorized");
  }
  res.send("Medical record");
});
app.post('/register', validate, (req, res) => {
  res.send("Registered safely");
});

app.listen(3000);