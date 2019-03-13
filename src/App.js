import React, { Component } from 'react';
import Test from './components/test';
import X from './components/testTwo';
// Note, there is no stylesheet import here. It is imported drectly into the index.js file


class App extends Component {
  render() {
    return (
      <div className="App">
        <Test />
        <X />
      </div>
    );
  }
}

export default App;
