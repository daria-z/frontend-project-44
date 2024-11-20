import gamesWrapper from './utils/gamesWrapper.js';
import generateRandomNumber from './utils/generateRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const logic = () => {
  const maxPrimeNumber = 10;
  const number = generateRandomNumber(1, maxPrimeNumber);
  const isPrime = () => {
    if (number <= 1) {
      return true;
    }

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default () => {
  gamesWrapper(rule, logic);
};
