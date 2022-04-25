import Header from './Header/Header'
import { HashRouter as Router } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Router>
        <Header></Header>
      </Router>
      
      <div>content</div>
      <div>footer</div>
    </>
  )
}

export default Layout