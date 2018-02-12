import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipes.js';
import RecipeList from '../components/RecipeList';

class RecipeListContainer extends React.Component {

  componentDidMount() {
    return this.props.actions.fetchRecipes();
  }

  handleNewRecipeOnClick() {
    
  }

  render() {
    return (
      <div>
        <div>
          <button className="newRecipeButton"
            onClick={this.handleNewRecipeOnClick.bind(this)}>
            New Recipe
          </button>
        </div>
      <RecipeList recipes={this.props.recipes} />
    </div>
    )
  }
};

function mapStateToProps(state) {
  return {recipes: state.recipes.recipes}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperRecipeListContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeListContainer)
