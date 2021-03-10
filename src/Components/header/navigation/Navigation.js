import React from "react";
import { NavigationContainer } from "./NavigationStyled";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul className='navigationList'>
        <li className='navigationListItem'>
          <NavLink
            exact
            to='/'
            className='navigationLink'
            activeClassName='navigationLinkActive'>
            Home
          </NavLink>
        </li>
        <li className='navigationListItem'>
          <NavLink
            to='/about'
            className='navigationLink'
            activeClassName='navigationLinkActive'>
            About
          </NavLink>
        </li>
        <li className='navigationListItem'>
          <NavLink
            to='/courses'
            className='navigationLink'
            activeClassName='navigationLinkActive'>
            Courses
          </NavLink>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
