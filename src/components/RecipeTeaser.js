import React from 'react';
import Recipe from './Recipe';

const RecipeTeaser = (props) => {
  let { title, id, category, serves, total_time} = this.props.recipe;
  return (
    <div className="recipe-card">
      <h3>{title}</h3>
      <h4>{category}</h4>
      <h4>{serves}</h4>
      <h5>{total_time}</h5>
      <a>Link</a>
    </div>
  )
}

export default RecipeTeaser;
