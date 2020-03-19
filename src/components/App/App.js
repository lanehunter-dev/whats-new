import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import '../Header/Header.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      health: health,
      entertainment: entertainment,
      science: science,
      technology: technology,
      currentPage: 'local'
    }
  }

  changePage = (pageName) => {
    this.setState({currentPage: pageName})
  }

  render () {
    return (
      <section className="app">
        <header>
          <h1>What's New?</h1>
        </header>
        <nav>
          <Menu changePage={this.changePage}/>
        </nav>
        <main>
          <NewsContainer articles={this.state[this.state.currentPage]}/>
        </main>
      </section>
    );
  }
}

export default App;
