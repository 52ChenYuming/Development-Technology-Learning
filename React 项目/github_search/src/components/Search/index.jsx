import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

  search = () => {
    // 获取用户的输入
    const { keywordElement: { value:keyword } } = this
    // 发送网络请求
    axios.get(`/api1/search/users?q=${keyword}`).then(
      response => { console.log('成功',response.data); },
      error => {console.log('失败',error);}
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
