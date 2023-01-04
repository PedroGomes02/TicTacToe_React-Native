import React from 'react';
import {chooseIconProps} from '../../types';
import {
  ChooseIconContainer,
  StyledButton,
  StyledButtonText,
  StyledHeader,
} from './styles';

const ChooseIcon = (props: chooseIconProps) => {
  const handlerPress_X = () => props.setPlayerIcon('X');
  const handlerPress_O = () => props.setPlayerIcon('O');
  return (
    <ChooseIconContainer>
      <StyledHeader>Choose your Icon</StyledHeader>
      <StyledButton onPress={handlerPress_X}>
        <StyledButtonText>X</StyledButtonText>
      </StyledButton>
      <StyledButton onPress={handlerPress_O}>
        <StyledButtonText>O</StyledButtonText>
      </StyledButton>
    </ChooseIconContainer>
  );
};

export default ChooseIcon;
