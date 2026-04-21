const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: 'cartsecret',
  resave: false,
  saveUninitialized: true
}));

app.post('/add', (req, res) => {
  let cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
  cart.push(req.body.item);

  res.cookie('cart', JSON.stringify(cart));
  res.send(cart);
});

app.post('/login', (req, res) => {
  const cookieCart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];

  req.session.cart = cookieCart;
  res.clearCookie('cart');

  res.send("Cart migrated to session");
});

app.get('/cart', (req, res) => {
  if (req.session.cart) {
    res.send(req.session.cart);
  } else {
    res.send(req.cookies.cart || []);
  }
});

app.listen(3000);