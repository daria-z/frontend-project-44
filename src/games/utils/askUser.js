import readlineSync from 'readline-sync';

export default (name, question, correctAnswer) => {
  console.log(`Question: ${question}`);

  const userAnswer = readlineSync.question('Your answer: ');
  
  if (userAnswer != correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;( .Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
};
