import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

//let myBook = { 'id' : 'Jhw9Bg42pSMC', 'shelf' : 'wantToRead' }
//let myBook2 = [ { id : "Jhw9Bg42pSMC", shelf : "wantToRead" } ]
//let myBook3 = ['Jhw9Bg42pSMC','wantToRead']

const mybook = [
  {
    "book" : {
    "id": "Jhw9Bg42pSMC"
    },
    "shelf": "wantToRead"
  }
]

let book1 = [
  {
    "id": "nggnmAEACAAJ"
  }
]


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  putInShelf = (book) => {
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }

  render() {
    return (
      <div className="app">
        <ListBooks
          onToggleShelf={this.putInShelf}
          books={this.state.books}
        />
      </div>
    )
  }
}

export default BooksApp