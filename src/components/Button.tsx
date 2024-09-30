import { cn } from '@/lib/utils';
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return <button className={cn(className)} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';
