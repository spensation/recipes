import fetch from 'isomorphic-fetch';

export function addComment(comment, recipeId) {
  return (dispatch) => {
    dispatch({ type: 'ADD_COMMENT_PENDING' });
    return fetch(`/api/v1/recipes/${recipeId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment:  comment }),
      headers:{ Accept: "application/json",
               "Content-Type": "application/json"}
    }).then(response => response.json())
      .then(comment => dispatch({ type: 'ADD_COMMENT_FULFILLED', payload: comment }))
    };
  }
