import React, { Component, Fragment } from "react";
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['学习', 'React']
    }
  }

  handleInputChange(e) {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {

    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
    console.log(this.state.list);
  }

  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1);
    this.setState({
      list: list
    })
    // console.log(index);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容：</label>
          <input id="insertArea" className="input" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem key={index} content={item} deleteItem={this.handleItemDelete.bind(this, index)}></TodoItem>
                // <li
                //   key={index}
                //   onClick={this.handleItemDelete.bind(this, index)}
                //   dangerouslySetInnerHTML={{ __html: item }}
                // ></li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList