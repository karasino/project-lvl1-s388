import { cons } from 'hexlet-pairs';
import gameOutput from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';
const allOperators = ['-', '+', '*'];

const generateGameData = () => {
  const firstOperand = getRandomInt(1, 100);
  const secondOperand = getRandomInt(1, 100);
  const operator = allOperators[getRandomInt(0, allOperators.length)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  let answer;
  switch (operator) {
    case '-':
      answer = firstOperand - secondOperand;
      break;
    case '+':
      answer = firstOperand + secondOperand;
      break;
    case '*':
      answer = firstOperand * secondOperand;
      break;
    default:
      break;
  }
  return cons(question, String(answer));
};

export default () => gameOutput(description, generateGameData);
