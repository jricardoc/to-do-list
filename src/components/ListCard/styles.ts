import styled from "styled-components/native";

export const Container = styled.View`
  padding-bottom: 8px;
`;

export const Content = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px 12px 12px;

  height: 64px;
`;
