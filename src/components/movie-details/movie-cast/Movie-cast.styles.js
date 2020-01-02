import styled from 'styled-components';

export const MovieCastContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 50px 0px 110px 0px;
  color: #fff;

  h1 {
    font-weight: normal;
  }
`;

export const ActorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 0.1fr));
  gap: 3.5rem;
  justify-content: start;

  @media only screen and (max-width: 768px), (max-width: 1024px) {
    justify-content: center;
  }
`;

// ACTOR CLASSES

export const ActorCard = styled.div`
  text-align: center;
  height: 140px;
  width: 95px;
  margin-top: 20px;
  justify-self: center;

  h3 {
    font-weight: normal;
    font-size: 1.5rem;
    color: #a2a1a1;
  }
`;

export const ActorImgContainer = styled.div`
  height: 90%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const ActorName = styled.h3`
  padding-top: 5px;
`;
