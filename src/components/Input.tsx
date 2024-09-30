import * as React from 'react';

import { cn, inputDefaultStyles } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputDefaultStyles, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
