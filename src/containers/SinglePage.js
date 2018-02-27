import React from 'react';
import { connect } from 'react-redux';
import Single from '../components/Single';


class SinglePage extends React.Component {
  constructor() {
    super();

    this.state = {
      recipe: {}
    }
  }

  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    return fetch(`/api/v1/recipes/${recipeId}`)
      .then(response => response.json())
      .then(recipe => this.setState({ recipe: recipe }))
  }

  render() {
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
      </div>
    )
  }
}


export default SinglePage;
