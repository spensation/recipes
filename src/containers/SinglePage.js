import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment, fetchComments } from '../actions/comments';
import { fetchRecipe } from '../actions/recipes';
import Single from '../components/Single';
import Comments from '../components/Comments';
import CommentInput from './CommentInput';
import Like from './Like';


class SinglePage extends React.Component {
  

  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    this.props.fetchRecipe(recipeId);
  }

  handleViewCommentsOnClick(event) {
    event.preventDefault();
    const recipeId = this.props.match.params.recipeId;
    this.props.fetchComments(recipeId)
  }


  render() {
    console.log('inSinglePage', this)
    const recipeId = this.props.match.params.recipeId;
    const { title, category, serves, prep_time, cook_time, total_time, ingredients, directions } = this.props.recipe
    

    return this.props.recipe.likes ? 
    (
      <div>
        <Like 
          value={this.props.recipe.likes.length} 
          history={this.props.history}
          recipeId={this.props.match.params.recipeId} 
          />
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
        <button 
          className="view-comments-button" 
          onClick={this.handleViewCommentsOnClick.bind(this)}
          >View Commments
        </button>
        <Comments comments={this.props.comments} />
        <CommentInput 
          history={this.props.history}
          recipeId={this.props.match.params.recipeId} 
          addComment={this.props.addComment}
        />
      </div>
        
      
    )

    : null
  }
}

const mapStateToProps = (state, props) => {
  
  const recipeId = +props.match.params.recipeId
  return { 
    comments: state.comments.comments,
    recipe: state.recipes.recipes.find(recipe => recipe.id === recipeId),
    likes: state.recipe.likes
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addComment: addComment,
    fetchRecipe: fetchRecipe,
    fetchComments: fetchComments
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
