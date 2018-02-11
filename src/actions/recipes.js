import fetch from 'isomorphic-fetch';

export function fetchRecipes() {

  return(dispatch) => {
    dispatch({ type: 'LOADING_RECIPES' });

    return fetch('/api/v1/recipes')
      .then(function(response) {
        if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.')
    }).then(function(recipes) {dispatch({
        type: 'FETCH_RECIPES',
        payload: recipes.recipes})
        console.log(recipes)
      }).catch(function(error) {
        console.log('There has been a problem with you fetch operation: ', error.message);
      });
  };
}
