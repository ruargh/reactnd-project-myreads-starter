import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookshelfControl from './BookshelfControl'

class Book extends Component {

    constructor(props) {
        super(props)
        this.handleShelfChange = this.handleShelfChange.bind(this)
    }

  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  handleShelfChange(id, shelf) {
    this.props.onBookChange(id, shelf)
  }


  render() {
    const { books } = this.props

    let showBooks = books

    return (

          <ol className="books-grid">
            {showBooks.map(book =>
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: '100%', height: '100%', backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                    <BookshelfControl
                      shelf={book.shelf}
                      id={book.id}
                      onShelfChange={this.handleShelfChange}
                    />
                  </div>
                  <div className="book-title">
                    {book.title}
                  </div>


                  <div className="book-authors">
                    {book.authors ? book.authors.join(', ') : ''}
                  </div>


                </div>
              </li>
            )}
        </ol>
    )
  }
}

export default Book
