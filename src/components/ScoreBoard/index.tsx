import React from 'react';
import {scoreBoardProps} from '../../types';
import {
  ScoreBoardContainer,
  ScoreBoardHeader,
  ScoresContainer,
  StyledScoreContainer,
  StyledButton,
  ScoreTextPlayer,
  ScoreTextNumber,
  StyledButtonText,
} from './styles';

const ScoreBoard = (props: scoreBoardProps) => {
  const playerScore = props.scoreBoardState[0];
  const cPUScore = props.scoreBoardState[1];
  const handlerPress = () => {
    if (props.playerTurn || props.winnerState || props.tieState) {
      props.setPlayerIcon(null);
      props.setPlayerTurn(true);
      props.setGameBoardState(Array(9).fill(null));
      props.setWinnerState(null);
      props.setWinningLineState([]);
      props.setTieState(false);
      props.setScoreBoardState([0, 0]);
    }
  };
  return (
    <>
      <ScoreBoardContainer>
        <ScoreBoardHeader>Score Board</ScoreBoardHeader>
        <ScoresContainer>
          <StyledScoreContainer>
            <ScoreTextPlayer>Player</ScoreTextPlayer>
            <ScoreTextNumber>{playerScore}</ScoreTextNumber>
          </StyledScoreContainer>
          <StyledScoreContainer>
            <ScoreTextPlayer>CPU</ScoreTextPlayer>
            <ScoreTextNumber>{cPUScore}</ScoreTextNumber>
          </StyledScoreContainer>
        </ScoresContainer>
        <StyledButton onPress={handlerPress}>
          <StyledButtonText>Reset Score Board</StyledButtonText>
        </StyledButton>
      </ScoreBoardContainer>
    </>
  );
};

export default ScoreBoard;
