import React from 'react';
// import Recipe from './Recipe';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/recipes.js';

const RecipeList = (props) => {
  const renderRecipes = props.recipes.map(recipe =>
    <Link className="recipe-card" key={recipe.id} to={`/recipes/${recipe.id}`}>{recipe.title}<br/>{recipe.category}<br/>serves: {recipe.serves}</Link>
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

// function mapStateToProps(state) {
//   return {recipes: state.recipes.recipes}
// }
//
// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
export default RecipeList;
