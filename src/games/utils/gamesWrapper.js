import readlineSync from 'readline-sync';

export default (rules, gameLogic) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(rules);

  for (let i = 1; i <= 3; i += 1) {

    gameLogic(name);

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
