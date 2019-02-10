import React, { Component } from 'react'
import List from '../components/search/List';
import './HomePage.css'
class HomePage extends Component {
  redirect = link => {
    this.props.history.push(link);
  }
  render() {
    return (
      <React.Fragment>
      <header>
      <div className="container">
    <div className="row header-details d-flex align-items-center justify-content-center">
      <div className="col">
        <div className="banner text-center">
          <h1 className="text-uppercase w-50 mx-auto">
          Welcome to Movie Search
          </h1>
          <img src="/images/moviedb.png"  className="img_mdb" alt=""/>
        </div>
      </div>
    </div>
  </div>
      </header>
      <List/> 
      </React.Fragment>  
    )
  }
}
export default HomePage






