import robots from './mockdata/robots.json'
import logo from './assets/images/logo.svg'
import Robot from './components/Robot';
import React from 'react';
import styles from "./App.module.css";
import ShoppingCart from './components/ShoppingCart';



function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>机器人在线购物平台</h1>
      </div>
      <ShoppingCart></ShoppingCart>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
