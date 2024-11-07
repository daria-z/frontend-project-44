import generateRandomNumber from "./utils/generateRandomNumber.js";
import greeting from "./utils/greeting.js";
import askUser from "./utils/askUser.js";

export default () => {
  const userName = greeting();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
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

    if (askUser(userName, `${number1} ${number2}`, nod(number1, number2)) === false) {
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
