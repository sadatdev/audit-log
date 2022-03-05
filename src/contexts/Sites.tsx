import sites from 'data/sites';
import React, { createContext } from 'react';
import { ISite } from 'types';

/* Types */
type State = {
    isLoading: boolean;
    data: ISite[];
    selected: ISite | undefined;
};
type Action =
    | { type: 'getData' }
    | { type: 'setData'; payload: ISite[] }
    | { type: 'setSelected'; payload: ISite };
type Dispatch = (action: Action) => void;
type SiteProviderProps = { children: React.ReactNode };

const SiteContext = createContext<{ sitesState: State; sitesDispatch: Dispatch } | undefined>(
    undefined
);

const defaultState = {
    isLoading: true,
    data: [],
    selected: undefined,
    error: undefined,
};

function sitesReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'getData': {
            return { ...state, data: sites };
        }
        case 'setData': {
            return { ...state, isLoading: false, data: action.payload };
        }
        case 'setSelected': {
            return { ...state, selected: action.payload };
        }
        default: {
            throw new Error(`Unhandled action type`);
        }
    }
}

const SitesProvider = ({ children }: SiteProviderProps) => {
    const [sitesState, sitesDispatch] = React.useReducer(sitesReducer, defaultState);
    const value = { sitesState, sitesDispatch };
    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

function useSites() {
    const context = React.useContext(SiteContext);
    if (context === undefined) {
        throw new Error('useSites must be used within a SitesProvider');
    }
    return context;
}

export { SitesProvider, useSites };
