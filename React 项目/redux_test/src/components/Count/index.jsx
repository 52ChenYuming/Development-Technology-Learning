import React, { Component } from 'react'
// 引入store
import store from '../../redux/store'
// 引入actionCreator，专门用于创建action对象
import { createIncreamentAction, createDecreamentAction, createIncreamentAsynAction } from '../../redux/count_action'
import './index.css'
export default class Count extends Component {

  state = { count: 0 }


  // 加法
  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncreamentAction(value * 1))
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecreamentAction(value * 1))
  }
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createIncreamentAction(value * 1))
    }
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    setTimeout(() => {
      store.dispatch(createIncreamentAsynAction(value * 1))
    }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数就+</button>
        <button onClick={this.incrementAsync}>异步+</button>

      </div>
    )
  }
}
