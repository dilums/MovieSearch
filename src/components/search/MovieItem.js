import React from 'react'

const MovieItem = props => {
  const { poster_path, title, release_date, id } = props.result;
  return (
    <div className="col-8 mx-auto col-lg-3 text-center my-3">
      <div className="p-3 img-link-container">
        <a href={ '/movie/' + id }><img src={ (poster_path && ('https://image.tmdb.org/t/p/w500/' + poster_path) )||'/MovieSearch/images/movie-default.jpg' } alt="" className="img-fluid img-link-img"/></a>
      </div>
        <h5>{ title }</h5>
        <h5>{ release_date }</h5>
      </div>
  )
}

export default MovieItem
