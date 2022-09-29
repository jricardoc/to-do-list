import React from "react";
import {  TouchableOpacity } from "react-native";
import theme from "../../global/styles/theme";
import { Icon } from "../Icon";
import Text from "../Text";
import { Container } from "./styles";

interface Props {
  item: string;
  handleIsChecked: (command: boolean) => void;
  isChecked: boolean;
  onRemove?: () => void;
}


export default function ListCard({ item, handleIsChecked, isChecked, onRemove }: Props) {
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
