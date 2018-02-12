import React, { Component } from 'react';
import './App.css';

import { WrapperRecipeListContainer } from './containers/RecipeListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes</h1>
        </header>
        <WrapperRecipeListContainer />
      </div>
    );
  }
}

export default App;
