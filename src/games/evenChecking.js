import readlineSync from 'readline-sync';

export default (name) => {
  console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 50);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;( .Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
