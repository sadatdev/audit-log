import React from 'react';
import { LogsProvider } from './Logs';
import { SitesProvider } from './Sites';

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SitesProvider>
            <LogsProvider>{children}</LogsProvider>
        </SitesProvider>
    );
};
