export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const isEven = num => num % 2 === 0;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
