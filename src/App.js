import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.less';
import Component1 from './components/component1/Component1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.appColor}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Component1 />
    </div>
  );
}

export default App;
