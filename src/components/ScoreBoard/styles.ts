import styled from 'styled-components/native';

const ScoreBoardContainer = styled.View`
  width: 90%;
  flex-direction: column;
  align-items: center;
  border: 2.5px solid #3d5467;
  background-color: #23967f;
  border-radius: 10px;
`;

const ScoreBoardHeader = styled.Text`
  padding: 2.5px;
  font-size: 20px;
  font-weight: bold;
  color: #e8eef2;
`;

const ScoresContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
  padding: 5px 20px;
`;

const StyledScoreContainer = styled.View`
  width: 45%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #3f3f3f;
  padding: 5px;
  border: 2.5px solid white;
  border-radius: 10px;
`;

const ScoreTextPlayer = styled.Text`
  font-size: 20px;
  color: #e8eef2;
`;

const ScoreTextNumber = styled.Text`
  width: 40%;
  background-color: black;
  border: 1px solid #e8eef2;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #e8eef2;
`;

const StyledButton = styled.TouchableOpacity`
  width: 90%;
  background-color: #ce7b91;
  border: 2.5px solid #3d5467;
  margin: 5px;
  padding: 2.5px;
  border-radius: 10px;
`;

const StyledButtonText = styled.Text`
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export {
  ScoreBoardContainer,
  ScoreBoardHeader,
  ScoresContainer,
  StyledScoreContainer,
  ScoreTextPlayer,
  ScoreTextNumber,
  StyledButton,
  StyledButtonText,
};
