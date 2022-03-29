import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages2/index'
import './index.css'

export default function AppRouter2() {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/'>沸点</Link></li>
            <li><Link to='/'>课程</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          <Route path='/' element={<Index/>}></Route>
        </div>
      </div>
    </Router>
  )
}
