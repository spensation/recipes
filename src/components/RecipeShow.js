import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recipe from './Recipe';
import { fetchRecipe } from '../actions/recipes';

const RecipeShow = (props, dispatch) => {
  if (!props.recipe && !props.fetching) {
    return null;
  } else {
    return (
      <div>
        <Recipe recipe={props.recipe.recipe}/>
      </div>
    )
  }
}

// make new reducer for recipe
const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
    fetching: state.recipe.fetching
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRecipe: fetchRecipe
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);
