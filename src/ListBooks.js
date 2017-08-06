import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    removeBook: PropTypes.func.isRequired
  }

  render() {
    const { books, removeBook } = this.props

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
              removeBook={this.props.removeBook}
              />
            <Bookshelf
              bookshelfTitle={ 'Want To Read' } 
              books={showBooks.filter(b => b.shelf === 'wantToRead' )}
              removeBook={this.props.removeBook}
              />
            <Bookshelf
              bookshelfTitle={ 'Read' } 
              books={showBooks.filter(b => b.shelf === 'read' )}
              removeBook={this.props.removeBook}
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