import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActorListItem from './ActorListItem'
import { LoadActors } from '../../actions/ActorActions'


class ActorList extends Component {
  componentWillMount(){
    this.props.LoadActors(this.props.id);
  }
  render() {
    const { loading }  = this.props.actors;
    const { cast } = this.props.actors.data;
    let content;
    if(loading){
      content = (<p>loading</p>)
    }else if( cast === undefined){
      content = (<p>No cast for this movie</p>)
    }else{
      content = (
        this.props.actors.data.cast.map(actor =>(
          <ActorListItem key={ actor.id } actor={ actor } />
        ))
      )
    }
    return (
      <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 text-center text-uppercase my-3">
        <h1 className="text-slanted">cast</h1>
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
  actors: state.actors
});


export default connect(mapStateToProps, { LoadActors })(ActorList)