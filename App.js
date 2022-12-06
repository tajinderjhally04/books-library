import "./styles.css";
import { useState } from "react";

const bookDatabase = {
  Collection: [
    { name: "The Monk Who Sold His Ferrari", status: "read" },
    { name: "Rich Dad Poor Dad", status: "read" },
    { name: "The Miracle Morning", status: "read" },
    { name: "Eat That Frog", status: "read" },
    { name: "The Almanak of Naval Ravikant", status: "not-started-yet" },
    { name: "Zero To One", status: "not-started-yet" },
    { name: "How To Win Friends & Influence People", status: "partial-read" },
    { name: "You Don't Know JS", status: "not-started-yet" }
  ],
  Wishlist: [
    {
      name: "My Journey: Transforming Dreams into Actions",
      status: "not-yet-purchased"
    },
    {
      name: "7 Habits of Highly Effective People",
      status: "not-yet-purchased"
    },
    { name: "Atomic Habits", status: "not-yet-purchased" },
    { name: "Start With Why", status: "not-yet-purchased" },
    {
      name: "IKIGAI - The Japanese Secret to Long & Happy Life",
      status: "not-yet-purchased"
    }
  ]
};

var booksLibrary = Object.keys(bookDatabase);

export default function App() {
  const [state, setState] = useState("Collection");

  function clickHandler(book) {
    setState(book);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }} className="App">
      <h1>📚 My Books Library 📚</h1>
      <p>Checkout my collection & wishlist of books📚</p>
      <p style={{ fontSize: "smaller" }}>
        with status: read, not-started, not-yet-purchased.
      </p>

      <div>
        {booksLibrary.map((book) => (
          <button
            onClick={() => clickHandler(book)}
            style={{
              background: "white",
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {" "}
            {book}{" "}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDatabase[state].map((books) => (
            <li
              key={books.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {books.name} </div>
              <div style={{ fontSize: "smaller" }}> {books.status} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
