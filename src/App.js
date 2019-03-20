import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';

class App extends Component {
  render() {
    return (
  //    <Provider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Postform />
          <br />
          <Posts />
        </header>
      </div>
    //  </Provider>
    );
  }
}

export default App;
