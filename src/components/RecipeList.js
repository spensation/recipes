import React from 'react';
// import Recipe from './Recipe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipes.js';
import { WrapperRecipeListItem } from './RecipeListItem';



const RecipeList = (props) => {
  const renderRecipes = props.recipes.map(recipe =>
    <WrapperRecipeListItem history={props.history} key={recipe.index} recipeTitle={recipe.title} recipeId={recipe.id} />
  );
  // return props.recipes.map((recipe, index) => {
  //   return <Recipe recipe={recipe} key={index} id={recipe.id}/>
  // })

  return (
    <div>
      {renderRecipes}
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
