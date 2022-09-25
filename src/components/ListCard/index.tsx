import React from 'react';
import theme from '../../global/styles/theme';
import Text from '../Text';
import { Container } from './styles';

interface Props {
    name: string;
}

// FIXME: Terminar de estilizar

export default function ListCard({ name }: Props) {
    return (
        <Container>
            <Text size={16} color={theme.colors.gray_100}>{name}</Text>
        </Container>
    )
}