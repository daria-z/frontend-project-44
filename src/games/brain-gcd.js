import gamesWrapper from '../utils/gamesWrapper.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const logic = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);

  const nod = (a, b) => {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    const counter = max % min;
    if (counter === 0) {
      return Math.min(a, b);
    }

    return nod(min, counter);
  };
  const question = `${number1} ${number2}`;
  const answer = nod(number1, number2);

  return [question, answer];
};

export default () => {
  gamesWrapper(rule, logic);
};
