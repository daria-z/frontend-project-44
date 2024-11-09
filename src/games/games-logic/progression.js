import generateRandomNumber from '../utils/generateRandomNumber.js';

export const rule = 'What number is missing in the progression?';

export const logic = () => {
  const missedPosition = generateRandomNumber(1, 10);
  const progressionFirstNumber = generateRandomNumber(1, 30);
  const progressionDiff = generateRandomNumber(1, 5);
  const progression = [progressionFirstNumber];

  for (let i = 0; i < 10; i += 1) {
    const nextNumber = progression[progression.length - 1] + progressionDiff;
    progression.push(nextNumber);
  }
  const correctAnswer = progression[missedPosition];
  progression[missedPosition] = '...';

  return [progression.join(' '), correctAnswer];
};
