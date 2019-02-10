import React, { Component } from 'react'

class MovieListItem extends Component {
  render() {
    const { title, character, poster_path, release_date, id } = this.props.movie;
    return (
      <div className="col-8 mx-auto col-md-3 col-lg-2 text-center my-3">
      <div className="p-3 img-link-container">
        <a href={ '/movie/' + id }><img src={ (poster_path && ('https://image.tmdb.org/t/p/w500/' + poster_path) )||'/MovieSearch/images/movie-default.jpg' } alt="" className="img-fluid img-link-img"/></a>
      </div>
        <h5 className="text-muted text-slanted mt-3">{ character }</h5>
        <h5>{ title }</h5>
        <h5>{ release_date }</h5>
      </div>
    )
  }
}
export default MovieListItem