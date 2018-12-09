import { cons } from 'hexlet-pairs';
import gameOutput from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const arrayLength = 10;

const getArray = (firstElement, step) => {
  const newArray = [];
  const addElementsToArray = (array, elementForAdd, elementsLast) => {
    if (elementsLast === 0) return array;
    array.push(elementForAdd);
    const nextElementForAdd = elementForAdd + step;
    return addElementsToArray(array, nextElementForAdd, elementsLast - 1);
  };
  return addElementsToArray(newArray, firstElement, arrayLength);
};

const generateGameData = () => {
  const firstElement = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);
  const arrayForQuestion = getArray(firstElement, step);
  const elementForAnswer = getRandomInt(1, arrayLength);
  const answer = arrayForQuestion[elementForAnswer];
  arrayForQuestion[elementForAnswer] = '..';
  const question = arrayForQuestion.join(' ');
  return cons(question, String(answer));
};

export default () => gameOutput(description, generateGameData);
