import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipes.js';
import RecipeList from '../components/RecipeList';

class RecipesPage extends React.Component {

  componentDidMount() {
    return this.props.actions.fetchRecipes();
  }

  render() {
    const { recipes, history } = this.props;
    return (
    <div>
      <RecipeList history={history} recipes={recipes} />
    </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export const WrapperRecipesPage = connect(mapStateToProps, mapDispatchToProps)(RecipesPage)
