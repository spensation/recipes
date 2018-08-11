import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';
import { addIngredient } from '../actions/ingredients';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


class NewRecipeFormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      serves: '',
      ingredients: [],
      directions: '',
      prep_time: '',
      cook_time: '',
      total_time: '',
      selectedFile: null
    }
  }

  handleFormOnSubmit(event) {
    console.log('FormSubmit', this.state)
    event.preventDefault();
    const recipeId = this.props.recipeId;
    this.props.addRecipe(this.state);
    this.props.addIngredient(this.state.ingredients, recipeId);
    this.props.history.push('/recipes')
  };

  titleHandleOnChange(event) {
    this.setState({
      title: event.target.value
    })
  };

  categoryHandleOnChange(event) {
    this.setState({
      category: event.target.value
    })
  };

  servesHandleOnChange(event) {
    this.setState({
      serves: event.target.value
    })
  };

  preptimeHandleOnChange(event) {
    this.setState({
      prep_time: event.target.value
    })
  };

  cooktimeHandleOnChange(event) {
    this.setState({
      cook_time: event.target.value 
    })
  };

  totaltimeHandleOnChange(event) {
    this.setState({
      total_time: event.target.value
    })
  };

  handleIngredientsOnChange(e, index) {
    console.log('inHandleIngredientOnChange', this.state)
    const ingredients =  this.state.ingredients.slice();
    ingredients[index] = e.target.value;
    this.setState({ ingredients: ingredients })
  };

  handleAddIngredient(){
    console.log('from handleAddIngredient', this )
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, '']
    }));
  }

  handleRemoveIngredient(i){
    let ingredients = [...this.state.ingredients];
    ingredients.splice(i, 1);
    this.setState({
      ingredients: ingredients
    });
  }

  directionsHandleOnChange(event) {
    this.setState({
      directions: event.target.value
    })
  };

  fileChangedHandler(event) {
    this.setState({
      selectedFile: event.target.files[0]}
      )
  }


  render() {
    console.log('InREcipeFormPage', this.state)
    return (
      <div className="new-recipe-form">
        <h2>Add a Recipe</h2>
        <form onSubmit={this.handleFormOnSubmit.bind(this)} >
          <div className="recipe-form-title">
            <input
              placeholder="Title"
              ref="title"
              onChange={this.titleHandleOnChange.bind(this)} />
          </div>
            <br />
          <div className="recipe-form-category-select">
            <select onChange={this.categoryHandleOnChange.bind(this)}>
              <option value="" disabled selected hidden>Select a category</option>
              <option value="Entree">Entree</option>
              <option value="Starter">Starter</option>
              <option value="Soup/Salad">Soup/Salad</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
          <div className="recipe-form-serves-select">
            <select onChange={this.servesHandleOnChange.bind(this)}>
              <option value="" disabled selected hidden>How many servings?</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8+">8+</option>
            </select>
          </div>
          <br />
          <div className="recipe-form-prep">
            <input
              placeholder="Prep Time"
              ref="prep_time"
              onChange={this.preptimeHandleOnChange.bind(this)} />
          </div>
          
          <div className="recipe-form-cook">  
            <input
              placeholder="Cook Time"
              ref="cook_time"
              onChange={this.cooktimeHandleOnChange.bind(this)} />
          </div>
          
          <div className="recipe-form-total"> 
            <input
              placeholder="Total Time"
              ref="total_time"
              onChange={this.totaltimeHandleOnChange.bind(this)} />
          </div>

          {this.state.ingredients.map((ingredient, i) => (
              <div key={i}>
                <input
                  type="text"
                  placeholder={`Ingredient #${i + 1} name`}
                  value={this.state.i}
                  onChange={(event) => this.handleIngredientsOnChange(event, this.index)} />
                <button type="button" onClick={this.handleRemoveIngredient.bind(this, i)}>-</button>
              </div>
            ))}
            <button type="button" onClick={this.handleAddIngredient.bind(this)}>Add Ingredient</button>
          
          <br />
          <div className="recipe-form-directions">
            <textarea
              cols="60"
              rows="15"
              placeholder="Directions"
              ref="directions"
              onChange={this.directionsHandleOnChange.bind(this)} />
          </div>
          <br />
          <div className="recipe-form-image">
            <label>Add an image: </label>
            <input 
              type="file" 
              onChange={this.fileChangedHandler.bind(this)}
            />
          </div>
          <br/>
          <div className="recipe-form-submit">
            <input
              type="submit"
              value="Add Recipe" />
          </div>
        </form>
      </div>
    )
  }
}

NewRecipeFormPage.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  serves: PropTypes.string.isRequired,
  prep_time: PropTypes.string.isRequired,
  cook_time: PropTypes.string.isRequired,
  total_time: PropTypes.string.isRequired,
  directions: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRecipe: addRecipe,
    addIngredient: addIngredient
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(NewRecipeFormPage);
