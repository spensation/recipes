import fetch from 'isomorphic-fetch';

export function fetchRecipes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES' });
    return fetch('/api/v1/recipes')
    .then(response => response.json())
    .then(recipes => dispatch({ type: 'FETCH_RECIPES', payload: recipes}))
  };
}

export function addRecipe(recipe) {
  return (dispatch) => {
    dispatch({ type: 'ADD_RECIPE' });
    return fetch('/api/v1/recipes', {
      method: 'POST',
      body: JSON.stringify({ recipe:  recipe }),
      headers:{ Accept: "application/json",
               "Content-Type": "application/json"}
    }).then(response => response.json())
      .then(recipe => dispatch({ type: 'ADD_RECIPE', payload: recipe }))
    };
  }

  export function deleteRecipe(id, history) {
    return dispatch => {
      dispatch({type: 'DELETING_RECIPE'});
      return fetch(`/api/v1/recipes/${id}`, {
          method: "DELETE",
          headers: {Accept: "application/json"}
      }).then(dispatch({ type: 'DELETE_RECIPE' }))
        .then(response => response.json())
    };
  };
