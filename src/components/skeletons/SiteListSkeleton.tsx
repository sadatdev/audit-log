import { Container, Skeleton, Stack } from '@mui/material';
import React from 'react';

const SiteListSkeleton = () => {
    return (
        <Container maxWidth="sm" sx={{ margin: '1rem auto' }}>
            {Array.from({ length: 5 }, (_, i) => (
                <Stack
                    key={i}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ marginBottom: '1rem' }}
                >
                    <Stack sx={{ flex: 1 }}>
                        <Skeleton animation="wave" height="1rem" />
                        <Skeleton animation="wave" height="0.5rem" />
                        <Skeleton animation="wave" height="0.5rem" />
                        <Skeleton animation="wave" height="0.5rem" />
                        <Skeleton animation="wave" width="50%" />
                    </Stack>
                    <Skeleton variant="circular" width={40} height={40} />
                </Stack>
            ))}
        </Container>
    );
};

export default SiteListSkeleton;
