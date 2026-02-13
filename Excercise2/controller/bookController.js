import books from '../model/data.js';
export const getAllBooks=(req,res)=>{
    res.json(books);
};
export const createBook = (req, res) => {
  const { title, author, year } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author,
    year
  };

  books.push(newBook);

  res.status(201).json(newBook);
};