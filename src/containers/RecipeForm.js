import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class RecipeForm extends Component {

	submit = (values) => {
		console.log('submit inside form');
		console.log(values)
	}
	
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.submit)}>
				<div>
					<label htmlFor="category">Category</label>
					<Field name="category" component="input" type="text"/>
				</div>
				<div>
					<label htmlFor="serves">Servings</label>
					<Field name="serves" component="input" type="text"/>
				</div>
				<div>
					<label htmlFor="prep_time">Prep Time</label>
					<Field name="prep_time" component="input" type="text"/>
				</div>
				<div>
					<label htmlFor="cook_time">Cook Time</label>
					<Field name="cook_time" component="input" type="text"/>
				</div>
				<div>
					<label htmlFor="total_time">Total Time</label>
					<Field name="total_time" component="input" type="text"/>
				</div>
				<div>
					<label htmlFor="Ingredients">Ingredients</label>
					<Field name="Ingredients" component="input" type="text"/>
				</div>
				<div>
					<label htmlFor="directions">Directions</label>
					<Field name="directions" component="input" type="text"/>
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

RecipeForm = reduxForm({
	form: 'recipe'
})(RecipeForm)

export default RecipeForm