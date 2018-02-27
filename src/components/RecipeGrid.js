import React from 'react';
import { Link } from 'react-router-dom';


const RecipeGrid = (props) => {
  const renderRecipes = props.recipes.recipes.map(recipe =>
    <div className="recipe-card">
      <h4>{recipe.title}</h4>
      <p>{recipe.category}</p>
      <p>Yeilds: {recipe.serves}</p>
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
