
export function recipesReducer(state = {
  loading: true,
  recipes: []
}, action) {
  switch(action.type) {
    case 'LOADING_RECIPES':
      return Object.assign({}, state, { loading: true });
    case 'FETCH_RECIPES':
      return Object.assign({}, state, { loading: false, recipes: action.payload });
    default:
      return state;
  }
}

export function recipeReducer(state = {
  loading: true,
  recipe: {}
}, action) {
  switch(action.type) {
    case 'LOADING_RECIPE':
      return Object.assign({}, state, { loading: true });
    case 'FETCH_RECIPE':
      return Object.assign({}, state, { loading: false, recipe: action.payload })
    case 'ADD_RECIPE_PENDING':
      return {...state, posting: true}
    case 'ADD_RECIPE_FULFILLED':
      // const recipe =  Object.assign({}, action.recipe);
      // return Object.assign({}, state, {recipes: state.recipes.concat(recipe) });
      return {
        ...state,
        posting: false,
        posted: true,
        recipe: action.payload.recipe
      }
    case 'DELETE_RECIPE_PENDING':
      return {...state, posting: true}
    case 'DELETE_RECIPE_FULFILLED':
      const recipes = state.recipes.filter( recipe => recipe.id !== action.id);
      return { recipes };
    default:
      return state;
  }
}
