import styled from 'styled-components';

export const SearchBarContainer = styled.div``;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 15fr 1fr;
  position: fixed;
  width: calc(100% - 187px);
  margin-left: 187px;
  z-index: 2;
  top: 0;

  button {
    height: 100%;
    background: #2176ff;
    border: none;
    color: white;
    padding: 15px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 2.5fr 15fr 1fr;
    width: 100%;
    margin-left: 0px;

`;

export const HamburgerMenu = styled.div`
  height: 100%;
  background: #2f2f2f;
  display: none;
  cursor: pointer;
  
  @media only screen and (max-width: 768px) {
   display: flex;
   justify-content: center;
   align-items: center;
   
`;

export const SearchInput = styled.input`
  background: #363636;
  border: none;
  padding: 15px;
  color: #b7b7b7;

  :focus {
    outline: none;
  }
`;
