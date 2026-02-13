// controller/bookController.js

import books from "../model/data.js";

// Get All Books
export const getAllBooks = (req, res) => {
  res.json(books);
};

// Search Books by Title
export const searchBooks = (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({
      message: "Please provide a title to search"
    });
  }

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json({
    totalResults: filteredBooks.length,
    data: filteredBooks
  });
};
