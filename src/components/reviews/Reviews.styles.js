import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: calc(40vh + 200px);

  h1 {
    font-weight: normal;
    color: #fff;
    padding-bottom: 30px;
  }

  button {
    width: 10%;
    float: right;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
    button {
      width: 30%;
    }
  }
`;

export const ReviewContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
`;
