import { fireEvent, render, screen } from '@testing-library/react';
import { CurrencySelect } from '@/components/CurrencySelect';
import { vi } from 'vitest';
import { btcCoin } from '@/temp';

describe('CurrencySelect Component', () => {
  it('renders correctly with BTC text', () => {
    const onAmountChangeMock = vi.fn();
    const onCurrencyChangeMock = vi.fn();
    render(
      <CurrencySelect
        selectedCurrency={btcCoin}
        onAmountChange={onAmountChangeMock}
        onCurrencyChange={onCurrencyChangeMock}
      />
    );

    expect(screen.getByText('BTC')).toBeInTheDocument();
  });

  it('shows coins list when clicked on select button', () => {
    const onAmountChangeMock = vi.fn();
    const onCurrencyChangeMock = vi.fn();
    render(
      <CurrencySelect
        selectedCurrency={btcCoin}
        onAmountChange={onAmountChangeMock}
        onCurrencyChange={onCurrencyChangeMock}
      />
    );

    const selectButton = screen.getByRole('button');
    fireEvent.click(selectButton);

    const coinsList = screen.getByRole('list');
    expect(coinsList).toBeInTheDocument();
  });
});
