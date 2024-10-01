import { FormEvent, useEffect, useState } from 'react';
import { Button } from './Button';
import { CurrencySelect } from './CurrencySelect';
import { Input } from './Input';
import { SwapButton } from './SwapButton';
import { btcCoin, ethCoin } from '@/temp';
import { Currency, EstimatedAmount, MinAmount } from '@/types';
import { axiosInstance } from '@/api';

export const ExchangeForm = () => {
  const [fromCurrencySelect, setFromCurrencySelect] =
    useState<Currency>(btcCoin);
  const [toCurrencySelect, setToCurrencySelect] = useState<Currency>(ethCoin);
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(0);
  const [toCurrencyAmount, setToCurrencyAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (fromCurrencyAmount > 0) {
          const res = await axiosInstance.get<EstimatedAmount>(
            `/exchange-amount/${fromCurrencyAmount}/${fromCurrencySelect.ticker}_${toCurrencySelect.ticker}?api_key=${import.meta.env.VITE_API_KEY}`
          );
          console.log(res.data);
          setToCurrencyAmount(res.data.estimatedAmount);
        }
      } catch (error) {
        console.error('Error fetching estimated exchange amount:', error);
      }
    };

    fetchData();
  }, [fromCurrencyAmount, fromCurrencySelect, toCurrencySelect]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(
        'Sending request for:',
        fromCurrencySelect.ticker,
        toCurrencySelect.ticker
      );

      try {
        const res = await axiosInstance.get<MinAmount>(
          `/min-amount/${fromCurrencySelect.ticker}_${toCurrencySelect.ticker}?api_key=${import.meta.env.VITE_API_KEY}`
        );
        setFromCurrencyAmount(res.data.minAmount);
      } catch (error) {
        console.error('Error fetching minimum amount:', error);
      }
    };

    fetchData();
  }, [fromCurrencySelect, toCurrencySelect]);

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
        <SwapButton className='rotate-90 self-end lg:rotate-0 lg:self-auto' />
        <CurrencySelect
          id='to'
          name='to'
          minAmount={toCurrencyAmount}
          onAmountChange={setToCurrencyAmount}
          selectedCurrency={toCurrencySelect}
          onCurrencyChange={setToCurrencySelect}
        />
      </div>
      <div className='grid gap-4 lg:flex lg:items-end lg:gap-8'>
        <div className='grid w-full gap-2'>
          <label
            htmlFor='address'
            className='text-base font-normal leading-[23px]'
          >
            Address
          </label>
          <Input type='text' name='address' id='address' />
        </div>
        <Button type='submit'>Exchange</Button>
      </div>
    </form>
  );
};
