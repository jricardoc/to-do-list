import React from "react";
import theme from "../../global/styles/theme";
import Divider from "../Divider";
import { Icon } from "../Icon";
import Separator from "../Separator";
import Text from "../Text";

import { Container } from "./styles";

const EmptyList = () => {
  return (
    <Container>
      <Separator height={15} />
      <Divider color={theme.colors.gray_400} />
      <Separator height={48} />
      <Icon icon="clipboard" size={56} />
      <Separator height={16} />
      <Text color={theme.colors.gray_300} font={theme.fonts.bold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text color={theme.colors.gray_300}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </Container>
  );
};

export default EmptyList;
