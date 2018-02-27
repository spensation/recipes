import { combineReducers } from 'redux';
import { recipesReducer, recipeReducer } from './recipes_reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer
});

export default rootReducer;
