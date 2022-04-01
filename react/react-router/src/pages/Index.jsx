import React, { Fragment } from 'react'
import { Link, Navigate } from 'react-router-dom'
export default function index() {
  const state = {
    list: [
      { cid: 1, title: '掘金' },
      { cid: 2, title: '力扣' },
      { cid: 3, title: '主页' },
    ]
  }
  return (
    <Fragment>
      {/* <Navigate to="/home"></Navigate> */}
      <ul>
        {
          state.list.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/list/${item.cid}`}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}
