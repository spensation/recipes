const initialState = {
  posting: false,
  posted: false,
  fetching: false,
  fetched: true,
  recipes: [],
  error: null
}

export function recipesReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_RECIPES_PENDING':
      return {...state, fetching: true}
    case 'FETCH_RECIPES_FULFILLED':
      return { fetching: false, recipes: action.payload };
    default:
      return state;
  }
}
