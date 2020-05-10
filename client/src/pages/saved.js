import React, { useEffect, useState } from "react";
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
      .then(res => {
        setBooks(res.data)
      }
      )
      .catch(err => console.log(err));
  };

  function handleDelete() {
    setTimeout(loadBooks, 50)
    
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {books.length ? (
            <List>
              {books.map(book => {
                return (
                  <Book type="delete" key={book._id} data={book} handleDelete={handleDelete} />
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
