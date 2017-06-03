import React, { Component } from 'react';

class AddMovie extends Component{
  addNewMovie(event){
    event.preventDefault();
    this.props.addMovie(this.refs.title.value);
    this.refs.title.value = ''
  }
  render(){
    return(
      <form onSubmit={this.addNewMovie.bind(this)}>
        <input type="text" ref="title"/>
        <button type="submit">Add New Movie</button>
      </form>
    )
  }
}

export default AddMovie;
