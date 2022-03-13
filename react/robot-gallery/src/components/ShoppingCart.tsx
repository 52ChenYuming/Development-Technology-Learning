import styles from './ShoppingCart.module.css'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
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

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          className={styles.button}
          onClick={ this.handleClick }
        >
          <FiShoppingCart></FiShoppingCart>
          <span>购物车 2 (件)</span>
        </button>
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



