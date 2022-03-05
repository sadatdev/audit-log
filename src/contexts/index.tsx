import React from 'react';
import { SitesProvider } from './Sites';

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return <SitesProvider>{children}</SitesProvider>;
};
