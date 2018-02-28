import React, { Component } from 'react';
import Comment from './Comment';


const Comments = (props) => {
	console.log('inComments', props)
	const comments = props.comments.map(comment => {
		return <Comment comment={comment} key={comment.id} />
	})
	
	return (
		<div>
			{comments}
		</div>
	)
}

export default Comments;