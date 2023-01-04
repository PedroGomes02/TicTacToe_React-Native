import styled from 'styled-components/native';

const MyAppContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #e8eef2;
  border: 5px solid #3d5467;
`;

const GameContainer = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: space-around;
`;

const GameControlsContainer = styled.View`
  width: 100%;
  height: 45%;
  align-items: center;
  justify-content: space-around;
`;

export {MyAppContainer, GameContainer, GameControlsContainer};
