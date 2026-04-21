const xss = require('xss');

module.exports = (req, res, next) => {
  for (let key in req.body) {
    req.body[key] = xss(req.body[key]);
  }
  next();
};