import React from 'react';

const RecipeList = (props) => {
  function listRecipes() {
    return props.recipes.map(recipe => {
      console.log(recipe)
      return (
        <div className="recipe-card">
          <h3>{recipe.title}</h3>
          <h4>{recipe.category}</h4>
          <h4>{recipe.serves}</h4>
        </div>
      )
    })
  }

  return (
    <div>
      {listRecipes()}
    </div>
  )
}

export default RecipeList;
