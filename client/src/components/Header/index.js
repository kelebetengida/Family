import React from 'react';

import { Nav } from "./elements"

import { NavLink } from "./elements"

const Header = () => {

  return (
    <Nav >
      <NavLink to="/" styled={{marginTop:"-10px"}}>
        <h1 >Family Knowledge Exchange</h1>
      </NavLink>
    </Nav>
  );
};

export default Header;
