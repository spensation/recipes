import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLike } from '../actions/likes';

class Like extends React.Component {


  handleOnClick(event) {
    event.preventDefault();
    const recipeId = this.props.recipeId
    this.props.addLike(this.props.recipeId);
  }

  render() {
  	console.log('in Like.js', this)
    return (
      <div>
        <button onClick={this.handleOnClick.bind(this)} className="like-button">Like</button>
        <p className="likes">{this.props.value}</p>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addLike: addLike
	}, dispatch)
}



export default connect(null, mapDispatchToProps)(Like);
