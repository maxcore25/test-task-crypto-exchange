import React from 'react';
import { cn } from '@/lib/utils';
import { CrossIcon } from '../CrossIcon';

export type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        'grid size-6 cursor-pointer place-content-center rounded-full bg-none transition-colors hover:bg-slate-50',
        className
      )}
      ref={ref}
      {...props}
    >
      <CrossIcon />
    </button>
  );
});
CloseButton.displayName = 'CloseButton';
