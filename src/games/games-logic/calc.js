/* eslint-disable no-eval */
import generateRandomNumber from '../utils/generateRandomNumber.js';
import generateOperator from '../utils/generateOperator.js';

export const rule = 'What is the result of the expression?';

export const logic = () => {
  const minNumber = 1;
  const maxNumber = 10;

  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);
  const symbol = generateOperator();
  const question = `${number1} ${symbol} ${number2}`;
  const answer = eval(question);

  return [question, answer];
};
