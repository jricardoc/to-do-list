import React, { useState } from "react";
import { Alert, FlatList, StatusBar } from "react-native";
import Divider from "../../components/Divider";
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
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com esse nome."
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
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
            onChangeText={setParticipantName}
            value={participantName}
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

        <Separator height={15} />
        <Divider color={theme.colors.gray_300} />
        <Separator height={48} />

        <ContentList>
          <FlatList
            data={participants}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <ListCard name={item} />}
            showsVerticalScrollIndicator={false}
            // TODO: Transformar em componente 
            ListEmptyComponent={() => (
              <TextAlignCenter>
                <Icon icon="clipboard" size={56}/>
                <Separator height={16}/>
                <Text
                  color={theme.colors.gray_300}
                  font={theme.fonts.bold}
                >
                  Você ainda não tem tarefas cadastradas
                </Text>
                  <Text color={theme.colors.gray_300}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
              </TextAlignCenter>
            )}

          />
        </ContentList>
      </Content>
    </Container>
  );
}
