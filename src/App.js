import React, { Component } from 'react';
import logo from './logo.svg';
import { DgButton, TheButton } from './common-controls/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <DgButton click={alertFn("Stateless")} text="Hello Stateless">Oh!Ya</DgButton>
          <TheButton click={alertFn("Statefull")} text="Hello Statefull">Yoyo!</TheButton>
        </div>
      </div>
    );
  }
}
const alertFn = (text) => () => printFn(text, "test");
const printFn = (...args) => console.log(args);
export default App;
