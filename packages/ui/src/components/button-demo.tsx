'use client';

import * as React from 'react';
import { cn } from '../lib/utils';

export function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={props.type || 'button'}
      className={cn(
        'text-white font-bold px-3 py-2 rounded-lg bg-teal-500',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
