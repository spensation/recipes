import fetch from 'isomorphic-fetch';

export function fetchRecipes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES' });
    return fetch('/api/v1/recipes')
    .then(response => response.json())
    .then(recipes => dispatch({ type: 'FETCH_RECIPES', payload: recipes}))
  };
}

// export function fetchRecipe(recipeId) {
//   console.log("hello?")
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_RECIPE' });
//     return fetch(`/api/v1/recipes/${recipeId}`)
//     .then(response => response.json())
//     .then(recipe => dispatch({ type: 'FETCH_RECIPE', payload: recipe}))
//   };
// }

export function addRecipe(recipe) {
  return (dispatch) => {
    dispatch({ type: 'ADD_RECIPE_PENDING' });
    return fetch('/api/v1/recipes', {
      method: 'POST',
      body: JSON.stringify({ recipe:  recipe }),
      headers:{ Accept: "application/json",
               "Content-Type": "application/json"}
    }).then(response => response.json())
      .then(recipe => dispatch({ type: 'ADD_RECIPE_FULFILLED', payload: recipe }))
    };
  }

  export function deleteRecipe(id, history) {
    return dispatch => {
      dispatch({type: 'DELETE_RECIPE_PENDING'});
      return fetch(`/api/v1/recipes/${id}`, {
          method: "DELETE",
          headers: {Accept: "application/json"}
      }).then(response => response.json())
        .then(recipes => dispatch({ type: 'DELETE_RECIPE_FULFILLED', payload: recipes }))

    };
  };
