import { cons } from 'hexlet-pairs';
import gameOutput from '..';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = number => number % 2 === 0;

const amountOfRounds = 3;

const generateGameData = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameOutput(gameRules, generateGameData, amountOfRounds);
