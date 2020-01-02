import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 40%;
  height: 35%;
  padding: 10px;
  background: ${props => (props.isGoogle ? '#383838' : '#2176ff')};
  border: none;
  cursor: pointer;
  color: #f7f7f7;
  margin: 10px;
  :focus {
    outline: 0;
  }
  :hover {
    background: ${props => (props.isGoogle ? '#2e2e2e' : '#0062ff')};
  }
  @media only screen and (max-width: 768px) {
    width: 60%;
  }
`;
