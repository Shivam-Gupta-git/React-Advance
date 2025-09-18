import React, { Component } from 'react'

export default class CountVal extends Component {

  componentDidUpdate(prevProps, prevState){
    if(prevProps.number !== this.props.number){
      alert("Component updated")
    }
  }

  render() {
    return (
      <h1>Count: {this.props.number}</h1>
    )
  }
}
