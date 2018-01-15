import React, { Component } from 'react';
import logo from './logo.svg';
import { DgButton, TheButton } from './common-controls/Button';

import './styles/sass/core.sass';
import './App.css';
import { DgList, TheList } from './common-controls/List';


class App extends Component {
  constructor(){
      super();
      this.state = {thetext : 'DG', list: []};
  }

  componentDidMount(){
    const list = ['We', 'Like', 'Statless', 'Component'];
    setTimeout(()=>{
      this.setState({list});
    }, 500);
  }

  keyupThetext(args){
    return e => this.setState({thetext : e.target.value + args});
  }

  render() {
    const list = this.state.list;
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
        <div>
          <span>{this.state.thetext}</span>
          <MyText keyup={this.keyupThetext('diggu')}/>
        </div>
        <div>
          <DgList list={list} ></DgList>
          <TheList title="Test Title"></TheList>
        </div>
      </div>
    );
  }
}

const MyText = (props) =>  <span><input type="text" onKeyUp={props.keyup}/></span>

const alertFn = (text) => () => printFn(text, "test");
const printFn = (...args) => console.log(args);
export default App;
