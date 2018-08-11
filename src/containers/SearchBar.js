import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/recipes';


class SearchBar extends Component {
	render() {
		const { search, searchText } = this.props;

		return (
			<input
				className="search-form"
				placeholder="Search Recipes..."
				onChange={(e) => search(e.target.value)}
				value={searchText} />
		);
	}
}

function mapStateToProps({recipes}) {
	return { value: recipes.value };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);