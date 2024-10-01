import { ArrowDown } from './ArrowDown';
import { LiHTMLAttributes, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { testCoins } from '@/temp';
import { useClickOutside } from '@/hooks';
import { Currency } from '@/types';

export type CurrencySelectProps = {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onAmountChange: (amount: number) => void;
  id?: string;
  name?: string;
  coins?: Currency[];
  minAmount?: number | string;
  isError?: boolean;
  isLoading?: boolean;
};

export const CurrencySelect = ({
  selectedCurrency,
  onCurrencyChange,
  onAmountChange,
  id,
  name,
  coins = testCoins,
  minAmount,
  isError,
  isLoading,
}: CurrencySelectProps) => {
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

  const filteredCoins = coins.filter(
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

  return (
    <div
      ref={selectRef}
      className={cn('relative w-full', {
        'pointer-events-none opacity-50': isLoading,
      })}
    >
      <div
        className={cn(
          'flex rounded-[5px] border border-[#e3ebef] bg-[#f6f7f8]',
          {
            'rounded-ee-none rounded-es-none border-l-[#c1d9e5] border-r-[#c1d9e5] border-t-[#c1d9e5]':
              isOpen,
          }
        )}
      >
        <input
          id={id}
          name={name}
          value={!isOpen ? amount : search}
          onChange={handleChange}
          ref={inputRef}
          type={isOpen || isError ? 'text' : 'number'}
          className='w-full bg-transparent px-4 pb-[13px] pt-[14px] text-base font-normal leading-[23px] text-dark-gray outline-none'
        />
        {!isOpen && (
          <button
            onClick={handleClick}
            className='relative flex w-[150px] shrink-0 items-center py-[13px] pl-[34px] pr-2 before:absolute before:left-0 before:h-[calc(100%-20px)] before:w-[1px] before:bg-[#e3ebef] before:content-[""]'
          >
            <img
              src={selectedCurrency.image}
              alt={selectedCurrency.name}
              width={20}
              height={20}
            />
            <div className='ml-3 mr-[30px] text-base font-normal leading-[23px]'>
              {selectedCurrency.ticker.toUpperCase()}
            </div>
            <ArrowDown />
          </button>
        )}
      </div>

      {isOpen && (
        <ul className='absolute z-10 max-h-[300px] w-full overflow-hidden overflow-y-auto rounded-bl-[5px] rounded-br-[5px] border border-[#c1d9e5] border-t-transparent bg-[#f6f7f8]'>
          {filteredCoins.map(coin => (
            <CurrencySelectItem
              key={coin.ticker}
              coin={coin}
              onClick={() => handleSelect(coin)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export type CurrencySelectItemProps = LiHTMLAttributes<HTMLLIElement> & {
  coin: Currency;
};

export const CurrencySelectItem = ({
  coin,
  ...props
}: CurrencySelectItemProps) => {
  return (
    <li
      className='flex cursor-pointer items-center px-4 py-3 hover:bg-[#eaf1f7]'
      title={coin.name}
      {...props}
    >
      <img src={coin.image} alt={coin.name} width={20} height={20} />
      <div className='ml-3 mr-4 text-base font-normal uppercase leading-[23px] text-dark-gray'>
        {coin.ticker}
      </div>
      <div className='truncate text-base font-normal leading-[23px] text-[#80a2b6]'>
        {coin.name}
      </div>
    </li>
  );
};
