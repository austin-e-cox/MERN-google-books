import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { List } from "../components/List";
import Book from "../components/Book";

import API from "../utils/API";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };


    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <Book key={book._id} />
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
      </div>
    );
  }


export default Books;
