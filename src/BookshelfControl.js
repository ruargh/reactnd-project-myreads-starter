import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookshelfControl extends Component {

  render() {
    const { shelf } = this.props

    return (
        <div className="book-shelf-changer">
            <select value={shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>

        </div>
    )
  }
}

export default BookshelfControl