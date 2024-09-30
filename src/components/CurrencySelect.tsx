import { Input } from './Input';

export const CurrencySelect = () => {
  return (
    <div className='relative'>
      <Input />
      <div className='absolute h-[194px] w-full rounded-bl-[5px] rounded-br-[5px] border border-[#c1d9e5] bg-[#f6f7f8]'>
        <div className='h-12 w-[438px]'>
          <div className='h-[23px] w-[148px]'>
            <div className='size-[20px] bg-gray-500'></div>
            <div className='text-base font-normal leading-[23px] text-[#282828]'>
              ETH
            </div>
            <div className='text-base font-normal leading-[23px] text-[#80a2b6]'>
              Ethereum
            </div>
            <div className='h-5 w-5' />
          </div>
        </div>
      </div>
    </div>
  );
};
