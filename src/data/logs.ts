import { IAuditLog } from './../types';

export const logs: IAuditLog[] = [
    {
        id: '1',
        siteId: '1',
        dateTime: '2/1/2020 12:00:00 AM',
        user: 'Sadat',
        action: 'created',
    },
    {
        id: '2',
        siteId: '1',
        dateTime: '21/12/2021 12:00:00 AM',
        user: 'Jubayer',
        action: 'updated',
    },
];
