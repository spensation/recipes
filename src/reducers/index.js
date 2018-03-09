import { combineReducers } from 'redux';
import { recipesReducer, recipeReducer } from './recipes_reducer';
import { commentsReducer } from './comments_reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
  comments: commentsReducer,
});

export default rootReducer;
