import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <>
    {location.pathname !== '/' && (
        <button
          className="btn btn-dark mb-3"
          onClick={() => history.goBack()}
        >
          &larr; Go Back
        </button>
      )}
    </>
  );
};

export default Footer;


