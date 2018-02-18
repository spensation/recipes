import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipe } from '../actions/recipes.js';

const RecipeListItem = (props) => {
  return (
  <div className="recipe-card" onClick={() => {
    props.fetchRecipe(props.recipeId);
    props.history.push(`/recipes/${props.recipeId}`)
    }}>
    {props.recipeTitle}
  </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {fetchRecipe: bindActionCreators(fetchRecipe, dispatch)}
}

export const WrapperRecipeListItem = connect(null, mapDispatchToProps)(RecipeListItem);
