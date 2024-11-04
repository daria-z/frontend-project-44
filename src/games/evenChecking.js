import askUser from './utils/askUser.js';
import greeting from "./utils/greeting.js";

export default () => {
  const userName = greeting();
  console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');

  for (let i = 1; i <= 3; i += 1) {
    const questionNumber = Math.floor(Math.random() * 50);
    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

    if (askUser(userName, questionNumber, correctAnswer) === false) {
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
