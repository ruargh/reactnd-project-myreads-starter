import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  constructor(props) {
      super(props)
      this.handleBookChange = this.handleBookChange.bind(this)
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
    bookshelfTitle: PropTypes.string
  }

  handleBookChange(book, shelf) {
      console.log(book, shelf)
      this.props.onUpdateBook(book, shelf)
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
              onBookChange={this.handleBookChange}
              />
        </div>
      </div>
    )
  }
}

export default Bookshelf