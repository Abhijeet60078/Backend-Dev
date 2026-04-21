const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.get('/set/:lang', (req, res) => {
  res.cookie('lang', req.params.lang, { maxAge: 1000000 });
  res.send("Language set");
});
app.get('/', (req, res) => {
  const lang = req.cookies.lang || "en";
  res.send(`Current Language: ${lang}`);
});

app.listen(3000);