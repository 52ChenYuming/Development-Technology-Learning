// src 中的路口文件一定要是 index.js

import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import 'antd/dist/antd.css';

ReactDOM.render(<TodoList></TodoList>, document.getElementById('root'))