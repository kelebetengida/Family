import styled from 'styled-components';

export const Footing = styled.div`
  background: linear-gradient(90deg, #FB770D 5%, #25424c 100%);
  height: 85px;
  display: flex;
  align-item: end;
  position: fixed;
            padding: 10px 10px 0px 10px;
            bottom: 0;
            width: 100%;
            /* Height of the footer*/ 
            
            
  
  justify-content: center;

  z-index: 10;
  color:#fff;
  
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 768px) {
    display: block;
    display: center;
    justify-content: center;
    height: 94px;
  }
  @media screen and (max-width: 530px) {
    display: block;
    display: center;
    justify-content: center;
    height: 65px;
    padding-left:60px;
    padding-bottom:5px;
  }
  
`;
