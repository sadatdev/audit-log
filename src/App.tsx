import { SiteList } from 'components';
import SiteListSkeleton from 'components/skeletons/SiteListSkeleton';
import { useSites } from 'contexts/Sites';
import sites from 'data/sites';
import { useEffect } from 'react';
import 'styles/App.css';

function App() {
    const { sitesState, sitesDispatch } = useSites();

    useEffect(() => {
        // Simulating for a loading state
        const timer = setTimeout(() => {
            sitesDispatch({ type: 'setData', payload: sites });
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
