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
    sbooks: [],
    query: ''
  }

  componentDidMount() {
    this.refreshBooks()
    this.updateSearchBooks(this.state.books)
  }


  updateBook(book, shelf) {
    BooksAPI.get(book).then( book => {
      BooksAPI.update(book,shelf).then( () => {
        this.refreshBooks()
      })
    })
}

updateQuery = (query) => {
  this.setState({ query: query.trim() })
  this.updateSearchBooks(this.state.books)
}

updateSearchBooks(myBooks) {
  BooksAPI.search(this.state.query).then((sbooks) => {
    //first reset all search result books shelf to none
    sbooks.map( reset => reset.shelf = 'none' )
    sbooks.map( sb =>
      myBooks.map(mb =>
        ( sb.id === mb.id ? sb.shelf = mb.shelf : '' )
      )
    )
    this.setState({ sbooks })
  })
}

  refreshBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      this.updateSearchBooks(books)
    })
    
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            sbooks={this.state.sbooks}
            query={this.state.query}
            updateQuery={(query) => {this.updateQuery(query)}}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)

            }}
          />
        )}/>

        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
              
          }}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
