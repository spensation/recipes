import { combineReducers } from 'redux';
import { recipeReducer } from './recipes_reducer';
import { commentsReducer } from './comments_reducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  recipe: recipeReducer,
  comments: commentsReducer,
});

export default rootReducer;
