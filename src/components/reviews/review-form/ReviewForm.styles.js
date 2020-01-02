import styled from 'styled-components';

export const ReviewFormContainer = styled.div`
  width: 100%;
  background: #1e1e1e;
  min-height: 435px;
  padding: 20px;
  position: relative;
  display: ${props => (props.isHidden ? 'none' : 'block')};
  top: -200px;
  transform: translateY(200px);
  transition: transform 1s ease-in;

  span {
    top: 10px;
    right: 10px;
    position: absolute;
    font-size: 2rem;
    padding-left: 10px;
    color: #9f9f9f;
    cursor: pointer;
  }

  h1 {
    color: #9bceff;
    padding-bottom: 10px;
  }

  div {
    padding-bottom: 5px;
  }

  button {
    width: 10%;
    float: right;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 20px 20px 60px 20px;

    button {
      width: 20%;
      float: center;
    }
  }
`;

export const ReviewTextArea = styled.textarea`
  resize: none;
  height: 250px;
  display: block;
  width: 100%;
  border: none;
  background: #272626;
  color: #dcdada;
  outline: none;
  font-family: 'Montserrat';
  font-size: 1.7rem;
  text-indent: 1rem;
  overflow-x: hidden;

  ::placeholder {
    color: gray;
    padding-top: 5px;
  }
`;
