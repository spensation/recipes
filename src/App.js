import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { WrapperRecipesPage } from './containers/RecipesPage';
import RecipeForm from './containers/RecipeForm';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavBar />
            <h1 className="App-title">Recipes</h1>
          </header>
          <Route exact path="/" component={WrapperRecipesPage} />
          <Route exact path="/new_recipe" component={RecipeForm} />
        </div>
      </Router>
    );
  }
}

export default App;
