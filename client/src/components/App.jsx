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
        <a href="/auth/instagram"><button>Log in using Instagram</button></a>
      </div>
    );
  }
}

export default App;
