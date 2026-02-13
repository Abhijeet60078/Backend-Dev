import books from '../model/data.js';

export const getAllBooks=(req,res)=>{
    let filterBooks=books;
    const{author,year}=req.query;
    if(author){
        filterBooks=filterBooks.filter(book=>book.author.toLowerCase().includes(author.toLowerCase()));

}
    if(year){
        filterBooks=filterBooks.filter(book=>book.year===parseInt(year));
    }
    res.json(filterBooks);

};