import { SiteList } from 'components';
import SiteListSkeleton from 'components/skeletons/SiteListSkeleton';
import { useLogs } from 'contexts/Logs';
import { useSites } from 'contexts/Sites';
import { logs } from 'data/logs';
import sites from 'data/sites';
import { useEffect } from 'react';
import 'styles/App.css';

function App() {
    const { sitesState, sitesDispatch } = useSites();
    const { LogsDispatch } = useLogs();

    useEffect(() => {
        // Simulating for a loading state
        const timer = setTimeout(() => {
            sitesDispatch({ type: 'setData', payload: sites });
            LogsDispatch({ type: 'setData', payload: logs });
        }, 2000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (sitesState.isLoading) {
        return <SiteListSkeleton />;
    }

    return <SiteList />;
}

export default App;
