// router/authorRoutes.js

import express from "express";
import {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
} from "../controller/authorController.js";

const router = express.Router();

router.get("/", getAllAuthors);
router.get("/:id", getAuthorById);
router.post("/", createAuthor);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);

export default router;
