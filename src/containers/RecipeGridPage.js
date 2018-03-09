import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchRecipes } from '../actions/recipes';
import RecipeGrid from '../components/RecipeGrid';


class RecipeGridPage extends React.Component {
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.props.history.push('/recipes')
    }
  }

  componentDidMount() {
      this.props.fetchRecipes();
  }

  render(){
    console.log('inRecipeGridPage', this)
    return (
      <div>
        <RecipeGrid 
          recipes={this.props.recipes} 
          history={this.props.history} 
          match={this.props.match}
        />      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    recipes: state.recipes,
    likes: state.recipe.likes
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRecipes: fetchRecipes,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGridPage);
