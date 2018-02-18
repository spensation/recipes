import { combineReducers } from 'redux';
import { recipesReducer } from './recipes_reducer';
import { recipeReducer } from './recipe_reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer
});

export default rootReducer
