import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Icon } from "../../components/Icon";
import theme from "../../global/styles/theme";

import {
  Container,
  BackgroundHeader,
  IconWrapper,
  FirstTitle,
  SecondTitle,
} from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={theme.colors.gray_700}
      />
      <BackgroundHeader>
        <IconWrapper>
          <Icon icon="rocket" size={40} />
        </IconWrapper>
        <FirstTitle>to</FirstTitle>
        <SecondTitle>do</SecondTitle>
      </BackgroundHeader>
    </Container>
  );
}
