import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Search extends Component {
  render() {
    return (
      <div>
        This is my search box!
      </div>
    )
  }
}

var app = document.getElementById('app')

ReactDOM.render(<Search />, app)