// controller/bookController.js

import books from "../model/data.js";

export const getAllBooks = (req, res) => {
  res.json(books);
};
