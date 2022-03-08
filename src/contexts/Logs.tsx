import React, { createContext } from 'react';
import { IAuditLog } from 'types';

/* Types */
type State = {
    isLoading: boolean;
    data: IAuditLog[];
};
type Action = { type: 'setData'; payload: IAuditLog[] } | { type: 'addData'; payload: IAuditLog };
type Dispatch = (action: Action) => void;
type LogsProviderProps = { children: React.ReactNode };

const LogsContext = createContext<
    | {
          LogsState: State;
          LogsDispatch: Dispatch;
          getLogsById: (id: string) => IAuditLog[];
          addAuditLog: (audit: IAuditLog) => void;
      }
    | undefined
>(undefined);

const defaultState = {
    isLoading: true,
    data: [],
};

function sitesReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'setData': {
            return { ...state, isLoading: false, data: action.payload };
        }
        case 'addData': {
            const newState = [...state.data, action.payload];
            return { ...state, isLoading: false, data: newState };
        }
        default: {
            throw new Error(`Unhandled action type`);
        }
    }
}

const LogsProvider = ({ children }: LogsProviderProps) => {
    const [LogsState, LogsDispatch] = React.useReducer(sitesReducer, defaultState);

    const getLogsById = (id: string): IAuditLog[] => {
        const data = LogsState.data.filter((log) => log.siteId === id);
        return data;
    };

    const addAuditLog = (audit: IAuditLog): void => {
        LogsDispatch({ type: 'addData', payload: audit });
    };

    const value = { LogsState, LogsDispatch, getLogsById, addAuditLog };
    return <LogsContext.Provider value={value}>{children}</LogsContext.Provider>;
};

function useLogs() {
    const context = React.useContext(LogsContext);
    if (context === undefined) {
        throw new Error('useLogs must be used within a LogsProvider');
    }
    return context;
}

export { LogsProvider, useLogs };
