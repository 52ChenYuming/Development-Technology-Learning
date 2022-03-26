import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import List from './pages/List'
// BrowserRouter声明模块， Link路由跳转， Route做路径和组件的匹配

function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/list/123'>列表</Link></li>
      </ul>


      <Routes>
        <Route path='/' element={<Index></Index>}></Route>
        <Route path='/list/:id' element={<List></List>}></Route>
      </Routes>


    </Router>
  )
}

export default AppRouter