import styled from "styled-components/native";
import { Props } from "./types";

export const Container = styled.Text<Props>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  font-family: ${({ font }) => font};
  ${({ lineThrough }) => lineThrough && "text-decoration: line-through"}
  
`;
