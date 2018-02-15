import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipes.js';

const RecipeList = (props) => {

  function listRecipes() {
    return props.recipes.map((recipe, index) => {
      return <Recipe recipe={recipe} key={index} id={recipe.id}/>
    })
  }

  return (
    <div>
      {listRecipes()}
    </div>
  )
}

function mapStateToProps(state) {
  return {recipes: state.recipes.recipes}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
