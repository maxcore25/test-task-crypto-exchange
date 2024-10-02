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

export type MinAmount = {
  minAmount: number;
};

export type EstimatedAmount = {
  estimatedAmount: number;
  transactionSpeedForecast: string;
  warningMessage: string | null;
};

export type ErrorMessage = {
  error: string;
  message: string;
};
