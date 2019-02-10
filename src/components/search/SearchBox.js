import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
class SearchBox extends Component {
  state ={
    term:''
  }
  onChange = e =>this.setState({ [e.target.name]: e.target.value });
  onSubmit = e =>{
    e.preventDefault();
    this.props.history.push(`/search?q=${this.state.term}`);
  }
  
  render() {
    const { term } = this.state;
    return (
    <form className="my-2 my-lg-0 ml-auto" onSubmit={ this.onSubmit }>
    <div className="search-container">
    <span><i className="fas fa-search"></i></span>
      <input className="mr-sm-2 inpt-search"
      type="search" 
      placeholder="Search for a movie" 
      aria-label="Search"
      value = { term }
      name = "term"
      onChange = { this.onChange }
      />
    </div>
    </form>
    )
  }
}
export default withRouter(SearchBox)