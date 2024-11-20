import gamesWrapper from './utils/gamesWrapper.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const logic = () => {
  const maxNumber = 50;

  const questionNumber = Math.floor(Math.random() * maxNumber);

  const isEven = (num) => num % 2 === 0;
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

  return [questionNumber, correctAnswer];
};

export default () => {
  gamesWrapper(rule, logic);
};
