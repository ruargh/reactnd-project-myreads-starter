import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render() {
    const { books } = this.props
    
    
    // const { bookshelves } = [ 
    //   {
    //     title: 'Currently Reading',
    //     shelf: 'currentlyReading'
    //    },
    //   {
    //     title: 'Want To Read',
    //     shelf: 'wantToRead'
    //    },
    //   {
    //     title: 'Read',
    //     shelf: 'read'
    //    }
    // ]

    let showBooks = books

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

              {/* { showBookshelves.map(( shelfObj, index ) => {
              <Bookshelf
              bookshelfTitle={shelfObj.title}
              books={showBooks.filter(b => b.shelf === shelfObj.shelf)}
                />

            })} */}

            <Bookshelf
              bookshelfTitle={ 'Currently Reading' } 
              books={showBooks.filter(b => b.shelf === 'currentlyReading' )}
              />
            <Bookshelf
              bookshelfTitle={ 'Want To Read' } 
              books={showBooks.filter(b => b.shelf === 'wantToRead' )}
              />
            <Bookshelf
              bookshelfTitle={ 'Read' } 
              books={showBooks.filter(b => b.shelf === 'read' )}
              />


          </div>
        </div>
        <div className="open-search">
          {/* <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a> */}
          <Link
          to="/search"
          >Add a book</Link>
        </div>
      </div>

    )
  }
}

export default ListBooks