import generateRandomNumber from "../utils/generateRandomNumber.js";

export const rule = '\'yes\' is wrong answer ;(. Correct answer was \'no\'.';

export const logic = () => {
  const questionNumber = Math.floor(Math.random() * 50);
  const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

  return [questionNumber, correctAnswer];
}

