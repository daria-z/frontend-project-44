import generateRandomNumber from "../utils/generateRandomNumber.js";
import generateOperator from "../utils/generateOperator.js";

export const rule = 'What is the result of the expression?';

export const logic = () => {
  const number1 = generateRandomNumber(1, 10);
  const number2 = generateRandomNumber(1, 10);
  const symbol = generateOperator();
  const question = `${number1} ${symbol} ${number2}`;
  const answer = eval(question);

  return [question, answer];
}


