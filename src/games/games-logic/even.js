export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const logic = () => {
  const questionNumber = Math.floor(Math.random() * 50);
  const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

  return [questionNumber, correctAnswer];
};
