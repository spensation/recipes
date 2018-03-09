export function commentsReducer(state = {
	loading: true,
	comments: []
}, action) {
	switch(action.type) {
		case 'LOADING_COMMENTS':
      	  return Object.assign({}, state, { loading: true });
      	case 'COMMENTS_LOADED':
      	  return Object.assign({}, state, { loading: false, comments: action.payload })
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

