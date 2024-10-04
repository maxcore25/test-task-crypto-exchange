import { cn } from '@/lib/utils';
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          'h-[50px] rounded-[5px] bg-brand-color p-[15px] text-base font-bold uppercase leading-tight tracking-wide text-background transition-colors hover:bg-[#0095e0]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
