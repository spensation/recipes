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
      ingredients: '',
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

  ingredientsHandleOnChange(event) {
    this.setState({
      ingredients: event.target.value
    })
  };

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
          <textarea
            cols="60"
            placeholder="Title"
            ref="title"
            onChange={this.titleHandleOnChange.bind(this)} />
            <br />
          <textarea
            cols="60"
            placeholder="Category"
            ref="category"
            onChange={this.categoryHandleOnChange.bind(this)} />
            <br />
          <textarea
            cols="12"
            placeholder="Serves"
            ref="serves"
            onChange={this.servesHandleOnChange.bind(this)} />
          <textarea
            cols="13"
            placeholder="Prep Time"
            ref="prep_time"
            onChange={this.preptimeHandleOnChange.bind(this)} />
          <textarea
            cols="13"
            placeholder="Cook Time"
            ref="cook_time"
            onChange={this.cooktimeHandleOnChange.bind(this)} />
          <textarea
            cols="13"
            placeholder="Total Time"
            ref="total_time"
            onChange={this.totaltimeHandleOnChange.bind(this)} />
          <br />
          <textarea
            cols="60"
            rows="10"
            placeholder="Ingredients"
            ref="ingredients"
            onChange={this.ingredientsHandleOnChange.bind(this)} />
          <br />
          <textarea
            cols="60"
            rows="15"
            placeholder="Directions"
            ref="directions"
            onChange={this.directionsHandleOnChange.bind(this)} />
            <br />
          <input
            type="submit"
            value="Add Recipe" />
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
