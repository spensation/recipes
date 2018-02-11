import React from 'react';
import { fetchRecipes } from '../actions/recipes';

class RecipeListContainer extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        recipes: []
      }
  }

  componentDidMount() {
    let that = this;
    fetch('/api/v1/recipes')
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      that.setState({ recipes: data })
    })
  }



  render() {
    return (
      <div>
      {this.state.recipes.map((recipe) => {
        return(
          <div className="tile" key={recipe.id} >
            <h4>{recipe.title}</h4>
            <p>{recipe.category}</p>
          </div>
        )
      })}
    </div>
    )
  }
};

export default RecipeListContainer
