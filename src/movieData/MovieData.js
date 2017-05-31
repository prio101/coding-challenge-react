import React, { Component } from 'react';
import '../movieData/movie-data.css'

class MovieData extends Component {
  render() {
    return(
      <div>
        <h1>Movie Data</h1>
        <div className="movie-collection">
          { this.props.movies.map(movie =>
            <div key={ movie.id }>
                <h4 className="movie-title">Movie Name: { movie.title }</h4>
                <p className="movie-rank">Movie Rank:&nbsp;{ movie.rank }</p>
                <a
                href={ `movie/`+ movie.id+'/edit' }
                className="button edit">
                Edit Movie
                </a>
                &nbsp;
                <a
                href={ `movie/`+ movie.id+'/delete' }
                className="button delete">
                Delete
                </a>
            </div>
          )}
        </div>
      </div>
    );
  };
}

export default MovieData;
