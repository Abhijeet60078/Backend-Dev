// controller/bookController.js

import books from "../model/data.js";

// GET All Books with Pagination
export const getAllBooks = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || books.length;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedBooks = books.slice(startIndex, endIndex);

  res.json({
    totalBooks: books.length,
    currentPage: page,
    totalPages: Math.ceil(books.length / limit),
    data: paginatedBooks
  });
};
