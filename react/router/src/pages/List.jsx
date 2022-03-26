import React, { Component } from 'react'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>List-Page</div>
    )
  }
}
