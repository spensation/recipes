import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import { WrapperRecipeListContainer } from './containers/RecipeListContainer';
import RecipeForm from './containers/RecipeForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipes</h1>
          </header>
          <Route exact path="/recipes" component={WrapperRecipeListContainer} />
          <Route exact path="/new_recipe" component={RecipeForm} />
        </div>
      </Router>
    );
  }
}

export default App;
