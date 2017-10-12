# MyReads Project :beginner::zap:
###### Udacity / React NanoDegree

This is fork of the starter template for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com). Which in turn is based on the  [Create React App](https://github.com/facebookincubator/create-react-app) repository

## Introduction
MyReads is a bookshelf app that allows you to search, add and categorize books you have previously read, currently reading or want to read into appropriate shelves.

## Usage

### Quickstart
Clone the repository, install dependencies and start the app using `npm`

```
git clone https://github.com/ruargh/reactnd-project-myreads-starter.git
npm install
npm start
```
### Instructions
Upon opening the app will display the current books in your library. You can categorize a book into **Currently Reading, Want to Read & Read** bookshelves using the books drop-down.
Add more books to your library by searching for books using the search page and adding them to one of your bookshelves.

Try searching for: `Art` & `iOS`

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). These are the _only_ terms that will work with the backend.

## Contents
```
+--public/    
 |-- index.html
 |-- favicon.ico - React icon.
+-- src/
 +-- icons/ - Images for the app.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - This is the root of the app
 |-- App.css - Styles for the app.
 |-- App.test.js - Used for testing. Provided with Create React App.
 |-- Book.js - Used to render a book
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend.
 |-- Bookshelf - Used to render a bookshelf containing books
 |-- BookshelfControl.js - Component to switch a book's shelf
 |-- index.js - Used for DOM rendering only.
 |-- index.css - Global styles.
 |-- ListBooks.js - Default display used to list your books
 |-- SearchBooks.js - Allow searching and adding books to your list
|-- .gitignore
|-- CONTRIBUTING.MD - Information about contributing to the upstream repo.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms for you to use with the app.
|-- package.json - npm package manager file.
```

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is only used for submission of a Udacity project. Feel free to fork and make suggestions to improve the code or to use as you please, however be mindfull of Udacity comnditions if you whish to resuse any of this code in your own projects.

For further details on submitting to the upstream repository, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The content of this repository is licensed under a [BSD License](create-react-app/LICENSE)
