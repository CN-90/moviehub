import styled from 'styled-components';
import background from '../../assets/movie_background.jpg';

export const Auth = styled.div`
  min-height: 100vh;
  width: 100%;
  color: white;
  padding-top: 44px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CharactersPoster = styled.div`
  height: 100%;
  background: url(${background});
  background-size: contain;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SignUpIn = styled.div`
  min-height: 700px;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #212121;
  border-radius: 10px;

  @media only screen and (max-width: 1150px) {
    grid-template-columns: 0.8fr 1fr;
    width: 100%;
    min-height: 100vh;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    min-height: 100vh;
  }
`;
