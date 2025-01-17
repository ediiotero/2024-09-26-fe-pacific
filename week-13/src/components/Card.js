import React, { Component } from 'react'

const styles = {
    width: '18rem',
    display: 'inline-block'
}

export default class Card extends Component {
  render() {
    return (
        <div className="card my-2 mx-auto" style={styles}>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.text}</p>
                <a href='#' className="btn btn-primary"
                onClick={() => alert(`You clicked on ${this.props.title}`)}
                >Read more...
                </a>
            </div>
        </div>
    )
  }
}
