import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Movie from './components/movies/Movie'
import Actor from './components/actors/Actor'
import SearchResults from './components/search/SearchResults';
import List from './components/search/List';
import { withRouter } from 'react-router-dom';
const Router = ()=>(
  <Switch>
    <Route exact path='/' component={ HomePage } />
    <Route exact path='/movie/:id' component={ Movie } />
    <Route exact path='/actor/:id' component={ Actor } />
    <Route exact path='/search' component={ SearchResults } />
    <Route exact path='/now_playing' component={ List }/>
    <Route exact path='/popular' component={ List }/>
    <Route exact path='/top_rated' component={ List }/>
    <Route exact path='/upcoming' component={ List }/>
    <Route component={ NotFound }></Route>
  </Switch>

)
export default withRouter(Router);