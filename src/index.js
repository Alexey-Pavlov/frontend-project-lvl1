import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.floor(Math.random() * (100 + 1));
const generateRandomMathSign = () => {
  const arrayOfSigns = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (2 + 1));
  return arrayOfSigns[randomIndex];
};

const wrongAnswerMessage = (answer, correctAnswer, name) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

export const gamesEngine = (currentGame) => {
  const name = greeting();
  console.log(currentGame()[0]);
  for (let i = 0; i < 3; i += 1) {
    const valuesArray = currentGame();
    const question = valuesArray[1];
    const correctAnswer = valuesArray[2];
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      wrongAnswerMessage(answer, correctAnswer, name);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

const evenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const randomNumber = generateRandomNumber();
  const question = `Question: ${randomNumber}`;
  const isEven = (randomNumber % 2 === 0);
  const correctAnswer = isEven ? 'yes' : 'no';
  return [task, question, String(correctAnswer)];
};

const calcGame = () => {
  const task = 'What is the result of the expression?';
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const operand = generateRandomMathSign();
  const question = `Question: ${randomNumber1} ${operand} ${randomNumber2}`;
  let correctAnswer = 0;
  switch (operand) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      break;
  }
  return [task, question, String(correctAnswer)];
};

const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const smallestNumber = randomNumber1 > randomNumber2 ? randomNumber1 : randomNumber2;
  for (let i = smallestNumber; i > 0; i -= 1) {
    if ((randomNumber1 % i === 0) && (randomNumber2 % i === 0)) {
      return [task, question, String(i)];
    }
  }
  return task;
};

export {
  greeting, evenGame, calcGame, gcdGame,
};
