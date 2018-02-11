import React from 'react';
import { Recipe } from './Recipe';

class Recipes extends React.Component {
  render() {
    const recipes = this.props.store.getState().recipes.map((recipe, index) => {
      return <Recipe recipe={recipe} key={index} store={this.props.store} />
    })
    return(
      <ul>
        {recipes}
      </ul>
    );
  }
};

export default Recipes;
