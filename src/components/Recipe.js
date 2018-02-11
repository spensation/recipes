import React from 'react';

const Recipe = ({recipe}) =>
<div className="recipe-card" key={recipe.id} >
  <h4>{recipe.title}</h4>
  <p>{recipe.category}</p>
  <p>{recipe.serves}</p>
</div>

export default Recipe
