export function ingredientsReducer(state = {
	loading: true,
	ingredients: []
}, action) {
	switch(action.type) {
		case 'LOADING_INGREDIENTS':
      	  return Object.assign({}, state, { loading: true });
      	case 'INGREDIENTS_LOADED':
      	  return Object.assign({}, state, { loading: false, ingredients: action.payload })
	    case 'ADD_INGREDIENT_PENDING':
	      return Object.assign({}, state, { loading: true });
	    case 'ADD_INGREDIENT_FULFILLED':
	      return {
	        ingredients: {
	        	...state.ingredients,
	        	posting: false,
		        posted: true,
		        ingredient: action.payload.ingredient
	        }	
	      }        
	    default:
	      return state;
	}	
}
