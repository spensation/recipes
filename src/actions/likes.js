export function addLike(recipeId) {
    return dispatch => {
      dispatch({type: 'ADD_LIKE_PENDING'});
      return fetch(`http://localhost:3001/api/v1/recipes/${recipeId}/likes`, {
      method: 'POST',
      headers:{ Accept: "application/json",
               "Content-Type": "application/json"}
    }).then(response => response.json())
      .then(like => dispatch({ type: 'ADD_LIKE_FULFILLED', payload: like}))
    }
  }
