import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';
import { bindActionCreators } from 'redux';

class RecipeForm extends Component {
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
      total_time: '',
      user_id: ''
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const { addRecipe, history } = this.props;
    addRecipe(this.state);
    history.push('/')
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
    return (
      <div>
        <h2>Add a Recipe</h2>
        <form onSubmit={this.handleOnSubmit.bind(this)} >
          <textarea
            cols="40"
            placeholder="Title"
            ref="title"
            onChange={this.titleHandleOnChange.bind(this)} />
          <textarea
            cols="20"
            placeholder="Category"
            ref="category"
            onChange={this.categoryHandleOnChange.bind(this)} />
            <br />
          <input
            type="text"
            placeholder="Serves"
            ref="serves"
            onChange={this.servesHandleOnChange.bind(this)} />
          <input
            type="text"
            placeholder="Prep Time"
            ref="prep_time"
            onChange={this.preptimeHandleOnChange.bind(this)} />
          <input
            type="text"
            placeholder="Cook Time"
            ref="cook_time"
            onChange={this.cooktimeHandleOnChange.bind(this)} />
          <input
            type="text"
            placeholder="Total Time"
            ref="total_time"
            onChange={this.totaltimeHandleOnChange.bind(this)} />
          <br />
          <textarea
            cols="60"
            rows="20"
            placeholder="Ingredients"
            ref="ingredients"
            onChange={this.ingredientsHandleOnChange.bind(this)} />
          <br />
          <textarea
            cols="60"
            rows="30"
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
