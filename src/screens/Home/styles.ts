import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
`;

export const BackgroundHeader = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_700};
  width: 100%;
  position: relative;
`;

export const Header = styled.View`
  height: 175px;
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
  font-size: ${({ theme }) => theme.size.xxl}px;
  font-family: ${({ theme }) => theme.fonts.black};
`;
export const SecondTitle = styled.Text`
  color: ${({ theme }) => theme.colors.purple_dark};
  font-size: ${({ theme }) => theme.size.xxl}px;
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const CardAddList = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.blue_dark};
  width: 60px;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export const InputWrapper = styled.View`
  width: 100%;
  position: absolute;
  align-items: center;
  flex-direction: row;
  bottom: -26px;
  left: 16px;
`;

export const InfoCreatedDoneWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Created = styled.View`
  flex-direction: row;
`;

export const Counter = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 8px;
  height: 25px;
  width: 19px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const Done = styled.View`
  flex-direction: row;
`;

export const ContentList = styled.View`
  width: 100%;
  /* align-items: center; */
  justify-content: center;
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const TextAlignCenter = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;