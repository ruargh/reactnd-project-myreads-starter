import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  constructor(props) {
      super(props)
      this.handleShelfChange = this.handleShelfChange.bind(this)
  }


  state = {
    sbooks: [],
    query: 'Art'
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }


  componentDidMount() {
    this.refreshBooks()
  }

  refreshBooks() {
    BooksAPI.search(this.state.query).then((sbooks) => {
      this.setState({ sbooks })
    })
  }

  handleShelfChange(book, shelf) {
    this.props.onBookChange(book, shelf)
  }

  render() {

    const { books } = this.props
    const { query } = this.state
    let showBooks = this.state.sbooks

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks= showBooks.filter((book) => match.test(book.title))
    } else {
      showingBooks = showBooks
    }
    
    return (


      <div className="search-books">
        <div className="search-books-bar">

          <Link to="/" className="close-search" >Close</Link>

          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />

          </div>
        </div>
        <div className="search-books-results">
          
          <Book
          books={showBooks}
          onBookChange={this.handleBookChange}
          />

        </div>
      </div>


    )
  }
}

export default SearchBooks