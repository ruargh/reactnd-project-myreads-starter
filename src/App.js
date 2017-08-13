import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
    constructor(props) {
        super(props)
        this.updateBook = this.updateBook.bind(this)
    }

  state = {
    books: [],
  }

  componentDidMount() {
    this.refreshBooks()
  }

  updateBook(book, shelf) {
    BooksAPI.get(book).then( book => {
      BooksAPI.update(book,shelf).then( () => {
        this.refreshBooks()
      })
    })
}

  refreshBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
            history.pushState('/', '/')
          }}
          />
        )}/>

        <Route exact path="/" render={() => (
          <ListBooks
          books={this.state.books}
          onUpdateBook={(book, shelf) => {
            this.updateBook(book, shelf)
            history.pushState('/', '/')
          }}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
