import React, { Component } from 'react';

class UpdateMovie extends Component{

  updateMovieData(event){
    event.preventDefault();
    this.props.updateMovie(this.refs.titleUpdate.value, this.refs.rankUpdate.value);
  }

  updateChangeData(event){
    event.preventDefault();
    this.props.updateChange(event);
  }

  render(){
    return(
      <form
        className={this.props.visible}
        onSubmit={this.updateMovieData.bind(this)}
        onChange={this.updateChangeData.bind(this)}
      >
        <p>Update Here:</p>
        <label>Movie Title</label>
        <br/>
        <input
          className="form"
          value={this.props.title}
          type="text"
          ref="titleUpdate"
          name="title"
        />
        <br/>
        <label>Movie Rank</label>
        <br/>
        <input
          className="form"
          value={this.props.rank}
          type="text"
          ref="rankUpdate"
          name="rank"
        />
        <button className="button update" type="submit">Update</button>
      </form>
    );
  }
}

export default UpdateMovie;
