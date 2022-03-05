import { Container, Typography } from '@mui/material';
import React from 'react';

interface Props {
    text?: string;
}

export const EmptyList = ({ text }: Props) => {
    return (
        <Container sx={{ border: '1px dashed gray', padding: '1rem' }}>
            <Typography color="tomato" textAlign="center">
                {text || 'List is empty!'}
            </Typography>
        </Container>
    );
};
