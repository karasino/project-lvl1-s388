import { cons } from 'hexlet-pairs';
import gameOutput from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const lowestDivisor = 3;
  const isPrimeIter = (divisor) => {
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    if (divisor === number) return true;
    if (number % divisor === 0) return false;
    return isPrimeIter(divisor + 2);
  };
  return isPrimeIter(lowestDivisor);
};

const generateGameData = () => {
  const question = getRandomInt(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameOutput(description, generateGameData);
