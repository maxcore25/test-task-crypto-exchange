import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { btcCoin, ethCoin } from '@/temp';
import { Currency, ErrorMessage, EstimatedAmount, MinAmount } from '@/types';
import { axiosInstance } from '@/api';
import { AxiosError } from 'axios';

export const useExchangeForm = () => {
  const [fromCurrencySelect, setFromCurrencySelect] =
    useState<Currency>(btcCoin);
  const [toCurrencySelect, setToCurrencySelect] = useState<Currency>(ethCoin);
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(0);
  const [fromCurrencyMinAmount, setFromCurrencyMinAmount] = useState(0);
  const [toCurrencyAmount, setToCurrencyAmount] = useState<number | string>(0);
  const [error, setError] = useState<string | null>(null);
  const [address, setAddress] = useState('');
  const [isFromCurrencyLoading, setIsFromCurrencyLoading] = useState(false);
  const [isToCurrencyLoading, setIsToCurrencyLoading] = useState(false);
  const [coins, setCoins] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await axiosInstance.get<Currency[]>(
          '/currencies?active=true&fixedRate=true'
        );
        setCoins(res.data);
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
    };

    fetchCoins();
  }, []);

  useEffect(() => {
    if (fromCurrencyAmount < fromCurrencyMinAmount) {
      setToCurrencyAmount('-');
    }
  }, [fromCurrencyAmount, fromCurrencyMinAmount]);

  useEffect(() => {
    const fetchExchangeAmount = async () => {
      try {
        if (fromCurrencyAmount <= 0) return;

        setIsToCurrencyLoading(true);

        const res = await axiosInstance.get<EstimatedAmount>(
          `/exchange-amount/${fromCurrencyAmount}/${fromCurrencySelect.ticker}_${toCurrencySelect.ticker}?api_key=${import.meta.env.VITE_API_KEY}`
        );

        setError(null);
        setToCurrencyAmount(res.data.estimatedAmount);
      } catch (err: unknown) {
        const error = err as AxiosError<ErrorMessage>;
        console.error('Error fetching estimated exchange amount:', error);

        if (error.response) setError(error.response?.data.message);
      } finally {
        setIsToCurrencyLoading(false);
      }
    };

    setError(null);
    fetchExchangeAmount();
  }, [fromCurrencyAmount, fromCurrencySelect, toCurrencySelect]);

  useEffect(() => {
    const fetchMinAmount = async () => {
      try {
        setIsFromCurrencyLoading(true);
        setIsToCurrencyLoading(true);

        const res = await axiosInstance.get<MinAmount>(
          `/min-amount/${fromCurrencySelect.ticker}_${toCurrencySelect.ticker}?api_key=${import.meta.env.VITE_API_KEY}`
        );

        setError(null);
        setFromCurrencyAmount(res.data.minAmount);
        setFromCurrencyMinAmount(res.data.minAmount);
      } catch (error) {
        console.error('Error fetching minimum amount:', error);
      } finally {
        setIsFromCurrencyLoading(false);
        setIsToCurrencyLoading(false);
      }
    };

    fetchMinAmount();
  }, [fromCurrencySelect, toCurrencySelect]);

  const handleSwap = () => {
    const tempCurrency = fromCurrencySelect;
    setFromCurrencySelect(toCurrencySelect);
    setToCurrencySelect(tempCurrency);
  };

  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`
From: ${fromCurrencyAmount} ${fromCurrencySelect.ticker.toUpperCase()}
To: ${toCurrencyAmount} ${toCurrencySelect.ticker.toUpperCase()}
Address: ${address}
      `);
  };

  return {
    handleSwap,
    handleChangeAddress,
    handleSubmit,
    fromCurrencyAmount,
    setFromCurrencyAmount,
    fromCurrencySelect,
    setFromCurrencySelect,
    isFromCurrencyLoading,
    toCurrencyAmount,
    setToCurrencyAmount,
    toCurrencySelect,
    setToCurrencySelect,
    error,
    isToCurrencyLoading,
    address,
    coins,
  };
};
