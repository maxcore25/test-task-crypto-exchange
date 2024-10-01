import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Button } from './Button';
import { CurrencySelect } from './CurrencySelect';
import { Input } from './Input';
import { SwapButton } from './SwapButton';
import { btcCoin, ethCoin } from '@/temp';
import { Currency, ErrorMessage, EstimatedAmount, MinAmount } from '@/types';
import { axiosInstance } from '@/api';
import { AxiosError } from 'axios';

export const ExchangeForm = () => {
  const [fromCurrencySelect, setFromCurrencySelect] =
    useState<Currency>(btcCoin);
  const [toCurrencySelect, setToCurrencySelect] = useState<Currency>(ethCoin);
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(0);
  const [fromCurrencyMinAmount, setFromCurrencyMinAmount] = useState(0);
  const [toCurrencyAmount, setToCurrencyAmount] = useState<number | string>(0);
  const [error, setError] = useState<string | null>(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (fromCurrencyAmount < fromCurrencyMinAmount) {
      setToCurrencyAmount('-');
    }
  }, [fromCurrencyAmount, fromCurrencyMinAmount]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (fromCurrencyAmount > 0) {
          const res = await axiosInstance.get<EstimatedAmount>(
            `/exchange-amount/${fromCurrencyAmount}/${fromCurrencySelect.ticker}_${toCurrencySelect.ticker}?api_key=${import.meta.env.VITE_API_KEY}`
          );
          console.log(res.data);
          setError(null);
          setToCurrencyAmount(res.data.estimatedAmount);
        }
      } catch (err: unknown) {
        const error = err as AxiosError<ErrorMessage>;
        console.error('Error fetching estimated exchange amount:', error);
        if (error.response) setError(error.response?.data.message);
      }
    };

    setError(null);
    fetchData();
  }, [fromCurrencyAmount, fromCurrencySelect, toCurrencySelect]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get<MinAmount>(
          `/min-amount/${fromCurrencySelect.ticker}_${toCurrencySelect.ticker}?api_key=${import.meta.env.VITE_API_KEY}`
        );
        setError(null);
        setFromCurrencyAmount(res.data.minAmount);
        setFromCurrencyMinAmount(res.data.minAmount);
      } catch (error) {
        console.error('Error fetching minimum amount:', error);
      }
    };

    fetchData();
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-12 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-center lg:gap-7'>
        <CurrencySelect
          id='from'
          name='from'
          minAmount={fromCurrencyAmount}
          onAmountChange={setFromCurrencyAmount}
          selectedCurrency={fromCurrencySelect}
          onCurrencyChange={setFromCurrencySelect}
        />
        <SwapButton
          onClick={handleSwap}
          title='Swap currencies'
          className='rotate-90 self-end lg:rotate-0 lg:self-auto'
        />
        <CurrencySelect
          id='to'
          name='to'
          minAmount={toCurrencyAmount}
          onAmountChange={setToCurrencyAmount}
          selectedCurrency={toCurrencySelect}
          onCurrencyChange={setToCurrencySelect}
          isError={!!error}
        />
      </div>
      <div className='grid gap-4 lg:flex lg:items-end lg:gap-8'>
        <div className='grid w-full gap-2'>
          <label
            htmlFor='address'
            className='text-base font-normal leading-[23px]'
          >
            Your {toCurrencySelect.name} address
          </label>
          <Input
            type='text'
            name='address'
            id='address'
            value={address}
            onChange={handleChangeAddress}
            required
          />
        </div>
        <div className='relative'>
          <Button type='submit' className='w-[205px]'>
            Exchange
          </Button>
          <div className='mt-2 w-full text-center text-[#e03f3f] lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
            {error}
          </div>
        </div>
      </div>
    </form>
  );
};
