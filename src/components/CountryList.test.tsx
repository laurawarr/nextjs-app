import { render, screen, fireEvent } from '@testing-library/react';
import { CountryList } from './CountryList';

jest.mock('@/data/api', () => ({
    useCountries: jest.fn(() => [
        { code: 'US', name: 'United States', emoji: '🇺🇸', currency: 'USD' },
        { code: 'CA', name: 'Canada', emoji: '🇨🇦', currency: 'CAD' },
    ]),
}));

describe('CountryList', () => {
    test('renders a list of countries', () => {
        render(<CountryList onSelect={jest.fn()} />);
        
        expect(screen.getByText('United States (US)')).toBeDefined();
        expect(screen.getByText('Canada (CA)')).toBeDefined();
    });

    test('calls onSelect when a country is clicked', () => {
        const onSelectMock = jest.fn();
        render(<CountryList onSelect={onSelectMock} />);
        
        fireEvent.click(screen.getByText('United States (US)'));
        
        expect(onSelectMock).toHaveBeenCalledWith({
            code: 'US',
            name: 'United States',
            emoji: '🇺🇸', 
            currency: 'USD'
        });
    });
});
