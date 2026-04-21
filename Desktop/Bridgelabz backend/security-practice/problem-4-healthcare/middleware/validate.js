module.exports = (req, res, next) => {
  const { phone } = req.body;
  if (!/^\d{10}$/.test(phone)) {
    return res.send("Invalid phone");
  }
  next();
};