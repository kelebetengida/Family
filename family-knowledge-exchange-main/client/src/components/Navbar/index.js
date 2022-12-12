import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Nav, NavLink, Bars, NavMenu, NavBtn } from './navbarelements';
import '../Navbar/css.css';



const Navbars = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <Nav>



        <div className="dropdown">
          <button className="dropbtn">
            <i class="fas fa-cloud"></i>
          </button>
          <div className="dropdown-content">
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact Us</NavLink> */}

            {/* !TODO: Conditionally render your buttons based on authentication (Auth.loggedIn) */}

            {/* <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink> */}
            
              {Auth.loggedIn() ? (
                <>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/contact">Contact Us</NavLink>
                  <button className="btn btn-lg btn-light m-2" to="/profile">
                    {Auth.getProfile().data.username}'s profile
                  </button>
                  <br/>
                  <button className="btn btn-lg btn-light m-2" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/contact">Contact Us</NavLink>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/signup">Signup</NavLink>
                </>
              )}
            
          </div>
        </div>

        <NavMenu>
          <NavBtn>
            {Auth.loggedIn() ? (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <Link className="btn btn-lg btn-info m-2" to="/profile">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>

              </>
            ) : (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>

              </>
            )}
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbars;
