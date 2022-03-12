import { render } from '@testing-library/react'
import styles from './ShoppingCart.module.css'
import React from 'react'

interface Props {

}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button}
          onClick={()=>{
            this.setState({isOpen: !this.state.isOpen})
          }}
        >购物车 2 (件)</button>
        <div className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none"
          }}
        >
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShoppingCart



