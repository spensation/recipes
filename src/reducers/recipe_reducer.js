const initialState = {
  posting: false,
  posted: false,
  fetching: false,
  fetched: true,
  recipe: {},
  recipes: [],
  error: null
}

export function recipeReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_RECIPE_PENDING':
      return {...state, fetching: true}
    case 'FETCH_RECIPE_FULFILLED':
      return { fetching: false, recipe: action.payload };
    case 'ADD_RECIPE_PENDING':
      return {...state, posting:true}
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
