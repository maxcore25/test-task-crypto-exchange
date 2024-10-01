import { ArrowDown } from '../ArrowDown';
import {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  LiHTMLAttributes,
} from 'react';
import { cn } from '@/lib/utils';
import { testCoins } from '@/temp';
import { Currency } from '@/types';
import { useCurrencySelect } from './CurrencySelect.hooks';

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
  const {
    handleChange,
    handleClick,
    handleSelect,
    selectRef,
    isOpen,
    amount,
    search,
    inputRef,
    filteredCoins,
  } = useCurrencySelect({
    selectedCurrency,
    onCurrencyChange,
    onAmountChange,
    coins,
    minAmount,
    isError,
  });

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
          <CurrencySelectCoin
            selectedCurrency={selectedCurrency}
            onClick={handleClick}
          />
        )}
      </div>

      {isOpen && (
        <CurrencySelectPopover>
          {filteredCoins?.map(coin => (
            <CurrencySelectItem
              key={coin.ticker}
              coin={coin}
              onClick={() => handleSelect(coin)}
            />
          ))}
        </CurrencySelectPopover>
      )}
    </div>
  );
};

export type CurrencySelectCoinProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    selectedCurrency: Currency;
  };

export const CurrencySelectCoin = forwardRef<
  HTMLButtonElement,
  CurrencySelectCoinProps
>(({ selectedCurrency, className, ...props }, ref) => {
  return (
    <button
      className={cn(
        'relative flex shrink-0 items-center py-[13px] pl-[34px] pr-2 before:absolute before:left-0 before:h-[calc(100%-20px)] before:w-[1px] before:bg-[#e3ebef] before:content-[""]',
        className
      )}
      ref={ref}
      {...props}
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
  );
});
CurrencySelectCoin.displayName = 'CurrencySelectCoin';

export type CurrencySelectPopoverProps = HTMLAttributes<HTMLUListElement>;

export const CurrencySelectPopover = forwardRef<
  HTMLUListElement,
  CurrencySelectPopoverProps
>(({ children, className, ...props }, ref) => {
  return (
    <ul
      className={cn(
        'absolute z-10 max-h-[300px] w-full overflow-hidden overflow-y-auto rounded-bl-[5px] rounded-br-[5px] border border-[#c1d9e5] border-t-transparent bg-[#f6f7f8]',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </ul>
  );
});
CurrencySelectPopover.displayName = 'CurrencySelectPopover';

export type CurrencySelectItemProps = LiHTMLAttributes<HTMLLIElement> & {
  coin: Currency;
};

export const CurrencySelectItem = forwardRef<
  HTMLLIElement,
  CurrencySelectItemProps
>(({ coin, className, ...props }, ref) => {
  return (
    <li
      className={cn(
        'flex cursor-pointer items-center px-4 py-3 hover:bg-[#eaf1f7]',
        className
      )}
      title={coin.name}
      ref={ref}
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
});
CurrencySelectItem.displayName = 'CurrencySelectItem';
