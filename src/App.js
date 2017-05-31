import React, { Component } from 'react';
import Header from './header/Header';
import MovieData from './movieData/MovieData';
import Footer from './footer/Footer';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: []
    };

  };

  componentWillMount() {
    const url = `https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json`
    axios.get(url).then( res => {
      const movies = res.data;
      this.setState({movies: movies})
    });
  }

  render() {

    return (
      <div className="App">
        <Header />
        <MovieData movies={this.state.movies} />
        <Footer />
      </div>
    );
  }
}

export default App;
