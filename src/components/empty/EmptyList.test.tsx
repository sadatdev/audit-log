import { render, screen } from '@testing-library/react';
import { EmptyList } from './EmptyList';

describe('<EmptyLits/>', () => {
    it('Render Empty List with default level', () => {
        render(<EmptyList />);
        const label = screen.getByText(/List is empty/i);
        expect(label).toBeVisible();
    });

    it('Render Empty List with Custom level', () => {
        render(<EmptyList text="Test Label" />);
        const label = screen.getByText(/Test Label/i);
        expect(label).toBeInTheDocument();
    });
});
