import { combineReducers } from 'redux';
import { recipeReducer } from './recipes_reducer';
import { commentsReducer } from './comments_reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  recipes: recipeReducer,
  recipe: recipeReducer,
  comments: commentsReducer,
  form: formReducer,
});

export default rootReducer;
