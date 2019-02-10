const initialState = {
  movies :{
    loading :true,
    data: []
  }
}
const SearchReducer = (state=initialState, action)=>{
  switch(action.type){
    case 'SEARCH_MOVIES_LOADING':
      return {...state, movies : { ...state.movies, loading:true}}
    case 'SEARCH_MOVIES_LOADED':
      return {...state, movies : { data:action.payload, loading:false}}
    default:
      return state
  }
}

export default SearchReducer