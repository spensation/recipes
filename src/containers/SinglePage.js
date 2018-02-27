import React from 'react';
import { connect } from 'react-redux';
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
    const recipeId = this.props.match.params.recipeId;
    event.preventDefault();
    return fetch(`/api/v1/recipes/${recipeId}/comments`)
      .then(response => response.json())
      .then(comments => this.setState({ comments: comments }))
  }

  render() {
    console.log('inSinglePage', this)
    return (
      <div>
        <Single
          title={this.state.recipe.title}
          category={this.state.recipe.category}
          serves={this.state.recipe.serves}
          prep_time={this.state.recipe.prep_time}
          cook_time={this.state.recipe.cook_time}
          total_time={this.state.recipe.total_time}
          ingredients={this.state.recipe.ingredients}
          directions={this.state.recipe.directions}
        />
        <fieldset className="commments">
          <button onClick={this.handleOnClick.bind(this)}>
            View Commments
          </button>
          <Comments comments={this.state.comments} />
          <CommentInput comment={this.state.comment} recipeId={this.state.recipe.id} />

        </fieldset>
      </div>
        
      
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(SinglePage);
