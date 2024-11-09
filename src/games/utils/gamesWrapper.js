import readlineSync from 'readline-sync';

export default (rules, logic) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(rules);

  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = logic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;( .Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
