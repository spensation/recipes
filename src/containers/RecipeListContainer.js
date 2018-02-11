import React from 'react';
import { fetchRecipes } from '../actions/recipes';
import Recipe from '../components/Recipe'

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
        <div>
          <button className="newRecipeButton">
            New Recipe
          </button>
        </div>
      {this.state.recipes.map((recipe) => {
        return(<Recipe recipe={recipe} key={recipe.id} />)
      })}
    </div>
    )
  }
};

export default RecipeListContainer
