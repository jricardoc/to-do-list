import React, {useMemo, useState} from 'react';
import { Keyboard, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import {useTheme} from 'styled-components';

import {
  Container,
  Label,
  LeftIconContainer,
  RightIconContainer,
  Content,
  TextInput,
  Error
} from './styles';
import {Props} from './types';

const Input = ({
  name,
  error,
  rightIcon,
  leftIcon,
  placeholder,
  secureTextEntry,
  onBlur,
  onFocus,
  onSubmitEditing,
  ...rest
}: Props) => {
  const {colors} = useTheme();
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const borderColor = useMemo(() => {
    if (error) return colors.danger;
    if (hasFocus) return colors.purple_dark;
    return colors.gray_500;
  }, [error, hasFocus, colors]);

  return (
    <Container>
      {!!name && <Label size={12} color={colors.gray_300}>{name}</Label>}
      <Content>
        {!!leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        <TextInput
          borderColor={borderColor}
          onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setHasFocus(true);
          }}
          onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setHasFocus(false);
          }}
          hasLeftIcon = {!!leftIcon}
          hasRightIcon = {!!rightIcon}
          placeholder={placeholder}
          placeholderTextColor={colors.gray_300}
          selectionColor={colors.gray_300}
          onSubmitEditing={Keyboard.dismiss}
          {...rest}
        />
        {!!rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
      </Content>
      {!!error && <Error size={10}>{error}</Error>}
    </Container>
  );
};

export default Input;
