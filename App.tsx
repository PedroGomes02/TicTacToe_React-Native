import React, {useEffect, useState} from 'react';
import ChooseIcon from './src/components/ChooseIcon';
import GameBoard from './src/components/GameBoard';
import GameStatus from './src/components/GameStatus';
import Header from './src/components/Header';
import ScoreBoard from './src/components/ScoreBoard';
import {
  checkIsLastTurn,
  checkTie,
  checkWinner,
  createArrayOfEmptyIndexs,
} from './src/utils';
import {MyAppContainer, GameContainer, GameControlsContainer} from './styles';

const App = () => {
  const [playerIcon, setPlayerIcon] = useState<null | string>(null);
  const [playerTurn, setPlayerTurn] = useState<boolean>(true);
  const [gameBoardState, setGameBoardState] = useState<string[]>(
    Array(9).fill(null),
  );
  const [winnerState, setWinnerState] = useState<null | undefined | string>(
    null,
  );
  const [winningLineState, setWinningLineState] = useState<
    undefined | number[]
  >([]);
  const [tieState, setTieState] = useState<boolean>(false);
  const [scoreBoardState, setScoreBoardState] = useState<number[]>([0, 0]);

  useEffect(() => {
    if (!playerTurn && !winnerState && !tieState) {
      setTimeout(() => {
        const currentBoard = [...gameBoardState];
        const emptyCells = createArrayOfEmptyIndexs(currentBoard);
        currentBoard[
          emptyCells[Math.floor(Math.random() * emptyCells.length)]
        ] = playerIcon === 'X' ? 'O' : 'X';

        setGameBoardState(currentBoard);
        setPlayerTurn(true);

        checkIsLastTurn(
          currentBoard,
          playerIcon,
          checkWinner,
          setWinnerState,
          setWinningLineState,
          checkTie,
          setTieState,
          scoreBoardState,
          setScoreBoardState,
        );
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerTurn]);

  return (
    <MyAppContainer>
      <Header />
      {!playerIcon ? (
        <ChooseIcon setPlayerIcon={setPlayerIcon} />
      ) : (
        <>
          <GameContainer>
            <GameBoard
              playerIcon={playerIcon}
              playerTurn={playerTurn}
              setPlayerTurn={setPlayerTurn}
              gameBoardState={gameBoardState}
              setGameBoardState={setGameBoardState}
              winnerState={winnerState}
              setWinnerState={setWinnerState}
              winningLineState={winningLineState}
              setWinningLineState={setWinningLineState}
              tieState={tieState}
              setTieState={setTieState}
              scoreBoardState={scoreBoardState}
              setScoreBoardState={setScoreBoardState}
            />
            <GameControlsContainer>
              <GameStatus
                playerIcon={playerIcon}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
                setGameBoardState={setGameBoardState}
                winnerState={winnerState}
                setWinnerState={setWinnerState}
                setWinningLineState={setWinningLineState}
                tieState={tieState}
                setTieState={setTieState}
              />
              <ScoreBoard
                playerIcon={playerIcon}
                setPlayerIcon={setPlayerIcon}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
                setScoreBoardState={setScoreBoardState}
                winnerState={winnerState}
                setWinnerState={setWinnerState}
                setWinningLineState={setWinningLineState}
                tieState={tieState}
                setTieState={setTieState}
                scoreBoardState={scoreBoardState}
                setGameBoardState={setGameBoardState}
              />
            </GameControlsContainer>
          </GameContainer>
        </>
      )}
    </MyAppContainer>
  );
};

export default App;
