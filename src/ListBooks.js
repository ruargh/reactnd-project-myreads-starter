import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  constructor(props) {
      super(props)
      this.handleBookUpdate = this.handleBookUpdate.bind(this)
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  handleBookUpdate(book, shelf) {
      this.props.onUpdateBook(book, shelf)

  }

  render() {
    const { books } = this.props

    let showBooks = books

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <Bookshelf
              bookshelfTitle={ 'Currently Reading' } 
              books={showBooks.filter(b => b.shelf === 'currentlyReading' )}
              onUpdateBook={this.handleBookUpdate}
              />
            <Bookshelf
              bookshelfTitle={ 'Want To Read' } 
              books={showBooks.filter(b => b.shelf === 'wantToRead' )}
              onUpdateBook={this.handleBookUpdate}
              />
            <Bookshelf
              bookshelfTitle={ 'Read' } 
              books={showBooks.filter(b => b.shelf === 'read' )}
              onUpdateBook={this.handleBookUpdate}
              />


          </div>
        </div>
        <div className="open-search">

          <Link
          to="/search"
          >Add a book</Link>
        </div>
      </div>

    )
  }
}

export default ListBooks