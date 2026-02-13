// controller/authorController.js

import authors from "../model/authorData.js";

// GET all authors
export const getAllAuthors = (req, res) => {
  res.json(authors);
};

// GET author by ID
export const getAuthorById = (req, res) => {
  const author = authors.find(a => a.id == req.params.id);

  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  res.json(author);
};

// CREATE author
export const createAuthor = (req, res) => {
  const { name, country } = req.body;

  const newAuthor = {
    id: authors.length + 1,
    name,
    country
  };

  authors.push(newAuthor);

  res.status(201).json(newAuthor);
};

// UPDATE author
export const updateAuthor = (req, res) => {
  const author = authors.find(a => a.id == req.params.id);

  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  author.name = req.body.name || author.name;
  author.country = req.body.country || author.country;

  res.json(author);
};

// DELETE author
export const deleteAuthor = (req, res) => {
  const index = authors.findIndex(a => a.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Author not found" });
  }

  authors.splice(index, 1);

  res.json({ message: "Author deleted successfully" });
};
