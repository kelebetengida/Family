
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


  
export const Nav = styled.nav`
  
background: linear-gradient(90deg, #25424c 13%, #FB770D 100%);
  height: 95px;
  display: flex-row;
  justify-content: space-between;
  padding: 0.1rem calc((10vw - 100px) / 2);
  z-index: 10;
  align-item:center;
  color: #fff;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 530px) {
    display: block;
    
    justify-content: center;
    
    height: 145px;
    
  }
`;


export const NavLink = styled(Link)`
  color: #fff;

  font-size: 19px;
  display: flex;
  text-decoration: none;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 90%;
  cursor: pointer;
  &.active {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 375px) {
    display: block;
    hieght:110px;
  }
`;

