import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const inputDefaultStyles =
  'h-[50px] rounded-[5px] border border-[#e3ebef] bg-[#f6f7f8]';
