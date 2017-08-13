# MyReads Project :beginner:
###### Udacity / React NanoDegree

This is fork of the starter template for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com). Which in turn is based on the  [Create React App](https://github.com/facebookincubator/create-react-app) repository


## Contents
```
+--public/    
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- icons/ - Helpful images for the app.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - This is the root of the app
 |-- App.css - Styles for the app.
 |-- App.test.js - Used for testing. Provided with Create React App.
 |-- Book.js - Used to render a book
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend.
 Instructions for the methods are below.
 |-- Bookshelf - Used to render a bookshelf containing books
 |-- BookshelfControl.js - Component to switch a book's shelf
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles.
 |-- ListBooks.js - Default display used to list your books
 |-- SearchBooks.js - Allow searching for and adding books to your list
|-- .gitignore
|-- CONTRIBUTING.MD - Information about contributing to this repo.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms
for you to use with the app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is only used for submission of a Udacity project. Feel free to fork and make suggestions to improve the code or to use as you please, however be mindfull of Udacity comnditions if you whish to resuse any of this code in your own projects.

For further details on submitting to the upstream repository, check out [CONTRIBUTING.md](CONTRIBUTING.md).
