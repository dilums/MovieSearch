import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoadActor } from '../../actions/ActorActions'
import './ActorProfile.css'
class ActorProfile extends Component {
  componentWillMount(){
    this.props.LoadActor(this.props.id);
  }
  render() {
    const { loading }  = this.props.actors;
    const { name, 
            profile_path, 
            biography,
            place_of_birth
          } = this.props.actors.single;
    let content;
    if(loading){
      content = (<p>loading</p>)
    }else if(name === undefined){
      content = ((<p>Sorry, No matches, Please check your link again</p>))
    }else{
      content = (
        <React.Fragment>
            <div className="row mt-5">
              <div className="col-10 mx-auto col-md-4 text-center my-3">
                <h1 className="text-center text-uppercase" >{ name  }</h1>
                <img src={(profile_path && ('https://image.tmdb.org/t/p/w500'+ profile_path))||'/MovieSearch/images/default.jpg'} alt="" className="img-fluid"/>
                <h4 className="text-center mt-2">{place_of_birth}</h4>
              </div>
            </div>

            {biography 
              ? (
                <div className="row my-5">
              <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                <h1 className="text-slanted text-uppercase">biography</h1>
              </div>
              <div className="col-10 mx-auto col-md-12 my-3">
                <p>{ biography  }</p>
              </div>
            </div>
              )
              :null}
            
          </React.Fragment>
      )
    }
    return (
      <section className = "actor-hero">
      <div className="container">
        { content }
      </div>
      </section>
    )
  }
}
const mapStateToProps = state => ({
  actors: state.actors
});

export default connect(mapStateToProps, { LoadActor })(ActorProfile)