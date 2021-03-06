import React, { Component } from 'react';
import MoviesGallery from '../frontend/Gallery/MoviesGallery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from '../frontend/Pages/Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={MoviesGallery} />
            <Route exact path='/:movieId' component={Details} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;