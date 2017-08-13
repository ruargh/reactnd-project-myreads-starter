import React, { Component } from 'react'

class BookshelfControl extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(id, shelf) {
        this.props.onShelfChange(this.props.id, shelf)
    }

  render() {
    const { shelf, id } = this.props

    return (
        <div className="book-shelf-changer">
          <select value={shelf} onChange={ (e) => {
            this.handleChange(id, e.target.value)}} >
            <option value="move" disabled>Move to...</option>
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
