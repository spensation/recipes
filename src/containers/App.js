import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes } from '../actions/recipes';
import '../App.css';

import Main from '../components/Main';
import RecipeGridPage from './RecipeGridPage';
import NavBar from '../components/NavBar';
import SinglePage from './SinglePage';
import NewRecipeFormPage from './NewRecipeFormPage';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  // componentDidMount() {
  //     return this.props.fetchRecipes();
  // }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Main} />
          <Route exact path="/new_recipe" component={NewRecipeFormPage} />
          <Route exact path="/recipes" component={RecipeGridPage} />
          <Route path={`/recipes/:recipeId`} component={SinglePage} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.recipes };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRecipes: fetchRecipes
  }, dispatch);
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
