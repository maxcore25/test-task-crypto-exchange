import * as React from 'react';

import { cn, inputDefaultStyles } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputDefaultStyles,
          'w-full px-4 pb-[13px] pt-[14px] text-base font-normal leading-[23px] text-dark-gray',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
