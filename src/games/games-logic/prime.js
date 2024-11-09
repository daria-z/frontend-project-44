import generateRandomNumber from '../utils/generateRandomNumber.js';

export const rule = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

export const logic = () => {
  const maxPrimeNumber = 10;
  const number = generateRandomNumber(1, maxPrimeNumber);
  const isPrime = () => {
    if (number <= 1) {
      return 'no';
    }

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  return [number, isPrime(number)];
};
