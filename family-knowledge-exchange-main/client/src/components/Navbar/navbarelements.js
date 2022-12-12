import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: linear-gradient(90deg, #25424c 13%, #FB770D 100%);
  height: 98px;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem calc((10vw - 100px) / 2);
  
  color: #fff;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 530px) {
    display: block;
    height: 60px;
    
  }
`;

export const NavLink = styled(Link)`
  color: #fff;

  font-size: 19px;
  display: flex;
  text-decoration: none;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 374px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 10px;
    cursor: pointer;
    height: 110%;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media screen and (max-width: 530px) {
    display: block;
    transform: translate(-800%, 700%);
    
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
 
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 6px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 0px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

  
export const StyledSelect = styled.select`
  max-width: 50%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;