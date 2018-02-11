import React from 'react';

export const Recipe = props =>
  <div>
    <p>{this.props.title}</p>
    <p>{this.props.category}</p>
    <p>{this.props.serves}</p>
    <p>{this.props.prep_time}</p>
    <p>{this.props.cook_time}</p>
    <p>{this.props.total_time}</p>
    <p>{this.props.ingredients}</p>
    <p>{this.props.directions}</p>
  </div>
