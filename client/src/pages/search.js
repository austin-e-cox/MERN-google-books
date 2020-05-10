import React, { useEffect, useState } from "react";
import SearchArea from "../components/SearchArea";
import Book from "../components/Book";

import API from "../utils/API";
import $ from "jquery";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [searchValue, setSearchValue] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  function searchBook(title){
    url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
    let bookData = $.get(url, function(response){
       console.log(response)
       return response;
     })
     return bookData;
  }  

  // Loads all books and sets them to books
  function loadBooks() {
    return searchBook(searchValue)
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SearchArea setSearch={setSearchValue}/>
      </div>
        <div className="col-md-12">
          {books.length ? (
            <List>
              {books.map(book => {
                return (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() =>{}} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
    </div>
  );
}


export default Search;
