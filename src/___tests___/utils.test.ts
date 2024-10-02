import { cn } from '@/lib/utils';

test('cn() function creates new string of Tailwind classes', () => {
  expect(cn('px-2 my-3', 'text-xl font-normal')).toBe(
    'px-2 my-3 text-xl font-normal'
  );
});
