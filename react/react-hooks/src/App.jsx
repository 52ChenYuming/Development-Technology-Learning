import React, { Component, useState } from 'react'

export default function App() {

  const [age, setAge] = useState(21)
  const [gender, setGender] = useState('男')
  const [job, setJob] = useState('程序员')

  return (
    <div>
      <p>陈煜明，今年 {age} 岁</p>
      <p>性别：{gender}</p>
      <p>工作：{job}</p>
    </div>
  )
}