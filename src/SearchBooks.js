import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    onNavigateToList: PropTypes.func.isRequired
  }

  render() {

    return (


      <div className="search-books">
        <div className="search-books-bar">
          {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
          <Link to="/" onClick={this.props.onNavigateToList} className="close-search" >Close</Link>

          <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>


    )
  }
}

export default SearchBooks