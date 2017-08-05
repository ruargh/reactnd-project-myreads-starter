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

    /**
     * TODO: Instead of setting a variable for and filtering shelf,
     * abstract showBooks as react component with shelf passed as
     * prop.
     * 
     */
    let showBooksCR
    showBooksCR = books.filter((b) => b.shelf == 'currentlyReading')

    let showBooksWTR
    showBooksWTR = books.filter((b) => b.shelf == 'wantToRead')

    let showBooksR
    showBooksR = books.filter((b) => b.shelf == 'read')

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {console.log({books})}
            {console.log({showBooksR})}
            <div className="list-books-content">
                <div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>

                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {showBooksCR.map((book) => (
                        <li key={book.id} >
                            <div className="book">
                                <div className="book-top">
                                <div className="book-cover" onClick={() => onToggleShelf(book)} style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <BookShelfChanger />
                                </div>
                            <div className="book-title">{ book.title }</div>
                            {book.authors.map((author, index) => (
                                <div key={index} className="book-authors">{ author }</div>
                            ))}
                            </div>
                        </li>
                        ))}

                    </ol>
                  </div>
                
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>

                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {showBooksWTR.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                <div className="book-cover" onClick={() => onToggleShelf(book)} style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <BookShelfChanger />
                                </div>
                            <div className="book-title">{ book.title }</div>
                            {book.authors.map((author, index) => (
                                <div key={index} className="book-authors">{ author }</div>
                            ))}
                            </div>
                        </li>
                        ))}

                    </ol>
                  </div>
                
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>

                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {showBooksR.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                <div className="book-cover" onClick={() => onToggleShelf(book)} style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <BookShelfChanger />
                                </div>
                            <div className="book-title">{ book.title }</div>
                            {book.authors.map((author, index) => (
                                <div key={index} className="book-authors">{ author }</div>
                            ))}
                            </div>
                        </li>
                        ))}

                    </ol>
                  </div>
                
                </div>


                </div>
            </div>
        </div>    
    )
  }
}

export default ListBooks
