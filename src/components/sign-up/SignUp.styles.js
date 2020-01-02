import styled from 'styled-components';

export const SignUpContainer = styled.form`
  min-height: auto;
  position: relative;

  h1 {
    text-align: center;
    margin-top: 40px;
    color: gold;
  }

  p {
    padding-top: 5px;
    text-align: center;
    padding-bottom: 10px;
  }

  a {
    color: gold;
    font-size: 1.5rem;
    margin: 0 auto;
    padding-top: 20px;
    text-decoration: none;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
  padding-bottom: 40px;
`;

export const ErrorContainer = styled.div`
  position: absolute;
  background: #9a2d2d;
  text-align: center;
  width: 100%;
`;
