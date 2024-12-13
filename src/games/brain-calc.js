/* eslint-disable no-eval */
import gamesWrapper from '../utils/gamesWrapper.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';
import generateOperator from '../utils/generateOperator.js';

const rule = 'What is the result of the expression?';

const logic = () => {
  const minNumber = 1;
  const maxNumber = 10;

  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);
  const symbol = generateOperator();
  const question = `${number1} ${symbol} ${number2}`;
  const answer = eval(question);

  return [question, answer];
};

export default () => {
  gamesWrapper(rule, logic);
};
