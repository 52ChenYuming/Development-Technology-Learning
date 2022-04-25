import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd';
import store from './store'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    // console.log(store.getState())
    this.changeInputValue = this.changeInputValue.bind(this)
    this.addBtn = this.addBtn.bind(this)

    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange) //订阅redux,只要仓库里面数据发生变化就会重新获取数据
  }
  render() {
    return (
      <div>
        <div style={{ margin: '10px' }}>
          <Input
            placeholder={this.state.inputVal}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInputValue}
          />
          <Button type='primary' onClick={this.addBtn}>add</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.deleteItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div >
      </div>

    )
  }
  changeInputValue(e) {
    // console.log(e);
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action) //让store知道你要干嘛
  }

  storeChange() {
    this.setState(
      this.setState(store.getState())
    )
  }

  addBtn() {
    const action = {
      type: 'add_item'
    }
    store.dispatch(action)
  }
  deleteItem(index) {
    const action = {
      type: 'delete_item',
      value: index
    }
    store.dispatch(action)
  }

}
