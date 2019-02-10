const initialState = {
  data :{},
  loading: true,
  single: {}
}
const ActorsReducer = (state=initialState, action)=>{
  switch(action.type){
    case 'ACTORS_LOAD':
      return {...state, loading:false, data:action.payload}
    case 'ACTORS_LOADING':
      return {...state, loading:true}
    case 'ACTOR_LOAD':
      return {...state, loading:false, single:action.payload}
    default:
      return state
  }
}

export default ActorsReducer