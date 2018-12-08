import { cons } from 'hexlet-pairs';
import gameOutput from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const generateGameData = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameOutput(description, generateGameData);
