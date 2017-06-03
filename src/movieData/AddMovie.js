import React, { Component } from 'react';

class AddMovie extends Component{
  addNewMovie(event){
    event.preventDefault();
    if(this.refs.title.value !== ''){
      this.props.addMovie(this.refs.title.value);
      this.refs.title.value = ''
      alert('Your movie is added to the list');
    }else{
      alert('You Must write something on the Form');
    }
  }
  render(){
    return(
      <form onSubmit={this.addNewMovie.bind(this)}>
        <label>Add New Movie:</label>
        <br/>
        <input
          className="add-movie-form"
          type="text"
          ref="title"
        />
        <button className="button save" type="submit">Add New Movie</button>
      </form>
    )
  }
}

export default AddMovie;
