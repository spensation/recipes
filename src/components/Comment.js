import React from 'react';

const Comment = (props) => {
	return (
		<div>
			{props.comment.content}
		</div>
	)
}

export default Comment;