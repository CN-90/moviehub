import styled from 'styled-components';

export const ReviewContainer = styled.div`
  color: white;
  width: 100%;
  min-height: 200px;
  background: #131313;
  padding: 20px;
  margin-bottom: 30px;
`;

export const ReviewUsername = styled.h2`
  color: #9bceff;
  font-size: 2.3rem;
  font-weight: normal;
  cursor: pointer;
  padding-bottom: 5px;

  :hover {
    color: #70b7fb;
  }
`;

export const ReviewSummary = styled.div`
  color: #a5a5a5;
  text-indent: 8px;
  line-height: 1.4;
  padding: 20px 0px 15px 0px;
`;

export const ReviewButtons = styled.div`
  padding-bottom: 50px;

  button:first-child {
    background: #d82d2d;
  }
`;
