import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieListItem from './MovieListItem'
import { LoadMovies } from '../../actions/MovieActions'


class MovieList extends Component {
  componentWillMount(){
    this.props.LoadMovies(this.props.id);
  }
  render() {
    const { loading }  = this.props.movies;
    const { cast } = this.props.movies.data;
    let content;
    if (loading){
      content = (<p>loading</p>);
    }else if( cast === undefined ){
      content = (<p>No Movies for this actor</p>);
    }else{
      content = cast.map(movie =>(
        <MovieListItem key={ movie.id } movie={ movie } />
      ))
    }
    return (
      <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 text-center text-uppercase my-4">
        <h1 className="text-slanted">Movies</h1>
        </div>
        </div>
      <div className="row">
        { content }
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});


export default connect(mapStateToProps, { LoadMovies })(MovieList)