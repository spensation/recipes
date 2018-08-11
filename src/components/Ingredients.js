import React from 'react';
import Ingredient from './Ingredient';


const Ingredients = (props) => {
	console.log('inIngredients', props)
	const ingredients = props.ingredients.map(ingredient => {
		return <Ingredient ingredient={ingredient} key={ingredient.id} />
	})
	
	return (
		<div className='ingredients'>
			{ingredients}
		</div>
	)
}

export default Ingredients;
