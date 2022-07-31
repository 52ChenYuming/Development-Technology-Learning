import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

import './index.css'

export default class List extends Component {

  // 对接收的proTypes进行：类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    // console.log(updateTodo)
    return (
      <ul className="todo-main">          
        {
          todos.map((todo) => {
            return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
      
    )
  }
}
