import React, { Component } from 'react';
import MainPage from './containers/mainpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainPage> </MainPage>
        </header>
      </div>
    );
  }
}

export default App;
