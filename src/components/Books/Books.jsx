import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    // Load Books Data
    const [books, setBooks] = useState([]);
    useEffect( () => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, []);

    return (
        <div className="container pt-7 pb-9 md:pt-[60px] md:pb-[60px] lg:pt-[100px] lg:pb-[129px]">
            <h2 className="text-[#131313] text-[40px] font-playfair font-bold text-center">Books</h2>
            <div className="books-row pt-5 md:pt-7 lg:pt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;