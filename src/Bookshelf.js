import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookshelfTitle: PropTypes.string
  }

  render() {
    const { bookshelfTitle, books } = this.props

    let showBooks = books
    let showShelfTitle = bookshelfTitle

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{showShelfTitle}</h2>

        <div className="bookshelf-books">
            <Book
              books={showBooks}
              />
        </div>
      </div>
    )
  }
}

export default Bookshelf