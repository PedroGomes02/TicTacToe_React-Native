import React from 'react';
import {StyledCellBoard, StyledCellBoardText} from './styles';
import {cellBoardProps} from '../../types';
import {checkIsLastTurn, checkTie, checkWinner} from '../../utils';

const CellBoard = (props: cellBoardProps) => {
  const textStyle = {
    textAlignVertical: 'center',
  };
  const winningLineColor = {
    ...textStyle,
    backgroundColor: '#ce7b91b0',
    color: 'white',
    fontWeight: 'bold',
  };

  const handlerPress = () => {
    if (
      !props.playerTurn ||
      props.gameBoardState[props.value] ||
      props.winnerState ||
      props.tieState
    ) {
      return;
    }
    const currentBoard = [...props.gameBoardState];
    currentBoard[props.value] = props.playerIcon;

    props.setGameBoardState(currentBoard);
    props.setPlayerTurn(false);

    checkIsLastTurn(
      currentBoard,
      props.playerIcon,
      checkWinner,
      props.setWinnerState,
      props.setWinningLineState,
      checkTie,
      props.setTieState,
      props.scoreBoardState,
      props.setScoreBoardState,
    );
  };

  return (
    <StyledCellBoard value={props.value}>
      <StyledCellBoardText
        onPress={handlerPress}
        style={props.isWinnerCell ? winningLineColor : textStyle}>
        {props.cellSymbol}
      </StyledCellBoardText>
    </StyledCellBoard>
  );
};

export default CellBoard;
