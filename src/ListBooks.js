import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger'

class ListBooks extends Component {

  render() {
    const { books } = this.props

    let showBooks
    showBooks = books

    return (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                {showBooks.map((book) => (
                    <div key={book.id} className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                            <BookShelfChanger />
                        </div>
                    <div className="book-title">{ book.title }</div>
                    <div className="book-authors">Harper Lee</div>
                    </div>
                ))}
            </div>
        </div>
    </div>    
    )
  }
}

export default ListBooks
