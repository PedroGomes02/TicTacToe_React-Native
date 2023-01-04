import {Dispatch, SetStateAction} from 'react';
import {checkTieType, checkWinnerType} from '../types';

const checkWinner = (gameBoardState: string[]) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (
      gameBoardState[a] &&
      gameBoardState[a] === gameBoardState[b] &&
      gameBoardState[a] === gameBoardState[c]
    ) {
      return {winnerSymbol: gameBoardState[a], winnerLine: winningLines[i]};
    }
  }
  return null;
};

const createArrayOfEmptyIndexs = (array: any[]) => {
  const arrayOfEmptyIndexs: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      arrayOfEmptyIndexs.push(i);
    }
  }
  return arrayOfEmptyIndexs;
};

const checkTie = (gameBoardState: string[]) => {
  if (createArrayOfEmptyIndexs(gameBoardState).length === 0) {
    return true;
  }
};

const checkIsLastTurn = (
  currentBoard: string[],
  playerIcon: null | string,
  checkWinnerArg: checkWinnerType,
  setWinner: Dispatch<SetStateAction<null | undefined | string>>,
  setWinningLineState: Dispatch<SetStateAction<undefined | number[]>>,
  checkTieArg: checkTieType,
  setTie: Dispatch<SetStateAction<boolean>>,
  scoreBoard: number[],
  setScore: Dispatch<SetStateAction<number[]>>,
) => {
  if (checkWinnerArg(currentBoard)) {
    setWinner(checkWinnerArg(currentBoard)?.winnerSymbol);
    setWinningLineState(checkWinnerArg(currentBoard)?.winnerLine);
    const currentScore = [...scoreBoard];
    if (checkWinnerArg(currentBoard)?.winnerSymbol === playerIcon) {
      currentScore[0] += 1;
    } else {
      currentScore[1] += 1;
    }
    setScore(currentScore);
  } else if (checkTieArg(currentBoard)) {
    setTie(true);
  }
};

export {checkWinner, createArrayOfEmptyIndexs, checkTie, checkIsLastTurn};
