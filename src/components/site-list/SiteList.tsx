import { Container, List } from '@mui/material';
import { Site } from 'components';
import { EmptyList } from 'components/empty/EmptyList';
import { useSites } from 'contexts/Sites';
import React from 'react';

export const SiteList = () => {
    const { sitesState } = useSites();

    if (sitesState.data.length === 0) {
        return <EmptyList />;
    }
    return (
        <Container maxWidth="sm">
            <List>
                {sitesState.data.map((site) => (
                    <Site key={site.id} site={site} />
                ))}
            </List>
        </Container>
    );
};
