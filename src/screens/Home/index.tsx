import React, { useState } from "react";
import { Alert, FlatList, StatusBar } from "react-native";
import Divider from "../../components/Divider";
import EmptyList from "../../components/EmptyList";
import { Icon } from "../../components/Icon";
import Input from "../../components/Input";
import ListCard from "../../components/ListCard";
import Separator from "../../components/Separator";
import Text from "../../components/Text";
import theme from "../../global/styles/theme";

import {
  Container,
  BackgroundHeader,
  Header,
  FirstTitle,
  SecondTitle,
  CardAddList,
  InputWrapper,
  InfoCreatedDoneWrapper,
  Created,
  Counter,
  Done,
  ContentList,
  Content,
  TextAlignCenter,
} from "./styles";

export function Home() {
  const [list, setList] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  function handleParticipantAdd() {
    if (list.includes(todo)) {
      return Alert.alert(
        "Item já existe",
        "Já existe um item na lista com esse nome."
      );
    }

    setList((prevState) => [...prevState, todo]);
    setTodo("");
  }

  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={theme.colors.gray_700}
      />

      <BackgroundHeader>
        {/* TODO: Change to logo Image */}
        <Header>
          <Separator height={5} width={5} />
          <Icon icon="rocket" size={40} />

          <FirstTitle>to</FirstTitle>
          <SecondTitle>do</SecondTitle>
        </Header>
        <InputWrapper>
          <Input
            autoCapitalize="none"
            keyboardType="default"
            placeholder="Adicione uma nova tarefa"
            onChangeText={setTodo}
            value={todo}
          />

          <CardAddList onPress={handleParticipantAdd}>
            <Icon icon="plus" size={20} />
          </CardAddList>
        </InputWrapper>
      </BackgroundHeader>

      <Separator height={50} />

      <Content>
        <InfoCreatedDoneWrapper>
          <Created>
            <Text size={16} color={theme.colors.blue} font={theme.fonts.bold}>
              Criadas
            </Text>
            <Counter>
              <Text
                color={theme.colors.gray_200}
                size={12}
                font={theme.fonts.bold}
              >
                0
              </Text>
            </Counter>
          </Created>
          <Done>
            <Text size={16} color={theme.colors.purple} font={theme.fonts.bold}>
              Concluídas
            </Text>
            <Counter>
              <Text
                color={theme.colors.gray_200}
                size={12}
                font={theme.fonts.bold}
              >
                0
              </Text>
            </Counter>
          </Done>
        </InfoCreatedDoneWrapper>

        <ContentList>
          <Separator height={20} />
          <FlatList
            data={list}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <ListCard name={item} />}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <EmptyList />}
          />
        </ContentList>
      </Content>
    </Container>
  );
}
