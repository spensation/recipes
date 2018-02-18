import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipes';

class Recipe extends React.Component {

  handleOnClick(event) {
    event.preventDefault();
    const id = this.props.id;
    this.props.actions.deleteRecipe(id);
  }

  // handleOnSubmit(event) {
  //   event.preventDefault();
  //   const { addRecipe, history } = this.props;
  //   addRecipe(this.state);
  //   history.push('/')
  // };

  render() {
    let { title, id, category, serves, prep_time, cook_time, total_time, ingredients, directions } = this.props.recipe;

    return (
      <div>
        <h3>{title}</h3>
        <h4>{category}</h4>
        <h4>{serves}</h4>
        <h5>{cook_time}</h5>
        <h5>{prep_time}</h5>
        <h5>{total_time}</h5>
        <h5>{ingredients}</h5>
        <h5>{directions}</h5>
        <button
          id={id}
          onClick={this.handleOnClick.bind(this)}
        />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {recipes: state.recipes.recipes}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
