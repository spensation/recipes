import React from 'react';

const Single = (props) => {
  console.log('in  single', props)
  return (
    <div className="single-view">
      <h1 className="recipe-title">{props.title}</h1>
      <h2 className="recipe-category"><strong>{props.category}</strong></h2>
      <p className="recipe-serves"><strong>Yield:</strong> {props.serves}</p>
      <p className="recipe-prep_time"><strong>Prep Time:</strong> {props.prep_time}</p>
      <p className="recipe-cook_time"><strong>Cooking Time:</strong> {props.cook_time}</p>
      <p className="recipe-total_time"><strong>Total Time:</strong> {props.total_time}</p>
      <h3 className="ingredients-list-heading">Ingredients:</h3>
      <p className="recipe-ingredients">{props.ingredients}</p>
      <h3 className="Preparation-heading">Preparation:</h3>
      <p className="recipe-directions">{props.directions}</p>
    </div>
  )
}

export default Single;
