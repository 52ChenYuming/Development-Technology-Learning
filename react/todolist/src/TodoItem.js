import React, { Component } from "react";
import './style.css'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.props.content}</div>
    )
  }
  handleClick() {
    // console.log(1);
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }
}
export default TodoItem