import { combineReducers } from 'redux';
import { recipes } from './recipes';

const rootReducer = combineReducers({
  recipes: recipes
});

export default rootReducer
