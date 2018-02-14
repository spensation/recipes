export function recipesReducer(state = {
  recipes: []
}, action) {
  switch(action.type) {
    case 'FETCH_RECIPES':
      return { loading: false, recipes: action.payload };
    case 'ADD_RECIPE':
      const recipe =  Object.assign({}, action.recipe);
      return Object.assign({}, state, {recipes: state.recipes.concat(recipe) });
    default:
      return state;
  }
}
