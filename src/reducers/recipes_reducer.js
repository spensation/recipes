
// export function recipesReducer(state = {
//   loading: true,
//   recipes: []
// }, action) {
//   switch(action.type) {
//     case 'LOADING_RECIPES':
//       return Object.assign({}, state, { loading: true });
//     case 'FETCH_RECIPES':
//       return Object.assign({}, state, { loading: false, recipes: action.payload });
//     default:
//       return state;
//   }
// }

export function recipeReducer(state = {
  loading: true,
  recipes: [],
  recipe: {},
  likes: ''
}, action) {
  switch(action.type) {
    case 'LOADING_RECIPES':
      return Object.assign({}, state, { loading: true });
    case 'FETCH_RECIPES':
      return Object.assign({}, state, { loading: false, recipes: action.payload });
    case 'LOADING_RECIPE':
      return Object.assign({}, state, { loading: true });
    case 'RECIPE_LOADED':
      return Object.assign({}, state, { loading: false, recipe: action.payload, likes: action.payload.likes.length })
    case 'ADD_RECIPE_PENDING':
      return {...state, posting: true}
    case 'ADD_RECIPE_FULFILLED':
    
      return Object.assign({}, state, {recipe: state.recipes.concat(action.payload) });
      // return {
      //   ...state,
      //   recipe: action.payload.recipe
      // }
    case 'ADD_LIKE_FULFILLED':
    const recipeId = action.payload.recipe_id
   // const updatedRecipes = Object.assign({}, state, {recipes: recipes.recipes.recipe.likes.push(action.payload) )
      const updatedRecipes = state.recipes.map(recipe => {
        if (recipe.id === recipeId) {
          
          return Object.assign({}, recipe, { likes: recipe.likes.concat(action.payload)})
        }
        else {
          return recipe
        }
      })

      
      return {
        ...state,
        recipes: updatedRecipes 

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
