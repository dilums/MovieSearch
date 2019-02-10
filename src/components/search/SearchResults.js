import React, { Component } from 'react'
import { Search } from '../../actions/SearchActions'
import { connect } from 'react-redux'
import query from 'query-string';
import MovieItem from './MovieItem';
 class SearchResults extends Component {
   state = {
     search_query : ''
   }
  componentDidMount(){
    let search_query = query.parse(this.props.location.search, { ignoreQueryPrefix: true }).q;
    this.setState({search_query:search_query})
    this.props.Search(search_query);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    let search_query = query.parse(nextProps.location.search, { ignoreQueryPrefix: true }).q
    if(prevState.search_query === search_query){
      return prevState
    }else{
      nextProps.Search(search_query)
      return { search_query:search_query}
    }
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
          { content }
        </div>
      </section>
    )
  }
}
const mapStateToProps = state => ({
  search: state.search
});
export default connect(mapStateToProps, { Search })(SearchResults)