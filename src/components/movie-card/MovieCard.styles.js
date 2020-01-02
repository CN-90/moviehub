import styled from 'styled-components';

export const Card = styled.div`
  height: 350px;
  width: 200px;
  text-align: center;
  padding-bottom: 50px;
  justify-self: center;

  div {
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
`;

export const CardImg = styled.img`
  height: 90%;
  width: 100%;
  borderradius: 5px 5px 0px 0px;
`;

export const CardMovieTitle = styled.h2`
  color: #e2e2e2;
  font-weight: normal;
  background: #196aef;
  padding: 5px;
`;
