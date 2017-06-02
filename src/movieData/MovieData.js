import React, { Component } from 'react';
import '../movieData/movie-data.css'

class MovieData extends Component{
  constructor(props){
    super(props);
    this.state={
      search: '',
      movies: props.movies
    }
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }


  addMovie(event){
    event.preventDefault();
    let id = this.state.movies.length + 1;
    let title = this.refs.title.value;
    let rank = this.state.movies.length + 1;
    this.setState({
      movies: this.state.movies.concat({id, title, rank})
    });
    this.refs.title.value = '';
  }

  deleteMovie(movie){
    let movies = this.state.movies;
    for(let i = 0; i < movies.length; i++ ){
      if(movies[i].id === movie.id ){
        movies.splice(i, 1);
      }
    }
    this.setState({ movies: movies })
  }

  render() {
    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return(
      <div>
        <h1>IMDB 100 Top Movies</h1>
        <input
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />

        <form onSubmit={this.addMovie.bind(this)}>
          <input type="text" ref="title"/>
          <button type="submit">Add New Movie</button>
        </form>

        <div className="movie-collection">
          {filteredMovies.map(movie =>
            <div key={ movie.id }>
                <h4 className="movie-title">Movie Name: { movie.title }</h4>
                <p className="movie-rank">Movie Rank:&nbsp;{ movie.rank }</p>
                <button onClick={this.deleteMovie.bind(this, movie)}>
                  Delete Movie
                </button>
            </div>
          )}
        </div>
      </div>
    );
  };
}

export default MovieData;
