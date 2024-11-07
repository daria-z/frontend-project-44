import generateRandomNumber from "./utils/generateRandomNumber.js";
import greeting from "./utils/greeting.js";
import askUser from "./utils/askUser.js";
import generateOperator from "./utils/generateOperator.js";

import gamesWrapper from "./utils/gamesWrapper.js";


export default () => {
  const rule = 'What is the result of the expression?';
  const logic = (name) => {
    const number1 = generateRandomNumber(1, 10);
    const number2 = generateRandomNumber(1, 10);
    const symbol = generateOperator();
    const question = `${number1} ${symbol} ${number2}`;
    const answer = eval(question);

    if (askUser(name, question, answer) === false) {
      return;
    }
  };
  gamesWrapper(rule, logic);
};

// export default () => {
//   const userName = greeting();

//   console.log('What is the result of the expression?');

//   for (let i = 1; i <= 3; i += 1) {
//     const number1 = generateRandomNumber(1, 10);
//     const number2 = generateRandomNumber(1, 10);
//     const symbol = generateOperator();
//     const question = `${number1} ${symbol} ${number2}`;
//     const answer = eval(question).toSring();

//     if (askUser(userName, question, answer) === false) {
//       return;
//     }

//     console.log('Correct!');
//   }
//   console.log(`Congratulations, ${userName}!`);
// };
