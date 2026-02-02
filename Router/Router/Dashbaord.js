import express from 'express';

const router = express.Router();

router.get("/profile", (req, res) => {
    res.send("profile route");
});

router.get("./report", (req, res) => {
    res.send("report route");
});

export default router;