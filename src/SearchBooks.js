import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {
  constructor(props) {
      super(props)
      this.handleBookUpdate = this.handleBookUpdate.bind(this)
  }

  updateQuery = (query) => {
    this.props.updateQuery( query.trim() )
  }

  handleBookUpdate(book, shelf) {
    this.props.onUpdateBook(book, shelf)
  }

  render() {


    return (

      <div className="search-books">
        <div className="search-books-bar">

          <Link to="/" className="close-search" >Close</Link>

          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.props.query}
              onChange={(event) => this.updateQuery(event.target.value)}
                />

          </div>
        </div>
        <div className="search-books-results">

          <Book
            books={this.props.sbooks}
            onBookChange={this.handleBookUpdate}
          />

        </div>
      </div>


    )
  }
}

export default SearchBooks
