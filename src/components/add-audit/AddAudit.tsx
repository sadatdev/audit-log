import { SaveOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { useSites } from 'contexts/Sites';
import React, { useState } from 'react';
import { IAuditLog } from 'types';
import { toTitleCase } from 'utils/cases';

interface Props {
    logs: IAuditLog[];
}

const AddAudit = ({ logs }: Props) => {
    const {
        sitesState: { selected },
    } = useSites();

    const [name, setName] = useState(() => selected?.name);
    const [description, setDescription] = useState(selected?.description);
    const [address, setAddress] = useState(selected?.location.name);
    const [lat, setLat] = useState(selected?.location.latitude);
    const [lon, setLon] = useState(selected?.location.longitude);

    return (
        <Container
            maxWidth="sm"
            sx={{
                border: 1,
                borderColor: 'primary.main',
                background: 'white',
                margin: '2rem auto',
            }}
        >
            <Box sx={{ padding: '1rem 0' }}>
                <Stack direction="row" spacing={2}>
                    <Button size="small" variant="outlined" startIcon={<SaveOutlined />}>
                        Save
                    </Button>
                    <Button
                        size="small"
                        variant="outlined"
                        color="inherit"
                        startIcon={<CloseIcon />}
                    >
                        Cancel
                    </Button>
                </Stack>
                <Divider sx={{ margin: '1rem 0' }} />
                <Typography component="p">Site Id: {selected?.id} </Typography>
                <Stack sx={{ padding: '1rem 0' }} spacing={2}>
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        label="Name"
                        variant="outlined"
                    />
                    <TextField
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        id="address"
                        label="Jurisdiction/City/Region"
                        variant="outlined"
                    />
                    <TextField
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                        label="Site Description"
                        variant="outlined"
                        multiline
                    />
                    <Stack direction="row" spacing={2}>
                        <TextField
                            value={lat}
                            onChange={(e) => setLat(parseFloat(e.target.value))}
                            id="lat"
                            label="Latitude"
                            variant="outlined"
                        />
                        <TextField
                            value={lon}
                            onChange={(e) => setLon(parseFloat(e.target.value))}
                            id="lon"
                            label="Longitude"
                            variant="outlined"
                        />
                    </Stack>
                </Stack>
                <Stack sx={{ backgroundColor: '#ccc', padding: '1rem' }}>
                    <Typography>Audit Log:</Typography>
                    <Divider sx={{ margin: '.5rem 0' }} />
                    {logs.map((log) => (
                        <Typography component="p" variant="caption" display="block" gutterBottom>
                            {toTitleCase(log.action)} by {log.user} on {log.dateTime}
                        </Typography>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
};

export default AddAudit;
