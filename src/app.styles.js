import styled from 'styled-components';

export const PageTitle = styled.h1`
  color: #ffffff;
  font-weight: normal;
  padding-bottom: 4%;
  margin-left: 6%;
  font-size: 3.5rem;
  letter-spacing: 1px;
  padding-top: 125px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    padding-bottom: 8%;
    padding-top: 90px;
  }
`;

export const MoviesGrid = styled.div`
  text-align: center;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(225px, 0.1fr));
  width: 90%;
  margin-left: 6%;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 0.1fr));
  }
`;
