import generateRandomNumber from "../utils/generateRandomNumber.js";

export const rule = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

export const logic = () => {
  const number = generateRandomNumber(1, 10);
  const isPrime = (number) => {
    if (number <= 1) {
      return 'no';
    }

    for (let i = 2; i < number; i++)
      if (number % i == 0) {
        return 'no';
      }
      return 'yes';
    }

  return [number, isPrime(number)];
};

