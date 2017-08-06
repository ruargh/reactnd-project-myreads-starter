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

  handleShelfChange(book, shelf) {
    console.log(book, shelf)
    this.props.onBookChange(book, shelf)
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
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                            <BookshelfControl
                            shelf={book.shelf}
                            id={book.id}
                            onShelfChange={this.handleShelfChange}
                            />
                        </div>
                        <div className="book-title">
                        {book.title}
                        </div>
                        {book.authors.map((author, index) =>
                            <div key={index} className="book-authors">
                                {author}
                            </div>
                        )}
                    </div>
                </li>
            )}
        </ol>
    )
  }
}

export default Book





