import React from "react";
import { NavigationContainer } from "./NavigationStyled";
import {
  NavLink,
  useLocation,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

const Navigation = ({ match }) => {
  //   const location = useLocation();
  //   const match = useRouteMatch();
  //   const history = useHistory();
  //   console.log("location :>> ", location);
  //   console.log("match :>> ", match);
  //   console.log("history :>> ", history);
  return (
    <NavigationContainer>
      <ul className='navigationList'>
        <li className='navigationListItem'>
          <NavLink
            to={`${match}/list`}
            className='navigationLink'
            activeClassName='navigationLinkActive'>
            List
          </NavLink>
        </li>
        <li className='navigationListItem'>
          <NavLink
            to={`${match}/create`}
            className='navigationLink'
            activeClassName='navigationLinkActive'>
            Create
          </NavLink>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
