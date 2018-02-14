import React from 'react';

const RecipeList = (props) => {

  handleOnClick() {
    return deleteReecipe();
  }

  function listRecipes() {
    return props.recipes.map(recipe => {
      console.log(recipe)
      return (
        <div className="recipe-card">
        <ul>
            <h3>{recipe.title}</h3>
            <h4>{recipe.category}</h4>
            <h4>{recipe.serves}</h4>
            <button
              className="delete-recipe"
              id={recipe.id}
              onClick={recipe.handleOnClick.bind(recipe)}
            >Delete</button>
          </ul>
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
