const express = require('express');
const session = require('express-session');
const cors = require('cors');

const sanitize = require('./middleware/sanitize');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(session({
  secret: 'social',
  cookie: { maxAge: 1800000 }
}));
app.post('/post', sanitize, (req, res) => {
  res.send("Post created safely");
});
app.get('/message/:userId', (req, res) => {
  if (req.session.userId !== req.params.userId) {
    return res.status(403).send("Denied");
  }
  res.send("Private message");
});

app.listen(3000);