export function commentsReducer(state = {
	comments: {
		loading: true,
		content: ' ' 
	}
}, action) {
	switch(action.type) {
	    case 'ADD_COMMENT_PENDING':
	      return Object.assign({}, state, { loading: true });
	    case 'ADD_COMMENT_FULFILLED':
	      return {
	        comments: {
	        	...state.comments,
	        	posting: false,
		        posted: true,
		        comment: action.payload.comment
	        }	        
	      }
	    default:
	      return state;
	}	
}

