const initialState = {
  data :{},
  loading: true,
  single:{}
}
const MoviesReducer = (state=initialState, action)=>{
  switch(action.type){
    case 'MOVIES_LOAD':
      return {...state, loading:false, data:action.payload}
    case 'MOVIES_LOADING':
      return {...state, loading:true}
    case 'MOVIE_LOAD':
      return {...state, loading:false, single:action.payload}
    default:
      return state
  }
}

export default MoviesReducer