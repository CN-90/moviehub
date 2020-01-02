import styled from 'styled-components';

export const SidebarNav = styled.div`
  background-color: #131313;
  height: 100%;
  position: fixed;
  color: #959595;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    z-index: 4;
    width: 60%
    left: -60%;
    transform: ${props =>
      props.menuHidden ? 'translateX(0px)' : 'translateX(100%) '};
    font-size: 1rem;
    top: 45px;
    transition: transform 0.5s ease-out;
    height: 100vh;
    overflow: scroll;
  }

  a {
    color: #959595;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
  
`;

export const Brand = styled.h1`
  font-size: 2.5em;
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  color: white;
  margin-top: 5%;
  padding-bottom: 20px;
`;

export const TextContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  li {
    list-style-type: none;
    font-size: 1.7rem;
    margin: 10px;
    cursor: pointer;
  }

  p {
    margin-top: 50px;
    text-align: left;

    margin-bottom: 25px;
  }

  .active {
    color: #e4e4e4;
    text-decoration: none;
  }
`;

// width: ${ props => (props.menuHidden ? '60%' : '0px') };
// display: ${ props => (props.menuHidden ? 'block' : 'none') };
