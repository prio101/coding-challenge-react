import React, { Component } from 'react';
import Header from './header/Header';
import MovieData from './movieData/MovieData';
import Footer from './footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieData movies={this.props.movies} />
        <Footer />
      </div>
    );
  }
}

export default App;
