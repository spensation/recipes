import { addRecipe } from '../actions/recipes';

function submit(values) {
	console.log('from submit.js', values)
	addRecipe(values)
}

export default submit