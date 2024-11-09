/* eslint-disable no-param-reassign */
import generateRandomNumber from '../utils/generateRandomNumber.js';

export const rule = 'Find the greatest common divisor of given numbers.';

export const logic = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);

  const nod = (a, b) => {
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }
    return a;
  };
  const question = `${number1} ${number2}`;
  const answer = nod(number1, number2);

  return [question, answer];
};
