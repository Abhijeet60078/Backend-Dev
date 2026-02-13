// router/bookRoutes.js

import express from "express";
import { getAllBooks, createBook } from "../controller/bookController.js";
import validateYear from "../middleware/validateYear.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", validateYear, createBook);

export default router;
