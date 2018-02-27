import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  /* Add basic styling for NavLinks */
  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: '#FFF9FF',
    textDecoration: 'none',
    border: '1px solid blue',
    borderRadius: '5px',
  }
  return (
    <div className="navbar">
      <NavLink
        to="/"
        /* set exact so it knows only to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: '#FFF9FF'
        }}
      >Home</NavLink>
      <NavLink
        to="/new_recipe"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >New Recipe</NavLink>
      <NavLink
        to="/recipes"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Recipes</NavLink>
    </div>

  );
};

export default NavBar;
