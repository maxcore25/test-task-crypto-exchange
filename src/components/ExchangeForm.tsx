import { Button } from './Button';
import { Input } from './Input';
import { SwapButton } from './SwapButton';

export const ExchangeForm = () => {
  return (
    <form>
      <div className='mb-12 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-center lg:gap-7'>
        <Input type='number' min={0} name='from' />
        <SwapButton className='rotate-90 self-end lg:rotate-0 lg:self-auto' />
        <Input type='number' min={0} name='to' />
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
