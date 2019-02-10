import axios from 'axios';
export const LoadActors = id => dispatch => {
  dispatch({type:'ACTORS_LOADING'})
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a7b63eebbe05462bc8265651583d5069`)
    .then(res =>
      dispatch({
        type: 'ACTORS_LOAD',
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: 'ACTORS_LOAD',
        payload: []
      })
    );
};

export const LoadActor = id => dispatch => {
  dispatch({type:'ACTORS_LOADING'})
  axios
    .get(`https://api.themoviedb.org/3/person/${id}?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US`)
    .then(res =>
      dispatch({
        type: 'ACTOR_LOAD',
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: 'ACTOR_LOAD',
        payload: []
      })
    );
};