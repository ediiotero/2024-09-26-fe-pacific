//Write a component WordProp that will take a prop of 'word'
// Make a 2nd component ClickWord that will use the WordProp component
// to display a word from its state
// Make a button that will change the state (change the current word)
// and display the new word in the DOM
import React, { Component } from 'react'

const WordProp = props => {
  return (
    <div>WordProp</div>
  )
}

export default class ClickWord extends Component {
 
  render() {
    return (
      <div>
        ClickWord
      </div>
    )
  }


}
