export function commentsReducer(state = {
	loading: true,
	comments: []
}, action) {
	switch(action.type) {
	    case 'LOADING_COMMENTS':
	      return Object.assign({}, state, { loading: true });
	    case 'ADD_COMMENT':
	      return {
	        ...state,
	        posting: false,
	        posted: true,
	        comment: action.payload.comment
	      }
	    default:
	      return state;
	}	
}

