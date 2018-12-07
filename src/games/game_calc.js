import { cons } from 'hexlet-pairs';
import gameOutput from '..';

const gameRules = 'What is the result of the expression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const amountOfRounds = 3;

const generateGameData = () => {
  const firstOperand = getRandomInt(1, 100);
  const secondOperand = getRandomInt(1, 100);
  const allOperators = ['-', '+', '*'];
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

export default () => gameOutput(gameRules, generateGameData, amountOfRounds);
