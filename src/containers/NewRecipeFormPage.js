import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


class NewRecipeFormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      serves: '',
      ingredients: [{ name: '' }],
      directions: '',
      prep_time: '',
      cook_time: '',
      total_time: ''
    }
  }

  handleFormOnSubmit(event) {
    event.preventDefault();
    this.props.addRecipe(this.state);
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

  ingredientsHandleOnChange = (index) => (event) => {
    const newIngredients = this.state.ingredients.map((ingredient, ingidx) => {
      if (index !== ingidx) return ingredient;
      return {...ingredient, name: event.target.value };
    });
    this.setState({ ingredients: newIngredients })
  };

  handleAddIngredient = () => {
    this.setState({
      ingredients: this.state.ingredients.concat([{ name: ''}])
    });
  }

  handleRemoveIngredient = (index) => () => {
    this.setState({
      ingredients: this.state.ingrdients.filter((ing, ingidx) => index !== ingidx)
    });
  }

  directionsHandleOnChange(event) {
    this.setState({
      directions: event.target.value
    })
  };

  render() {
    console.log('InREcipeFormPage', this)
    return (
      <div className="new-recipe-form">
        <h2>Add a Recipe</h2>
        <form onSubmit={this.handleFormOnSubmit.bind(this)} >
          <div>
            <textarea
              cols="60"
              placeholder="Title"
              ref="title"
              onChange={this.titleHandleOnChange.bind(this)} />
          </div>
            <br />
          <div>
            <select onChange={this.categoryHandleOnChange.bind(this)}>
              <option value="" disabled selected hidden>Select a category</option>
              <option value="Entree">Entree</option>
              <option value="Starter">Starter</option>
              <option value="Soup/Salad">Soup/Salad</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
          <div>
            <select onChange={this.servesHandleOnChange.bind(this)}>
              <option value="" disabled selected hidden>How many servings?</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8+">8+</option>
            </select>
          </div>
          <br />
          <div>
            <textarea
              cols="13"
              placeholder="Prep Time"
              ref="prep_time"
              onChange={this.preptimeHandleOnChange.bind(this)} />
          </div>
          
          <div>  
            <textarea
              cols="13"
              placeholder="Cook Time"
              ref="cook_time"
              onChange={this.cooktimeHandleOnChange.bind(this)} />
          </div>
          
          <div> 
            <textarea
              cols="13"
              placeholder="Total Time"
              ref="total_time"
              onChange={this.totaltimeHandleOnChange.bind(this)} />
            <br />
          </div>

          {this.state.ingredients.map((ingredient, index) => (
              <div>
                <input
                  type="text"
                  placeholder={`Ingredient #${index + 1} name`}
                  value={ingredient.name}
                  onChange={this.ingredientsHandleOnChange.bind(this)} />
                <button type="button" onClick={this.handleRemoveIngredient(index)}>-</button>
              </div>
            ))}
            <button type="button" onClick={this.handleAddIngredient}>Add Ingredient</button>
          
          <br />
          <div>
            <textarea
              cols="60"
              rows="15"
              placeholder="Directions"
              ref="directions"
              onChange={this.directionsHandleOnChange.bind(this)} />
          </div>
          <br />
          <div>
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
  ingredients: PropTypes.string.isRequired,
  directions: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRecipe: addRecipe
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(NewRecipeFormPage);
