import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray_400};
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;