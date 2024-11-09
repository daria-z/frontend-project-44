import generateRandomNumber from './generateRandomNumber.js';

export default () => {
  const mathSymbols = ['+', '-', '*'];
  const randomNumber = generateRandomNumber(0, mathSymbols.length - 1);
  return mathSymbols[randomNumber];
};
