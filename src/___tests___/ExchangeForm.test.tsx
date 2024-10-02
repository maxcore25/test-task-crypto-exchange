import { render, screen } from '@testing-library/react';
import { ExchangeForm } from '@/components/ExchangeForm';

describe('ExchangeForm Component', () => {
  it('renders correctly with BTC and ETH coins', () => {
    render(<ExchangeForm />);

    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('ETH')).toBeInTheDocument();

    const form = document.querySelector('form');
    expect(form).toBeInTheDocument();
  });
});
