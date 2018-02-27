import fetch from 'isomorphic-fetch';

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
