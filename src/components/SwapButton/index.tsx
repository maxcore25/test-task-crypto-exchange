import React from 'react';
import { cn } from '@/lib/utils';
import { SwapIcon } from '../SwapIcon';

export type SwapButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SwapButton = React.forwardRef<HTMLButtonElement, SwapButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          'grid size-6 cursor-pointer place-content-center rounded-full bg-none transition-colors hover:bg-slate-50',
          className
        )}
        ref={ref}
        {...props}
      >
        <SwapIcon />
      </button>
    );
  }
);
SwapButton.displayName = 'SwapButton';
