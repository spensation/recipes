import React from 'react';
import { Link } from 'react-router-dom';
import Like from '../containers/Like';
    


const RecipeGrid = (props) => {
  console.log('inRecipeGrid', props)
  const renderRecipes = props.recipes.recipes.map((recipe, index) =>
    <div key={index} className="recipe-card">
      <Like 
        recipeId={recipe.id}
        history={props.history}
      />
      <p>{recipe.likes.length}</p>
      <h4>{recipe.title}</h4>
      <p>{recipe.category}</p>
      <p>Yields: {recipe.serves}</p>
      <Link className="view-recipe-link" to={`/recipes/${recipe.id}`}>View Recipe</Link>
    </div>
  );

  return (
    <div>
      {renderRecipes}
    </div>
  )
}

export default RecipeGrid;
