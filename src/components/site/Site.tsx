import AddIcon from '@mui/icons-material/Add';
import {
    CircularProgress,
    IconButton,
    ListItem,
    ListItemText,
    Modal,
    Typography,
} from '@mui/material';
import AddAudit from 'components/add-audit/AddAudit';
import { useLogs } from 'contexts/Logs';
import { useSites } from 'contexts/Sites';
import React from 'react';
import { ISite } from 'types';

interface Props {
    site: ISite;
}

export const Site = ({ site }: Props) => {
    const { sitesDispatch } = useSites();
    const { getLogsById } = useLogs();
    const [showModal, setShowModal] = React.useState(false);

    const logs = getLogsById(site.id);
    const totalSites = logs.length;

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const onClickAdd = () => {
        sitesDispatch({ type: 'setSelected', payload: site });
        openModal();
    };

    return (
        <>
            <ListItem
                secondaryAction={
                    <IconButton onClick={onClickAdd} edge="end" aria-label="Add">
                        <AddIcon titleAccess="Add new" />
                    </IconButton>
                }
            >
                <ListItemText
                    primary={site.name}
                    secondaryTypographyProps={{ component: 'div' }}
                    secondary={
                        <div>
                            <Typography component="p" variant="body2">
                                {site.description}
                            </Typography>
                            <Typography component="p" variant="body2" fontWeight="500">
                                Total Audit Logs:
                                <Typography component="span" color="coral">
                                    {' '}
                                    {totalSites !== undefined ? (
                                        totalSites
                                    ) : (
                                        <CircularProgress size="1rem" />
                                    )}
                                </Typography>
                            </Typography>
                        </div>
                    }
                />
            </ListItem>
            <Modal open={showModal} onClose={closeModal}>
                <AddAudit logs={logs} />
            </Modal>
        </>
    );
};
