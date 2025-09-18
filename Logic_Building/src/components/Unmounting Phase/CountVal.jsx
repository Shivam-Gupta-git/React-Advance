import React, { Component } from 'react'

export default class CountVal extends Component {
  render() {
    return (
      <h1>count: {this.props.number}</h1>
    )
  }
}
