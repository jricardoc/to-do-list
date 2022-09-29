import React, { Dispatch, SetStateAction, useState } from "react";
import {  TouchableOpacity } from "react-native";
import theme from "../../global/styles/theme";
import { Icon } from "../Icon";
import Text from "../Text";
import { Container } from "./styles";

interface Props {
  item: string;
  onRemove?: () => void;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function ListCard({ item, onRemove, setCount }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleIsChecked = (command: boolean) => {
  if (command) {
    setIsChecked(true);
    setCount((prevState) => prevState + 1);
  } else {
    setIsChecked(false);
    setCount((prevState) => prevState - 1);
  }
};
  return (
    <Container onPress={() => handleIsChecked(!isChecked)}>
      <Icon icon={isChecked ? "circleChecked" : "circleUnchecked"} size={24} />
      <Text
        size={14}
        color={isChecked ? theme.colors.gray_300 : theme.colors.gray_100}
        font={theme.fonts.regular}
        lineThrough={isChecked}
      >
        {item}
      </Text>
      <TouchableOpacity onPress={onRemove}>      
        <Icon icon="trash" size={32} />
      </TouchableOpacity>
    </Container>
  );
}
