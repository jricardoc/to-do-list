import styled from 'styled-components/native';
import { DividerProps } from './types';

export const Container = styled.View<DividerProps>`
  flex: 1;
  border-top-width: 1px;
  border-top-color: ${({ color }) => color};
`;
