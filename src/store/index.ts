import { create } from 'zustand';
import { ExchangeState, ExchangeStore } from '@/types';

const initialExchangeState: ExchangeState = {
  fromCurrency: 'btc',
  toCurrency: 'eth',
};

export const useExchangeStore = create<ExchangeStore>()(set => ({
  ...initialExchangeState,
  swap: () =>
    set(state => {
      const temp = state.fromCurrency;

      return {
        fromCurrency: state.toCurrency,
        toCurrency: temp,
      };
    }),
}));
