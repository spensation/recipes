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
    <p className="recipe-title">{props.recipeTitle}</p>
    <p className="recipe-category">{props.recipeCategory}</p>
    <p className="recipe-serves">Yields: {props.recipeServes}</p>
  </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {fetchRecipe: bindActionCreators(fetchRecipe, dispatch)}
}

export const WrapperRecipeListItem = connect(null, mapDispatchToProps)(RecipeListItem);
