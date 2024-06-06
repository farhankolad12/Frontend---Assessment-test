import BookList from "../components/BookList";

export default function Bookshelf() {
  const books = JSON.parse(localStorage.getItem("books") || "[]");

  return (
    <main>
      <h1>My Bookshelf</h1>
      <section className="books-result">
        {books.map((book) => {
          return <BookList key={book.key} book={book} />;
        })}
      </section>
    </main>
  );
}
