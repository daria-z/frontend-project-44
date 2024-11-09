import generateRandomNumber from "../utils/generateRandomNumber.js";

export const rule = 'Find the greatest common divisor of given numbers.';

export const logic = () => {
  const number1 = generateRandomNumber(1, 20);
  const number2 = generateRandomNumber(1, 20);

  const nod = (a, b) => {
    while (a !== b) {
      if (a > b) {
        a = a - b;
      } else {
        b = b - a;
      }
    }
    return a;
  }
    const question = `${number1} ${number2}`;
    const answer = nod(number1, number2);

  return [question, answer];
}


