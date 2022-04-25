import { useState, useEffect, createRef } from 'react';
import { navs, subNav } from './nav'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Login from '../Login/Index'


function formatClass(i, len) {
  if (i === len - 1) {
    return 'lst'
  } else if (i === 0) {
    return 'fst'
  } else {
    return ''
  }
}

const Header = () => {
  const location = useLocation()
  const [activeSub, setActiveSub] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const loginRef = createRef()

  const getActiveSub = (pathname) => { // 获取当前路径所对应的activeSub
    let index;
    if (pathname === '/home') {
      index = 0
    } else {
      index = subNav.findIndex(item => item.path !== '' && pathname.includes(item.path))
    }
    setActiveSub(index)
    console.log(index);
  }

  useEffect(() => {
    getActiveSub(location.pathname)
  }, [location.pathname])

  const goLogin = () => {
    loginRef.current.isShow(true)
  }

  return (
    <div className="g-topbar">
      <div className="m-top">
        <div className="wrap f-cb">
          <h1 className="logo"></h1>
          <ul className="m-nav j-tflag">
            {
              navs.map((item, i) => {
                return (
                  <li key={`nav-${i}`} className={formatClass(i, navs.length)}>
                    <span>
                      <NavLink to={item.path}>
                        <em>{item.title}</em>
                        <sub className='cor'>&nbsp;</sub>
                      </NavLink>
                    </span>
                  </li>
                )
              })
            }
          </ul>
          <div className="m-tophead f-pr j-tflag">
            {/* 如果已登录，应该显示用户名 */}
            {
              isLogin ?
                (<div className='head f-fl f-pr'>
                  <img src="https://p2.music.126.net/Ez1QwlBTphEm5ZZd31h2rw==/109951164408530737.jpg?param=30y30" alt="" />
                </div>)
                : <div className='link s-fc3' onClick={goLogin}>登录</div>
            }
          </div>
          <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" className="m-topvd f-pr m-creator-center" target="_blank">创作者中心</a>
          <div className='m-srch f-pr j-suggest'>
            <div className="srchbg">
              <span className="parent">
                <input type="text" className='txt j-flag' placeholder='音乐/视频/电台/用户' />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='m-subnav j-tflag'>
        <div className='wrap f-pr'>
          <ul className="nav">
            {
              subNav.map((item, i) => {
                return (
                  <li onClick={() => setActiveSub(i)} key={`sub-${i}`}>
                    <Link to={'/home' + item.path} className={i === activeSub ? 'z-slt' : ''}>
                      <em className='f-pr'>
                        {item.name}
                        {
                          item.icon && (<span className='f-pa f-r-white-icon'></span>)
                        }
                      </em>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <Login onRef={loginRef}></Login>
    </div>
  )
}

export default Header