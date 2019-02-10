import React, { Component } from 'react'
import MovieProfile from './MovieProfile'
import ActorList from '../actors/ActorList';
class Movie extends Component {
  render() {
    return (
      <React.Fragment>
        <MovieProfile id={this.props.match.params.id} />
        <ActorList id={this.props.match.params.id} />
      </React.Fragment>
        
    )
  }
}
export default Movie