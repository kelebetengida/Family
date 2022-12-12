import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Footing } from "./footerelement.js"
const Footer = () => {
  return (
    <footer>
      <Footing >
        <p >Copyright © 2021  State of Washington  All rights reserved. </p>
      </Footing>
    </footer>
  );
};

export default Footer;
