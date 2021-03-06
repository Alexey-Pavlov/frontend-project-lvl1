import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const generateGameData = () => {
  const length = 10;
  const begin = generateRandomNumber(0, 50);
  const diff = generateRandomNumber(1, 20);
  const hiddenElementIndex = generateRandomNumber(1, length - 1);
  const correctAnswer = begin + diff * hiddenElementIndex;
  let question = '';

  for (let i = 0; i <= length - 1; i += 1) {
    if (i === hiddenElementIndex) {
      question = `${question} ..`;
    } else {
      question = `${question} ${begin + diff * i}`;
    }
  }

  return [question.trimLeft(), String(correctAnswer)];
};

const startGame = () => gameEngine(task, generateGameData);

export default startGame;
