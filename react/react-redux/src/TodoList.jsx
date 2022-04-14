import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd';
import store from './store'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    console.log(store.getState())
    this.changeInputValue = this.changeInputValue.bind(this)
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
          <Button type='primary'>add</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item>
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
}
