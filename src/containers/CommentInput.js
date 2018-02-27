import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../components/Comments';


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
    const recipeId = this.props.match.params.recipeId;
   	const { addComment, history } = this.props;
    addComment(this.state);
    history.push(`/recipes/${recipeId}/comments`)
  };
  

  render() {
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


export default connect(mapStateToProps, null)(CommentInput);
