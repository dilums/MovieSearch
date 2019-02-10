import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import SearchBox from '../components/search/SearchBox'
import { navLogo, searchIcon } from './SVGs'
const Navigation = () => {
  return (
  <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
  <Link className="navbar-brand" to="/">{ navLogo } MSearch</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    {searchIcon}
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <SearchBox />
    
  </div>
  </div>
</nav>
  )
}

export default Navigation
