import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './home';
import NavBar from './components/nav-bar/NavBar'
import AddTask from './add-task';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/add-task" component={AddTask} />
        </div>
      </Router>
    );
  }
}

export default App;
