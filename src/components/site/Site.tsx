import AddIcon from '@mui/icons-material/Add';
import { CircularProgress, IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { ISite } from 'types';

interface Props {
    site: ISite;
}

export const Site = ({ site }: Props) => {
    return (
        <>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="Add">
                        <AddIcon titleAccess="Add new" />
                    </IconButton>
                }
            >
                <ListItemText
                    primary={site.name}
                    secondary={
                        <>
                            <Typography component="p" variant="body2">
                                {site.description}
                            </Typography>
                            <Typography component="p" variant="body2" fontWeight="500">
                                Total Audit Logs:
                                <Typography component="span" color="coral">
                                    <CircularProgress size="1rem" sx={{ marginLeft: '.5rem' }} />
                                </Typography>
                            </Typography>
                        </>
                    }
                />
            </ListItem>
        </>
    );
};
