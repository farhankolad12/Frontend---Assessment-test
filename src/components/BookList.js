import { useState } from "react";

export default function BookList({ book }) {
  const books = JSON.parse(localStorage.getItem("books") || "[]");

  const [inBookshelf, setInBookshelf] = useState(
    books.some((book1) => book1.key === book.key)
  );

  function handleBookshelf() {
    localStorage.setItem("books", JSON.stringify([book, ...books]));
    setInBookshelf(!inBookshelf);
  }

  return (
    <div className="book-item">
      <div>
        <strong>Book Title: </strong>
        <span>{book.title}</span>
      </div>
      <div>
        <strong>Edition Count: </strong>
        <span>{book.edition_count}</span>
      </div>
      {!inBookshelf && (
        <button className="bookshelf-btn" onClick={handleBookshelf}>
          Add to bookshelf
        </button>
      )}
    </div>
  );
}
