import { ButtonHTMLAttributes } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px auto;
  max-width: 300px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  box-shadow: 0px 0px 1px 0.5px rgba(0, 0, 0, 0.5);
`;

export const Display = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  z-index: 1;

  background-color: white;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 45px;
    position: absolute;
    right: 5px;
  }

  h2 {
    font-size: 45px;
    color: gray;
    position: absolute;
    right: 5px;
    bottom: 0;
  }

  h3 {
    font-size: 27px;
    position: absolute;
    right: 5px;
  }
`;

export const Button: StyledComponent<
  'button',
  ButtonHTMLAttributes<HTMLButtonElement>
> = styled.button``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  background-color: #424242;
`;

export const ButtonsNumber = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  Button {
    color: #e9e9e9;
    margin: 0 10px;
    padding: 10px;

    background-color: #424242;
    border: none;
    font-size: 50px;

    &:hover {
      color: ${shade(0.2, '#e9e9e9')};
    }
  }
`;

export const ButtonsOperators = styled.div`
  width: 100%;
  background-color: #626262;
  border-left: solid 0.5px black;

  display: grid;
  grid-template-columns: 1fr;

  padding: 10px;

  Button {
    color: #e9e9e9;
    margin: 5px 10px;
    padding: 10px;
    background-color: #626262;
    border: none;

    font-size: 40px;

    &:hover {
      color: ${shade(0.2, '#e9e9e9')};
    }
  }
`;
