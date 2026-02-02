import express from 'express';

const router = express.Router();

let loginValaidation = (req, res, next) => {
  const token = req.query.token;
  if (token === "admin123") {
    next();
  } else {
    res.send("access denied");
  }
}

router.get("/login", (req, res) => {
    res.send("login route");
});

router.get("./signup", (req, res) => {
    res.send("signup route");
});

export default router;