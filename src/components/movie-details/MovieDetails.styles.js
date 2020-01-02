import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr minmax(160px, 1fr);
  width: 80%;
  padding-top: 145px;
  margin: 0 auto;
  font-size: 1.5rem;

  
  @media only screen and (max-width: 768px), (max-width: 1024px) {
    display: block;
    padding-bottom: 20px;
    text-align: center;
    padding-top: 100px;
  }

}
`;

export const MovieInfo = styled.div`
  position: relative;
  padding-left: 40px;
  color: white;
  @media only screen and (max-width: 768px) {
    padding-left: 0px;
  }
`;

export const MovieImg = styled.div`
  width: 300px;
  @media only screen and (max-width: 768px), (max-width: 1024px) {
    padding-bottom: 50px;
    margin: 0 auto;
  }
`;

export const MovieSummary = styled.p`
  margin-top: 25px;
  color: #a0a0a0;
`;
