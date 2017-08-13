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
    const shelves = { currentlyReading: 'Currently Reading' , read: 'Read', wantToRead: 'Want to Read' }

    let showBooks = books

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            {Object.keys(shelves).map(shelfKey =>
              <Bookshelf
                bookshelfTitle={shelves[shelfKey]}
                books={showBooks.filter(b => b.shelf === shelfKey )}
                onUpdateBook={this.handleBookUpdate}
                key={shelfKey}
              />
            )}

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
