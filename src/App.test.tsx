import { render } from '@testing-library/react';
import App from 'App';
import { ContextProvider } from 'contexts';

describe('<App/>', () => {
    it('Show skeleton while data is loading', () => {
        jest.mock('contexts/Sites', () => ({
            useSites: () => {
                return {
                    sitesState: {
                        isLoading: true,
                    },
                };
            },
        }));
        const { container } = render(
            <ContextProvider>
                <App />
            </ContextProvider>
        );
        const spinner = container.getElementsByClassName('MuiSkeleton-root');
        expect(spinner.length).toBeGreaterThan(0);
    });
});
