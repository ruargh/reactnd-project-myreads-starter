import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    const { bookshelves } = [ 
      {
        title: 'Currently Reading',
        shelf: 'currentlyReading'
       },
      {
        title: 'Want To Read',
        shelf: 'wantToRead'
       },
      {
        title: 'Read',
        shelf: 'read'
       }
    ]


    showBooks = books
    showBookshelves = bookshelves

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { showBookshelves.map(( shelfObj, index ) => {
              <Bookshelf
              bookshelfTitle={shelfObj.title}
              books={showBooks.filter(b => b.shelf === shelfObj.shelf)}
            />

            })}

          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>

    )
  }
}

export default SearchBooks