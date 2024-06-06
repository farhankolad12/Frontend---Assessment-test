import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetReq } from "../hooks/useGetReq";
import BookList from "../components/BookList";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams({
    q: "",
  });
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const { loading, books } = useGetReq(
    `https://openlibrary.org/search.json?q=${searchParams.get(
      "q"
    )}&limit=10&page=1`,
    {
      searchParams,
    }
  );

  const nameRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const data = setTimeout(() => {
      searchParams.set("q", query);
      setSearchParams(searchParams);
    }, 1000);

    return () => clearTimeout(data);
  }, [query]);

  return (
    <>
      <header className="place-center">
        <div className="place-column">
          <h3>Search by book name: </h3>
          <input
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Book name"
            ref={nameRef}
            defaultValue={searchParams.get("q") || ""}
            disabled={loading}
          />
        </div>
        <button
          className="bookshelf-btn"
          onClick={() => navigate("/bookshelf")}
        >
          My Bookshelf
        </button>
      </header>
      {loading ? (
        <span>Loading...</span>
      ) : books.numFound ? (
        <section className="books-result">
          {books.docs.map((book) => {
            return <BookList key={book.key} book={book} />;
          })}
        </section>
      ) : query === "" ? (
        <span>Type a keyword to search</span>
      ) : (
        <span>No Books Found For "{searchParams.get("q")}"</span>
      )}
    </>
  );
}
