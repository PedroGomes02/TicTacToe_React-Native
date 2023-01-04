import React from 'react';
import {gameStatusProps} from '../../types';
import {
  GameStatusContainer,
  StatusText,
  StyledButton,
  StyledButtonText,
} from './styles';

const GameStatus = (props: gameStatusProps) => {
  let statusMessage = '';

  if (props.winnerState) {
    statusMessage =
      props.winnerState === props.playerIcon
        ? `Player Wins (${props.playerIcon})`
        : `CPU Wins (${props.playerIcon === 'X' ? 'O' : 'X'})`;
  } else if (props.tieState) {
    statusMessage = 'Game Tied';
  } else if (props.playerTurn) {
    statusMessage = `Player Turn (${props.playerIcon})`;
  } else {
    statusMessage = `CPU Turn (${props.playerIcon === 'X' ? 'O' : 'X'})`;
  }

  const pressHandler = () => {
    if (props.playerTurn || props.winnerState || props.tieState) {
      props.setPlayerTurn(true);
      props.setGameBoardState(Array(9).fill(null));
      props.setWinnerState(null);
      props.setWinningLineState([]);
      props.setTieState(false);
    }
  };

  return (
    <GameStatusContainer>
      <StatusText>{statusMessage}</StatusText>
      <StyledButton onPress={pressHandler}>
        <StyledButtonText>New Game</StyledButtonText>
      </StyledButton>
    </GameStatusContainer>
  );
};

export default GameStatus;
