import styled from 'styled-components';

export const MovieInfoContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

export const MovieBackDrop = styled.div`
  background: ${props => props.url};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 45px;
  overflow: hidden
  background-size: cover;
  background-position: top;
  z-index: -1;

  ::before {
    content: '';
    background: #0e0e0e;
    position: absolute;
    display: block;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.90);
  }

  @media only screen and (max-width: 768px) {
    left: 0px;
    width: 100%;
  }
}
`;
