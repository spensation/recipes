export function recipesReducer(state = {
  recipes: []
}, action) {
  switch(action.type) {
    case 'FETCH_RECIPES':
      return { loading: false, recipes: action.payload };
    default:
      return state;
  }
}
