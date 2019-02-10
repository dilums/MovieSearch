import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import ActorsReducer from './reducers/ActorsReducer'
import MoviesReducer from './reducers/MoviesReducer'
import SearchReducer from './reducers/SearchReducer'
const rootReducer = combineReducers({
  actors: ActorsReducer,
  movies:MoviesReducer,
  search:SearchReducer
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer, 
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
  );

export default store;