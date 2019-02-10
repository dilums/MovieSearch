import React, { Component } from 'react'
import ActorProfile from './ActorProfile'
import MovieList from '../movies/MovieList'
export default class Actor extends Component {
  render() {
    return (
      <React.Fragment>
        <ActorProfile id={this.props.match.params.id} />
        <MovieList id={this.props.match.params.id} />
      </React.Fragment>
    )
  }
}
