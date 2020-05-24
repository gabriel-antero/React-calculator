import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, button, a{
    font-family: 'Roboto', sans-serif;
    background-color: #E5E5E5;
  }

  button{
    width: 170px;
    height: 60px;
    font-size: 18px;

    color: #fff;
    background: #9c69e2;
    border-radius: 50px;
  }
`;
