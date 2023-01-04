import styled from 'styled-components/native';

const GameStatusContainer = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.5px;
  border: 2.5px solid #3d5467;
  color: #3d5467;
  border-radius: 10px;
`;

const StatusText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const StyledButton = styled.TouchableOpacity`
  width: 40%;
  border: 2.5px solid #3d5467;
  margin: 5px;
  padding: 2.5px;
  background-color: #ce7b91;
  border-radius: 10px;
`;

const StyledButtonText = styled.Text`
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export {GameStatusContainer, StatusText, StyledButton, StyledButtonText};
