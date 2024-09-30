import Image from 'next/image';
import { Input } from './Input';
import { ArrowDown } from './ArrowDown';

const coins = [
  {
    ticker: 'btc',
    name: 'Bitcoin',
    image: 'https://content-api.changenow.io/uploads/btc_1_527dc9ec3c.svg',
  },
  {
    ticker: 'eth',
    name: 'Ethereum',
    image: 'https://content-api.changenow.io/uploads/eth_f4ebb54ec0.svg',
  },
  {
    ticker: 'ethbsc',
    name: 'Ethereum (Binance Smart Chain)',
    image: 'https://content-api.changenow.io/uploads/ethbsc_ef444521c5.svg',
  },
];

export const CurrencySelect = () => {
  return (
    <div className='relative w-full'>
      <div className='flex'>
        <Input type='number' min={0} name='from' />
        <div className='flex w-[150px] shrink-0 items-center bg-[#f6f7f8] py-[13px] pl-[34px] pr-2'>
          <Image
            src={coins[0].image}
            alt={coins[0].name}
            width={20}
            height={20}
          />
          <div className='ml-3 mr-[30px] text-base font-normal leading-[23px]'>
            {coins[0].ticker.toUpperCase()}
          </div>
          <ArrowDown />
        </div>
      </div>
      <div className='absolute w-full overflow-hidden rounded-bl-[5px] rounded-br-[5px] border border-[#c1d9e5] border-t-transparent bg-[#f6f7f8]'>
        {coins.map(coin => (
          <div
            key={coin.ticker}
            className='flex cursor-pointer px-4 py-3 hover:bg-[#eaf1f7]'
          >
            <Image src={coin.image} alt={coin.name} width={20} height={20} />
            <div className='ml-3 mr-4 text-base font-normal uppercase leading-[23px] text-dark-gray'>
              {coin.ticker}
            </div>
            <div className='text-base font-normal leading-[23px] text-[#80a2b6]'>
              {coin.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
