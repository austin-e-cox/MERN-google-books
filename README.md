# MERN-google-books
This application uses a MERN stack (Mongo, Express, React, Node) to search the google books API and save book details to a repository for later viewing.

## Functionality
This project serves up a React application which allows the user to search for books using the google books API and save them to a database for later viewing. The user starts at a landing page containing just the application banner. They then choose to go to either the search or saved page. 

The search page adds a book search region to the window and allows the user to type in the name of a book they are looking for. As the user types, book information will begin to populate below, with each book region having view and save buttons. The iew button will take them to the google books information page, and the save button saves the book details to a Mongo database (and turns the save button gray).

The saved page displays any books you have chosen to save, pulling the data from the persistent Mongo DB. Each book has a view button (same functionality as the search page books) and a delete button which deletes the book from the database and refreshes the page.

## Access
Repository: https://github.com/austin-e-cox/MERN-google-books

Deployed App: https://shrouded-retreat-12650.herokuapp.com/search

## Running locally
Clone the repository and in the main folder, run 
```
npm install
```

Then run
```
npm start
```
to start the application.

## Preview:
![MERN google books preview](/MERN_preview.png?raw=true "MERN google books preview")