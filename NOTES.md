const recipes = this.props.recipes.map(recipe =>
    <div className="recipe-card" key={recipe.id}>
      <h3>{recipe.title}</h3>
      <p>{recipe.category}</p>
      <p>{recipe.serves}</p>
    </div>);


    class SinglePage extends React.Component {

      render() {
        console.log(this)
        return (
          <div>
            <Single recipe={this.props.recipe}/>
          </div>
        )
      }
    }

RecipeGrid.js...
    <Recipe
      history={props.history}
      key={recipe.id}
      recipeTitle={recipe.title}
      recipeCategory={recipe.category}
      recipeServes={recipe.serves}
      recipeId={recipe.id}
    />

     <CommentInput 
            comment={this.state.comment} 
            recipeId={this.state.recipe.id} 
            addComment={this.props.addComment}
          />

  handleOnClick(event) {
    event.preventDefault();
    const recipeId = this.props.match.params.recipeId;
    return fetch(`/api/v1/recipes/${recipeId}/comments`)
      .then(response => response.json())
      .then(comments => this.setState({ comments: comments }))
  }
  
          <button onClick={this.handleOnClick.bind(this)}>
            View Commments
          </button>
