import React, { useState, useEffect } from 'react';

import {
  Container,
  Display,
  Button,
  ButtonsContainer,
  ButtonsNumber,
  ButtonsOperators,
} from './styles';

let operatorClicked = false;
let equalSignClicked = false;

const Home: React.FC = () => {
  const [numberInDisplay, setNumberInDisplay] = useState(['']);
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [resultInDisplay, setResultInDisplay] = useState<number | string>();

  const previousValue = (number: string) => {
    setFirstNumber(firstNumber + number);

    setNumberInDisplay([...numberInDisplay, number]);
  };

  const nextValue = (number: string) => {
    setSecondNumber(secondNumber + number);

    setNumberInDisplay([...numberInDisplay, number]);
  };

  const calculate = () => {
    let resultValue = 0;

    if (operator === '+')
      resultValue = parseFloat(firstNumber) + parseFloat(secondNumber);

    if (operator === '-')
      resultValue = parseFloat(firstNumber) - parseFloat(secondNumber);

    if (operator === 'x')
      resultValue = parseFloat(firstNumber) * parseFloat(secondNumber);

    if (operator === '/')
      resultValue = parseFloat(firstNumber) / parseFloat(secondNumber);

    let resultValueToString = JSON.stringify(resultValue);

    if (resultValueToString.length > 2) {
      resultValueToString = resultValue.toPrecision(4);
      setResultInDisplay(resultValueToString);
    } else {
      setResultInDisplay(resultValueToString);
    }

    if (equalSignClicked) {
      setNumberInDisplay([resultValueToString]);
      setResultInDisplay(undefined);

      operatorClicked = false;
      equalSignClicked = false;

      setFirstNumber(resultValueToString);
      setSecondNumber('');
    }
  };

  const handleNumber = (number: string) => {
    if (!operatorClicked) {
      return previousValue(number);
    }

    return nextValue(number);
  };

  const verifyOperatorClicked = (signalOperator: string) => {
    if (firstNumber === '') {
      setFirstNumber(signalOperator);
    }

    setNumberInDisplay([...numberInDisplay, signalOperator]);

    if (firstNumber !== '') {
      if (!operatorClicked) {
        setOperator(signalOperator);

        operatorClicked = true;
      } else {
        equalSignClicked = true;
        calculate();
      }
    }
  };
  const clearDisplay = () => {
    setNumberInDisplay(['']);
    setResultInDisplay(undefined);

    operatorClicked = false;
    equalSignClicked = false;

    setFirstNumber('');
    setSecondNumber('');
  };

  useEffect(() => {
    if (secondNumber !== '') {
      calculate();
    }
  }, [secondNumber, firstNumber]);

  return (
    <>
      <Container>
        <Display>
          {numberInDisplay.length < 12 ? (
            <h1>{numberInDisplay}</h1>
          ) : (
            <h3>valor máximo atingido.</h3>
          )}

          {resultInDisplay ? <h2>{resultInDisplay}</h2> : null}
        </Display>
        <ButtonsContainer>
          <ButtonsNumber>
            <Button onClick={() => handleNumber('7')}>7</Button>
            <Button onClick={() => handleNumber('8')}>8</Button>
            <Button onClick={() => handleNumber('9')}>9</Button>
            <Button onClick={() => handleNumber('4')}>4</Button>
            <Button onClick={() => handleNumber('5')}>5</Button>
            <Button onClick={() => handleNumber('6')}>6</Button>
            <Button onClick={() => handleNumber('1')}>1</Button>
            <Button onClick={() => handleNumber('2')}>2</Button>
            <Button onClick={() => handleNumber('3')}>3</Button>
            <Button onClick={() => handleNumber('0')}>0</Button>
            <Button onClick={() => handleNumber('.')}>.</Button>
            <Button
              onClick={() => {
                equalSignClicked = true;
                calculate();
              }}
            >
              =
            </Button>
          </ButtonsNumber>

          <ButtonsOperators>
            <Button onClick={() => clearDisplay()}>C</Button>
            <Button onClick={() => verifyOperatorClicked('/')}>/</Button>
            <Button onClick={() => verifyOperatorClicked('x')}>X</Button>
            <Button onClick={() => verifyOperatorClicked('-')}>-</Button>
            <Button onClick={() => verifyOperatorClicked('+')}>+</Button>
          </ButtonsOperators>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default Home;
