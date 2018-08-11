import React from 'react';
import { Link } from 'react-router-dom';
import Like from '../containers/Like';
import Img from 'react-image';
    


const RecipeGrid = (props) => {
  console.log('inRecipeGrid', props)
  const comparator = function (a, b) {
    return b.likes.length - a.likes.length;
  };
  const renderRecipes = props.recipes.sort(comparator).map((recipe, index) =>
    <div key={index} className="recipe-card">
      <Like recipeId={recipe.id} value={recipe.likes.length}/>
      <h4>{recipe.title}</h4>
      <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Cugz52oSiaOPM4jygndlFZ4YDF2-jhkwUnNdCFE5Tp3uEsZi5g"/>
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
