import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookshelfControl extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        console.log(e.target.value)
        this.props.onShelfChange(e.target.value)
    }

  render() {
    const { shelf } = this.props

    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={this.handleChange} >
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