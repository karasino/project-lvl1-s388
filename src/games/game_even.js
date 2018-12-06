import readlineSync from 'readline-sync';
import { isEven, getRandomInt } from '..';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const numberOfRounds = 3;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const evenGameRound = (roundsBeforeEnd) => {
    if (roundsBeforeEnd === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const randomInt = getRandomInt(1, 100);
    const rightAnswer = isEven(randomInt) ? 'yes' : 'no';
    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      evenGameRound(roundsBeforeEnd - 1);
      return;
    }
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
  };
  evenGameRound(numberOfRounds);
};
