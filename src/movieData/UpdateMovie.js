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
        onSubmit={this.updateMovieData.bind(this)}
        onChange={this.updateChangeData.bind(this)}
      >
        <input
          value={this.props.title}
          type="text"
          ref="titleUpdate"
          name="title"
        />
        <input
          value={this.props.rank}
          type="text"
          ref="rankUpdate"
          name="rank"
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}

export default UpdateMovie;