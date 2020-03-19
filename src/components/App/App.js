import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import local from '../../data/local';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      localNews: local,
    }
  }

  render () {
    return (
      <main className="app">
        <NewsContainer articles={this.state.localNews}/>
      </main>
    );
  }
}

export default App;
