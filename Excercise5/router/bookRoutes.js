// router/bookRoutes.js

import express from "express";
import { getAllBooks, searchBooks } from "../controller/bookController.js";

const router = express.Router();

router.get("/", getAllBooks);

// Search Endpoint
router.get("/search", searchBooks);

export default router;
