import React, { Component, useState } from 'react'
import logo from './logo.svg'
import './App.css'

// class User extends Component {
//   render() {
//     return (
//       <div>
//         User模块
//       </div>
//     )
//   }
// }
// 根组件 函数式写法

const users = [
  {
    name: '罗超',
    age: 19,
    sex: '男'
  },
  {
    name: '肖凯浪',
    age: 18,
    sex: '男'
  }
]

function User(props) {
  //js
  // 父组件传的参数
  console.log(props)
  return (
    //wxml
    <div>
      <div>姓名：{props.user.name}</div>
      <div>年龄：{props.user.age}</div>
      <div>性别：{props.user.sex}</div>
    </div>
  )
}

function UserForm(params) {
  function addUser(event) {
    event.preventDefault()
  }
  return (
    <form onSubmit={addUser}>
      <div>
        <label>用户名：</label>
        <input placeholder="请输入用户名"></input>
      </div>
      <div>
        <label>年龄：</label>
        <input placeholder="请输入年龄"></input>
      </div>
      <div>
        <label>性别</label>
        <input placeholder="请输入性别"></input>
      </div>
      <div>
        <button type="submit">添加用户</button>
      </div>
    </form>
  )
}

function App() {
  // react hooks
  const [innerUsers, setInnerUsers] = useState([])
  setTimeout(() => {
    setInnerUsers(users)
  }, 1000)
  return (
    <div className="App">
      {/* 组件思想 */}

      {innerUsers.map((user, index) => (
        <User key={index} user={user} />
      ))}
      <UserForm />
    </div>
  )
}

export default App
