import axios from 'axios';
export const Search = term => dispatch => {
  dispatch({type:'SEARCH_MOVIES_LOADING'})
  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US&page=1&include_adult=false&query=${term}`)
    .then(res =>
      dispatch({
        type: 'SEARCH_MOVIES_LOADED',
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: 'SEARCH_MOVIES_LOADED',
        payload: []
      })
    );
};