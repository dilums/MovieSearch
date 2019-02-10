import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class ActorListItem extends Component {
  render() {
    const { name, character, profile_path, id } = this.props.actor;
    return (
      <div className="col-5 mx-auto col-md-3 col-lg-2 text-center my-3">
      <div className="p-3 img-link-container">
      <Link to={ '/actor/' + id }><img src={ ( profile_path && 'https://image.tmdb.org/t/p/w500/' + profile_path ) || '/MovieSearch/images/default.jpg' } alt="" className="img-fluid img-link-img"/></Link>
        
      </div>
        <h5 className="text-muted text-slanted mt-3">{ character }</h5>
        <h5>{ name }</h5>
      </div>
    )
  }
}
export default ActorListItem