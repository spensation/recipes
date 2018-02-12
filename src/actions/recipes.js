import fetch from 'isomorphic-fetch';

export function fetchRecipes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES' });
    return fetch('/api/v1/recipes')
    .then(response => response.json())
    .then(recipes => dispatch({ type: 'FETCH_RECIPES', payload: recipes}))
  };
}

export function addNewRecipe(recipe) {
  fetch('/api/v1/recipes', {
    method: 'POST',
    body: JSON.stringify({ recipe })
  }).then(response => response.json());
};
