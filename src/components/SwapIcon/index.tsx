import { cn } from '@/lib/utils';
import { forwardRef, SVGProps } from 'react';

export const SwapIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={cn(className)}
        ref={ref}
        {...props}
      >
        <g clipPath='url(#clip0_12030_13)'>
          <path d='M7.99 15H20V17H7.99V20L4 16L7.99 12V15Z' fill='#11B3FE' />
          <path d='M16.01 6H4V8H16.01V11L20 7L16.01 3V6Z' fill='#11B3FE' />
        </g>
        <defs>
          <clipPath id='clip0_12030_13'>
            <rect width={24} height={24} fill='white' />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
