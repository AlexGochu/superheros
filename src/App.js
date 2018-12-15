import React, { Component } from 'react';
import Almanac from './pages/Almanac';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Almanac} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
