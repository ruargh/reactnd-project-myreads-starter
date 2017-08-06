import React from 'react'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    screen: 'list',
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }


  render() {
    return (
      <div className="app">

        {this.state.screen === 'search' && (
          <SearchBooks
          onNavigateToList={() => {
            this.setState({ screen: 'list' })
          }}
          />
        )}

        {this.state.screen === 'list' && (
          <ListBooks
          books={this.state.books}
          onNavigateToSearch={() => {
            this.setState({ screen: 'search' })
          }}
          />
        )}

      </div>
    )
  }
}

export default BooksApp
