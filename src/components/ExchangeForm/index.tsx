import { Button } from '../Button';
import { CurrencySelect } from '../CurrencySelect';
import { Input } from '../Input';
import { SwapButton } from '../SwapButton';
import { useExchangeForm } from './ExchangeForm.hooks';

export const ExchangeForm = () => {
  const {
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
  } = useExchangeForm();

  return (
    <form onSubmit={handleSubmit} aria-label='form'>
      <div className='mb-12 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-center lg:gap-7'>
        <CurrencySelect
          id='from'
          name='from'
          minAmount={fromCurrencyAmount}
          onAmountChange={setFromCurrencyAmount}
          selectedCurrency={fromCurrencySelect}
          onCurrencyChange={setFromCurrencySelect}
          isLoading={isFromCurrencyLoading}
          coins={coins}
        />
        <SwapButton
          type='button'
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
          isLoading={isToCurrencyLoading}
          coins={coins}
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
