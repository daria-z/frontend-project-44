import generateRandomNumber from '../utils/generateRandomNumber.js';

export const rule = 'What number is missing in the progression?';

export const logic = () => {
  const progressionLength = 10;
  const maxProgressionDiff = 5;
  const missedPosition = generateRandomNumber(1, progressionLength);
  const progressionFirstNumber = generateRandomNumber();
  const progressionDiff = generateRandomNumber(1, maxProgressionDiff);
  const progression = [progressionFirstNumber];

  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = progression[progression.length - 1] + progressionDiff;
    progression.push(nextNumber);
  }
  const correctAnswer = progression[missedPosition];
  progression[missedPosition] = '..';

  return [progression.join(' '), correctAnswer];
};
