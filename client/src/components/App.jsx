import React, { Component } from 'react';
import apiCaller from './misc/apiCaller';

class App extends Component {
  constructor(props) {
    // TODO
    super(props);
    this.state = {
      isLoggedIn: false,
      userInfo: null,
    };
  }

  componentDidMount() {
    apiCaller.checkLogin().then(({ data }) => {
      if (data) {
        this.setState({
          isLoggedIn: true,
          userInfo: data,
        });
      }
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Ink Index</h1>
        {this.state.isLoggedIn ? <p>You are logged in as <em>{this.state.userInfo.username}</em></p>
        : null}
        {this.state.isLoggedIn ? <a href="/auth/logout"><button>Log out</button></a>
        : <a href="/auth/instagram"><button>Log in using Instagram</button></a>}
      </div>
    );
  }
}

export default App;
