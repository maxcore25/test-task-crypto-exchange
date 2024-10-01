import { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '@/hooks';
import { Currency } from '@/types';
// import { CurrencySelectProps } from '.';

export type UseCurrencySelectProps = {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onAmountChange: (amount: number) => void;
  coins?: Currency[];
  minAmount?: number | string;
  isError?: boolean;
};

export const useCurrencySelect = ({
  selectedCurrency,
  onCurrencyChange,
  onAmountChange,
  coins,
  minAmount,
  isError,
}: UseCurrencySelectProps) => {
  const [amount, setAmount] = useState(String(minAmount));
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useClickOutside<HTMLInputElement>(() => {
    setIsOpen(false);
    setSearch('');
  });

  useEffect(() => {
    if (isError) setAmount('-');
    setAmount(String(minAmount));
  }, [minAmount, selectedCurrency, isError]);

  const filteredCoins = coins?.filter(
    coin =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.ticker.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isOpen && !isError) {
      setAmount(e.target.value);
      onAmountChange(Number.parseFloat(e.target.value));
    } else {
      setSearch(e.target.value);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    inputRef.current?.focus();
  };

  const handleSelect = (currency: Currency) => {
    onCurrencyChange(currency);
    setIsOpen(false);
  };

  return {
    handleChange,
    handleClick,
    handleSelect,
    selectRef,
    isOpen,
    amount,
    search,
    inputRef,
    filteredCoins,
  };
};
