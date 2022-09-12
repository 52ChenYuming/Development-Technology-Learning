import React, {Component} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  search = () => {
    console.log('search组件发布消息了');
    // 获取用户的输入(连续结构赋值+重命名)
    const { keywordElement: { value: keyword } } = this
    PubSub.publish('search', {
      isFirst: false,
      isLoading: true,
    })

    // 发送网络请求--使用fetch发送
    axios.get(`/api1/search/users?q=${keyword}`).then(
      response => {
        // 请求成功后通知List更新状态
        PubSub.publish('search', {
          isLoading: false,
          users: response.data.items
        })
      },
      error => {
        // 失败后通知App更新状态
        PubSub.publish('search', {
          isLoading: false,
          err: error.message
        })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keywordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
