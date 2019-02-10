import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoadMovie } from '../../actions/MovieActions'
import './MovieProfile.css'
class MovieProfile extends Component {
  componentWillMount(){
    this.props.LoadMovie(this.props.id);
  }
  render() {
    let back_url = '/MovieSearch/images/cinema.jpg'
    const { loading }  = this.props.movies;
    const { title, 
            poster_path, 
            tagline, 
            overview,
            release_date,
            runtime,
            revenue,
            vote_average,
            genres,
            backdrop_path } = this.props.movies.single;
    let content;
    if(loading){
      content = (<p>loading</p>)
    }else if(title === undefined){
      content = (<p>No matches ! please check your link again</p>)
    }else{
      if(backdrop_path){
        back_url = `https://image.tmdb.org/t/p/original//${backdrop_path}`
      }
      content = (
        <React.Fragment>
            <div className="col-10 mx-auto col-md-4 text-center my-3">
            <img src={'https://image.tmdb.org/t/p/w500'+ poster_path} alt="" className="img-fluid"/>
            </div>
            <div className="col-10 mx-auto col-md-8  my-3">
            <h1 className="text-center text-uppercase" >{ title  }</h1>
            <h4 className="text-center text-uppercase text-slanted" >{ tagline  }</h4>
            <p>{ overview  }</p>
            <div className="d-flex justify-content-around flex-wrap my-4">
            {
              genres.map(genre=>(
                <span key={ genre.id }>{ genre.name }</span>
              ))
            }
            </div>
            <div className="row">
            <div className="col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"><span>Original Release</span><span>{ release_date }</span></div> 
            <div className="col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"><span>Running Time</span><span>{ runtime }</span></div>
            <div className="col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"><span>Box Office</span><span>{ revenue }</span></div>
            <div className="col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"><span>Vote Average</span><span>{ vote_average }</span></div>
            </div>
           
            </div>
          </React.Fragment>
      )
    }
    
    return (
      <section style={{ background: `url('${back_url}')center/cover fixed no-repeat`}} className="movie-hero">
        <div className="container">
        <div className="row hero-box align-items-center justify-content-center">
          <div className="col">
        <div className="row movie-detalis">
        { content }
        </div>
          
          </div>
        </div>
      </div>
      </section>
      
    )
  }
}
const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps, { LoadMovie })(MovieProfile)