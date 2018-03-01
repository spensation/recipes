import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../actions/comments';
import Single from '../components/Single';
import Comments from '../components/Comments';
import CommentInput from './CommentInput';


class SinglePage extends React.Component {
  constructor() {
    super();

    this.state = {
      recipe: {},
      comments: []
    }
  }

  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    return fetch(`/api/v1/recipes/${recipeId}`)
      .then(response => response.json())
      .then(recipe => this.setState({ recipe: recipe }))
  }

  handleOnClick(event) {
    event.preventDefault();
    const recipeId = this.props.match.params.recipeId;
    return fetch(`/api/v1/recipes/${recipeId}/comments`)
      .then(response => response.json())
      .then(comments => this.setState({ comments: comments }))
  }


  render() {
    console.log('inSinglePage', this)
    const recipeId = this.props.match.params.recipeId;
    const { title, category, serves, prep_time, cook_time, total_time, ingredients, directions } = this.state.recipe;
    return (
      <div>
        <Single
          title={title}
          category={category}
          serves={serves}
          prep_time={prep_time}
          cook_time={cook_time}
          total_time={total_time}
          ingredients={ingredients}
          directions={directions}
        />
        <button onClick={this.handleOnClick.bind(this)}>
            View Commments
          </button>
        <Comments comments={this.state.comments} />
        <CommentInput 
          comment={this.state.comment} 
          recipeId={this.props.match.params.recipeId} 
          addComment={this.props.addComment}
        />
      </div>
        
      
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    comments: state.comments,
    recipe: state.recipe
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addComment: addComment
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
