import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export default (gameRules, gameData, roundsAmount) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const gameRound = (roundsBeforeEnd, questionAndAnswer) => {
    const question = car(questionAndAnswer);
    const rightAnswer = cdr(questionAndAnswer);
    if (roundsBeforeEnd === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      gameRound(roundsBeforeEnd - 1, gameData());
      return;
    }
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
  };
  gameRound(roundsAmount, gameData());
};
