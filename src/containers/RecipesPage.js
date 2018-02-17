import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipes.js';
import RecipeList from '../components/RecipeList';
import RecipeShow from '../components/RecipeShow';

class RecipesPage extends React.Component {

  componentDidMount() {
    return this.props.actions.fetchRecipes();
  }

  render() {
    return (
    <div>
      <RecipeList recipes={this.props.recipes} />
      <Route path={`${this.props.match.url}/:recipeId`} component={RecipeShow} />
      <Route exact path={this.props.match.url} render={() => (
        <h3>Please select a Recipe from the list.</h3>
      )}/>
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

export const WrapperRecipesPage = connect(mapStateToProps, mapDispatchToProps)(RecipesPage)
