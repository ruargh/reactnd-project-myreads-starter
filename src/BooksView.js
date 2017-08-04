import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class BooksView extends Component {
  render() {
    return (
      {this.props.books.map((book) => (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: {book.imageLinks.thumbnail} }}></div>
            <BookShelfChanger />
          </div>
          <div className="book-title">To Kill a Mockingbird</div>
          <div className="book-authors">Harper Lee</div>
        </div>
      ))}
    )
  }
}

export default BooksView