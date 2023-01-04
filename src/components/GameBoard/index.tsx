import CellBoard from '../CellBoard';
import React from 'react';
import {StyledView} from './styles';
import {gameBoardProps} from '../../types';

const GameBoard = (props: gameBoardProps) => {
  return (
    <StyledView>
      {props.gameBoardState.map((element: string, index: number) => (
        <CellBoard
          key={index}
          value={index}
          cellSymbol={element}
          isWinnerCell={props.winningLineState?.includes(index)}
          playerIcon={props.playerIcon}
          playerTurn={props.playerTurn}
          setPlayerTurn={props.setPlayerTurn}
          gameBoardState={props.gameBoardState}
          setGameBoardState={props.setGameBoardState}
          winnerState={props.winnerState}
          setWinnerState={props.setWinnerState}
          winningLineState={props.winningLineState}
          setWinningLineState={props.setWinningLineState}
          tieState={props.tieState}
          setTieState={props.setTieState}
          scoreBoardState={props.scoreBoardState}
          setScoreBoardState={props.setScoreBoardState}
        />
      ))}
    </StyledView>
  );
};

export default GameBoard;
