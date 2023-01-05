import {AnyStyledComponent} from 'styled-components';
import styled from 'styled-components/native';

interface Props {
  value: number;
}

const StyledCellBoard = styled.TouchableOpacity<Props>`
  width: 33.333333%;
  height: 33.333333%;
  justify-content: center;
  align-items: center;
  background-color: #e8eef2;
  border-color: #3d5467;
  border-top-width: ${props => (props.value > 2 ? '10px' : '0px')};
  border-left-width: ${props =>
    props.value && props.value !== 3 && props.value !== 6 ? '10px' : '0px'};
`;

const StyledCellBoardText: AnyStyledComponent = styled.Text`
  width: 100%;
  height: 100%;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export {StyledCellBoard, StyledCellBoardText};
