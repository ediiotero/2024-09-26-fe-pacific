import React, { Component } from 'react'

export default class StateColor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: 'black',
      todos: []
    }
  }

  // state = {
  //   color: 'black'
  // }

  handleClick(newColor) {
    this.setState({color: newColor})
  }

  componentDidMount() {
    console.log('DID Mount')
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => this.setState({todos: data}))
  }

  componentDidUpdate() {
    console.log('Did Update')
  }

  componentWillUnmount() {
    console.log('Will Unmount')
  }

  render() {
    return (
      <>
       <div style={{
        width: '10rem',
        height: '10rem',
        backgroundColor: this.state.color
       }}></div>

       <button onClick={() => this.handleClick('red')}>RED</button>
       <button onClick={() => this.handleClick('black')}>BLACK</button>
       <button onClick={() => this.handleClick('green')}>GREEN</button>

       {this.state.todos.map(todo => <p key={todo.id}>{todo.title}</p>)}
      </>
    )
  }
}
