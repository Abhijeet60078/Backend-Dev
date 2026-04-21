const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss');

const sanitize = require('./middleware/sanitize');

const app = express();
app.use(express.json());
app.use(helmet());

app.use(session({
  secret: 'shop',
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/shop' }),
  cookie: { httpOnly: true }
}));
app.use('/login', rateLimit({ windowMs: 60000, max: 5 }));

app.get('/search', sanitize, (req, res) => {
  res.send("Safe search");
});
app.post('/review', (req, res) => {
  const clean = xss(req.body.text);
  res.send(clean);
});

app.listen(3000);