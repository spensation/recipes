import fetch from 'isomorphic-fetch';

export function addIngredient(ingredient, recipeId) {
  return (dispatch) => {
    dispatch({ type: 'ADD_INGREDIENT_PENDING' });
    return fetch(`http://localhost:3001/api/v1/recipes/${recipeId}/ingredients`, {
      method: 'POST',
      body: JSON.stringify({ ingredient }),
      headers:{ Accept: "application/json",
               "Content-Type": "application/json"}
    }).then(response => {
      if (!response.ok) { throw response }
        return response.json()
    })
      .then(ingredient => {
        ingredient => dispatch({ type: 'ADD_INGREDIENT_FULFILLED', payload: ingredient })
    })
      .catch( err => {
        err.text().then( errorMessage => {
          console.log(errorMessage)
        })
      })
  }
}