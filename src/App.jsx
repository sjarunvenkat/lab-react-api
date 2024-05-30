import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://reactnd-books-api.udacity.com/books",
          { headers: { Authorization: "Arun" } }
        );
        setBooks(response.data.books);
        console.log(response.data.books);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <h1>Book List 🧾</h1>
      <div className="totalBookList">
        {error && <p>Error : {error}</p>}
        {books.length === 0 && !error && <p>Loading...</p>}
        {books.map((book) => (
          <div className="eachBook" key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.imageLinks.thumbnail} alt="{book.title}" />
            <p>{book.description}</p>
            <p>Authors : {book.authors.join(", ")}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
