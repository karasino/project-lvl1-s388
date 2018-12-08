import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const amountOfRounds = 3;

export default (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const gameRound = (roundsBeforeEnd) => {
    if (roundsBeforeEnd === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const generatedRoundData = gameData();
    const question = car(generatedRoundData);
    const rightAnswer = cdr(generatedRoundData);
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
  gameRound(amountOfRounds);
};
