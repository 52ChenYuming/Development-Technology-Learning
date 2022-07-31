import React from 'react';
import './App.css';
import robots from './mockdata/robots.json'
import Robot from './components/Robot';
function App() {
  return (
    <ul>
      {
        robots.map( r => <Robot id={r.id} email={r.email} name={r.name}></Robot>)
      }
    </ul>
  );
}

export default App;
