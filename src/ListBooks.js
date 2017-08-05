import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onToggleShelf: PropTypes.func.isRequired
  }

    state = {
        query: ''
    }

  render() {
    const { books, onToggleShelf } = this.props
    const { query } = this.state

    let showBooks
    showBooks = books.filter((b) => b.shelf == 'read')

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {console.log({books})}
            {console.log({showBooks})}
            <div className="list-books-content">
                <div>
                    {showBooks.map((book) => (
                        <div key={book.id} className="book">
                            <div className="book-top">
                            <div className="book-cover" onClick={() => onToggleShelf(book)} style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <BookShelfChanger />
                            </div>
                        <div className="book-title">{ book.title }</div>
                        <div className="book-title">{ book.shelf }</div>
                        {book.authors.map((author, index) => (
                            <div key={index} className="book-authors">{ author }</div>
                        ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>    
    )
  }
}

export default ListBooks
