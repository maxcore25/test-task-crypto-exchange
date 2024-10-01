import { ExchangeForm } from '@/components/ExchangeForm';

function App() {
  return (
    <main className='px-4'>
      <div className='mx-auto mt-16 max-w-[960px] lg:mt-[220px]'>
        <div className='mb-[60px] grid gap-[14px] lg:gap-4'>
          <h1 className='text-[40px] font-light leading-[48px] lg:text-[50px] lg:leading-[60px]'>
            Crypto Exchange
          </h1>
          <div className='text-xl font-normal leading-tight'>
            Exchange fast and easy
          </div>
        </div>
        <ExchangeForm />
      </div>
    </main>
  );
}

export default App;
