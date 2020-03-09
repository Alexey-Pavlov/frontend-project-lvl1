import readlineSync from 'readline-sync';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const wrongAnswerMessage = (answer, correctAnswer, name) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
};

const congratulationsMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const gamesEngine = (task, currentGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const [currentTask, correctAnswer] = currentGame();
    const question = `Question: ${currentTask}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return wrongAnswerMessage(answer, correctAnswer, name);
    }
  }
  return congratulationsMessage(name);
};

export {
  generateRandomNumber,
};
