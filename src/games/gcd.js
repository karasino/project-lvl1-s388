import { cons } from 'hexlet-pairs';
import gameOutput from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNum, secondNum) => {
  if (secondNum === 0) return firstNum;
  return getGCD(secondNum, firstNum % secondNum);
};

const generateGameData = () => {
  const getFirstOperand = (getRandomInt(1, 100));
  const getSecondOperand = (getRandomInt(1, 100));
  const question = `${getFirstOperand} ${getSecondOperand}`;
  const answer = getGCD(getFirstOperand, getSecondOperand);
  return cons(question, String(answer));
};

export default () => gameOutput(description, generateGameData);
