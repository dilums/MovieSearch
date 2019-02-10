import React, { Component } from 'react';
import Navigation from './layouts/Navigation';
import Router from './Router'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <Router/>
      </React.Fragment>
    );
  }
}

export default App;
