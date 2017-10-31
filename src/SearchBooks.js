import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  constructor(props) {
      super(props)
      this.handleBookUpdate = this.handleBookUpdate.bind(this)
  }

  state = {
    sbooks: [],
    query: ''
  }

  updateQuery = (query, myBooks) => {
    this.setState({ query: query.trim() })
    this.refreshBooks(myBooks)
  }

  // Not needed anymore
  // componentDidMount() {
  //   this.refreshBooks()
  // }


/* Function to set book shelf state and display search results
 * TODO: should refactor into sub components
 * TODO: Try to reduce iterations required
 */
  refreshBooks(myBooks) {
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

  handleBookUpdate(book, shelf) {
    this.props.onUpdateBook(book, shelf)

    BooksAPI.getAll().then((myBooks) => {

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
        
    })
    
  }

  render() {

    const { books } = this.props
    const { query } = this.state
    let showBooks = this.state.sbooks
    let myBooks = books

    return (

      <div className="search-books">
        <div className="search-books-bar">

          <Link to="/" className="close-search" >Close</Link>

          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value, myBooks)}
                />

          </div>
        </div>
        <div className="search-books-results">

          <Book
            books={showBooks}
            onBookChange={this.handleBookUpdate}
          />

        </div>
      </div>


    )
  }
}

export default SearchBooks
