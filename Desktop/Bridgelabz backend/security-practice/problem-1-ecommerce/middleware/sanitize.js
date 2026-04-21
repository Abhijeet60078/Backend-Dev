module.exports = (req, res, next) => {
  for (let key in req.body) {
    if (key.startsWith('$')) delete req.body[key];
  }
  next();
};