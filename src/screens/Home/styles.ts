import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #262626;
`;

export const BackgroundHeader = styled.View`
  width: 100%;
  height: 175px;
  background-color: ${({ theme }) => theme.colors.gray_700};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const IconWrapper = styled.View`
  margin-top: 5px;
  margin-right: 5px;
`;

export const FirstTitle = styled.Text`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.size.lg};
  font-family: ${({ theme }) => theme.fonts.black};
`;
export const SecondTitle = styled.Text`
  color: ${({ theme }) => theme.colors.purple_dark};
  font-size: ${({ theme }) => theme.size.lg};
  font-family: ${({ theme }) => theme.fonts.black};
`;
