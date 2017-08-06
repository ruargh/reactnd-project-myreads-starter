import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(book => {
      this.setState(state => ({    
        books: state.books.concat([ book ])
      }))
        this.getAll();
    }).catch(function(e) {
       console.log(e);
   });
  }



  render() {
    return (
      <div className="app">

        <Route exact path="/search" render={() => (
          <SearchBooks/>
        )}/>

        <Route exact path="/" render={() => (
          <ListBooks
          books={this.state.books}
          onUpdateBook={(book, shelf) => {
            this.updateBook(book, shelf)
            history.pushState('/')
          }}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
