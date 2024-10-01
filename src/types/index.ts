export type Currency = {
  ticker: string;
  name: string;
  image: string;
  hasExternalId: boolean;
  isExtraIdSupported: boolean;
  isFiat: boolean;
  featured: boolean;
  isStable: boolean;
  supportsFixedRate: boolean;
};

export type ExchangeState = { fromCurrency: string; toCurrency: string };

export type ExchangeActions = {
  swap: () => void;
};

export type ExchangeStore = ExchangeState & ExchangeActions;
