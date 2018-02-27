import React from 'react';
import RecipeGrid from '../components/RecipeGrid';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchRecipes } from '../actions/recipes';

class RecipeGridPage extends React.Component {

  componentDidMount() {
      return this.props.fetchRecipes();
  }

  render(){
    console.log('in RecipeGridPage', this.props)
    return (
      <div>
        <RecipeGrid recipes={this.props.recipes} history={this.props.history}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.recipes };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRecipes: fetchRecipes,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGridPage);
