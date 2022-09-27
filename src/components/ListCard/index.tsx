import React from "react";
import theme from "../../global/styles/theme";
import { Icon } from "../Icon";
import Separator from "../Separator";
import Text from "../Text";
import { Container, Content } from "./styles";

interface Props {
  name: string;
}

// FIXME: Terminar de estilizar

export default function ListCard({ name }: Props) {
  return (
    <Container>
      <Content>
        <Icon icon="check" size={24} />
        <Text size={14} color={theme.colors.gray_100} font={theme.fonts.regular} style={{ maxWidth: 250}}>
          {name}
        </Text>
        <Icon icon="trash" size={32} />
      </Content>
    </Container>
  );
}
