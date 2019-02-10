import axios from 'axios';
export const LoadMovies = id => dispatch => {
  dispatch({type:'MOVIES_LOADING'})
  axios
    .get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US`)
    .then(res =>
      dispatch({
        type: 'MOVIES_LOAD',
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: 'MOVIES_LOAD',
        payload: []
      })
    );
};

export const LoadMovie = id => dispatch => {
  dispatch({type:'MOVIES_LOADING'})
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US`)
    .then(res =>
      dispatch({
        type: 'MOVIE_LOAD',
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: 'MOVIE_LOAD',
        payload: []
      })
    );
};