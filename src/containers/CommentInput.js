import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Comments from '../components/Comments';
import { addComment } from '../actions/comments';


class CommentInput extends Component {
  constructor() {
    super();

    this.state = {
      content: ''
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    addComment(this.state);
  };
  

  render() {
    console.log('inCommentInput', this)
    return (
      <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <label> Add a Comment </label>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleChange(event)}
          />
          <input type="submit" />
          <Comments content={this.state.content}/>
        </p>
      </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
	return {
		comments: state.comments
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addComment: addComment
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
