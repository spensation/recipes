import React, { Component } from 'react'

class Search extends Component {
	state = {
		query: '',
		results: []
	}


	handleInputChange() {
		this.setState({
			query: this.search.value
		})
	}

	render() {
  	  return (
		<form>
			<input 
				placeholder="Search for..."
				ref={input => this.search = input}
				onChange={this.handleInputChange.bind(this)}
			/>
			<p>{this.state.query}</p>
		</form>

	  )
	}
}

export default Search