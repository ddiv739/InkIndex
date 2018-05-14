import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    // TODO
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Ink Index</h1>
        <button>Log in using Instagram</button>
        <button>Log in using Pinterest</button>
      </div>
    );
  }
}

export default App;
