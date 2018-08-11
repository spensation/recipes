import React from 'react';

const Ingredient = (props) => {
	console.log('inIngredient', props)
	return (
		<div className="ingredient">
			<p>{props.ingredient.name}</p>
		</div>
	)
}

export default Ingredient;
