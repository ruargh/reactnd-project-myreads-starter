import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  removeBook = (book) => {
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
          />
        ) : (
          <ListBooks
            onClickImage={this.removeBook}
            books={this.state.books}
          />
        )}
      </div>
    )
  }
}

export default BooksApp