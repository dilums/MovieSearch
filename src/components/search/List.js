import React, { Component } from 'react'
import { Search } from '../../actions/ListActions'
import { connect } from 'react-redux'
import MovieItem from './MovieItem';
import { withRouter } from 'react-router-dom';
import './List.css'
class List extends Component {
  componentDidMount(){
    let selected;
    selected =   '/now_playing'

    this.props.Search(selected);
  }
  
  onBtnClick(selector){
    this.props.Search(selector);
  }
  render() {
    const { loading } = this.props.search.movies;
    const { results } = this.props.search.movies.data;
    let content;
    if(loading){
      content = (<p>Loaidng</p>);
    }else if( results === undefined || results.length === 0 ){
      content = (<p>No results</p>);
    }else{
      content = (
        <React.Fragment>
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
          <h1 className="text-slanted">Movies</h1>
          </div>
        </div>
        <div className="row">
          {
            results.map(result=>(
              <MovieItem result={result} key={ result.id } />
            ))
          }
        </div>
        </React.Fragment>
      )
    }
    return (
     <section className="search-results">
        <div className="container">
        <div className="row mb-5">
      <div className="col-lg-8 mx-auto d-flex justify-content-around flex-wrap">
        <button className="btn btn-black text-uppercase m-2"
        onClick={this.onBtnClick.bind(this, '/now_playing')}
        >Now Showing</button>
        <button className="btn btn-black text-uppercase m-2" 
        onClick={this.onBtnClick.bind(this, '/upcoming')}
        >upcoming</button>
        <button className="btn btn-black text-uppercase m-2"
        onClick={this.onBtnClick.bind(this, '/popular')}
        >popular</button>
        <button className="btn btn-black text-uppercase m-2"
        onClick={this.onBtnClick.bind(this, '/top_rated')}
        >top rated</button>
      </div>
    </div>
        { content }
      </div>
     </section>
    )
  }
}
const mapStateToProps = state => ({
  search: state.search
});
export default withRouter(connect(mapStateToProps, { Search })(List))