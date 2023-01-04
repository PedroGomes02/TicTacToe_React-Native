import styled from 'styled-components/native';

const ChooseIconContainer = styled.View`
  bottom: 70%;
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #23967f;
  padding: 10px;
  border: 5px solid #3d5467;
  border-radius: 10px;
`;

const StyledHeader = styled.Text`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #e8eef2;
`;

const StyledButton = styled.TouchableOpacity`
  width: 30%;
  padding: 10px;
  background-color: #e8eef2;
  border: 2.5px solid #3d5467;
  margin: 10px;
  border-radius: 10px;
`;

const StyledButtonText = styled.Text`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

export {ChooseIconContainer, StyledHeader, StyledButton, StyledButtonText};
