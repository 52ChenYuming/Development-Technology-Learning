import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <div onClick={this.handleClick}>{this.props.content} - {this.props.name}</div>
    )
  }
  handleClick() {
    console.log('delete');
    this.props.deleteItem(this.props.index)
  }
}
// 默认的传参
List.defaultProps = {
  name: '陈煜明'
}
List.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  name: PropTypes.string.isRequired
}
