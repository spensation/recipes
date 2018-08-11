import fetch from 'isomorphic-fetch';

export const SEARCH = 'SEARCH';

export function search(value) {
  return { type: SEARCH, value };
}

export function fetchRecipes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES' });
    return fetch('http://localhost:3001/api/v1/recipes', {
      headers:{ Accept: "application/json",
               "Content-Type": "application/json"}
    }).then(response => response.json())
    .then(recipes => dispatch({ type: 'FETCH_RECIPES', payload: recipes}))
  };
}

export function addRecipe(recipe) {
  console.log('from addRecipe', recipe)
  return (dispatch) => {
    dispatch({ type: 'ADD_RECIPE_PENDING' });

    return fetch('http://localhost:3001/api/v1/recipes', {

      method: 'POST',
      body: JSON.stringify({ recipe: recipe }),
      headers:{ 'Accept': "application/json",
               "Content-Type": "application/json"}
    }).then(response => response.json())
      .then(recipe => dispatch({ type: 'ADD_RECIPE_FULFILLED', payload: recipe }))
    };
  }

  export function fetchRecipe(recipeId) {
    return (dispatch) => {
      dispatch({ type: 'LOADING_RECIPE' });
      return fetch(`http://localhost:3001/api/v1/recipes/${recipeId}`)
      .then(response => response.json())
      .then(recipe => dispatch({ type: 'RECIPE_LOADED', payload: recipe}))
    }
  }

  export function deleteRecipe(id, history) {
    return dispatch => {
      dispatch({type: 'DELETE_RECIPE_PENDING'});
      return fetch(`http://localhost:3001/api/v1/recipes/${id}`, {
          method: "DELETE",
          headers: {Accept: "application/json"}
      }).then(response => response.json())
        .then(recipes => dispatch({ type: 'DELETE_RECIPE_FULFILLED', payload: recipes }))

    };
  };



