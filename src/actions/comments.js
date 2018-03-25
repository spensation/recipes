import fetch from 'isomorphic-fetch';

export function addComment(comment, recipeId) {
  return (dispatch) => {
    dispatch({ type: 'ADD_COMMENT_PENDING' });
    return fetch(`https://warm-caverns-93574.herokuapp.com/api/v1/recipes/${recipeId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers:{ Accept: "application/json",
               "Content-Type": "application/json"}
    }).then(response => {
      if (!response.ok) { throw response }
        return response.json()
    })
      .then(comment => {
        comment => dispatch({ type: 'ADD_COMMENT_FULFILLED', payload: comment })
    })
      .catch( err => {
        err.text().then( errorMessage => {
          console.log(errorMessage)
        })
      })
  }
}


export function fetchComments(recipeId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS' });
    return fetch(`https://warm-caverns-93574.herokuapp.com/api/v1/recipes/${recipeId}/comments`)
      .then(response => response.json())
      .then(comments => dispatch({ type: 'COMMENTS_LOADED', payload: comments}))
  }
}
